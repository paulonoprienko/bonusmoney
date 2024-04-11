import { createContext, useContext, useState } from "react";

const PopupContext = createContext<{
  isPopupOpen: boolean;
  openPopup: (content: React.ReactNode) => void;
  closePopup: () => void;
  content: React.ReactNode | null;
}>({
  isPopupOpen: false,
  openPopup: () => {},
  closePopup: () => {},
  content: null,
});

export const usePopup = () => {
  const context = useContext(PopupContext);
  if (!context) {
    throw new Error("usePopup must be used within a PopupProvider");
  }
  return context;
};

export const PopupProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const openPopup = (content: React.ReactNode) => {
    setContent(content);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setContent(null);
    setIsPopupOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{ isPopupOpen, openPopup, closePopup, content }}
    >
      {children}
    </PopupContext.Provider>
  );
};
