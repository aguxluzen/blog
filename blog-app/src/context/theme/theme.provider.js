import { useState } from "react";
import theme from "../../theme";
import ThemeContext from "./theme.context";

// Esta bueno ordenarlos segun la coherencia de los estados, E.g: 
// {
//   uiState: {
//     theme,
//     titleShow
//   },
//   postsState: {
//     posts :[],
//     isLoading: false,
//     postError: null,
//   }
// }

function CustomThemeProvider(props) {
  const [theme, setTheme] = useState("LKAJSDLKAJSDLASLKDAJSLKDJA");

  const { Provider } = ThemeContext;

  return (
    <>
      <Provider
        value={{
          theme,
        }}
      >
        {props.children}
      </Provider>
    </>
  );
}

/*
<ThemeProvider>
  </Posts>
</ThemeProvider>
*/

export default CustomThemeProvider;
