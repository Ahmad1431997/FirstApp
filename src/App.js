// Components
import Home from "./Component/Home";
import ProductList from "./Component/ProductList";
//Data

//styling
import "./App.css";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Home />
      <ProductList />
    </ThemeProvider>
  );
}

export default App;
