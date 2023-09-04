import "./styles.css";
import { useState } from "react";

export default function FlightBookerApp() {
  const [flightOption, setFlightOption] = useState("one-way");

  return (
    <div>
      <form
        className="flight-booker"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <select
          value={flightOption}
          onChange={(e) => {
            setFlightOption(e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="one-way">One-way flight</option>
          <option value="return-flight">Return flight</option>
        </select>
        {/* <input
          aria-label="Departure date"
          type="date"
          value={""}
          onChange={(e) => {}}
        />
        {false && (
          <input
            aria-label="Return date"
            type="date"
            value={""}
            onChange={(e) => {}}
          />
        )} */}
        <button>Book</button>
      </form>
    </div>
  );
}
