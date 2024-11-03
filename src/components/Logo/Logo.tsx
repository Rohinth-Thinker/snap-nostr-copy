import { Beta, LogoContainer, StyledLogo } from "./Logo.styled";

export function Logo() {
    return (
        <LogoContainer>
            <StyledLogo className="rammetto-one-regular">SnapNostr</StyledLogo>
            <Beta>BETA</Beta>
        </LogoContainer>
    );
}