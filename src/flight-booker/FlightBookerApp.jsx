import "./styles.css";
import { useState } from "react";

const DAY_IN_SECONDS = 24 * 60 * 1000;
const TODAY = formatDate(new Date());

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return [year, month, day].join("-");
}

export default function FlightBookerApp() {
  const currentDate = new Date(Date.now() + DAY_IN_SECONDS);
  const getFormatedCurrentDate = formatDate(currentDate);

  const [flightOption, setFlightOption] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(getFormatedCurrentDate);
  const [returnDate, setReturnDate] = useState(departureDate);

  return (
    <div>
      <form
        className="flight-booker"
        onSubmit={(e) => {
          e.preventDefault();
          if (flightOption === "one-way") {
            alert(`You have booked a one-way flight on ${departureDate}`);
            return;
          }

          alert(
            `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`
          );
        }}
      >
        <select
          value={flightOption}
          onChange={(e) => {
            setFlightOption(e.target.value);
          }}
        >
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <input
          aria-label="Departure date"
          type="date"
          value={departureDate}
          onChange={(e) => {
            setDepartureDate(e.target.value);
          }}
          min={TODAY}
        />
        {flightOption === "return" && (
          <input
            aria-label="Return date"
            type="date"
            value={returnDate}
            min={departureDate}
            onChange={(e) => {
              setReturnDate(e.target.value);
            }}
          />
        )}
        <button>Book</button>
      </form>
    </div>
  );
}
