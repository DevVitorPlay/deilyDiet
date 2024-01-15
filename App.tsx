import { ThemeProvider } from "styled-components";
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts} from "@expo-google-fonts/nunito-sans"

import Home from "@screens/home";
import theme from "./src/theme";
import { Loading } from "@components/Loading";
import { StatusBar } from "react-native";




export default function App() {
const [fonstLoaded] = useFonts({NunitoSans_400Regular, NunitoSans_700Bold})

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='dark-content'
        backgroundColor='transparent'
        translucent
        />
         {fonstLoaded ?  <Home/> : <Loading/>}
    </ThemeProvider>
  );
}

