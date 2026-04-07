import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";

const pushMock = jest.fn();
const swrMockResult = {
  data: { data: [] },
  error: null,
  isLoading: false,
};

// mock router
jest.mock("next/router", () => ({
  useRouter: () => ({
    push: pushMock,
    prefetch: jest.fn(),
  }),
}));

// mock swr
jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => swrMockResult),
}));

const ProductPage = require("../../pages/produk").default;

describe("Product Page", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("renders product page correctly", () => {
    render(<ProductPage />);

    expect(screen.getByText("Daftar Produk")).toBeTruthy();
  });
});