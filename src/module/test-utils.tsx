import React, { ReactElement, ReactChildren, ReactNode } from "react";
import { RootState } from "@/store";
import { render as rtlRender, RenderResult } from "@testing-library/react";
import { createStore, Store } from "redux";
import { Provider } from "react-redux";
// Import your own reducer
import { reducer } from "./reducer";

type Option = {
  initialState?: RootState;
  store?: Store;
};

type WrapperType = {
  children?: ReactChildren | ReactNode | undefined;
};

function render(
  ui: ReactElement,
  {
    initialState,
    store = createStore(reducer, initialState),
    ...renderOptions
  }: Option = {}
): RenderResult {
  function Wrapper({ children }: WrapperType): ReactElement {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
