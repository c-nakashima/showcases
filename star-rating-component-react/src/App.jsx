import { useState } from "react";
import "./App.css";
// Components
import { RatingCard } from "./components";

function App() {
  const [selectedRating, setSelectedRating] = useState(null);

  return (
    <div>
      <div>
        <p>How many stars would you give to our Online Code Editor?</p>
        <div>
          <RatingCard
            selectedRating={selectedRating}
            onSelectRating={setSelectedRating}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
