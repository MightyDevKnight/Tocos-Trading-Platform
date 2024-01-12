import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

import { PATH } from "./consts";
import {
  DashboardPage,
  GetOneUserPage,
} from "./page";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path={PATH.DASHBOARD} element={<DashboardPage />} />
          <Route path={PATH.GETONEUSER} element={<GetOneUserPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;