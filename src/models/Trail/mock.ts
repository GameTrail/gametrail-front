import { MOCK_GAMES } from '../Game/mock';
import { MOCK_USERS } from '../User/mock';
import type { Trail, TrailGang } from './types';
import { TrailGameStatus } from './types';

export const MOCK_TRAIL_GANG: TrailGang = {
  id: 1,
  image: '/images/MGS.jpg',
  players: MOCK_USERS,
  games: MOCK_GAMES,
  startDate: '07/03/2023',
};

export const MOCK_TRAIL: Trail = {
  id: 61,
  name: 'Trail de Jacky6868',
  description: 'Trail de Jacky6868',
  startDate: '2023-03-31',
  finishDate: '2023-04-09',
  maxPlayers: 5,
  owner: {
    id: 48,
    auth_token: 'asdkjlafsdjklasdfjasdf',
    comments_recieved: [],
    games: [],
    plan: 'STANDARD',
    average_ratings: {
      ability: 0,
      availability: 0,
      funny: 0,
      kindness: 0,
      teamwork: 0,
    },
    trails: [],
    username: 'jacky6868',
    avatar: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
    email: 'jacky6868@gmail.com',
  },
  platforms: [],
  games: [
    {
      id: 6,
      name: 'Thief',
      releaseDate: '2014-02-25',
      image: '//images.igdb.com/igdb/image/upload/t_original/co22nc.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/zeqv7lvh8aaemeaa2bhl.jpg, //images.igdb.com/igdb/image/upload/t_original/fnymr7nmagyhaycwkftg.jpg, //images.igdb.com/igdb/image/upload/t_original/u9m4lnfpkv3u9sh1ufsw.jpg, //images.igdb.com/igdb/image/upload/t_original/sgbhfpclrk5udlowkpyq.jpg, //images.igdb.com/igdb/image/upload/t_original/mrhprawxqcaidwvhszch.jpg, ',
      description: "There is a rising tide of fear in The City. Hatred saturates every stone and whilst the rich prosper, the less fortunate face misery and repression. Ravaged with sickness and famine, they wait for something to change.\nInto this shadowy world steps Garrett, THE master thief in Thief, a reinvention of a franchise that helped define an entire genre of games. This first-person adventure features intelligent design that allows players to take full control, with freedom to choose their path through the game's levels and how they approach and overcome each challenge.",
      genres: [
        'Shooter',
        'Adventure',
      ],
      platform: [
        'PC (Microsoft Windows)',
        'PlayStation 3',
        'Mac',
        'PlayStation 4',
        'Xbox 360',
        'Xbox One',
      ],
      comments_games: [
        {
          id: 68,
          commentText: 'cuidao que me roba',
          game: 6,
          userWhoComments: {
            id: 41,
            username: 'joscacgom2',
            avatar: './public/images/Prf.jpg',
          },
        },
      ],
      message: 'Deux Ex 2',
      priority: 5,
      status: TrailGameStatus.PENDING,
    },
    {
      id: 9,
      name: 'Jagged Alliance',
      releaseDate: '1994-06-02',
      image: '//images.igdb.com/igdb/image/upload/t_original/dwovjbfacbjx7fr1gtut.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/rffq9ju1jid0aklrudmz.jpg, //images.igdb.com/igdb/image/upload/t_original/ugvo2kxpaytnooq5mg3b.jpg, //images.igdb.com/igdb/image/upload/t_original/r6d0faxnsxuf3kgsbffh.jpg, //images.igdb.com/igdb/image/upload/t_original/w4wra5mnszsawdxqpiaa.jpg, //images.igdb.com/igdb/image/upload/t_original/mfjiyf9mjxh0fpharpaq.jpg, //images.igdb.com/igdb/image/upload/t_original/bhzgjwzka1gnvrqz8rie.jpg, //images.igdb.com/igdb/image/upload/t_original/bdc6idv5owolbsjlmvha.jpg, //images.igdb.com/igdb/image/upload/t_original/dtgoluxl9dkjvobkij6c.jpg, //images.igdb.com/igdb/image/upload/t_original/rgvwaqiifsmavvsyqusp.jpg, //images.igdb.com/igdb/image/upload/t_original/x0uxtezgnvucdxonp89s.jpg, ',
      description: "Desperately you are called to the island of Metavira by scientist Jack Richards and his lovely daughter Brenda. You hear of their plight - the Fallow trees, their precious, medicinal sap on which countless of lives depend, are under the control of the evil and traitorous Santino. With most of the island already in his grasp, you must hand-pick a commando force of mercenaries and take back the island by force. That is, if you can...\n\nJagged Alliance features: 60 mercenaries... 60 attitudes... 60 voices; intense turn-based combat lets you plan every action; non-linear gameplay; three exciting levels of play will determine if you're as good as you think you are and a replay feature to look for Santino's Achilles heel - you'll need all the help you can get!\n\nAn exciting game design approach - role playing and strategy - puts you in the thick of the action!",
      genres: [
        'Role-playing (RPG)',
        'Strategy',
        'Turn-based strategy (TBS)',
        'Tactical',
      ],
      platform: [
        'DOS',
        'Nintendo DS',
      ],
      comments_games: [],
      message: 'Deux Ex 3',
      priority: 5,
      status: TrailGameStatus.PENDING,
    },
    {
      id: 14,
      name: 'Fallout',
      releaseDate: '1997-09-30',
      image: '//images.igdb.com/igdb/image/upload/t_original/co1ybn.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/p2lbeztzht6mgwosmx4j.jpg, //images.igdb.com/igdb/image/upload/t_original/bsbrwfjo7hnjufo0wkyw.jpg, //images.igdb.com/igdb/image/upload/t_original/u351wabe0uvhvxfmoric.jpg, //images.igdb.com/igdb/image/upload/t_original/hsco2qgztxnglynokv8l.jpg, //images.igdb.com/igdb/image/upload/t_original/owz8jrbpfbjacqqrq4x1.jpg, ',
      description: 'The Vault Dweller is tasked with exploring post-nuclear California in order to retrieve a water chip to replace the broken chip of Vault 13, their home, which they are the first person to ever leave. The player will engage in Western RPG character building and turn-based tactical combat while getting to know settlements and factions of people, mutants and ghouls through branching dialogue trees.',
      genres: [
        'Role-playing (RPG)',
        'Turn-based strategy (TBS)',
      ],
      platform: [
        'PC (Microsoft Windows)',
        'DOS',
        'Mac',
      ],
      comments_games: [],
      message: null,
      priority: null,
      status: TrailGameStatus.PENDING,
    },
    {
      id: 21,
      name: 'BioShock',
      releaseDate: '2007-08-21',
      image: '//images.igdb.com/igdb/image/upload/t_original/co2mli.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/unvhwxrfzpjys4txfv4a.jpg, //images.igdb.com/igdb/image/upload/t_original/wworjqefsfzc9ouvrpxd.jpg, //images.igdb.com/igdb/image/upload/t_original/kjbwbdqemykovdzgidhu.jpg, //images.igdb.com/igdb/image/upload/t_original/yg3j0yco50gq3wfcxujb.jpg, //images.igdb.com/igdb/image/upload/t_original/usn4aw2k54ym8jcjbkmg.jpg, ',
      description: 'BioShock is a horror-themed first-person shooter set in a steampunk underwater dystopia. The player is urged to turn everything into a weapon: biologically modifying their own body with Plasmids, hacking devices and systems, upgrading their weapons, crafting new ammo variants, and experimenting with different battle techniques are all possible. The game is described by the developers as a spiritual successor to their previous PC title System Shock 2. BioShock received high praise in critical reviews for its atmospheric audio and visual quality, absorbing and original plot and its unique gaming experience.',
      genres: [
        'Shooter',
        'Role-playing (RPG)',
        'Adventure',
      ],
      platform: [
        'PC (Microsoft Windows)',
        'PlayStation 3',
        'Mac',
        'Xbox 360',
      ],
      comments_games: [],
      message: null,
      priority: null,
      status: TrailGameStatus.PENDING,
    },
    {
      id: 19,
      name: 'Max Payne',
      releaseDate: '2001-07-23',
      image: '//images.igdb.com/igdb/image/upload/t_original/co3wb2.jpg',
      photos: '//images.igdb.com/igdb/image/upload/t_original/sjswehm6zwc4wiurtobr.jpg, //images.igdb.com/igdb/image/upload/t_original/zdwbfncyf0nnjjq5fhbh.jpg, //images.igdb.com/igdb/image/upload/t_original/ynx8jkcz0uvqt9zyenhn.jpg, //images.igdb.com/igdb/image/upload/t_original/c76rbj1hmz7kdsyv6qfq.jpg, //images.igdb.com/igdb/image/upload/t_original/ny2ahlezesjnm1kwny92.jpg, ',
      description: "Max Payne, gritty ex-cop and titular hero of this third-person shooter, sets out on his own to take revenge on those who murdered his wife and child, only for the plot he's involved in to get deeper and deeper. As his guilt and trauma build, Payne finds himself in more and more impossibly unfavourable and astounding situations, which challenge his methods, his worldview, and even his existence.",
      genres: [
        'Shooter',
      ],
      platform: [
        'PlayStation 2',
        'iOS',
        'PC (Microsoft Windows)',
        'Xbox',
        'PlayStation 3',
        'Mac',
        'Android',
        'PlayStation 4',
        'Xbox 360',
      ],
      comments_games: [],
      message: null,
      priority: null,
      status: TrailGameStatus.PENDING,
    },
  ],
  users: [
    {
      id: 48,
      username: 'jacky6868',
      email: 'jacky6868@gmail.com',
      avatar: 'https://cdnb.artstation.com/p/assets/images/images/035/213/423/large/mcashe-titanzekeef-dev.jpg?1614374087',
      plan: 'STANDARD',
    },
  ],
};
