import {
  AuthorImage,
  AuthorInfo,
  AuthorName,
  AuthorNameAndNip05Container,
  AuthorNameContainer,
  AuthorNip05,
  BackgroundGradient,
  CanvasContainer,
  CardBlurShadow,
  CardContainer,
  CardContent,
  CardContentContainer,
  CardWrapper,
  InnerGradient,
  ResizeKnob,
  ResizeKnobContainer,
  ResizeKnobPosition,
  ResizeKnobs,
  StatItem,
  TweetContent,
  TweetStats,
  TweetTimestamp,
  VerificationCheckContainer,
  VerificationIconContainer,
} from "./Canvas.styled";

export function Canvas() {
  return (
    <CanvasContainer>
      <CardWrapper>
        <ResizeKnobs>
            <ResizeKnobContainer $position={ResizeKnobPosition.left}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer $position={ResizeKnobPosition.right}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer $position={ResizeKnobPosition.bottom}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>
        </ResizeKnobs>
        <CardContainer>
          <CardContent>
            <BackgroundGradient />
            <div
              style={{ maxWidth: "39rem", width: "100%", position: "relative" }}
            >
              <CardBlurShadow />
              <CardContentContainer>
                <InnerGradient />
                <AuthorInfo>
                  <AuthorImage src="https://primal.b-cdn.net/media-cache?s=o&a=0&u=https%3A%2F%2Fimage.nostr.build%2F69b1c2c1510528e4e24b938679d66d84e34346808f5c52daf4ee794d24f82fd2.jpg" />
                  <AuthorNameAndNip05Container>
                    <AuthorNameContainer>
                        <AuthorName>DJ Hemath</AuthorName>
                        <VerificationCheckContainer>
                            <VerificationIconContainer>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 13 12"
                                    fill="#ca077c"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M8.50941 0L9.53314 1.94972L11.759 2.29179L11.4059 4.4533L13 6.00021L11.4061 7.54734L11.7585 9.7082L9.53201 10.0503L8.50838 12L6.4994 11.0066L4.49194 11.9996L3.46887 10.0502L1.24134 9.70816L1.59414 7.5473L0 6.00038L1.59392 4.45325L1.24147 2.29239L3.46783 1.94984L4.49111 0.000754215L6.49943 0.993864L8.50941 0ZM4.11667 5.72772L3.25 6.60044L5.41667 8.78226L9.75 4.41863L8.88333 3.5459L5.41667 7.03681L4.11667 5.72772Z"
                                    fill="#ca077c"
                                    />
                                </svg>
                            </VerificationIconContainer>
                        </VerificationCheckContainer> 
                    </AuthorNameContainer>
                    <AuthorNip05>djhemath@iris.io</AuthorNip05>
                  </AuthorNameAndNip05Container>
                </AuthorInfo>
                <TweetContent>
                  Every informed person needs to know about Bitcoin because it
                  might be one of the world's most important developments.
                </TweetContent>
                <TweetTimestamp>4:32 PM · 16 Sep, 2024</TweetTimestamp>
                <TweetStats>
                  <StatItem>
                    <span>4.1K</span> replies
                  </StatItem>
                  <StatItem>
                    <span>284</span> zaps
                  </StatItem>
                  <StatItem>
                    <span>7.2K</span> likes
                  </StatItem>
                  <StatItem>
                    <span>7.2K</span> reposts
                  </StatItem>
                </TweetStats>
              </CardContentContainer>
            </div>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </CanvasContainer>
  );
}
