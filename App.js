import { Chess } from './node_modules/chess.js/dist/esm/chess.js';
import { openings } from './openings.js';

/** Depends on jquery($) and chessboardjs(Chessboard) being loaded via <script> tags */
export class App {

    database = openings;

    /** comma delimited list of moves */
    get Selection() { return (localStorage.selection || '').split(/[, ]/).filter(Boolean); }
    set Selection(selection) { localStorage.selection = selection; this.draw(); }

    set Opening(opening) {
        localStorage.opening = opening;
        this.Selection = [this.Opening?.appliesTo].filter(Boolean);
        $('#opening').val(opening);
    }
    get Opening() { return this.database[localStorage.opening] }

    turn(nextMove) {
        const selection = [...this.Selection, nextMove].filter(Boolean);
        return ['white', 'black'][selection.length % 2];
    }

    otherTurn(turn) {
        return ['black', 'white'].find(c => c !== turn)
    }

    constructor() {
        document.addEventListener('keydown', event => {
            if (event.key === 'ArrowLeft') this.back();
            if (event.key === 'ArrowRight') this.next();
        });
        $('#reset').on('click', () => $('#opening').val('').change());
        $('#draw').on('click', () => this.draw());
        $('#pgn').on('click', () => {
            const pgn = this.drawn[0].game.pgn();
            navigator.clipboard.writeText(pgn);
            alert(pgn);
        });
        $('#extend').on('click', () => {
            const { Selection } = this;
            this.Opening = '';
            this.Selection = Selection;
        });
        $('#import-pgn').on('click', async () => {
            const text = await navigator.clipboard.readText();
            const chess = new Chess();
            try { chess.loadPgn(text) } catch (e) { return alert(e) }
            const moves = chess.history({ verbose: true }).map(m => `${m.from}-${m.to}`);
            const { Link: url, Black, White, Date } = chess.getHeaders();
            const line = { appliesTo: 'white', name: `${Date} : ${Black} vs. ${White}`, moves, url };
            const json = JSON.stringify(line);
            const index = (() => { const i = this.database.findIndex(l => l.name === line.name); return i == -1 ? this.database.length : i; })();
            this.database.splice(index, 1, line);
            this.initOpenings();
            this.Opening = index;
            navigator.clipboard.writeText(json);
        });
        $('#next').on('click', () => this.next());
        $('#back').on('click', () => this.back());
        this.initOpenings();
        this.draw();
        // this.test();
    }

    initOpenings() {
        $('#opening')
            .html('<option value="">--opening--</option>' + this.database.map((o, i) => `<option value=${i}>${o.appliesTo} : ${o.name}</option>`).join(''))
            .on('change', ({ target }) => { this.Opening = target.value; $(target).blur() })
            .val(this.Opening ? this.database.indexOf(this.Opening) : '');
    }

    /** Play through all the openings - pausing 200ms per move */
    async test() {
        const pause = (ms = 200) => { return new Promise(r => setTimeout(r, ms)); };
        const { lastTest = '9' } = localStorage;
        for (const o of this.database.slice(lastTest)) {
            const index = this.database.indexOf(o).toString();
            this.Opening = index;
            // console.log(localStorage.lastTest = index);
            await pause();
            for (const move of o.moves) {
                this.Selection = [...this.Selection, move];
                await pause();
            }
            // debugger;
        }
    }

    back() {
        if (this.Selection.length >= (this.Opening ? 2 : 0)) {
            this.moveSpeed = 1;
            this.Selection = this.Selection.slice(0, this.Selection.length - 1);
            delete this.moveSpeed;
        }
    }

    next(choice) {
        choice ||= this.Opening?.moves.at(this.Selection.length - 1);
        if (choice && choice !== this.Selection.at(-1) && (!this.Opening || this.Selection.length < this.Opening.moves.length)) {
            this.Selection = [...this.Selection, choice];
        }
    }

    get lines() { return this.database.filter(opening => this.Selection.slice(1).every((move, index) => opening.moves[index] == move)).sort((a, b) => b.moves.length - a.moves.length); }
    get extending() { return this.lines.length === 1 && this.lines[0].moves.length === this.Selection.length - 1; }

    drawn = [];

    draw() {
        // clearInterval(this.interval);
        // this.interval = setInterval(() => this.draw(), 3000);
        const { moveSpeed } = this;
        const moves = [...this.Selection];
        const database = [...this.database].sort((a, b) => b.moves.length - a.moves.length)
        const orientation = moves.shift();
        const openings = this.Opening && [this.Opening]
            || !orientation && ['black', 'white'].map(appliesTo => ({ appliesTo, moves: [] }))
            || this.lines.filter(opening => opening.appliesTo.includes(orientation));

        $('#next').prop('disabled', !this.Opening || (this.Selection.length >= this.Opening.moves.length));
        $('#back').prop('disabled', !this.Selection.length);

        $('#boards').html('');
        $('#moves').html(this.Selection.map(move => `<a href="javascript:void(0)">${move}</a>`).join(' / '))
        $('#moves').children().each((index, child) => {
            $(child).on('click', () => {
                this.Selection = this.Selection.slice(0, Math.max(this.Opening ? 1 : index, index));
            });
        });

        if (this.Selection.length && !openings.length) {
            const newOpening = { appliesTo: orientation, moves };
            openings.push(newOpening);
        }

        // show the next move for every opening that matches the line we have played so far
        this.drawn = [];
        for (const opening of openings) {
            const common = !this.Selection.length
                ? database.filter(o => o.appliesTo === opening.appliesTo)
                : openings.filter(o => o.moves[moves.length] == opening.moves[moves.length]);
            const index = common.indexOf(opening); if (index > 0 && opening.moves.length) continue;
            const orientation = opening.appliesTo;
            const final = opening.moves.length === moves.length && 'red';
            const secondLast = opening.moves.length === moves.length + 1 && 'green';
            const nextMove = opening.moves.length === 0 && orientation
                || opening.moves[moves.length]
                || !final && common.sort((a, b) => b.moves.length - a.moves.length).moves[moves.length - 1]
                || '';
            if (nextMove === 'd') debugger;
            const game = new Chess;
            let clearPieces;

            // make the move : 1) chessboardjs(ui), 2) chessjs (memory)
            const domove = (game, board, move, islast) => {
                console.log({ move })
                if (move.match(/black|white/)) return;
                const gamemove = (from, to, promotion) => { game.move({ from, to, promotion }); };
                const moves = move.split('&').filter(Boolean);
                let doublemove = moves.length > 1 ? 1 : 0;
                for (const m of moves) {
                    // if (m === '#') { // signifies checkmate
                    //     const turn = game.turn();
                    //     const position = board.position();
                    //     const kingPosition = Object.keys(position).find(square => position[square] === `${turn[0]}K`);
                    //     delete position[kingPosition];
                    //     board.position(position);
                    // } else
                    if (m === '*') { // signifies any piece can move -- visualized by hiding all color's pieces
                        clearPieces ||= game.turn();
                        game.move(game.moves()[0]);
                    } else {
                        const [from, to, _promotion] = m.match(/^([a-h][1-8])-([a-h][1-8])([rqbn])?$/i)?.slice(1) || [];

                        // chessboardjs -- ui board
                        board.move(`${from}-${to}`);

                        const piece = board.position()[to];
                        if (!piece) debugger;
                        const promotion = piece[1] === 'P' && '18'.includes(to[1]) ? _promotion || 'q' : undefined; // auto-rpomote to queen

                        // replace the pawn with a queen on the chessboardjs
                        if (promotion) {
                            const position = board.position();
                            position[to] = piece[0] + promotion.toUpperCase();
                            board.position(position);
                        }

                        // chessjs - memory board/game
                        if (doublemove) {
                            if (piece?.endsWith('K')) {
                                doublemove++;
                                gamemove(from, to);
                            } else if (piece?.endsWith('P') && moves.length === 2 && moves.indexOf(m) === 0) {
                                doublemove++; // horizontal, then vertical
                                gamemove(moves[0].split('-')[0], moves[1].split('-')[1]);
                            }
                        } else {
                            if (to) gamemove(from, to, promotion);
                            else throw new Error('unknown move')
                        }
                    }
                }
                if (doublemove && doublemove !== 2) {
                    debugger;
                    throw new Error('DoubleMove');
                }
            };

            $('#moves a').eq(opening.moves.length).css('color', 'red');
            $('#moves a').eq(opening.moves.length - 1).css('color', 'green');
            $('#boards').append(`
                        <div style="width: 400px;">
                            <div class="next" style="visibility: ${nextMove || moves.length ? 'visible' : 'hidden'} ">
                                <span class="move">${nextMove || moves.at(-1)}</span>
                                <span class="by">${this.turn(nextMove)[0]}</span>
                            </div>
                            <div class="board"></div>
                            <div class="title"></div> 
                            <div class="url"></div> 
                        </div>
                    `);
            if (this.Opening?.url) {
                const id = this.Opening?.url.match(/www.youtube.com\/(?:shorts\/|watch\?v=)([a-z0-9_]+)/i)?.at(1);
                const $url = $('#boards .url').last();
                $url.html(id ? `<a href="javascript:void(1)">watch</a>` : `<a href="${opening.url}">${opening.url}</a>`);
                if (id) $url.find('a').on('click', () => $url.html(`<iframe id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/${id}?autoplay=1" frameborder="0"></iframe>`));
            }
            $('#boards .title').last().html(common.map(o => `<a href="javascript:void">${o.name}</a>`).join(' , '));
            $('#boards .title').last().find('a').each((index, el) => { $(el).on('click', ({ target }) => { this.Opening = this.database.indexOf(common[index]).toString() }) });

            const $board = $('#boards .board').last();

            // get the position before the final move is placed : create a temporary gui chessboard w/o animation
            let position = (() => {
                const board1 = Chessboard($board, { position: 'start', moveSpeed: 0, orientation });
                for (const move of moves) domove(game, board1, move, false);
                const position = board1.position();
                board1.destroy();
                return position;
            })();

            const nextMoves = (() => {
                const game2 = new Chess(game.fen());
                const board2 = Chessboard($board, { position, moveSpeed, orientation, moveSpeed: 0 });
                if (nextMove) domove(game2, board2, nextMove, true);
                board2.destroy();
                return game2.moves();
            })();

            const board = Chessboard($board, {
                position,
                draggable: !this.Opening && !!nextMoves.length, //nextMove !== '#' && 
                moveSpeed,
                orientation,
                onDragStart: (source, piece) => {
                    const correcturn = piece.startsWith(game.turn()[0]);
                    const canmovepiece = game.moves({ square: source }).length > 0;

                    $board.find(`[data-square]`).removeClass('valid moveable');
                    $board.find(`[data-square]`).addClass('invalid');

                    /** Note valid and invalid squares : so valid are highlighted and invalid dont get highlighted on :hover */
                    if (correcturn && canmovepiece) {
                        for (const square of game.moves({ square: source, verbose: true }).map(m => m.to)) {
                            $board.find(`[data-square="${square}"]`)
                                .removeClass('invalid')
                                .addClass('valid');
                        }
                        return true;
                    }

                    /** Highlight moveable pieces */
                    if (!canmovepiece) {
                        const squares = game.moves({ verbose: true }).map(m => m.from);
                        for (const square of squares)
                            $board.find(`[data-square="${square}"]`)
                                .addClass('moveable')
                                .removeClass('invalid');
                        setTimeout(() => $board.find(`[data-square]`).removeClass('moveable'), 150);
                    }

                    return false;
                },
                // let the user extend the opening with a new move -- copying the change to the clipboard for it to be pasted and hard-coded...
                onDrop: (source, target, piece, newPos, oldPos, orientation) => {
                    // const checkmate = target == 'offboard' && piece.endsWith('K') && '#';
                    const enpassant = piece.endsWith('P') && (source[0] !== target[0]) && !board.position()[target];
                    const castling = piece.endsWith('K') && (source[1] === target[1]) && Math.abs(source.charCodeAt(0) - target.charCodeAt(0)) === 2;

                    $board.find(`[data-square]`).removeClass('valid invalid moveable');

                    if (source == target && nextMove) this.next(nextMove);

                    if (!game.moves({ square: source, verbose: true }).map(m => m.to).includes(target)) return 'snapback';

                    const newOpening = this.Selection.length === 0;
                    const creatingNew = !final || newOpening;
                    let _opening = opening;

                    if (creatingNew) {
                        _opening = JSON.parse(JSON.stringify(opening));
                        this.database.push(_opening);
                        _opening.moves.splice(this.Selection.length - 1);
                        _opening.name += ' ( clone )';
                        this.initOpenings();
                    }

                    _opening.moves = this.Selection.slice(1);

                    if (nextMove && !newOpening && !final) _opening.moves.push(nextMove);

                    const move = (() => {
                        const move = [source, target].join('-');

                        // if (checkmate)
                        //     return '#';

                        // en passent : same row : one file over
                        if (enpassant) {
                            const first = `${target[0]}${source[1]}`;
                            return [`${source}-${first}`, `${first}-${target}`].join('&');
                        }

                        // castling : K : same row : moves 2 files over
                        else if (castling) {
                            const second = (() => {
                                const rank = source[1]; // a1 ( file, rank )
                                const rookSourceFile = source > target ? 'a' : 'h'; // king moves left , thus rook is at a
                                const rookTargetFile = String.fromCharCode(source.charCodeAt(0) + (source < target ? 1 : -1));
                                const rookSource = rookSourceFile + rank;
                                const rookTarget = rookTargetFile + rank;
                                return `${rookSource}-${rookTarget}`;
                            })();
                            return [move, second].join('&');
                        }

                        else {
                            return move;
                        }
                    })();

                    _opening.moves.push(move);

                    try {
                        this.Selection = [orientation, ..._opening.moves];
                    } catch (e) {
                        _opening.moves.pop();

                        const r = this.Selection.slice(0, this.Selection.length - 2);;
                        try {
                            this.Selection = r;
                        } catch (e) {
                            console.error(e);
                            // debugger;
                        }

                        console.error(e);
                        return 'snapback'
                    }

                    navigator.clipboard.writeText(_opening.moves.join(' '));//JSON.stringify(opening) + '\n' + 

                }
            });

            if (nextMove) {
                domove(game, board, nextMove, true);
                if (!secondLast) $board.on('click', () => { this.next(nextMove); });
                $board.find('.next .by').html(game.turn());
            }

            if (clearPieces && nextMove && !final && !secondLast && game.turn() != clearPieces) {
                const position = board.position();
                for (const [k, v] of [...Object.entries(position)])
                    if (v.startsWith(clearPieces))
                        delete position[k];
                board.position(position);
            }

            this.drawn.push({ board, openings: common, nextMove, game, $board });

            if (game.history().length) {
                // signify in the gui the piece moved ( from, to )
                const { from, to } = game.history({ verbose: true }).at(-1);
                const darken = (square, percent = 0.3) => {
                    const $square = $board
                        .find(`[data-square="${square}"]`);
                    const rgb = $square
                        .css('background-color')
                        .match(/(\d+)/g)
                        .map(Number)
                        .map(r => Math.floor(r * (1 - percent)))
                        .map(r => r.toString(16).padStart(2, '0'))
                        .join('');
                    $square.css('background-color', `#${rgb}`);
                };
                [to, from].forEach(square => darken(square));

                /** signify in the gui whether the king has been:
                 * a) checkmated
                 * b) checked 
                 * */
                const [king] = game.findPiece({ color: game.turn(), type: 'k' });
                const $king = $board.find(`[data-square="${king}"]`);
                if (game.isCheckmate())
                    $king.addClass('checkmated');
                if (game.isCheck()) {
                    $king.addClass('checked');
                    setTimeout(() => $king.removeClass('checked'), 200);
                }
            }
        }

        $('#pgn').prop('disabled', this.drawn.length !== 1);
    }
}
