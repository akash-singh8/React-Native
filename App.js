import * as Font from "expo-font";
import { useEffect, useState } from "react";

import Home from "./Components/Home.js";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "NotoSans-Bold": require("./assets/fonts/NotoSans-Bold.ttf"),
        "NotoSans-Medium": require("./assets/fonts/NotoSans-Medium.ttf"),
        "NotoSans-Regular": require("./assets/fonts/NotoSans-Regular.ttf"),
        "Ubuntu-Medium": require("./assets/fonts/Ubuntu-Medium.ttf"),
      });
      setFontLoaded(true);
    }

    loadFonts();
  }, []);

  return (
    fontLoaded && (
      <>
        <Home />
      </>
    )
  );
}
