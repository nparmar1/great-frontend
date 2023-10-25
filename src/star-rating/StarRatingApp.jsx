import { useState } from "react";

import "./styles.css";
import StarRating from "./StarRating";

export default function StarRatingApp() {
  const [rating, setRating] = useState(3);

  return <StarRating max={5} rating={rating} setRating={setRating} />;
}
