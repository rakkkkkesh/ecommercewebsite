// PopupContext.js
import React, { createContext, useState, useContext } from 'react';

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
  const [popupState, setPopupState] = useState({
    show: false,
    itemId: null,
  });

  const showPopup = (itemId) => {
    setPopupState({ show: true, itemId });
    setTimeout(() => {
      setPopupState({ show: false, itemId: null });
    }, 3000);
  };

  return (
    <PopupContext.Provider value={{ popupState, showPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

export const usePopup = () => useContext(PopupContext);