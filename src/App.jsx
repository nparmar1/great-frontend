// flexbox, grid, inline, and block layouts

import React from "react";
import ReactDOM from "react-dom/client";
import FetchBreedListApp from "./fetch-breed-list/FetchBreedListApp.jsx";
import TabsApp from "./tabs/TabsApp.jsx";
import AccordionApp from "./accordion/AccordionApp.jsx";
import TicTacToeApp from "./tic-tac-toe/TicTacToeApp.jsx";
import GridLightsApp from "./grid-lights/GridLightsApp.jsx";
import DataTableApp from "./data-table/DataTableApp.jsx";
import SearchApp from "./search-auto-complete/SearchApp.jsx";
import ContactFormApp from "./contact-form/ContactFormApp.jsx";
import FlightBookerApp from "./flight-booker/FlightBookerApp.jsx";
import HackerNewsApp from "./fetch-hacker-news/HackerNewsApp.jsx";
import GenerateTableApp from "./generate-table/generateTableApp.jsx";
import SearchAppTwo from "./search-auto-complete-2/SearchAppTwo.jsx";
import PhotoCarouselApp from "./photo-carousel/PhotoCarouselApp.jsx";
import StarRatingApp from "./star-rating/StarRatingApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AccordionApp /> */}
    {/* <ContactFormApp /> */}
    {/* <FlightBookerApp /> */}
    {/* <GenerateTableApp /> */}
    {/* <HackerNewsApp /> */}
    {/* <TicTacToeApp /> */}
    <FetchBreedListApp />
    {/* <TabsApp /> */}
    {/* <SearchApp /> */}
    {/* <GridLightsApp /> */}
    {/* <SearchAppTwo /> */}
    {/* <PhotoCarouselApp /> */}
    {/* <DataTableApp /> */}
    {/* <StarRatingApp /> */}
  </React.StrictMode>
);
