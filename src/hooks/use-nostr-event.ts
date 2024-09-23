import { useEffect, useState } from "react";

import NDK from "@nostr-dev-kit/ndk";

import { parseText, getHTML } from "../shared/nostr.util";
import { useNoteContext } from "../contexts/note.context";


export function useNostrEvent(bech32: string) {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isError, setIsError ] = useState(false);

    const { setNote } = useNoteContext();

    useEffect(() => {
        async function fetchNote(nodeId: string) {
            setIsLoading(true);

            try {
                const ndk = new NDK({
                    explicitRelayUrls: [
                    "wss://relay.damus.io",
                    "wss://nostr.wine",
                    "wss://relay.nostr.net",
                    "wss://nos.lol",
                    "wss://nostr-pub.wellorder.net",
                    "wss://njump.me",
                    "wss://relay.primal.net",
                    ],
                });
                
                await ndk.connect();
        
                const post = await ndk.fetchEvent(nodeId);
                const author = await post?.author.fetchProfile();
        
                const content = post?.content ||  '';
                const parsedContent = await parseText(content);
                const htmlToRender = getHTML(parsedContent);
        
                setNote({
                    html: htmlToRender,
                    author: author,
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
