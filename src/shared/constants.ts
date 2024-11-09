import { NDKUserProfile } from "@nostr-dev-kit/ndk";

export const defaultImgProxy = {
  url: "https://imgproxy.snort.social",
  key: "a82fcf26aa0ccb55dfc6b4bd6a1c90744d3be0f38429f21a8828b43449ce7cebe6bdc2b09a827311bef37b18ce35cb1e6b1c60387a254541afa9e5b4264ae942",
  salt: "a897770d9abf163de055e9617891214e75a9016d748f8ef865e6ffbcb9ed932295659549773a22a019a5f06d0b440c320be411e3fddfe784e199e4f03d74bd9b",
};

export type NostrNote = {
  html: string,
  author?: NDKUserProfile | null,
  createdAt: number,
  replies: number,
  zaps: number,
  likes: number,
  reposts: number,
};

export const initialNotes: NostrNote[] = [
  {
    html: '<span class="text-content">The free Web is going to be the paid Web.</span>',
    author: {
      name: "Gigi",
      nip05: 'dergigi.com',
      image: "https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fdergigi.com%2Fassets%2Fimages%2Favatars%2F09.png",
    },
    createdAt: 1722516000,
    replies: 16,
    zaps: 513,
    likes: 32,
    reposts: 7,
  },
  {
    html: '<span class="text-content">First they fight you. Then they zap you. Then you\'re frens.</span>',
    author: {
      name: "no₿ody™️🧱",
      nip05: 'noBody@nostrplebs.com',
      image: "https://i.imgur.com/Df0FkP1.gif",
    },
    createdAt: 1722487500,
    replies: 4,
    zaps: 396,
    likes: 29,
    reposts: 6,
  },
  {
    html: '<span class="text-content">The only threat to Bitcoin is responsible government<br/><br/>So we 💯 safe 😊</span>',
    author: {
      name: "utxo the webmaster 🧑‍💻",
      nip05: 'utxo.one',
      image: "https://i.nostr.build/6G6wW.gif",
    },
    createdAt: 1724160120,
    replies: 6,
    zaps: 2414,
    likes: 39,
    reposts: 3,
  },
  {
    html: '<span class="text-content">What is the US dollar backed by?<br /><br />tHe fUlL fAiTh aNd cReDiT oF tHe UnItEd sTaTeS<br /><br />What the fuck does this even mean</span>',
    author: {
      name: "utxo the webmaster 🧑‍💻",
      nip05: 'utxo.one',
      image: "https://i.nostr.build/6G6wW.gif",
    },
    createdAt: 1723557720,
    replies: 23,
    zaps: 103,
    likes: 30,
    reposts: 1,
  },
  {
    html: '<span class="text-content">Every human social order is built on a foundation of violence.<br /><br />Except bitcoin.</span>',
    author: {
      name: "HODL",
      nip05: 'hodl@nostrverified.com',
      image: "https://i.postimg.cc/yd4j6Znb/0-AE2325-A-C9-A0-475-C-8-ED3-F012-E5-E3-C426.gif",
    },
    createdAt: 1728655680,
    replies: 13,
    zaps: 1084,
    likes: 52,
    reposts: 8,
  },
  {
    html: '<span class="text-content">Deleting your Twitter account can actually make a difference.<br /><br />Every time someone opens a link or searches for an old thread in which you participated they will not see your tweets, the entire experience will be broken and they will hate Twitter for that.</span>',
    author: {
      name: "fiatjaf",
      nip05: 'fiatjaf.com',
      image: "https://fiatjaf.com/static/favicon.jpg",
    },
    createdAt: 1714736220,
    replies: 44,
    zaps: 13322,
    likes: 266,
    reposts: 58,
  },
  {
    html: '<span class="text-content">ELON CAN SEND A TWEET FROM THE PRESIDENT\'S ACCOUNT IF HE WANTS.<br /><br />CENTRALIZED SOCIAL MEDIA SHOULD NOT BE USED FOR OFFICIAL COMMS.<br /><br />POSTS SHOULD BE CRYPTOGRAPHICALLY SIGNED.<br /><br />THE NOSTR POST YOU ARE READING NOW WAS SIGNED BY MY PRIVATE KEY AND VERIFIED BY YOUR CLIENT.</span>',
    author: {
      name: "ODELL",
      nip05: 'odell@werunbtc.com',
      image: "https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fm.primal.net%2FHrsv.webp",
    },
    createdAt: 1704858000,
    replies: 81,
    zaps: 4834,
    likes: 636,
    reposts: 161,
  },
  {
    html: '<span class="text-content">rights aren\'t given, they\'re taken.<br/><br/>bitcoin and nostr help you take and defend them, peacefully.</span>',
    author: {
      name: "jack",
      nip05: '',
      image: "https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fimage.nostr.build%2F26867ce34e4b11f0a1d083114919a9f4eca699f3b007454c396ef48c43628315.jpg",
    },
    createdAt: 1713387960,
    replies: 109,
    zaps: 19556,
    likes: 963,
    reposts: 319,
  },
  {
    html: '<span class="text-content">I like paranoid crypto anarchists. Good folks doing good work. Big fan.</span>',
    author: {
      name: "Lyn Alden",
      nip05: 'lyn@primal.net',
      image: "https://primal.b-cdn.net/media-cache?s=o&a=1&u=https%3A%2F%2Fvoid.cat%2Fd%2FE4vpXkn515rhcDsFa7umMr.webp",
    },
    createdAt: 1729521900,
    replies: 34,
    zaps: 12687,
    likes: 486,
    reposts: 81,
  },
];

export const initialNote: NostrNote = initialNotes[Math.floor(Math.random() * initialNotes.length)];


export const MILLISATS_PER_SAT = 1000;

export enum GRADIENT {
  default = 'Default',
  primal1 = 'Primal 1',
  primal2 = 'Primal 2',
  iris = 'Iris',
  bitcoin = 'Bitcoin',
};

export const GRADIENTS = {
  [GRADIENT.default]: 'linear-gradient(310deg, #d6e9ff, #d6e5ff, #d1d6ff, #ddd1ff, #f3d1ff, #ffccf5, #ffccdf, #ffc8c7, #ffd8c7, #ffddc7)',
  [GRADIENT.primal1]: 'linear-gradient(120deg, #ffb880, #ff827d, #ff7f7f, #de78af, #c76cd5, #a366c5)',
  [GRADIENT.primal2]: 'linear-gradient(159deg, #02e0ff 0%, #2798ee 17%, #2c7eec 33%, #3e63e2 50%, #483fc8 67%, #5129b6 100%, #643cbc 100%)',
  [GRADIENT.iris]: 'linear-gradient(159deg, #c40ef7 0%, #cc0bf8 17%, #b918f9 33%, #9127ed 50%, #7a43ff 67%, #813eff 84%, #7c21e2 100%)',
  [GRADIENT.bitcoin]: 'linear-gradient(159deg, rgba(247,147,26,1) 0%, rgba(255,168,61,1) 35%, rgba(255,175,76,1) 71%, rgba(255,179,86,1) 100%);',
};

const gradientValues = Object.values(GRADIENT);
export const initialGradient = gradientValues[Math.floor(Math.random() * gradientValues.length)];

export const DEFAULT_RELAYS = [
  "wss://relay.damus.io",
  "wss://nostr.wine",
  // "wss://relay.nostr.net",
  "wss://nos.lol",
  // "wss://nostr-pub.wellorder.net",
  // "wss://njump.me",
  "wss://relay.primal.net",
];

export const RELAYS_LOCALSTORAGE_KEY = 'relays';

export const NOSTR_BRANDING_COLORS = {
  [GRADIENT.default]: '#ca067c',
  [GRADIENT.primal1]: '#a366c5',
  [GRADIENT.primal2]: '#2c7eec',
  [GRADIENT.iris]: '#9127ed',
  [GRADIENT.bitcoin]: '#fc8a00',
}