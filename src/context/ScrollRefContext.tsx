import { createContext, useContext, useRef } from "react";

type ScrollRefContextType = {
  scrollIntoView: (ref: React.RefObject<HTMLDivElement | null>) => void;
  featuredRef: React.RefObject<HTMLDivElement | null>;
  aboutUsRef: React.RefObject<HTMLDivElement | null>;
};

const ScrollRefContext = createContext<ScrollRefContextType | undefined>(
  undefined
);

export const ScrollRefProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const featuredRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);

  const scrollIntoView = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollRefContext.Provider
      value={{ scrollIntoView, featuredRef, aboutUsRef }}
    >
      {children}
    </ScrollRefContext.Provider>
  );
};

export const useScrollRef = () => {
  const context = useContext(ScrollRefContext);

  if (!context)
    throw new Error('useScrollRef must be used within a ScrollRefProvider"');

  return context;
};
