import styled from "styled-components";
import { AbsoluteFull, tablet } from "../../shared/Global.styled";

export const CanvasContainer = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;

  ${tablet(`
    transform: scale(0.5);
  `)}
`;

export const CardWrapper = styled.div`
  position: relative;
  // width: 800px;
  // height: 460px;
`;

export const ResizeKnobs = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  top: 0;
  left: 0;
`;

export enum ResizeKnobPosition { left, bottom, right };

export const ResizeKnobContainer = styled.div<{$position: ResizeKnobPosition}>`
    touch-action: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2em;
    height: 2em;

    ${
        props => props.$position === ResizeKnobPosition.left
        ? `
            top: 50%;
            left: 0;
            transform: translateX(-50%) translateY(-50%);
            cursor: ew-resize;
        `
        : ''
    }

    ${
        props => props.$position === ResizeKnobPosition.right
        ? `
            top: 50%;
            right: 0;
            transform: translateX(50%) translateY(-50%);
            cursor: ew-resize;
        `
        : ''
    }

    ${
        props => props.$position === ResizeKnobPosition.bottom
        ? `
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) translateY(50%);
            cursor: ns-resize;
        `
        : ''
    }

    position: absolute;
    pointer-events: auto;

    &:hover div {
        transform: scale(2.5);
    }
`;

export const ResizeKnob = styled.div`
    transition-property: transform;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .15s;
    box-shadow: 0 0 #0000,0 0 #0000,0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06);
    background-color: #FFF;
    border-radius: 50%;
    width: .375rem;
    height: .375rem;
`;

export const CardContainer = styled.div`
  box-shadow: 0 90px 150px -80px #0e0f1180, 0 40px 120px #000000b3;
  border-radius: 0.5rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
  pointer-events: none;
`;

export const CardContent = styled.div`
  padding: 50px;
  font-size: 16px;
  perspective: 1000px;
  transition: background-color 0.15s cubic-bezier(.4,0,.2,1), 
              border-color 0.15s cubic-bezier(.4,0,.2,1), 
              color 0.15s cubic-bezier(.4,0,.2,1), 
              fill 0.15s cubic-bezier(.4,0,.2,1), 
              stroke 0.15s cubic-bezier(.4,0,.2,1);
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
`;

export const BackgroundGradient = styled.div<{$gradient: string}>`
  ${AbsoluteFull}
  background-image: ${props => props.$gradient};
  background-repeat: no-repeat;
`;

export const CardBlurShadow = styled.div<{width: number, height: number, $gradient: string}>`
  ${AbsoluteFull}
  background-image: ${props => props.$gradient};
  background-size: ${props => `${props.width}px ${props.height}px`};
  border-radius: 1em;
  z-index: 0;

  &:before {
    position: absolute;
    content: "";
    left: 0;
    top: 3em;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: #0000002e;
    transform: translateZ(-1px);
    filter: blur(60px);
    z-index: -1;
  }

  &:after {
    position: absolute;
    content: "";
    left: 0;
    top: 3em;
    width: 100%;
    height: 100%;
    border-radius: 1em;
    background-color: #0000002e;
    transform: translateZ(-1px);
    filter: blur(60px);
    z-index: -1;
    filter: blur(20px);
    left: 3%;
    right: 3%;
    width: initial;
    top: 1em;
  }
`;

export const CardContentContainer = styled.div`
  position: relative;
  padding: 2em 2em 1.5em;
  width: 100%;
  height: 100%;
  border-radius: 1em;
  border: 1px solid;
  backdrop-filter: blur(18px) saturate(177%);
  -webkit-backdrop-filter: blur(18px) saturate(177%);
  transition: all 0.15s cubic-bezier(.4,0,.2,1);
`;

export const InnerGradient = styled.div`
  ${AbsoluteFull}
  background-image: linear-gradient(-50deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.95) 80%);
  box-shadow: inset 0 0 0 2px #ffffff26;
  border-radius: 1em;
  z-index: -1;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 0.75rem;
`;

export const AuthorImage = styled.img`
  width: 3em;
  height: 3em;
  margin-right: 0.75em;
  object-fit: cover;
  border-radius: 50%;
`;

export const AuthorNameAndNip05Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const AuthorNameContainer = styled.div`
    display: flex;
    gap: 2px;
`;

export const AuthorName = styled.div`
  font-weight: 600;
  color: #111;
  line-height: 1.2;
  display: flex;
  font-size: 18px;
  white-space: nowrap;
`;

export const VerificationCheckContainer = styled.div`
    width: 20px;
    height: 20px;
`;

export const VerificationIconContainer = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-inline: 4px;
`;

export const AuthorNip05 = styled.div`
  font-weight: 400;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.2;
  display: flex;
  font-size: 14px;
  white-space: nowrap;
`;

export const TweetContent = styled.div`
  font-size: 1.4em;
  color: #111;
  line-height: 1.5;
  margin-bottom: 1em;
  pointer-events: none;
  font-weight: 500;
  word-break: break-word;
`;

export const TweetTimestamp = styled.div`
  color: rgba(0, 0, 0, 0.5);
  padding-bottom: 0.7em;
  font-weight: 500;
`;

export const TweetStats = styled.div`
  display: flex;
`;

export const StatItem = styled.div`
  color: rgba(0, 0, 0, 0.7);
  margin-right: 1em;

  span {
    color: #111;
    font-weight: 600;
  }
`;
