import { renderHook, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { UsersServiceMock } from "modules/example/infrastructure/services/users-service-mock/users-service-mock";
import { buildQueryWrapper } from "shared/presentation/wrappers/query-wrapper";
import { useUsers } from "./useUsers";

// Using mock data
const usersService = new UsersServiceMock();

describe("useUsers", () => {
  it("Should render normally", async () => {
    const { wrapper } = buildQueryWrapper();
    const { result } = renderHook(useUsers, {
      wrapper,
      initialProps: { usersService },
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.users.length).toBe(2);
  });
});
