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

// TODO: Improve the initial note. Make it some classy note in the Nostr arena!
export const initialNote: NostrNote = {
  html: '<span class="text-content">Just setting up my nstr!</span>',
  author: {
    name: "djhemath",
    nip05: 'djhemath@iris.to',
    image: "https://pbs.twimg.com/profile_images/1447137435033370628/VkaQ2C0f_400x400.jpg",
  },
  createdAt: 0,
  replies: 41000,
  zaps: 284,
  likes: 7200,
  reposts: 6500,
};


export const MILLISATS_PER_SAT = 1000;

export enum GRADIENT {
  default = 'Default',
  primal1 = 'Primal 1',
  primal2 = 'Primal 2',
  iris = 'Iris',
};

export const GRADIENTS = {
  [GRADIENT.default]: 'linear-gradient(310deg, #d6e9ff, #d6e5ff, #d1d6ff, #ddd1ff, #f3d1ff, #ffccf5, #ffccdf, #ffc8c7, #ffd8c7, #ffddc7)',
  [GRADIENT.primal1]: 'linear-gradient(120deg, #ffb880, #ff827d, #ff7f7f, #de78af, #c76cd5, #a366c5)',
  [GRADIENT.primal2]: 'linear-gradient(159deg, #02e0ff 0%, #2798ee 17%, #2c7eec 33%, #3e63e2 50%, #483fc8 67%, #5129b6 100%, #643cbc 100%)',
  [GRADIENT.iris]: 'linear-gradient(159deg, #c40ef7 0%, #cc0bf8 17%, #b918f9 33%, #9127ed 50%, #7a43ff 67%, #813eff 84%, #7c21e2 100%)',
};
