import "./Popup.css";
import { usePopup } from "./PopupContext";

const Popup = () => {
  const { isPopupOpen, closePopup, content } = usePopup();

  return (
    <>
      {isPopupOpen && (
        <>
          <div className="overlay" onClick={closePopup}></div>
          <div className="popup">
            <div className="popup-content">
              {content}
              <button onClick={closePopup} className="button">
                Понятно
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Popup;
