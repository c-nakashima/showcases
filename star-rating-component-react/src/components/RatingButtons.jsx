import { useState } from "react";
import styles from "./RatingButtons.module.css";

//rating option
const ratingOption = [1, 2, 3, 4, 5];

/**
 * Rating Button List Component
 *
 * @param {number|null} selectedRating - Currently selected rating. Null if not selected.
 * @param {(value: number) => void} onSelectRating - Callback fired when a rating is selected.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - Form submit handler.
 */
export default function RatingButtons({ selectedRating, onSelectRating }) {
  // Hovered Rating
  const [hoverRating, setHoverRating] = useState(null);
  // Displayed Rating
  // -- Prioritize hover while hovering, otherwise display selected rating.
  // -- If it is not hovered neither selected, value is 0
  const displayRating = hoverRating ?? selectedRating ?? 0;

  return (
    <div
      role="radiogroup"
      aria-label="Rate from 1 to 5"
      onMouseLeave={() => setHoverRating(null)}
      className={styles.buttons}
    >
      {ratingOption.map((value) => {
        // If the star is selected or not
        const isSelected = value <= displayRating;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={selectedRating === value}
            // className={styles.starButton}
            onMouseEnter={() => {
              if (selectedRating == null || value > selectedRating) {
                setHoverRating(value);
              }
            }}
            onFocus={() => {
              if (selectedRating == null || value > selectedRating) {
                setHoverRating(value);
              }
            }}
            onBlur={() => setHoverRating(null)}
            onClick={() => onSelectRating(value)}
          >
            <img
              src={
                isSelected
                  ? "/images/star-filled.svg"
                  : "/images/star-unfilled.svg"
              }
              alt=""
              aria-hidden="true"
            />{" "}
          </button>
        );
      })}
    </div>
  );
}
