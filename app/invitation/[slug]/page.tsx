/* eslint-disable jsx-a11y/alt-text */
"use client";
import { Fragment, useEffect, useState } from "react";
import { MailSearch, MapPinned, MoreHorizontalIcon, Send } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function Invitation() {
  const [showProgress, setShowProgress] = useState(false);
  const [loading, setLoading]= useState(false)

  const showProgressHandler = () => {
    setLoading(true)
    setTimeout(() => {
      setShowProgress(true)
      setLoading(false)
      // Scroll after state update and a slight delay to ensure DOM has updated
      setTimeout(() => {
        const targetElement = document.querySelector('.target-load');
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Adjust this delay as necessary
    }, 1000)
  };
  return (
    <Fragment>
      <Header onClick={showProgressHandler} text={loading ? <Fragment><MoreHorizontalIcon color="black" size={18} /> <span className="text-sm">Menyiapkan Data</span></Fragment>: <Fragment><MailSearch color="black" size={18} /> <span className="text-sm">Buka Undangan</span></Fragment>} />

      {showProgress === true ? (
        <Fragment>
          <Main className={`target-load`}/>
          <Footer />
        </Fragment>
      ) : (
        ""
      )}
    </Fragment>
  );
}
