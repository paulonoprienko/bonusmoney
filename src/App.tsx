import { useEffect, useState } from "react";
import "./App.css";
import { useGetAllCardsQuery } from "./store";
import Card from "./components/Card/Card";
import CircleLoader from "./components/CircleLoader";
import Popup from "./components/Popup/Popup";
import { usePopup } from "./components/Popup/PopupContext";
import { Params } from "./store/types";
import ExclamationIcon from "./components/icons/ExclamationIcon";

function App() {
  const { openPopup } = usePopup();
  const [params, setParams] = useState<Params>({ limit: 10, offset: 0 });

  const {
    data: { companies = [] } = { data: { companies: [] } },
    isFetching,
    error,
    isError,
    refetch,
  } = useGetAllCardsQuery(params, {
    refetchOnReconnect: true,
  });

  useEffect(() => {
    let text: string = "";
    if (!error || !isError) return;
    if ("status" in error && "data" in error) {
      if (error.status === 500) {
        text = "Всё упало";
      } else if (error.status === 400) {
        text = (error.data as { type: string; message: string }).message;
      } else if (error.status === 401) {
        text = "Ошибка авторизации";
      }
    }
    openPopup(
      <>
        <div className="exclamation-icon">
          <ExclamationIcon />
        </div>
        <p>{text}</p>
      </>
    );
  }, [isError]);

  useEffect(() => {
    const scrollHandler = () => {
      const scrolledToBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;

      if (scrolledToBottom && !isFetching) {
        setParams(({ limit }) => ({
          limit,
          offset: companies.length + limit,
        }));
      }
    };
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, [companies, isFetching]);

  return (
    <>
      <header className="header">Управление картами</header>
      <section className="main">
        <Popup />
        {companies.map(
          ({ company, customerMarkParameters, mobileAppDashboard }) => {
            return (
              <Card
                key={company.companyId}
                id={company.companyId}
                title={mobileAppDashboard.companyName}
                logoSrc={mobileAppDashboard.logo}
                sum={customerMarkParameters.loyaltyLevel.requiredSum}
                cash={customerMarkParameters.loyaltyLevel.number}
                levelName={customerMarkParameters.loyaltyLevel.name}
                accentColor={mobileAppDashboard.accentColor}
                backgroundColor={mobileAppDashboard.backgroundColor}
                cardBackgroundColor={mobileAppDashboard.cardBackgroundColor}
                highlightTextColor={mobileAppDashboard.highlightTextColor}
                mainColor={mobileAppDashboard.mainColor}
                textColor={mobileAppDashboard.textColor}
              />
            );
          }
        )}
        {isFetching && (
          <div className="loader">
            <CircleLoader color="black" />
            <div>Подгрузка компаний</div>
          </div>
        )}
        {isError && (
          <button
            onClick={() => {
              refetch();
            }}
            className="button"
          >
            Попробовать снова
          </button>
        )}
      </section>
    </>
  );
}

export default App;
