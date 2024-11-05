import { forwardRef, useRef } from "react";

import dayjs from "dayjs";

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
import { defaultImgProxy, NostrNote } from "../../shared/constants";
import { proxyImg, toReadableStatsFormat } from "../../shared/utils";

export type CanvasProps = {
  noteHTML: string,
  note: NostrNote,
  showResponse: boolean,
  gradient: string,
};

export const Canvas = forwardRef<HTMLDivElement, CanvasProps>(({
  noteHTML,
  note,
  showResponse,
  gradient,
}, ref) => {
  const cardWrapperRef = useRef<HTMLDivElement>(null);
  const leftResizeKnob = useRef<HTMLDivElement>(null);
  const rightResizeKnob = useRef<HTMLDivElement>(null);
  const bottomResizeKnob = useRef<HTMLDivElement>(null);

  const { width, height } = useResizable({
    cardWrapperRef,
    leftResizeKnob,
    rightResizeKnob,
    bottomResizeKnob,
    initialWidth: 780,
    initialHeight: 325,
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
            <BackgroundGradient $gradient={gradient} />
            <div
              style={{width: "100%", position: "relative" }}
            >
              <CardBlurShadow
                width={width}
                height={height}
                $gradient={gradient}
              />
              <CardContentContainer>
                <InnerGradient />
                <AuthorInfo>
                  <AuthorImage src={proxyImg(note.author?.image || '', defaultImgProxy)} alt="Image of the Nostr note author" />
                  <AuthorNameAndNip05Container>
                    <AuthorNameContainer>
                        <AuthorName>{note.author?.name}</AuthorName>
                        <VerificationCheckContainer>
                            <VerificationIconContainer>
                                <VerificationCheck />
                            </VerificationIconContainer>
                        </VerificationCheckContainer> 
                    </AuthorNameContainer>
                    <AuthorNip05>{note.author?.nip05}</AuthorNip05>
                  </AuthorNameAndNip05Container>
                </AuthorInfo>
                <TweetContent dangerouslySetInnerHTML={{
                  __html: noteHTML,
                }} />
                <TweetTimestamp>{dayjs(note.createdAt * 1000).format('hh:mm A')} · {dayjs(note.createdAt * 1000).format('DD MMM, YYYY')}</TweetTimestamp>
                {
                  !showResponse
                  ? null
                  : (
                    <TweetStats>
                      <StatItem>
                        <span>{toReadableStatsFormat(note.replies)}</span> replies
                      </StatItem>
                      <StatItem>
                        <span>{toReadableStatsFormat(note.zaps)}</span> zaps
                      </StatItem>
                      <StatItem>
                        <span>{toReadableStatsFormat(note.likes)}</span> likes
                      </StatItem>
                      <StatItem>
                        <span>{toReadableStatsFormat(note.reposts)}</span> reposts
                      </StatItem>
                    </TweetStats>
                  )
                }
              </CardContentContainer>
            </div>
          </CardContent>
        </CardContainer>
      </CardWrapper>
    </CanvasContainer>
  );
})
