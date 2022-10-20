import { ChakraProvider } from "@chakra-ui/react";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { queryClient } from "../../infrastructure/react-query/query-client";
import { AppRoutes } from "../AppRoutes/AppRoutes";
import { appTheme } from "../theme/app-theme";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={appTheme}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ChakraProvider>
    </QueryClientProvider>
  );
};
