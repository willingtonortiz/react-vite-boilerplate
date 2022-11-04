import { Button } from "@chakra-ui/react";
import { UsersServiceImpl } from "modules/example/infrastructure/services/users-service-impl/users-service-impl";
import { UsersPage } from "modules/example/presentation/pages/UsersPage/UsersPage";
import { Route, Routes } from "react-router-dom";
import { Counter } from "../../../modules/example/presentation/components/Counter/Counter";

const usersService = new UsersServiceImpl();

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

      <Route path="users" element={<UsersPage usersService={usersService} />} />
    </Routes>
  );
};
