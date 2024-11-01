import { useEffect, useRef, useState } from "react";
import { Bitcoin, Github, HeartIcon2, Mail, QuestionMark } from "../Icon/Icon";
import { HelpAnchor, HelpButtonContainer, HelpContainer, HelpItem, StyledHelpButton } from "./HelpButton.styled";

const HELP_ITEMS = [
    {
        text: "What's this?",
        icon: <QuestionMark />,
        link: '/snap-nostr/about',
    },
    {
        text: "What's Nostr?",
        icon: <QuestionMark />,
        link: 'https://nostr.com',
    },
    {
        text: "Not working?",
        icon: <QuestionMark />,
        link: '/snap-nostr/not-working',
    },
    {
        text: "Credits",
        icon: <HeartIcon2 />,
        link: '/snap-nostr/credits',
    },
    {
        text: "Feedback",
        icon: <Mail />,
        link: '/snap-nostr/feedback',
    },
    {
        text: "Donate",
        icon: <Bitcoin />,
        link: '/snap-nostr/donate',
    },
    {
        text: "Github",
        icon: <Github />,
        link: 'https://github.com/djhemath/snap-nostr',
    },
];

export function HelpButton() {
    const [ isOpen, setIsOpen ] = useState(false);
    const helpContainerRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        function handleClick(e: MouseEvent) {
            if(helpContainerRef.current && !helpContainerRef.current.contains(e.target as Node)) {
                if(buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
                    setIsOpen(false);
                }
            }
        }

        document.addEventListener('click', (e) => handleClick(e));

        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, []);

    const onHelpItemClick = () => {
        setIsOpen(false);
    }

    return (
        <HelpButtonContainer>
            <StyledHelpButton
                ref={buttonRef}
                onClick={() => setIsOpen(prev => !prev)}
                className="rammetto-one-regular">
                ?
            </StyledHelpButton>

            <HelpContainer
                ref={helpContainerRef}
                style={{
                    transform: isOpen ? 'translateY(0)': '',
                    opacity: isOpen ? 1: 0,
                    zIndex: isOpen ? 1: -1,
                }}
            >
                {
                    HELP_ITEMS.map(item => (
                        <HelpItem onClick={() => onHelpItemClick()}>
                            <HelpAnchor
                                href={item.link}
                                target="_blank"
                            >
                                {item.icon}
                                <span>{item.text}</span>
                            </HelpAnchor>
                        </HelpItem>
                    ))
                }
            </HelpContainer>
            
        </HelpButtonContainer>
    );
}