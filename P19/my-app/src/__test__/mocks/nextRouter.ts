import { jest } from "@jest/globals";

export const pushMock = jest.fn();
export const prefetchMock = jest.fn();
export const replaceMock = jest.fn();
export const reloadMock = jest.fn();
export const backMock = jest.fn();
export const forwardMock = jest.fn();

export const mockRouter = {
  push: pushMock,
  replace: replaceMock,
  reload: reloadMock,
  back: backMock,
  forward: forwardMock,
  prefetch: prefetchMock,
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  basePath: "",
  locale: "en",
  locales: ["en"],
  isLocaleDomain: false,
  isReady: true,
  isPreview: false,
  isFallback: false,
};

export const resetMockRouter = () => {
  pushMock.mockClear();
  prefetchMock.mockClear();
  replaceMock.mockClear();
  reloadMock.mockClear();
  backMock.mockClear();
  forwardMock.mockClear();

  mockRouter.pathname = "/";
  mockRouter.route = "/";
  mockRouter.query = {};
  mockRouter.asPath = "/";
};
