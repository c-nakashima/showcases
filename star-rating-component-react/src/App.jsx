import { useState } from "react";
import "./App.css";

// Components
import { RatingCard } from "./components";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <section className="ratingsection">
      <RatingCard
        selectedRating={selectedRating}
        onSelectRating={setSelectedRating}
      />
    </section>
  );
}

export default App;
