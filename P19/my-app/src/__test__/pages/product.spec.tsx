import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import { mockRouter, resetMockRouter } from "../mocks/nextRouter";

const swrMockResult = {
  data: { data: [] },
  error: null,
  isLoading: false,
};

jest.mock("next/router", () => ({
  useRouter: () => mockRouter,
}));

// SWR mock setup
jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => swrMockResult),
}));

const ProductPage = require("../../pages/produk").default;

describe("Product Page", () => {
  beforeEach(() => {
    resetMockRouter();
  });

  it("renders product page correctly", () => {
    render(<ProductPage />);

    expect(screen.getByText("Daftar Produk")).toBeTruthy();
  });
});
