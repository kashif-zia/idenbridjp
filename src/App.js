import React from "react";
import { ToastContainer } from 'react-toastify';
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import AppRoutes from "routes/appRoutes";

function App() {
  return (
    <div className="app">
      <main  className="main-body">
        <Header />
        <main className="route-wrapper">
          <AppRoutes />
        </main>
        <Footer />
      </main>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
