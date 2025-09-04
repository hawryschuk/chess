import { Util } from "@hawryschuk-common/util";
import { BaseService, Prompt, ServiceRobot, Terminal } from "@hawryschuk-terminal-restapi";
import { Chess } from "chess.js";
// import { GamePlay, SpadesGame } from "./SpadesGame";
// import { SpadesRobot } from "./SpadesRobot";

export type GamePlay = { move: { from: string; to: string; promotion?: string; }; offerDraw: string; resign: string; };

export class ChessRobot extends ServiceRobot {
    constructor(terminal: Terminal) { super(terminal); }
    async handlePrompts(prompts: Record<string, Prompt[]>): Promise<void> {
        const random = (name: string) => this.terminal.answer({ [name]: Util.randomElement(prompts[name][0]!.choices!.map(c => c.value)) });
        if (prompts.move) await random('move');
    }
}

/** Stock-Ticker : spot prices, player assets */
export class ChessService<T = any> extends BaseService {
    static override USERS = 2;
    static override NAME = 'Chess';
    static override ROBOT = ChessRobot;

    async start() {
        const game = new Chess;
        const [w, b] = this.table.sitting;
        const players: Record<string, Terminal> = { w, b };
        while (!game.isGameOver()) {
            const turn = players[game.turn()];
            const name = turn.input.Name;
            await Util.retry({
                block: async () => {
                    const move = await this.prompt(turn, {
                        type: 'select',
                        name: 'move',
                        choices: game.moves({ verbose: true })
                            .map(move => Util.pick(move, ['from', 'to', 'promotion']))
                            .map(move => ({ title: `${move.from}-${move.to} ${move.promotion || ''}`, value: move, name }))
                    });
                    game.move(move);
                    await this.broadcast({ move });
                }
            });
        }
        if (game.isCheckmate()) {
            const losers = [players[game.turn()]];
            const winners = Util.without([w, b], losers);
            return { winners, losers };
        } else {
            return { winners: [], losers: [] };
        }
    }
}