import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{
  hasError: boolean
  isLast: boolean | undefined
}>`
  position: relative;
  width: 100%;
  margin-bottom: ${props => (props.hasError ? "0" : "20px")};
  ${props =>
    props.isLast &&
    css`
      margin-bottom: 0;
    `}

  & div {
    position: absolute;
    display: inline-flex;
    gap: 4px;
    left: 16px;
    top: ${props => (props.hasError ? "0" : "50%")};
    transform: translateY(-50%);
    padding-inline: ${props => (props.hasError ? "4px" : "0")};
    background-color: ${props => (props.hasError ? "#121212" : "transparent")};
    color: ${props => (props.hasError ? "#FD2D23" : "#a2a0a2")};
    font-size: ${props => (props.hasError ? '14px' : '16px')};
    font-weight: 300;
    line-height: 130%;
    cursor: text;
    -webkit-transition: top 0.3s ease-out, left 0.3s ease-out,
      font-size 0.3s ease-out, color 0.3s ease-out,
      background-color 0.3s ease-out;
    transition: top 0.3s ease-out, left 0.3s ease-out, font-size 0.3s ease-out,
      color 0.3s ease-out, background-color 0.3s ease-out;
  }

  & div > svg {
    display: ${props => (props.hasError ? "block" : "none")};
    stroke: ${props => (props.hasError ? "#fd2d23" : "none")};
  }

  & input:focus-visible {
    border: ${props =>
    props.hasError ? "1px solid #FD2D23" : "1px solid #d1d7e0"};
  }

  & > input:focus + div,
  & > input:not(:placeholder-shown):not(:focus) + div {
    top: 0;
    left: 16px;
    font-size: 12px;
    padding-inline: 4px;
    background-color: #121212;
    color: ${props => (props.hasError ? "#FD2D23" : "#d1d7e0")};
  }

  & input {
    border: ${props =>
    props.hasError ? "1px solid #FD2D23" : "1px solid #393939"};
  }
`;
