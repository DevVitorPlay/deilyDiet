import { ThemeProvider } from "styled-components";
import Home from "@screens/home";
import theme from "@theme/index";



export default function App() {
  return (
    <ThemeProvider theme={theme}>
          <Home/>
    </ThemeProvider>
  );
}

