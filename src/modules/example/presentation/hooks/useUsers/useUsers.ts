import { useQuery } from "@tanstack/react-query";
import { firstValueFrom } from "rxjs";
import { UseUsersProps } from "./useUsers.types";

const DEFAULT_USERS: { name: string }[] = [];

export const useUsers = ({ usersService }: UseUsersProps) => {
  const { isLoading, data: users = DEFAULT_USERS } = useQuery(
    ["getAllUsers"],
    () => firstValueFrom(usersService.getAllUsers())
  );

  return { isLoading, users };
};
