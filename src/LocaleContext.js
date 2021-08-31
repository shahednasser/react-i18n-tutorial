import React from "react";

const defaultValue = {
  locale: 'en',
  setLocale: () => {} 
}

export default React.createContext(defaultValue);