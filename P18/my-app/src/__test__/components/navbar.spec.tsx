import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest, beforeEach } from "@jest/globals";
import type { ReactNode } from "react";
import type { ComponentProps } from "react";

const signInMock = jest.fn();
const signOutMock = jest.fn();
const useSessionMock = jest.fn();

jest.mock("next/image", () => ({
  __esModule: true,
  default: function MockImage(props: ComponentProps<"img">) {
    return <img alt={props.alt ?? ""} {...props} />;
  },
}));

jest.mock("next/dist/client/script", () => ({
  __esModule: true,
  default: function MockScript({ children }: { children?: ReactNode }) {
    return <>{children}</>;
  },
}));

jest.mock("next-auth/react", () => ({
  useSession: () => useSessionMock(),
  signIn: () => signInMock(),
  signOut: () => signOutMock(),
}));

const Navbar = require("../../components/layouts/navbar").default;

describe("Navbar Component", () => {
  beforeEach(() => {
    signInMock.mockClear();
    signOutMock.mockClear();
    useSessionMock.mockReset();
  });

  it("renders sign in button when user is not logged in", () => {
    useSessionMock.mockReturnValue({ data: null });

    render(<Navbar />);

    expect(screen.getByText("Sign In")).toBeTruthy();
  });

  it("renders user info and sign out button when user is logged in", () => {
    useSessionMock.mockReturnValue({
      data: {
        user: {
          fullname: "Budi",
          image: "/avatar.png",
        },
      },
    });

    render(<Navbar />);

    expect(screen.getByText("Welcome, Budi")).toBeTruthy();
    expect(screen.getByText("Sign Out")).toBeTruthy();
    expect(screen.getByAltText("Budi")).toBeTruthy();
  });
});