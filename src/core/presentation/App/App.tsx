import { Button, ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Counter } from "../../../modules/example/presentation/components/Counter/Counter";
import { appTheme } from "../theme/app-theme";

export const App = () => {
  return (
    <ThemeProvider theme={appTheme}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Counter />

                <Button variant="contained">Click me</Button>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};
