import { SearchIcon } from "../Icon/Icon";
import { SearchBarContainer, SearchBarForm, SearchInput } from "./SearchBar.styled";

export function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchIcon />

            <SearchBarForm>
              <SearchInput type="text" placeholder="Paste event id, primal, damus, iris app link here" />
            </SearchBarForm>
        </SearchBarContainer>
    );
}