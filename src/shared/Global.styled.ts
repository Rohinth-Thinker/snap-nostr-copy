import styled, { css } from "styled-components";

export const Divider = styled.hr`
    display: block;
    width: 100%;
    color: #3b3b3b;
    border: 0.5px solid;
`;

export const AbsoluteFull = css`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Pointer = styled.span`
  cursor: pointer;
`;

export const HelperText = styled.small`
  display: inline-block;
  width: 100%;
  margin-top: 10px;
  text-align: center;
  min-height: 17px;
  color: #ffffff80;
  transform: translateX(-10%);
  font-weight: bold;
`;

export const ErrorText = styled(HelperText)`
  color: #f87171;
`;
