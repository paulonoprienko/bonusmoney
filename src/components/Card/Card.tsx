import { usePopup } from "../Popup/PopupContext";
import EyeIcon from "../icons/EyeIcon";
import TrashIcon from "../icons/TrashIcon";

type Props = {
  id: string;
  title: string;
  logoSrc: string;
  sum: number;
  cash: number;
  levelName: string;
  accentColor: string;
  backgroundColor: string;
  cardBackgroundColor: string;
  highlightTextColor: string;
  mainColor: string;
  textColor: string;
};

const Card = ({
  id,
  title,
  logoSrc,
  sum,
  cash,
  levelName,
  accentColor,
  backgroundColor,
  cardBackgroundColor,
  highlightTextColor,
  mainColor,
  textColor,
}: Props) => {
  const { openPopup } = usePopup();

  const onShowButtonClick = () => {
    openPopup(
      <>
        <p>Нажата кнопка "Показать"</p>
        <p>ID компании: {id}</p>
      </>
    );
  };
  const onDeleteButtonClick = () => {
    openPopup(
      <>
        <p>Нажата кнопка "Удалить"</p>
        <p>ID компании: {id}</p>
      </>
    );
  };
  const onDetailsButtonClick = () => {
    openPopup(
      <>
        <p>Нажата кнопка "Подробнее"</p>
        <p>ID компании: {id}</p>
      </>
    );
  };

  return (
    <div className="card-item" style={{ backgroundColor: cardBackgroundColor }}>
      <div className="card-header">
        <h2 className="card-title" style={{ color: highlightTextColor }}>
          {title}
        </h2>
        <img className="card-logo" src={logoSrc} alt="company logo" />
      </div>
      <div
        className="card-body"
        style={{ borderTopColor: textColor, borderBottomColor: textColor }}
      >
        <div className="card-points">
          <span className="text-large" style={{ color: highlightTextColor }}>
            {sum}
          </span>
          &nbsp;
          <span className="text-medium" style={{ color: textColor }}>
            баллов
          </span>
        </div>
        <div className="card-body-cols-2">
          <div className="card-cashback">
            <span className="text-small" style={{ color: textColor }}>
              Кешбэк
            </span>
            <span className="text-medium" style={{ color: highlightTextColor }}>
              {cash} %
            </span>
          </div>
          <div className="card-cashback">
            <span className="text-small" style={{ color: textColor }}>
              Уровень
            </span>
            <span className="text-medium" style={{ color: highlightTextColor }}>
              {levelName}
            </span>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button
          className="card-icon"
          style={{ color: mainColor }}
          onClick={onShowButtonClick}
        >
          <EyeIcon />
          {/* <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.30147 15.5771C4.77832 14.2684 3.6904 12.7726 3.18002 12C3.6904 11.2274 4.77832 9.73158 6.30147 8.42294C7.87402 7.07185 9.81574 6 12 6C14.1843 6 16.1261 7.07185 17.6986 8.42294C19.2218 9.73158 20.3097 11.2274 20.8201 12C20.3097 12.7726 19.2218 14.2684 17.6986 15.5771C16.1261 16.9282 14.1843 18 12 18C9.81574 18 7.87402 16.9282 6.30147 15.5771ZM12 4C9.14754 4 6.75717 5.39462 4.99812 6.90595C3.23268 8.42276 2.00757 10.1376 1.46387 10.9698C1.05306 11.5985 1.05306 12.4015 1.46387 13.0302C2.00757 13.8624 3.23268 15.5772 4.99812 17.0941C6.75717 18.6054 9.14754 20 12 20C14.8525 20 17.2429 18.6054 19.002 17.0941C20.7674 15.5772 21.9925 13.8624 22.5362 13.0302C22.947 12.4015 22.947 11.5985 22.5362 10.9698C21.9925 10.1376 20.7674 8.42276 19.002 6.90595C17.2429 5.39462 14.8525 4 12 4ZM10 12C10 10.8954 10.8955 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8955 14 10 13.1046 10 12ZM12 8C9.7909 8 8.00004 9.79086 8.00004 12C8.00004 14.2091 9.7909 16 12 16C14.2092 16 16 14.2091 16 12C16 9.79086 14.2092 8 12 8Z"
              fill="#000000"
            />
          </svg> */}
        </button>
        <button
          className="card-icon"
          style={{ color: accentColor }}
          onClick={onDeleteButtonClick}
        >
          <TrashIcon />
          {/* <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg> */}
        </button>
        <button
          className="card-button"
          style={{ color: mainColor, backgroundColor }}
          onClick={onDetailsButtonClick}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default Card;
