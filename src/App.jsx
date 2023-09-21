import React from "react";
import ReactDOM from "react-dom/client";
import AccordionApp from "./accordion/AccordionApp.jsx";
import BreedList from "./fetch-breed-list/BreedListApp.jsx";
import ContactFormApp from "./contact-form/ContactFormApp.jsx";
import FlightBookerApp from "./flight-booker/FlightBookerApp.jsx";
import HackerNewsApp from "./fetch-hacker-news/HackerNewsApp.jsx";
import GenerateTableApp from "./generate-table/generateTableApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AccordionApp /> */}
    {/* <ContactFormApp /> */}
    {/* <FlightBookerApp /> */}
    {/* <GenerateTableApp /> */}
    {/* <HackerNewsApp /> */}
    <BreedList />
  </React.StrictMode>
);
