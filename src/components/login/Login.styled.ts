import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Main = styled.main`
  display: flex;
  gap: 64px;
  padding-left: 64px;
  padding-right: 32px;
  padding-block: 32px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.div`
  width: 428px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 16px;
  color: #D1D7E0;
  font-size: 28px;
  line-height: 130%;
`;

export const SubTitle = styled.p`
  text-align: center;
  margin-bottom: 36px;
  color: #A2A0A2;
  font-size: 16px;
  font-weight: 100;
  line-height: 145%;
`;

export const Button = styled.button`
  display: flex;
  width: 103%;
  padding: 12px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background-color: #D83253;
  color: #D1D7E0;
  outline: none;
  border: none;
  font-size: 18px;
  font-weight: 500px;
  line-height: 135%;
  cursor: pointer;
  transition: background-color 0.3s ease-out, border 0.3s ease-out;
  &:hover {
    background-color: #c41e3f;
  }
  &:focus-visible {
    border: 1px solid #D1D7E0;
    background-color: #D83253;
  }
  &:active {
    background-color: #b00a2b;
  }
  &:disabled {
    background-color: #7e2b3b;
    color: #808080;
  }
`;

export const Divider = styled.div`
  position: relative;
  width: 100%;
  margin-block: 28px;
  color: #434343;
  text-align: center;
  font-size: 12px;
  font-weight: 100;
  line-height: 130%;

  & > span {
    position: relative;
    margin: 0;
    padding: 0px 16px;
    background-color: #121212;
    z-index: 1;
  }

  &:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #434343;
  }
`;

export const FormLogin = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  height: 56px;
  padding-block: 5px;
  padding-left: 12px;
  color: #A2A0A2;
  font-size: 18px;
  font-weight: 100;
  line-height: 130%;
  border-radius: 20px;
  background-color: inherit;
  outline: none;
  transition: border 0.3s ease-out;
`;

export const ErrorMessageContainer = styled.div<{ $hasError?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${props => (props.$hasError ? 'space-between' : 'flex-end')};
  margin-top: 4px;
  margin-bottom: 28px;
  padding-inline: 16px;
`;

export const ErrorMessageInput = styled.p`
  margin-top: 4px;
  margin-bottom: 20px;
  padding-left: 16px;
  font-size: 14px;
  font-weight: 100;
  line-height: 130%;
  color: #fd2d23;
`;

export const ErrorMessage = styled.p`
  color: #fd2d23;
  font-size: 14px;
  font-weight: 100;
  line-height: 130%;
`;

export const NavigationLink = styled(Link)`
  color: #D1D7E0;
  font-size: 12px;
  font-weight: 100;
  line-height: 130%;
  transition: color 0.3s ease-out;
  &:hover {
    color: #D83253;
  }
  &:active {
    color: #c41e3f;
  }
`;

export const RegisterLink = styled(Link)`
  color: #D1D7E0;
  font-size: 14px;
  font-weight: 100;
  line-height: 115%;
  text-decoration: none;
  transition: color 0.3s ease-out;
  &:hover {
    color: #D83253;
  }
  &:active {
    color: #c41e3f;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  margin-top: 16px;
  & > p {
    color: #A2A0A2;
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    line-height: 130%;
  }
`;