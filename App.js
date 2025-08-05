import { Chess } from './node_modules/chess.js/dist/esm/chess.js';
import { openings } from './openings.js';
export class App {

    database = openings;

    get Selection() { return (localStorage.selection || '').split(',').filter(Boolean); }
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

    otherTurn(nextMove) {
        return ['black', 'white'].find(c => c !== this.turn(nextMove))
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
        $('#next').on('click', () => this.next());
        $('#back').on('click', () => this.back());
        $('#opening')
            .html('<option value="">--opening--</option>' + this.database.map((o, i) => `<option value=${i}>${o.appliesTo} : ${o.name}</option>`).join(''))
            .on('change', ({ target }) => { this.Opening = target.value; $(target).blur() })
            .val(this.database.indexOf(this.Opening));
        this.draw();
        // this.test();
    }

    pause(ms = 200) { return new Promise(r => setTimeout(r, ms)); }

    async test() {
        const { lastTest = '9' } = localStorage;
        for (const o of this.database.slice(lastTest)) {
            const index = this.database.indexOf(o).toString();
            this.Opening = index;
            console.log(localStorage.lastTest = index);
            await this.pause();
            for (const move of o.moves) {
                this.Selection = [...this.Selection, move];
                await this.pause();
            }
            // debugger;
        }
    }

    back() {
        if (this.Selection.length > 1) {
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

    get lines() { return this.database.filter(opening => this.Selection.slice(1).every((move, index) => opening.moves[index] == move)); }
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

        // show the next move for every opening that matches the line we have played so far
        this.drawn = [];
        for (const opening of openings) {
            const common = !this.Selection.length
                ? database.filter(o => o.appliesTo === opening.appliesTo)
                : openings.filter(o => o.moves[moves.length] == opening.moves[moves.length]);
            const titles = [...new Set(common.map(o => o.name))];
            const title = titles.join(', ');
            const index = common.indexOf(opening);
            const orientation = opening.appliesTo;
            const final = opening.moves.length === moves.length && 'red';
            const secondLast = opening.moves.length === moves.length + 1 && 'green';
            const nextMove = opening.moves.length === 0 && orientation
                || opening.moves[moves.length]
                || !final && opening.moves[moves.length - 1]
                || '';
            const game = new Chess;

            if (moves.at(-1) == 'd7-d5' && nextMove === 'd7-d5') debugger;

            // console.clear();

            const gamemove = (from, to, promotion) => {
                // try {
                // console.log(from, to)
                game.move({ from, to, promotion });
                // } catch (e) {
                // debugger;
                // console.log(e);
                // debugger;
                //     throw e;
                // }
            };

            // make the move : 1) chessboardjs(ui), 2) chessjs (memory)
            const domove = (board, move, islast) => {
                if (move.match(/black|white/)) return;

                const moves = move.split('&').filter(Boolean);
                let doublemove = moves.length > 1 ? 1 : 0;
                for (const m of moves) {
                    if (m === '#') { // signifies checkmate
                        const turn = moves.length == 1 ? this.turn(nextMove) : this.otherTurn(nextMove);
                        const position = board.position();
                        const kingPosition = Object.keys(position).find(square => position[square] === `${turn[0]}K`);
                        delete position[kingPosition];
                        board.position(position);
                    } else if (m === '*') { // signifies any piece can move -- visualized by hiding all color's pieces
                        const position = board.position();
                        if (islast) {
                            for (const [k, v] of [...Object.entries(position)])
                                if (v.startsWith(this.turn(nextMove).at(0)))
                                    delete position[k];
                            board.position(position);
                        }

                        game.move(game.moves()[0]);
                    } else {
                        // chessboardjs -- ui board
                        board.move(m);

                        const [from, to] = m.match(/^([a-h][1-8])-([a-h][1-8])/i)?.slice(1) || [];
                        const piece = board.position()[to];
                        const promotion = piece[1] === 'P' && '18'.includes(to[1]) ? 'q' : undefined; // auto-rpomote to queen

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

            if (index > 0 && opening.moves.length) continue;

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

            // we create one temporary chessboard to plot each, without animation, to get the position, 
            let position = (() => {
                const board1 = Chessboard($board, { position: 'start', moveSpeed: 0, orientation });
                for (const move of moves) domove(board1, move, false);
                const position = board1.position();
                board1.destroy();
                return position;
            })();

            console.log({ nextMove, nextMoveNot: nextMove !== '#', moves: game.moves(), o: !this.Opening, draggable: nextMove !== '#' && !this.Opening && game.moves().length });

            const board = Chessboard($board, {
                position,
                draggable: nextMove !== '#' && !this.Opening && !!game.moves().length,
                moveSpeed,
                orientation,
                // let the user extend the opening with a new move -- copying the change to the clipboard for it to be pasted and hard-coded...
                onDrop: (source, target, piece, newPos, oldPos, orientation) => {
                    const correcturn = piece.startsWith(this.otherTurn(nextMove)[0]);
                    const checkmate = target == 'offboard' && piece.endsWith('K') && '#';
                    const valid = (target !== 'offboard' || checkmate) && correcturn;

                    if (!valid) return 'snapback';

                    // debugger;
                    if (source == target) {
                        if (!secondLast) this.next(nextMove);
                        else return;
                    }

                    const newOpening = this.Selection.length === 0;
                    const creatingNew = !final || newOpening;
                    let _opening = opening;

                    if (creatingNew) {
                        _opening = JSON.parse(JSON.stringify(opening));
                        this.database.push(_opening);
                        _opening.moves.splice(this.Selection.length - 1);
                        _opening.name += ' ( clone )';
                    }

                    _opening.moves = this.Selection.slice(1);

                    if (nextMove && !newOpening && !final) _opening.moves.push(nextMove);

                    const move = (() => {
                        const move = [source, target].join('-');

                        if (checkmate)
                            return '#';

                        // en passent : same row : one file over
                        else if (piece.endsWith('P') && (source[1] === target[1]) && Math.abs(source.charCodeAt(0) - target.charCodeAt(0)) === 1) {
                            const second = `${target}-${target[0]}${parseInt(target[1]) + (this.otherTurn(nextMove)[0] === 'w' ? 1 : -1)}`;
                            return [move, second].join('&');
                        }

                        // castling : K : same row : moves 2 files over
                        else if (piece.endsWith('K') && (source[1] === target[1]) && Math.abs(source.charCodeAt(0) - target.charCodeAt(0)) === 2) {
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
                            debugger;
                        }

                        console.error(e);
                        return 'snapback'
                    }

                    navigator.clipboard.writeText(_opening.moves.join(' '));//JSON.stringify(opening) + '\n' + 

                }
            });

            if (nextMove) domove(board, nextMove, true);

            position = board.position();

            if (nextMove && !secondLast) $board.on('click', () => { this.next(nextMove); });

            this.drawn.push({ board, openings: common, nextMove, game })
        }

        $('#pgn').prop('disabled', this.drawn.length !== 1);
    }
}
