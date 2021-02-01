import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import Routes from "./Routes";
import CustomThemeProvider from "./context/theme/theme.provider";
import PostsProvider from "./context/posts/posts.provider";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";
const browserHistory = createBrowserHistory();
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <CustomThemeProvider>
          <PostsProvider>
            <Router history={browserHistory}>
              <Routes />
            </Router>
          </PostsProvider>
        </CustomThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
