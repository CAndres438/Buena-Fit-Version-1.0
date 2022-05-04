import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import styled from "styled-components";

/* TYPOGRAPHYS */
export const LinkRedirect = styled(Link)`
  color: green;
  font-size: 0.8rem;
  text-decoration: none;
`;

export const MarkPrice = styled.p`
  color: red;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const MarkPrice1 = styled.p`
  color: green;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const TypographyStyled = styled(Typography)`
  color: #111;
  font-size: 0.8rem;
`;

export const GrayTitleStyled = styled(Typography)`
  color: darkgray;
  font-size: 2.8rem;
  font-weight: 750;
`;

export const GrayTitleStyled1 = styled(Typography)`
    color: white;
    font-size: 2.8rem;
    font-weight: 750;
    font-style: italic;
`

export const GrayLightTypographyStyled = styled(Typography)`
  padding-top: 15px;
  color: white;
  font-size: 1.1rem;
  text-align: justify;
`;

export const GrayLightTypographyStyled1 = styled(Typography)`
  padding-top: 15px;
  color: white;
  font-size: 1.1rem;
  text-align: center;
`;

export const DarkTypographyStyled = styled(Typography)`
  color: white;
  font-size: 1.1rem;
`;

// Buttons

export const ButtonPrincipal = styled.button`
    display: flex;
    align-items: center;
    font-weight: 700;
    gap: 10px;
    color: black;
    background-color: #FFCE00;
    padding: .6rem 1.2rem;
    border-radius: 50px;
    border: none;
    outline: none;
`;

export const SignInButton = styled.button`
  background: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: "40px";
  margin-top: 10px;
`;

export const SignUpButton = styled.button`
  background: "black";
  border-radius: 2px;
  padding: 0.4rem 1.2rem;
  margin-top: 10px;
  cursor: pointer;
`;

export const CustomAlert = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const ButtonStyled = styled.button`
  width: 100%;
  outline: none;
  padding: 0.34rem 0.6rem;
  background-color: black;
  border-radius: 5px;
  color: #fff;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const ButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
  gap: 10px;
  color: white;
  font-weight: 700;
  cursor: pointer;
  background-color: black;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  border: 2px solid;
  border-color: gray;
  outline: none;
`;

export const ButtonGoogle = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #fff;
  background: #13212c;
  border-radius: 5px;
  padding: 0.34rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonFacebook = styled.button`
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #fff;
  background: #022c4b;
  border-radius: 5px;
  padding: 0.34rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  margin-top: 10px;
`;
export const Frase = styled.h3`
  color: "white";
`;

export const ButtonGoogle1 = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #fff;
  background: #13212c;
  border-radius: 5px;
  padding: 0.34rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  margin-top: 10px;
`;

export const ButtonFacebook1 = styled.button`
  display: flex;
  height: 25px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 0.4rem;
  cursor: pointer;
  color: #fff;
  background: #022c4b;
  border-radius: 5px;
  padding: 0.34rem 0.6rem;
  border: none;
  outline: none;
  width: 100%;
  margin-top: 10px;
`;
