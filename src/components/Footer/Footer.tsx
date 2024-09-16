import { Bitcoin, Bulb, HeartIcon2 } from "../Icon/Icon";
import { FooterContainer, FooterLink, FooterText, FooterWrapper, GlitchAnimation, HorizonalMargin, PulsatedAnimation, RotatedAnimation } from "./Footer.styled";

export function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                <FooterText>Sponsored</FooterText>
                <HorizonalMargin>
                    <RotatedAnimation>
                        <Bitcoin />
                    </RotatedAnimation>
                </HorizonalMargin>
                <FooterText>by <FooterLink target="_blank" href="https://njump.me/npub1qsvv5ttv6mrlh38q8ydmw3gzwq360mdu8re2vr7rk68sqmhmsh4svhsft3">@saiy2k</FooterLink></FooterText>
            </FooterContainer>

            <FooterContainer>
                <FooterText>Made with</FooterText>
                <HorizonalMargin>
                    <PulsatedAnimation>
                        <HeartIcon2 />
                    </PulsatedAnimation>
                </HorizonalMargin>
                <FooterText>by <FooterLink target="_blank" href="https://njump.me/npub1nraaalnsaxgfm5u7m2z3hqfjnygguql6na6az9j6cnlphtsp9zws4540xf">@djhemath</FooterLink></FooterText>
            </FooterContainer>

            <FooterContainer>
                <FooterText>Inspired</FooterText>
                <HorizonalMargin>
                    <GlitchAnimation>
                        <Bulb />
                    </GlitchAnimation>
                </HorizonalMargin>
                <FooterText>&nbsp;by <FooterLink target="_blank" href="https://poet.so">poet.so</FooterLink></FooterText>
            </FooterContainer>
        </FooterWrapper>
    );
}
