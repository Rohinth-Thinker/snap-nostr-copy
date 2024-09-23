import { SyntheticEvent, useEffect, useState } from "react";
import { validateAndGetMatchedNostrEventBech32 } from "../../../shared/nostr.util";
import { useNostrEvent } from "../../../hooks/use-nostr-event";
import { useShakeAnimation } from "../../../hooks/use-shake-animation";

export type HelperMessage = {
    type: 'error' | 'info';
    message: string;
}

const pressEnterToFindNote = 'Press Enter to find note';

export function useSearchInput() {
    const [ bech32, setBech32 ] = useState('');
    const [ helperMessage, setHelperMessage ] = useState<HelperMessage>({
        type: 'info',
        message: ''
    });

    const { isError, isLoading } = useNostrEvent(bech32);

    const { isAnimate, addShakeAnimation } = useShakeAnimation(isError);

    useEffect(() => {
        if(isError) {
            setHelperMessage({
                type: 'error',
                message: 'Something went wrong!',
            });
        }
    },[isError]);

    function onText(inputValue: string) {
        const bech32 = validateAndGetMatchedNostrEventBech32(inputValue);

        if(!bech32) {
            addShakeAnimation();

            setHelperMessage({
                type: 'error',
                message: 'Invalid note ID or invalid URL!',
            });
        } else {
            setBech32(bech32);
        }
    }

    function onSubmit(e: SyntheticEvent<HTMLFormElement, SubmitEvent>) {
        e.preventDefault();
        const inputValue = (e.currentTarget[0] as HTMLInputElement).value;
        onText(inputValue);
    }

    function onPaste(e: React.ClipboardEvent<HTMLInputElement>) {
        // Not sure why it's not working outside the setTimeout
        setTimeout(() => {
            const inputValue = (e.target as HTMLInputElement).value;
            onText(inputValue);
        });
    }

    function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {

        if(e.target.value === '') {
            setHelperMessage({
                type: 'info',
                message: '',
            });
        } else {
            if(helperMessage.message !== pressEnterToFindNote) {
                setHelperMessage({
                    type: 'info',
                    message: pressEnterToFindNote,
                });
            }
        }
    }

    function onInputBlur() {
        if(helperMessage.type !== 'error') {
            setHelperMessage({
                type: 'info',
                message: '',
            });
        }
    }

    function onInputFocus(e: React.FocusEvent) {
        if(helperMessage.message === '' && (e.target as HTMLInputElement).value !== '') {
            setHelperMessage({
                type: 'info',
                message: pressEnterToFindNote,
            });
        }
    }

    return {
        helperMessage,
        isAnimate,
        isLoading,
        onSubmit,
        onPaste,
        onInputChange,
        onInputBlur,
        onInputFocus,
    };
}
