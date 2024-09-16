import { HelpButton } from "../HelpButton/HelpButton";
import { Logo } from "../Logo/Logo";
import { SearchBar } from "../SearchBar/SearchBar";
import { HomePageHeader, HeaderActions } from "./Header.styled";

export function Header() {
    return (
        <HomePageHeader>
            <Logo />

            <SearchBar />

            <HeaderActions>
                <HelpButton />
            </HeaderActions>
        </HomePageHeader>
    );
}