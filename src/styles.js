import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  mainColor: "#f5e6ca",
  backgroundColor: "#eee",
  color: "#000000",
};

export const GlobalStyle = createGlobalStyle`
  body {
    color: #242424;
    background-color:${(props) => props.theme.backgroundColor} ;
    font-family:Georgia, 'Times New Roman', Times, serif ;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 15pt;
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  margin: 8px;
  border-radius: 20%;
`;

export const HomeImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;
