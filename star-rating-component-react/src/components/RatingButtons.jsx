import { useState } from "react";
import styles from "./RatingButtons.module.css";

/**
 * Rating Button List Component
 *
 * @param {import("../types").RatingOption[]} ratingOptions - Rating option
 * @param {number|null} selectedRating - Currently selected rating. Null if not selected.
 * @param {(value: number) => void} onSelectRating - Callback fired when a rating is selected.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - Form submit handler.
 */
export default function RatingButtons({
  ratingOptions,
  selectedRating,
  onSelectRating,
}) {
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
      {ratingOptions.map((option) => {
        // If the star is selected or not
        const isSelected = option?.value <= displayRating;
        return (
          <button
            key={option?.value}
            type="button"
            role="radio"
            aria-checked={selectedRating === option?.value}
            // className={styles.starButton}
            onMouseEnter={() => {
              if (selectedRating == null || option?.value > selectedRating) {
                setHoverRating(option?.value);
              }
            }}
            onFocus={() => {
              if (selectedRating == null || option?.value > selectedRating) {
                setHoverRating(option?.value);
              }
            }}
            onBlur={() => setHoverRating(null)}
            onClick={() => onSelectRating(option?.value)}
            className={styles.button}
          >
            <img
              src={
                isSelected
                  ? "/images/star-filled.svg"
                  : "/images/star-unfilled.svg"
              }
              alt="rating star"
              aria-hidden="true"
              className={styles.button__image}
            />{" "}
          </button>
        );
      })}
    </div>
  );
}
