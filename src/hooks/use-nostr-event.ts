import { useEffect, useState } from "react";

import NDK from "@nostr-dev-kit/ndk";

import { parseText, getHTML } from "../shared/nostr.util";

export function useNostrEvent(noteId: string) {    
    const [ noteHTML, setNoteHTML ] = useState('');
    useEffect(() => {
        async function parseNostrNote(nodeId: string) {
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
            console.log(content);
            const parsedContent = await parseText(content);
            const htmlToRender = getHTML(parsedContent);

            setNoteHTML(htmlToRender);
        }

        parseNostrNote(noteId);
    }, []);

    return {
        noteHTML,
    };

}
