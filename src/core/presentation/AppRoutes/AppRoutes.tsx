import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Counter } from "../../../modules/example/presentation/components/Counter/Counter";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <Counter />

            <Button>Click me</Button>
          </>
        }
      />
    </Routes>
  );
};
