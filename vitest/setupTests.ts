import matchers from "@testing-library/jest-dom/matchers";
import "reflect-metadata";
import { afterAll, afterEach, beforeAll, expect } from "vitest";
import { server } from "../src/shared/test/msw-server";

expect.extend(matchers);

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
