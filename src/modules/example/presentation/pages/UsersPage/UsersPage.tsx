import { Text } from "@chakra-ui/react";
import { useUsers } from "../../hooks/useUsers/useUsers";
import { UsersPageProps } from "./UsersPage.types";

export const UsersPage = ({ usersService }: UsersPageProps) => {
  const { isLoading, users } = useUsers({ usersService });

  if (isLoading) {
    return <Text>Is loading</Text>;
  }

  return (
    <ul>
      <h1>Users</h1>

      {users.map(({ name }) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
