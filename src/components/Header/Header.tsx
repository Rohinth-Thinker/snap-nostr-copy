import { getBreakpoint } from "../../shared/utils";
import { HelpButton } from "../HelpButton/HelpButton";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomePageHeader, HeaderActions } from "./Header.styled";

const breakpoint = getBreakpoint();

export function Header() {
    return (
        <HomePageHeader>

            {
                breakpoint === 'large'
                ? <Logo />
                : null
            }

            <SearchBar />

            <HeaderActions>
                {
                    breakpoint === 'small' || breakpoint === 'medium'
                    ? <Logo />
                    : null
                }
                <HelpButton />
            </HeaderActions>
        </HomePageHeader>
    );
}
