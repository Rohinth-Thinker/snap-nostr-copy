import { forwardRef, useRef } from "react";
import { VerificationCheck } from "../Icon/Icon";
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
import useResizable from "../../hooks/use-resizable";

export const Canvas = forwardRef<HTMLDivElement>((_, ref) => {
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const leftResizeKnob = useRef<HTMLDivElement>(null);
  const rightResizeKnob = useRef<HTMLDivElement>(null);
  const bottomResizeKnob = useRef<HTMLDivElement>(null);

  const { width, height } = useResizable({
    cardWrapperRef,
    leftResizeKnob,
    rightResizeKnob,
    bottomResizeKnob,
    initialWidth: 800,
    initialHeight: 460,
  });

  return (
    <CanvasContainer>
      <CardWrapper
        ref={cardWrapperRef}
        style={{
          width,
        }}
      >
        <ResizeKnobs>
            <ResizeKnobContainer ref={leftResizeKnob} $position={ResizeKnobPosition.left}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer ref={rightResizeKnob} $position={ResizeKnobPosition.right}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>

            <ResizeKnobContainer ref={bottomResizeKnob} $position={ResizeKnobPosition.bottom}>
                <ResizeKnob></ResizeKnob>
            </ResizeKnobContainer>
        </ResizeKnobs>
        <CardContainer ref={ref}>
          <CardContent>
            <BackgroundGradient />
            <div
              style={{ maxWidth: "39rem", width: "100%", position: "relative" }}
            >
              <CardBlurShadow
                width={width}
                height={height}
              />
              <CardContentContainer>
                <InnerGradient />
                <AuthorInfo>
                  <AuthorImage src="https://pbs.twimg.com/profile_images/1447137435033370628/VkaQ2C0f_400x400.jpg" />
                  <AuthorNameAndNip05Container>
                    <AuthorNameContainer>
                        <AuthorName>DJ Hemath</AuthorName>
                        <VerificationCheckContainer>
                            <VerificationIconContainer>
                                <VerificationCheck />
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
})
