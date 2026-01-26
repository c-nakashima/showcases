import { useState } from "react";
import "./App.css";
// Data
import { ratingOptions } from "./data/ratingOptions";
// Components
import { RatingCard } from "./components";

function App() {
  //selected rating state (value to be submitted)
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <section className="ratingsection">
      <RatingCard
        ratingOptions={ratingOptions}
        selectedRating={selectedRating}
        onSelectRating={setSelectedRating}
      />
    </section>
  );
}

export default App;
