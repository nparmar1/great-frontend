import React from "react";
import ReactDOM from "react-dom/client";
import AccordionApp from "./accordion/AccordionApp.jsx";
import ContactFormApp from "./contact-form/ContactFormApp.jsx";
import FlightBookerApp from "./flight-booker/FlightBookerApp.jsx";
import GenerateTableApp from "./generate-table/generateTableApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AccordionApp /> */}
    {/* <ContactFormApp /> */}
    {/* <FlightBookerApp /> */}
    <GenerateTableApp />
  </React.StrictMode>
);
