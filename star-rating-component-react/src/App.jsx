import { useState } from "react";
import "./App.css";

// Components
import { RatingCard } from "./components";

function App() {
  //rating option
  const ratingOption = [1, 2, 3, 4, 5];
  //selected rating state (value to be submitted)
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <section className="ratingsection">
      <RatingCard
        ratingOption={ratingOption}
        selectedRating={selectedRating}
        onSelectRating={setSelectedRating}
      />
    </section>
  );
}

export default App;
