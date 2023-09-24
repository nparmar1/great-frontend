import React from "react";
import ReactDOM from "react-dom/client";
import TabsApp from "./tabs/TabsApp.jsx";
import AccordionApp from "./accordion/AccordionApp.jsx";
import SearchApp from "./search-auto-complete/SearchApp.jsx";
import ContactFormApp from "./contact-form/ContactFormApp.jsx";
import FetchBreedApp from "./fetch-breed-list/fetchBreedApp.jsx";
import FlightBookerApp from "./flight-booker/FlightBookerApp.jsx";
import GenerateTableApp from "./generate-table/generateTableApp.jsx";
import { HackerNewsApp } from "./fetch-hacker-news/HackerNewsApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AccordionApp /> */}
    {/* <ContactFormApp /> */}
    {/* <FlightBookerApp /> */}
    {/* <GenerateTableApp /> */}
    {/* <HackerNewsApp /> */}
    {/* <FetchBreedApp /> */}
    {/* <TabsApp /> */}
    <SearchApp />
  </React.StrictMode>
);
