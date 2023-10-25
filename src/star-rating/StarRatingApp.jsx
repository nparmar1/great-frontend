import { useState } from "react";
import StarRating from "./StarRating";
import "./styles.css";

export default function StarRatingApp() {
  const [rating, setRating] = useState(3);

  return <StarRating max={5} rating={rating} setRating={setRating} />;
}
