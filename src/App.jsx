import React from "react";
import ReactDOM from "react-dom/client";
import AccordionApp from "./accordion/AccordionApp.jsx";
import ContactFormApp from "./contact-form/ContactFormApp.jsx";
import FlightBookerApp from "./flight-booker/FlightBookerApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AccordionApp /> */}
    {/* <ContactFormApp /> */}
    <FlightBookerApp />
  </React.StrictMode>
);
