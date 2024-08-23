import { render } from "@testing-library/react";
import { ReactElement } from "react";
import { ideasContext } from "../../context/ideasContext";

import { Context } from "../../types";

interface ProviderProps {
  children: React.ReactNode;
  customContext: Context;
}

const Provider = ({ children, customContext }: ProviderProps) => {
  return (
    <ideasContext.Provider value={customContext}>
      {children}
    </ideasContext.Provider>
  );
};

const customRender = (ui: ReactElement, customContext: Context) =>
  render(ui, {
    wrapper: ({ children }) => (
      <Provider customContext={customContext}>{children}</Provider>
    ),
  });

export * from "@testing-library/react";
export { customRender as render };
