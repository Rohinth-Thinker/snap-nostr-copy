import { useEffect, useState } from "react";

import NDK from "@nostr-dev-kit/ndk";

import { parseText, getHTML, getPostDetails } from "../shared/nostr.util";
import { useNoteContext } from "../contexts/note.context";
import { useRelaysContext } from "../contexts/relays.context";


export function useNostrEvent(bech32: string) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const { setNote } = useNoteContext();
    const { relays } = useRelaysContext();

    useEffect(() => {
        async function fetchNote(noteId: string) {
            setIsLoading(true);

            try {
                console.log({relays});

                // TODO: Come up with a solution to prevent app from stalling if any of the relays are down
                const ndk = new NDK({
                    explicitRelayUrls: relays,
                });

                await ndk.connect();

                const { post, author, stats } = await getPostDetails(ndk, noteId);
                const { likes, replies, reposts, zaps } = stats;

                const postId = post?.id || '';
                const content = post?.content ||  '';
                const parsedContent = await parseText(content);
                const htmlToRender = getHTML(parsedContent);

                setNote({
                    html: htmlToRender,
                    author: author,
                    createdAt: post?.created_at || 0,
                    replies,
                    zaps,
                    likes,
                    reposts,
                    postId,
                });

                setIsError(false);

            } catch(err) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        if(bech32) {
            fetchNote(bech32);
        }
    }, [bech32]);

    return {
        isError,
        isLoading,
    };
}
