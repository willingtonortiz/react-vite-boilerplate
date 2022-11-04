import { ChakraProvider } from "@chakra-ui/react";
import { render, screen, waitFor } from "@testing-library/react";
import { UsersServiceMock } from "modules/example/infrastructure/services/users-service-mock/users-service-mock";
import { buildQueryWrapper } from "shared/presentation/wrappers/query-wrapper";
import { describe, expect, it } from "vitest";
import { UsersPage } from "./UsersPage";

const usersService = new UsersServiceMock();

describe("UsersPage", () => {
  it("Should render normally", async () => {
    const { wrapper } = buildQueryWrapper();
    const { container } = render(
      <ChakraProvider>
        <UsersPage usersService={usersService} />
      </ChakraProvider>,
      {
        wrapper,
      }
    );

    await waitFor(() => expect(screen.getByText("Users")).toBeInTheDocument());

    expect(container).toBeInTheDocument();
    expect(screen.getByText("FIRST_NAME")).toBeInTheDocument();
    expect(screen.getByText("LAST_NAME")).toBeInTheDocument();
  });
});
