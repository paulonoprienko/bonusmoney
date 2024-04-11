declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  type RootState = import("../src/store").RootState;
  // eslint-disable-next-line @typescript-eslint/consistent-type-imports
  type AppDispatch = import("../src/store").AppDispatch;
}

export {};
