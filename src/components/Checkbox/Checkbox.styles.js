import styled, { css, keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  50% {
    stroke-dasharray: 3;
    stroke-dashoffset: 12;
  }
  100% {
    stroke-dasharray: 3;
    stroke-dashoffset: 9;
  }
`;

const lockAnimation = keyframes`
  50% {
    transform: translateY(1px);
  }
`;

export const Input = styled.input`
  display: none;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: calc(50% - 32px);
  left: calc(50% - 32px);
  display: inline-block;
  background: ;
  /* background: #ff5b5b; */
  background: #20cca5;
  width: 64px;
  height: 64px;
  box-sizing: border-box;
  padding: 12px 0 0 18px;
  border-radius: 50%;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  ${({ checked }) =>
    checked &&
    css`
      background: #ff5b5b;
      /* background: #20cca5; */
    `};

  svg {
    fill: none;
    transform: translate3d(0, 0, 0);
  }

  svg .bling {
    stroke: #fff;
    stroke-width: 2.5;
    stroke-linecap: round;
    stroke-dasharray: 3;
    stroke-dashoffset: 15;
    transition: all 0.3s ease;
  }

  svg .lock {
    stroke: #fff;
    stroke-width: 4;
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 36;
    transition: all 0.4s ease;
  }

  svg .lockb {
    fill: #fff;
    fill-rule: evenodd;
    clip-rule: evenodd;
    transform: rotate(8deg);
    transform-origin: 14px 20px;
    transition: all 0.2s ease;
  }

  #inpLock:checked + & svg {
    opacity: 1;
  }

  #inpLock:checked + & svg .bling {
    animation: ${blinkAnimation} 0.3s linear forwards;
    animation-delay: 0.2s;
  }

  #inpLock:checked + & svg .lock {
    stroke-dasharray: 48;
    animation: ${lockAnimation} 0.3s linear forwards;
  }

  #inpLock:checked + & svg .lockb {
    transform: rotate(0);
    transform-origin: 14px 22px;
  }
`;

export const ButtonLockContainer = styled.div`
  display: inline-block;
`;
