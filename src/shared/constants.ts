import { NDKUserProfile } from "@nostr-dev-kit/ndk";

export const defaultImgProxy = {
  url: "https://imgproxy.snort.social",
  key: "a82fcf26aa0ccb55dfc6b4bd6a1c90744d3be0f38429f21a8828b43449ce7cebe6bdc2b09a827311bef37b18ce35cb1e6b1c60387a254541afa9e5b4264ae942",
  salt: "a897770d9abf163de055e9617891214e75a9016d748f8ef865e6ffbcb9ed932295659549773a22a019a5f06d0b440c320be411e3fddfe784e199e4f03d74bd9b",
};

export type NostrNote = {
  html: string,
  author?: NDKUserProfile | null,
};

// TODO: Improve the initial note. Make it some classy note in the Nostr arena!
export const initialNote: NostrNote = {
  html: '<span class="text-content">Just setting up my nstr!</span>',
  author: {
    displayName: "djhemath",
    image: "",
  },
};
