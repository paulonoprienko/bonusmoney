import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { PopupProvider } from "./components/Popup/PopupContext.tsx";
import StartScreen from "./components/StartScreen/StartScreen.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <StartScreen>
      <PopupProvider>
        <App />
      </PopupProvider>
    </StartScreen>
  </Provider>
);
