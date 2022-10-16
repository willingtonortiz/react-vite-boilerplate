import { Button } from "@chakra-ui/button";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "../../../modules/example/presentation/components/Counter/Counter";
import { appTheme } from "../theme/app-theme";

export const App = () => {
  return (
    <ChakraProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Counter />

                <Button>Click me</Button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
};
