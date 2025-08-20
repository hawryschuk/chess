export const openings = [
    { appliesTo: 'white', name: 'Scholars Mate (1)', moves: 'e2-e4 e7-e5 f1-c4 d7-d6 d1-f3 g7-g6 f3-f7'.split(' ') },

    { appliesTo: 'white', name: 'Scholars Mate (2)', moves: ['e2-e4', 'e7-e5', 'f1-c4', 'd7-d6', 'd1-h5', 'h7-h6', 'h5-f7'] },
    { appliesTo: 'white', name: 'Tennison Gambit (1)', moves: 'e2-e4 d7-d5 g1-f3 d5-e4 f3-e5 f7-f6 d1-h5 g7-g6 f1-c4 g6-h5 c4-f7'.split(' ') },
    { appliesTo: 'white', name: 'Tennison Gambit (2)', moves: 'e2-e4 d7-d5 g1-f3 d5-e4 f3-g5 g8-f6 d2-d3 e4-d3 f1-d3 h7-h6 g5-f7 e8-f7 d3-g6 f7-g6 d1-d8'.split(' ') },
    { appliesTo: 'white', name: 'Mortimer Trap', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-b5 g8-f6 d2-d3 c6-e7 f3-e5 c7-c6 e5-c4 c6-b5 c4-d6'.split(' ') },

    { appliesTo: 'white', name: 'Italian Game - Fried Liver Attack (1)', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 f3-g5 d7-d5 e4-d5 f6-d5 g5-f7'.split(' '), url: 'https://www.chess.com/openings/Italian-Game-Fried-Liver-Attack', },
    { appliesTo: 'white', name: 'Italian Game - Fried Liver Attack (2)', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 f3-g5 d7-d5 e4-d5 f6-d5 g5-f7 e8-f7 d1-f3'.split(' '), url: 'https://www.youtube.com/watch?v=cAT_4N8o6Do' },
    { appliesTo: 'white', name: 'Italian Game - Fried Liver Attack (3)', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 f3-g5 d7-d5 e4-d5 f6-d5 g5-f7 e8-f7 d1-f3 f7-e6 b1-c3 c6-d4 c4-d5 e6-e7 f3-f7 e7-d6 c3-e4'.split(' '), url: 'https://www.youtube.com/watch?v=2bV_TNYIAIU' },

    { appliesTo: 'black', name: 'Italian Game - Fried Liver Attack Defense', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 f3-g5 f6-e4 g5-f7 d8-h4 g2-g3 e4-g3 f7-h8 h4-e4 c4-e2 e4-h1 e2-f1 h1-f1'.split(' '), url: 'https://www.youtube.com/watch?v=cN4Xpz5yHSQ' },

    { appliesTo: 'white', name: 'Italian Game (1)', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 d7-d6 b1-c3 g8-f6 f3-g5 h7-h6 g5-f7 d8-e7 f7-h8'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'white', name: 'Italian Game (2)', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 d7-d6 b1-c3 c8-g4 h2-h3 g4-h5 f3-e5 c6-e5 d1-h5 e5-c4 h5-b5 d8-d7 b5-c4'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'white', name: 'Italian Game - Légal Trap', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 d7-d6 b1-c3 c8-g4 h2-h3 g4-h5 f3-e5 h5-d1 c4-f7 e8-e7 c3-d5'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'black', name: 'Italian Game - Blackburne Shilling Gambit', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 c6-d4 f3-e5 d8-g5 e5-f7 g5-g2 f7-h8 g2-h1 c4-f1 h1-e4 f1-e2 d4-c2 e1-f1 e4-h1'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'white', name: 'Italian Game - Blackburne Shilling Gambit Defense', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 c6-d4 e1-g1 d4-f3 d1-f3 g8-f6 d2-d4 e5-d4 e4-e5 d7-d5 e5-f6 d5-c4 c1-g5 g7-g6 f1-e1 c8-e6 e1-e6 f7-e6 f6-f7'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'white', name: 'Italian Game - Rousseau Gambit', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 f7-f5 e4-f5 e5-e4 f3-d4 c6-d4 d1-h5 g7-g6 f5-g6 g8-f6 g6-g7 f6-h5 g7-h8 d4-c2 e1-d1 c2-a1 h8-h7 h5-f6 h7-f7'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },
    { appliesTo: 'white', name: 'Italian Game - Giuoco Piano', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 f8-c5 d2-d3 g8-f6 b1-c3 e8-g8 c1-g5 d7-d6 c3-d5 h7-h6 d5-f6 g7-f6 g5-h6 f8-e8 f3-h4 f6-f5 c4-f7 g8-f7 d1-h5 f7-g8 h5-g6 g8-h8 g6-g7'.split(' '), url: 'https://www.youtube.com/watch?v=6ACqk117Q7U' },

    { appliesTo: 'white', name: 'Italian Game - Deutz Gambit', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 f8-c5 e1-g1 g8-f6 d2-d4 e5-d4 e4-e5 f6-g8 f3-g5 g8-h6 f1-e1 e8-g8 d1-d3 g7-g6 d3-h3 g8-g7 h3-h6 g7-h6 g5-f7 h6-g7 c1-h6 g7-g8 f7-d8'.split(' '), url: 'https://www.youtube.com/watch?v=1JVnfwZ4JcQ' },

    { appliesTo: 'white', name: '85% win (Van Geet??)', moves: 'b1-c3 d7-d5 e2-e4 d5-d4 c3-e2 e7-e5 e2-g3 c7-c5 g1-f3 b8-c6 f1-c4 f8-d6 d2-d3 g8-e7 f3-g5 e8-g8 d1-h5 h7-h6 g5-f7 f8-f7 h5-f7 g8-h7 c1-h6 h7-h6 f7-h5'.split(' '), url: 'https://www.youtube.com/watch?v=pogv0YLR7sc' },

    { appliesTo: 'white', name: 'Van Geet', moves: 'b1-c3 d7-d5 e2-e4 d5-d4 c3-e2 e7-e5 e2-g3 c7-c5 g1-f3 b8-c6 f1-c4 f8-d6 d2-d3 g8-e7 f3-g5 e8-g8 d1-h5 h7-h6 g5-f7 f8-f7 h5-f7 g8-h7 c1-h6 h7-h6 f7-h5'.split(' '), url: 'https://www.youtube.com/watch?v=pogv0YLR7sc' },


    { appliesTo: 'white', name: 'Van Geet Opening Trick', moves: 'b1-c3 d7-d5 e2-e3 e7-e5 d1-h5 b8-c6 f1-b5 d8-d6 g1-f3 e5-e4 h5-e5 d6-e5 f3-e5'.split(' '), url: 'https://www.youtube.com/watch?v=EGZMpKp6Hy0' },

    { appliesTo: 'black', name: 'Van Geet Counter : Nowukunski Gambit', moves: 'b1-c3 e7-e5 f2-f4 e5-f4 e2-e4 f4-e3 g1-f3 e3-d2 e1-d2 d7-d5 d2-e2 g8-f6 e2-f2 f8-c5 c1-e3 f6-g4 f2-g3 c5-d6 g3-h3 g4-f2'.split(' '), url: 'https://www.youtube.com/watch?v=XGu4tp3rS40' },
    { appliesTo: 'black', name: 'Van Geet Counter (1)', moves: 'b1-c3 d7-d5 g1-f3 d5-d4 c3-e4 b8-c6 e2-e3 d4-e3 d2-e3 d8-d1 e1-d1 e7-e5 f1-d3 f7-f5 e4-g3 e5-e4 d3-b5 e4-f3 g2-f3 f8-e7 d1-e2 g7-g6 b2-b3 e7-f6 a1-b1 g8-e7 h1-d1 c8-e6 b5-d3 e8-c8 c2-c4 c6-b4 c1-b2 f6-b2 b1-b2 b7-b5 c4-b5 e7-d5 e3-e4 d5-c3 e2-e3 c3-d1 e3-f4 b4-d3 f4-g5 d1-b2 e4-f5 g6-f5 g3-h5 h8-g8 g5-f6 g8-g6 f6-e7 d8-d7 e7-e8 g6-g8'.split(' '), url: 'https://www.youtube.com/watch?v=eG_p4ZngYE4' },

    { appliesTo: 'black', name: 'Scandinavian Defense (1)', moves: 'e2-e4 d7-d5 b1-c3 d5-d4 c3-d5 e7-e5 * c7-c6'.split(' ') },
    { appliesTo: 'black', name: 'Scandinavian Defense (2)', moves: 'e2-e4 d7-d5 e4-d5 g8-f6 c2-c4 e7-e6 d5-e6 c8-e6 d2-d4 f8-b4 b1-c3 f6-e4 c1-d2 d8-d4 g1-f3 d4-f2'.split(' '), url: 'http://youtube.com/watch?v=sKoBj-kL0hg', },
    { appliesTo: 'black', name: 'Scandinavian Defense (3)', moves: 'e2-e4 d7-d5 e4-d5 g8-f6 b1-c3 f6-d5 c3-d5 d8-d5 d2-d4 b8-c6 g1-f3 c8-g4 f1-e2 e8-c8 c2-c3 e7-e5 d4-e5 d5-e4 d1-b3 c6-e5 f3-e5 e4-e2'.split(' '), url: 'https://www.youtube.com/watch?v=jEGFEC7qYkM' },

    { appliesTo: 'black', name: 'Scandinavian Defense (4)', moves: 'e2-e4 d7-d5 e4-e5 c7-c5 g1-f3 c8-g4 f1-e2 b8-c6 * g4-f3 e2-f3 c6-e5'.split(' '), url: 'https://www.youtube.com/watch?v=jEGFEC7qYkM' },

    { appliesTo: 'white', name: 'Bishops Opening Trap (1)', moves: 'e2-e4 e7-e5 f1-c4 g8-f6 b1-c3 f8-c5 d2-d3 d7-d6 f2-f4 f6-g4 f4-f5 g4-f2 d1-h5 e8-g8 c1-g5 d8-e8 c3-d5 f2-h1 d5-f6 g7-f6 g5-f6 * h5-g5'.split(' '), url: 'https://www.youtube.com/watch?v=bmsjE0ZYUoA' },
    { appliesTo: 'black', name: 'Bishops Opening Trap (2)', moves: 'e2-e4 e7-e5 f1-c4 g8-f6 d2-d4 e5-d4 e4-e5 d7-d5 c4-b3 f6-e4 g1-e2 f8-c5 f2-f3 d8-h4 g2-g3 d4-d3 g3-h4 c5-f2 e1-f1 c8-h3'.split(' '), url: 'https://www.youtube.com/watch?v=bmsjE0ZYUoA' },

    { appliesTo: 'black', name: 'Soller Gambit', moves: 'd2-d4 e7-e5 d4-e5 f7-f6 e5-f6 g8-f6 g1-f3 f8-c5 c1-g5 f6-e4 g5-d8 c5-f2'.split(' '), url: 'https://www.youtube.com/watch?v=Uno3DLxDufI' },

    { appliesTo: 'black', name: 'Queens Gambit Declined', moves: 'd2-d4 d7-d5 c2-c4 e7-e6 b1-c3 g8-f6 c1-g5 b8-d7 c4-d5 e6-d5 c3-d5 f6-d5 g5-d8 f8-b4 d1-d2 b4-d2 e1-d2 e8-d8'.split(' '), url: 'https://www.youtube.com/shorts/T3k9otBi9pw', },

    { appliesTo: 'white', name: 'Queens Gambit Declined Trap', moves: 'd2-d4 d7-d5 c2-c4 g8-f6 c4-d5 f6-d5 g1-f3 b8-c6 e2-e4 d5-f6 b1-c3 c8-g4 d4-d5 c6-e5 f3-e5 g4-d1 f1-b5 c7-c6 d5-c6 d8-c7 c6-b7 e8-d8 e5-f7'.split(' '), url: 'https://www.youtube.com/shorts/hxEJvqUgFbU', },

    { appliesTo: 'white', name: 'Alekhines Defense', moves: 'e2-e4 g8-f6 e4-e5 f6-d5 g1-f3 d7-d6 f1-c4 d5-b6 c4-f7 e8-f7 f3-g5 f7-g6 d1-f3 g6-g5 h2-h4 g5-g6 h4-h5 g6-h6 f3-f7 d6-e5 d2-d4 g7-g5 h5-g6'.split(' ') },

    { appliesTo: 'white', name: 'Queens Gambit Accepted: Old Variation', moves: 'd2-d4 d7-d5 c2-c4 d5-c4 e2-e3 b7-b5 a2-a4 c7-c6 a4-b5 c6-b5 d1-f3 b8-c6 f3-c6 c8-d7 c6-a6'.split(' ') },

    { appliesTo: 'white', name: 'Missile Gambit', moves: 'g1-f3 d7-d5 e2-e4 d5-e4 f3-g5 g8-f6 d2-d3 e4-d3 f1-d3 h7-h6 g5-f7 e8-f7 d3-g6 f7-g6 d1-d8 b8-c6 d8-c7 e7-e5'.split(' '), url: 'https://www.youtube.com/shorts/P8Iw80W1j78' },
    { appliesTo: 'black', name: 'Queens Gambit Declined: Marshall Gambit', moves: 'd2-d4 e7-e6 e2-e4 d7-d5 b1-c3 c7-c5 g1-f3 b8-c6 e4-d5 e6-d5 f1-e2 g8-f6 e1-g1 f8-e7 c1-g5 e8-g8 d4-c5 c8-e6 f3-d4 e7-c5 d4-e6 f7-e6 e2-g4 d8-d6 g4-h3 a8-e8 d1-d2 c5-b4 g5-f6 f8-f6 a1-d1 d6-c5 d2-e2 b4-c3 b2-c3 c5-c3 d1-d5 c6-d4 e2-h5 e8-f8 d5-e5 f6-h6 h5-g5 h6-h3 e5-c5 c3-g3 h2-g3 d4-e2'.split(' '), url: 'https://www.youtube.com/shorts/Ggr_Zjbj6Ks' },
    { appliesTo: 'black', name: 'Fishing Pole Trap', moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-b5 g8-f6 e1-g1 f6-g4 h2-h3 h7-h5 h3-g4 h5-g4 * d8-h4 f1-e1 h4-h2 g1-f1 c6-d4 * h2-h1'.split(' '), url: 'https://www.youtube.com/shorts/dVZMtqxDmLc' },

    { appliesTo: 'black', name: 'Englund Gambit Declined Trap', moves: 'd2-d4 e7-e6 e2-e4 d7-d5 b1-c3 c7-c5 g1-f3 b8-c6 e4-d5 e6-d5 f1-e2 g8-f6 e1-g1 f8-e7 c1-g5 e8-g8 d4-c5 c8-e6 f3-d4 e7-c5 d4-e6 f7-e6 e2-g4 d8-d6 g4-h3 a8-e8 d1-d2 c5-b4 g5-f6 f8-f6 a1-d1 d6-c5 d2-e2 b4-c3 b2-c3 c5-c3 d1-d5 c6-d4 e2-h5 e8-f8 d5-e5 f6-h6 h5-g5 h6-h3 e5-c5 c3-g3 h2-g3 d4-e2'.split(' '), url: 'https://www.youtube.com/shorts/HWWoP02A3XE' },

    { appliesTo: 'white', name: 'Scandinavian Defense: Marshall Gambit Trap', moves: 'e2-e4 b8-c6 d2-d4 d7-d5 e4-d5 d8-d5 b1-c3 d5-d4 d1-e2 c8-g4 f2-f3 g4-h5 c1-e3 d4-b4 e1-c1 a7-a6 c3-d5 b4-a5 e3-b6 c7-b6 d5-c7'.split(' '), url: 'https://www.youtube.com/shorts/xhX1oFT29gc' },
    { appliesTo: 'white', name: 'Sem-Slav: Marshall Gambit', moves: 'd2-d4 d7-d5 c2-c4 e7-e6 b1-c3 c7-c6 e2-e4 f8-d6 g1-f3 g8-e7 f1-d3 e8-g8 e4-e5 d6-c7 d3-h7 g8-h7 f3-g5 h7-g6 h2-h4 e7-f5 h4-h5'.split(' '), url: 'https://www.youtube.com/shorts/M4w6G-nbh5E' },

    { appliesTo: 'black', name: `King's Pawn Opening: Wayward Queen Attack (1)`, moves: 'e2-e4 e7-e5 d1-h5 b8-c6 f1-c4 g7-g6 h5-f3 g8-f6 g2-g4 c6-d4 f3-d1 d7-d5 e4-d5 c8-g4 f2-f3 f6-e4 f3-g4 d8-h4 e1-f1 h4-f2'.split(' '), url: 'https://www.youtube.com/shorts/uZAAe5wSQL8' },
    { appliesTo: 'black', name: `King's Pawn Opening: Wayward Queen Attack (2)`, moves: 'e2-e4 e7-e5 d1-h5 b8-c6 f1-c4 g7-g6 h5-f3 g8-f6 f3-b3 c6-d4 c4-f7 e8-e7 b3-c4 b7-b5 c4-c5 e7-f7 c5-c3 f8-b4 c3-b4 d4-c2'.split(' '), url: 'https://www.youtube.com/shorts/vxueuzvG2P0' },

    { appliesTo: 'white', name: `Halosar Trap`, moves: 'd2-d4 d7-d5 e2-e4 d5-e4 b1-c3 g8-f6 f2-f3 e4-f3 d1-f3 d8-d4 c1-e3 d4-b4 e1-c1 c8-g4 c3-b5 b8-a6 f3-b7 a8-b8 b7-b8 a6-b8 b5-c7'.split(' '), url: 'https://www.youtube.com/shorts/5a_h1tg5aGQ' },

    // todo : parse [c1-g5 e7-f7] as with or without
    { appliesTo: 'white', name: `Knightmare 1a`, moves: 'e2-e4 e7-e5 f1-c4 g8-f6 g1-f3 f6-e4 b1-c3 e4-c3 d2-c3 d7-d6 f3-e5 d6-e5 c4-f7 e8-e7 c1-g5 e7-f7 d1-d8'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 1b`, moves: 'e2-e4 e7-e5 f1-c4 g8-f6 g1-f3 f6-e4 b1-c3 e4-c3 d2-c3 d7-d6 f3-e5 d6-e5 c4-f7 e8-f7 d1-d8'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },

    { appliesTo: 'white', name: `Knightmare 2a - Vienna Gambit`, moves: 'e2-e4 e7-e5 b1-c3 g8-f6 f2-f4 e5-f4 e4-e5 d8-e7 d1-e2 f6-g8 g1-f3 d7-d6 c3-d5 e7-d8 d5-c7 d8-c7 e5-d6 e8-d8 d6-c7'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 2b - Vienna Gambit`, moves: 'e2-e4 e7-e5 b1-c3 g8-f6 f2-f4 e5-f4 e4-e5 d8-e7 d1-e2 f6-g8 g1-f3 d7-d6 c3-d5 e7-d8 d5-c7 d8-c7 e5-d6 e8-d7 d6-c7'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 3 - Ponziani Opening`, moves: 'e2-e4 e7-e5 g1-f3 b8-c6 c2-c3 g8-f6 d2-d4 f6-e4 d4-d5 c6-e7 f3-e5 d7-d6 f1-b5 c7-c6 d5-c6 d8-b6 c6-b7 e8-d8 e5-f7 d8-c7 b7-a8n'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'black', name: `Knightmare 5 - Four Knights Game : Italian Variation`, moves: 'e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 b1-c3 f6-e4 c3-e4 d7-d5 c4-d5 d8-d5 e4-c3 d5-d6 e1-g1 c8-g4 h2-h3 h7-h5 h3-g4 h5-g4 * d6-h6 * h6-h2'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 6 - Scotch Game`, moves: 'e2-e4 e7-e5 g1-f3 b8-c6 d2-d4 e5-d4 f3-g5 h7-h6 g5-f7 e8-f7 f1-c4 f7-e8 d1-h5 e8-e7 h5-f7 e7-d6 c1-f4 d6-c5 f7-d5 c5-b6 d5-b5'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 7a - KnightCloud (Alapin Opening)`, moves: 'e2-e4 e7-e5 g1-e2 g8-f6 f2-f4 e5-f4 e2-f4 f6-e4 d1-e2 d7-d5 d2-d3'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 7b - KnightCloud (Alapin Opening)`, moves: 'e2-e4 e7-e5 g1-e2 g8-f6 f2-f4 e5-f4 e2-f4 f6-e4 d1-e2 d8-e7 f4-d5 e7-e5 b1-c3 c7-c6 d2-d4 e5-d4 c3-e4 d4-d5 e4-f6 e8-d8 f6-d5'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 7c - KnightCloud (Alapin Opening)`, moves: 'e2-e4 e7-e5 g1-e2 g8-f6 f2-f4 e5-f4 e2-f4 f6-e4 d1-e2 d8-e7 f4-d5 e7-e5 b1-c3 c7-c6 d2-d4 e5-d4 c3-e4 c6-d5 e4-d6 e8-d8 e2-e8 d8-c7 d6-b5 c7-b6 e8-d8 b6-a6 b5-d4 b7-b5 d8-c7 b8-c6 f1-b5'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 8a - Petrovs Defense`, moves: 'e2-e4 e7-e5 g1-f3 g8-f6 f3-e5 d7-d6 e5-f7 e8-f7 d2-d4 f6-e4 d1-h5 g7-g6 h5-d5 c8-e6'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 8b - Petrovs Defense`, moves: 'e2-e4 e7-e5 g1-f3 g8-f6 f3-e5 d7-d6 e5-f7 e8-f7 d2-d4 f6-e4 d1-h5 f7-g8 h5-d5 c8-e6 d5-e6'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 8c - Petrovs Defense`, moves: 'e2-e4 e7-e5 g1-f3 g8-f6 f3-e5 d7-d6 e5-f7 e8-f7 d2-d4 f6-e4 d1-h5 f7-e7 h5-e2 d6-d5 c1-g5'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'white', name: `Knightmare 9 - Halloween Gambit`, moves: 'e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 f3-e5 c6-e5 d2-d4 e5-g6 e4-e5 f6-g8 f1-c4 f8-b4 d1-f3 d8-e7 h2-h4 b4-c3 b2-c3 g6-h4 h1-h4 e7-h4 f3-f7 e8-d8 f7-f8'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'black', name: `Knightmare 10a - Scandinavian Modern Variation`, moves: 'e2-e4 d7-d5 e4-d5 g8-f6 d2-d4 f6-d5 c2-c4 d5-b4 d1-a4 b8-c6 d4-d5 b7-b5 c4-b5 c6-d4 a4-b4 d4-c2'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    { appliesTo: 'black', name: `Knightmare 10b - Scandinavian Modern Variation`, moves: 'e2-e4 d7-d5 e4-d5 g8-f6 d2-d4 f6-d5 c2-c4 d5-b4 d1-a4 b8-c6 d4-d5 b7-b5 c4-b5 c6-d4 b1-a3 e7-e5 c1-d2 d8-d5 d2-b4 d5-e4 g1-e2 f8-b4 a4-b4 d4-f3 g2-f3 e4-b4 e2-c3 b4-b2'.split(' '), url: 'https://www.youtube.com/watch?v=6KP7BzHpoBs' },
    
    { appliesTo: 'black', name: `Latvian Gambit`, moves: 'e2-e4 e7-e5 g1-f3 f7-f5 f3-e5 f8-c5 e4-f5 c5-f2 e1-f2 d8-h4 f2-g1 h4-d4'.split(' '), url: 'https://www.youtube.com/watch?v=rugCMzfEsmM' },
    { appliesTo: 'black', name: `Englund Gambit`, moves: 'd2-d4 e7-e5 d4-e5 b8-c6 g1-f3 d8-e7 c1-f4 e7-b4 f4-d2 b4-b2 d2-c3 f8-b4 d1-d2 b4-c3 d2-c3 b2-c1'.split(' '), url: 'https://www.youtube.com/watch?v=B2IKO2co2oE' },

    { appliesTo: 'white', name: `Beyer Gambit`, moves: 'e2-e4 e7-e5 d2-d4 d7-d5 b1-c3 e5-d4 d1-d4 d5-e4 c3-d5 c7-c6 d4-e5 e8-d7 e5-f5 d7-d6 c1-f4 d6-c5 b2-b4 c5-d4 c2-c3'.split(' '), url: 'https://www.youtube.com/watch?v=0lrxFCHb-HQ' },

    { appliesTo: "white", name: "2025.06.19 : RUSTAM-009 vs. nileshprajapa", moves: "d2-d4 d7-d5 d1-d3 e7-e6 e2-e4 d5-e4 d3-e4 g8-f6 e4-e3 b8-c6 c2-c4 c6-d4 b1-a3 f8-a3 e3-c3 f6-e4 c3-d3 a3-b4 e1-d1 e4-f2".split(' '), url: "https://www.chess.com/game/live/139757336514" },
    { appliesTo: "white", name: "Kings Gambit Pawn Checkmate", moves: "e2-e4 e7-e5 f2-f4 e5-f4 g1-f3 f8-e7 f1-c4 e7-h4 g2-g3 f4-g3 e1-g1 g3-h2 g1-h1 h4-e7 c4-f7 e8-f7 f3-e5 f7-e8 d1-h5 g7-g6 e5-g6 g8-f6 f1-f6 e7-f6 g6-e5 e8-e7 h5-f7 e7-d6 e5-c4 d6-c5 f7-d5 c5-b4 a2-a3 b4-a4 b2-b3".split(' '), url: "https://www.youtube.com/watch?v=VmS8o0nhUaQ" },

    { appliesTo: "white", name: "Belgrade Gambit (1)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 h7-h6 e2-h5".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (2)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 c6-e7 g5-e4 e7-d5 e4-d6".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (3)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 c6-e7 g5-e4 f5-e4 e2-h5 e7-g6 c1-g5 f8-e7".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (4)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 c6-e7 g5-e4 f5-e4 e2-h5 g7-g6 h5-e5 d7-d6 f1-c4 d6-e5 d5-f6".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (5)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 f8-e7 g5-e4 f5-e4 e2-e4 e8-g8 f1-d3 g7-g6 c1-h6 f8-e8 e1-g1 e7-f8 d5-f6 d8-f6 e4-e8".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (6)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-e4 d1-e2 f7-f5 f3-g5 d4-d3 e2-d3 e4-g5 c1-g5 d8-g5 d5-c7 e8-d8 c7-e6".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    { appliesTo: "white", name: "Belgrade Gambit (7)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 b1-c3 g8-f6 d2-d4 e5-d4 c3-d5 f6-d5 e4-d5 c6-e7 d1-d4 d7-d6 f1-d3 e7-g6 e1-g1 f8-e7 d4-g7 e7-f6 f1-e1 e8-d7 d3-f5".split(' '), url: "https://www.youtube.com/watch?v=_jCKY64dln0" },
    
    { appliesTo: "white", name: "Nakhmanson Gambit Trap (1)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 d2-d4 e5-d4 e1-g1 f6-e4 b1-c3 e4-c3 b2-c3 d7-d5 f1-e1 f8-e7 c4-d3 e8-g8 f3-d4 e7-f6 c1-a3 f8-e8 d1-h5 g7-g6 h5-d5 d8-d5 e1-e8 g8-g7 a3-f8 g7-g8 f8-h6".split(' '), url: "https://www.youtube.com/watch?v=Nuly8DGXDhE" },
    { appliesTo: "white", name: "Nakhmanson Gambit Trap (2)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 d2-d4 e5-d4 e1-g1 f6-e4 b1-c3 e4-c3 b2-c3 d7-d5 c4-d3 d4-c3 f1-e1 f8-e7 f3-g5 h7-h6 g5-f7 e8-f7 d1-f3 e7-f6 f3-h5 f7-f8 d3-g6 c6-e7 c1-a3 b7-b6 e1-e7 f6-e7 h5-f3 f8-g8 f3-f7".split(' '), url: "https://www.youtube.com/watch?v=Nuly8DGXDhE" },
    { appliesTo: "white", name: "Nakhmanson Gambit Trap (4)", moves: "e2-e4 e7-e5 g1-f3 b8-c6 f1-c4 g8-f6 d2-d4 e5-d4 e1-g1 f6-e4 b1-c3 e4-c3 b2-c3 d4-c3 f1-e1 f8-e7 f3-g5 e8-g8 d1-h5 e7-g5 c1-g5".split(' '), url: "https://www.youtube.com/watch?v=Nuly8DGXDhE" },

    { appliesTo: "white", name: "Bishop's Opening with 80% Win Rate (1)", moves: "e2-e4 e7-e5 f1-c4 g8-f6 d2-d4 f6-e4 d4-e5 d7-d5 c4-d5 e4-c5 d5-f7 e8-e7 c1-g5".split(' '), url: "https://www.youtube.com/watch?v=hw6vhptkFhQ" },
    { appliesTo: "white", name: "Bishop's Opening with 80% Win Rate (2)", moves: "e2-e4 e7-e5 f1-c4 g8-f6 d2-d4 f6-e4 d4-e5 f8-c5 c4-f7 e8-f7 d1-d5 * d5-e4".split(' '), url: "https://www.youtube.com/watch?v=hw6vhptkFhQ" },
    { appliesTo: "white", name: "Bishop's Opening with 80% Win Rate (3)", moves: "e2-e4 e7-e5 f1-c4 g8-f6 d2-d4 e5-d4 g1-f3 f6-e4 d1-d4 e4-f6 b1-c3 b8-c6 d4-h4 f8-e7 c1-g5 h7-h6 e1-c1 e8-g8 g5-h6 g7-h6 h4-h6 f6-g4 h6-g6".split(' '), url: "https://www.youtube.com/watch?v=hw6vhptkFhQ" },
    { appliesTo: "white", name: "Bishop's Opening with 80% Win Rate (4)", moves: "e2-e4 e7-e5 f1-c4 g8-f6 d2-d4 e5-d4 g1-f3 f6-e4 d1-d4 e4-f6 b1-c3 b8-c6 d4-h4 f8-e7 c1-g5 h7-h6 e1-c1 e8-g8 g5-h6 g7-h6 h4-h6 f6-h7 d1-d5 d7-d6 d5-h5".split(' '), url: "https://www.youtube.com/watch?v=hw6vhptkFhQ" },

    { "appliesTo": "white", "name": "2021.07.11 : Jorden van Foreest vs. Garry Kasparov", "moves": ["e2-e4", "e7-e5", "g1-f3", "b8-c6", "d2-d4", "e5-d4", "f3-d4", "g8-f6", "d4-c6", "b7-c6", "e4-e5", "d8-e7", "d1-e2", "f6-d5", "c2-c4", "e7-b4", "b1-d2", "d5-f4", "e2-e3", "f4-g6", "f1-d3", "f8-c5", "e3-g3", "e8-g8", "e1-g1", "d7-d6", "d2-b3", "g6-e5", "a2-a3", "b4-b6", "b3-c5", "b6-c5", "c1-e3", "c5-a5", "b2-b4", "a5-a4", "e3-d4", "f7-f6", "d4-e5", "f6-e5", "f2-f4", "c8-f5", "f4-e5", "f5-d3", "g3-d3", "d6-e5", "d3-d7", "a4-b3", "d7-c6", "b3-e3", "g1-h1", "g8-h8", "f1-e1", "e3-c3", "c6-c7", "a8-c8", "c7-a7", "c8-c4", "h2-h3", "c4-f4", "a7-c5", "c3-b2", "c5-e5", "b2-b3", "e5-e3", "b3-c4", "a1-c1", "c4-f7", "e3-g3", "h7-h6", "b4-b5", "f7-d5", "a3-a4", "f4-a4", "c1-b1", "f8-f5", "b5-b6", "f5-g5", "b6-b7", "d5-b7", "g3-g5"], "url": "https://www.chess.com/games/view/16074318" },

].sort((a, b) => a.appliesTo.localeCompare(b.appliesTo) || a.name.localeCompare(b.name))
