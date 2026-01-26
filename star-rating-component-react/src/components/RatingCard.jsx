import RatingButtons from "./RatingButtons";
import styles from "./RatingCard.module.css";

/**
 * RatingCard Component
 *
 * @param {import("../types").RatingOption[]} ratingOptions - Rating options
 * @param {number|null} selectedRating - Currently selected rating. Null if not selected.
 * @param {(value: number) => void} onSelectRating - Callback fired when a rating is selected.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - Form submit handler.
 */
export default function RatingCard({
  ratingOptions,
  selectedRating,
  onSelectRating,
}) {
  return (
    <section className={styles.card} aria-labelledby="rating-title">
      <h1 id="rating-title" className={styles.card__title}>
        How many stars would you give to our Online Code Editor?
      </h1>
      <RatingButtons
        ratingOptions={ratingOptions}
        selectedRating={selectedRating}
        onSelectRating={onSelectRating}
      />
      <p className={styles.card__description}>
        {ratingOptions[selectedRating - 1]?.text}
      </p>
    </section>
  );
}
