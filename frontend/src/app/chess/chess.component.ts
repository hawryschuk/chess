import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, computed, ElementRef, input, Input, OnDestroy, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import { ServiceCenterClient, Terminal, TerminalActivity, WebTerminal } from '@hawryschuk-terminal-restapi';
import { Util } from '@hawryschuk-common/util';
import { onTerminalUpdated } from '@hawryschuk-terminal-restapi/frontend/src/app/terminal/onTerminalUpdated';
import { Chess, Square } from "chess.js";
import { GamePlay } from '../../../ChessService';

declare var Chessboard: any;
declare var $: any;
const LOADED_URLS: any = {};

@Component({
  imports: [CommonModule],
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.scss'],
  standalone: true,
})
export class ChessComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('board') private boardEl!: ElementRef;
  terminal = input.required<Terminal>();
  game!: Chess;
  board!: any; // chessboardjs

  get client() { return ServiceCenterClient.getInstance<GamePlay>(this.terminal()); }
  get moves() { return (this.client.Service?.Instance?.messages || []).map(i => i.move).filter(Boolean); }
  get $board() { return $(this.boardEl?.nativeElement) }
  get finished() { return this.client.Service?.Instance?.finished }
  get running() { return this.client.Service?.Running }
  get won() { return this.client.Won }
  get orientation() { return this.client.input.seat == 2 ? 'black' : 'white'; }
  get myturn() { return this.orientation.startsWith(this.game?.turn()); }
  get mirrors() { return this.game?.fen().startsWith(this.board?.fen()) }

  async ngOnInit() {
    this.loadStylesheet('assets/chessboard-1.0.0.min.css');
    this.loadScript('assets/jquery.min.js', 'assets/chessboard-1.0.0.min.js');
  }
  ngAfterViewInit() { this.create(); }
  ngOnDestroy(): void { this.board?.destroy(); }

  private updated$ = onTerminalUpdated({
    component: this,
    terminal: this.terminal,
    handler: () => this.create()
  });

  constructor(private renderer: Renderer2) { Object.assign(window, { chess: this, Util }); }

  private loadStylesheet(...url: string[]) {
    for (const href of url)
      LOADED_URLS[href] ||= (async () => this.renderer.appendChild(document.head, Object.assign(
        this.renderer.createElement('link'), { rel: 'stylesheet', href }
      )))();
  }

  private async loadScript(...url: string[]) {
    for (const src of url)
      LOADED_URLS[src] ||= await new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.type = 'text/javascript';
        script.async = true; // non-blocking load
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      }).then(() => true);
  }

  async create() {
    Util.debounce({
      resource: this, delay: 100, block: async () => {
        await Util.waitUntil(() =>
          this.boardEl
          && (window as any).$
          && (window as any).Chessboard
          && this.client.Service?.name === 'Chess'
          && this.client.Service.Instance?.messages);

        this.game = new Chess;
        this.moves.forEach(move => this.game.move(move));
        this.board?.destroy();
        this.board = Chessboard(this.$board, {
          draggable: true,
          moveSpeed: 0,
          position: this.game?.fen() || 'start',
          pieceTheme: 'assets/pieces/{piece}.png',
          orientation: this.orientation,

          /** Only drag pieces of : a) the turn's color, b) pieces that can be moved 
           * - Highlight either   : a) valid targets   , b) moveable pieces */
          onDragStart: (source: any) => {
            if (!this.myturn) return false;
            const canmovepiece = this.game.moves({ square: source }).length > 0;
            const { $board, game } = this;

            $board.find(`[data-square]`).removeClass('valid');
            $board.find(`[data-square]`).addClass('invalid');

            /** Note valid and invalid squares : so valid are highlighted and invalid dont get highlighted on :hover */
            if (canmovepiece) {
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
              $board.find(`[data-square="${source}"]`).addClass('immoveable');
              setTimeout(() => $board.find(`[data-square]`).removeClass('moveable immoveable'), 150);
            }

            return false;
          },

          /* let the user extend the opening with a new move -- copying the change to the clipboard for it to be pasted and hard-coded... */
          onDrop: (source: Square, target: Square) => {
            const { $board, game } = this;
            const move = Util
              .where(this.client.terminal.prompts.move[0].choices?.map(c => c.value) || [], { from: source, to: target })!
              .sort((a, b) => a.promotion == 'q' ? -1 : 1)
              .shift();
            const error = !this.myturn && 'out-of-turn'
              || !move && 'invalid-choice'
              || !Util.findWhere(game.moves({ square: source, verbose: true }), { to: target }) && 'illegal-move'
              || !this.client.terminal.prompts.move && 'not-prompted'

            $board.find(`[data-square]`).removeClass('valid invalid');

            if (error) {
              console.error(error);
              return 'snapback';
            } else {
              this.game.move(move);
              this.client.terminal.answer({ move });
              return true;
            }
          }
        });
      }
    });
  }
}
