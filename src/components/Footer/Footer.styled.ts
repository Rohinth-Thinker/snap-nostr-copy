import styled from "styled-components";

export const FooterWrapper = styled.footer`
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
`;

export const FooterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterText = styled.span`
    color: #FFF;
`;

export const FooterLink = styled.a`
    color: #CE66FF;
    font-weight: 600;
    text-decoration: underline;
`;

export const FooterDivider = styled.div`
    width: 1px;
    height: 18px;
    background-color: #616161;
    margin: 0 8px;
`;

export const HorizonalMargin = styled.div`
    margin: 0 8px;
    transform: translateY(3px);
`;

export const PulsatedAnimation = styled.div`
    animation: pulse 1s linear infinite;

    @keyframes pulse {
        0% {
            transform: scale(1);
        }

        50% {
            transform: scale(1.5);
        }

        100% {
            transform: scale(1);
        }
    }
`;

export const RotatedAnimation = styled.div`
    animation: rotate 1.5s linear infinite;

    @keyframes rotate {
        0% {
            transform: rotateY(0deg);
        }

        50% {
            transform: rotateY(180deg);
        }

        100% {
            transform: rotateY(360deg);
        }
    }
`;

export const GlitchAnimation = styled.div`
    animation: glitchAnimation 2s infinite;

    @keyframes glitchAnimation {
      0% {
        transform: translate(0);
        filter: brightness(100%);
      }
      10% {
        transform: translate(-2px, 2px);
        filter: brightness(150%) hue-rotate(10deg);
      }
      20% {
        transform: translate(3px, -3px);
        filter: brightness(90%) hue-rotate(-15deg);
      }
      30% {
        transform: translate(-1px, 1px);
        filter: brightness(120%) blur(1px);
      }
      40% {
        transform: translate(0);
        filter: brightness(100%);
      }
      50% {
        transform: translate(2px, -2px);
        filter: brightness(130%) hue-rotate(15deg);
      }
      60% {
        transform: translate(-3px, 3px);
        filter: brightness(80%) blur(1px);
      }
      70% {
        transform: translate(0);
        filter: brightness(110%);
      }
      80% {
        transform: translate(1px, -1px);
        filter: brightness(140%) hue-rotate(-10deg);
      }
      90% {
        transform: translate(-2px, 2px);
        filter: brightness(100%) blur(2px);
      }
      100% {
        transform: translate(0);
        filter: brightness(100%);
      }
    }

    .glitch::before,
    .glitch::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
      animation: glitchBefore 2s infinite;
    }

    .glitch::after {
      animation: glitchAfter 2s infinite;
    }

    /* Left to right shifting for glitch effect */
    @keyframes glitchBefore {
      0% {
        clip: rect(0, 9999px, 0, 0);
      }
      10% {
        clip: rect(0, 9999px, 0, 0);
        transform: translate(-2px, -2px);
      }
      20% {
        clip: rect(10px, 9999px, 20px, 0);
        transform: translate(3px, 2px);
      }
      30% {
        clip: rect(30px, 9999px, 60px, 0);
        transform: translate(0, 1px);
      }
      40% {
        clip: rect(10px, 9999px, 40px, 0);
        transform: translate(0, -2px);
      }
      50% {
        clip: rect(0, 9999px, 9999px, 0);
        transform: translate(2px, 1px);
      }
    }

    @keyframes glitchAfter {
      0% {
        clip: rect(0, 9999px, 0, 0);
      }
      10% {
        clip: rect(0, 9999px, 0, 0);
        transform: translate(2px, 2px);
      }
      20% {
        clip: rect(20px, 9999px, 40px, 0);
        transform: translate(-2px, -2px);
      }
      30% {
        clip: rect(40px, 9999px, 70px, 0);
        transform: translate(-1px, 0);
      }
      40% {
        clip: rect(0, 9999px, 30px, 0);
        transform: translate(1px, -1px);
      }
      50% {
        clip: rect(0, 9999px, 9999px, 0);
        transform: translate(-2px, 0);
      }
    }
`;