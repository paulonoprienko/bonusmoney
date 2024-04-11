import { useState } from "react";

import "./StartScreen.css";
import logoImage from "../../assets/icons/logo.png";

const StartScreen = ({ children }: { children: React.ReactNode }) => {
  const [showChildren, setShowChildren] = useState(false);

  setTimeout(() => {
    setShowChildren(true);
  }, 3000);

  return (
    <>
      {showChildren ? (
        children
      ) : (
        <div className="start-screen">
          <img src={logoImage} className="start-logo" />
        </div>
      )}
    </>
  );
};

export default StartScreen;
