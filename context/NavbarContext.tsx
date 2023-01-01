import { useContext, createContext, FC, useState } from "react";

export interface ContextValue {
  open: boolean;
  toggle: () => void;
}

const NavbarContext = createContext<ContextValue>({
  open: false,
  toggle() {},
});

export const useModal = () => {
  return useContext(NavbarContext);
};

type Props = {
  children: React.ReactNode;
};

export const ModalContextProvider: FC<Props> = ({ children }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };
  return (
    <NavbarContext.Provider
      value={{
        open,
        toggle,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
