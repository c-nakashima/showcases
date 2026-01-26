import RatingButtons from "./RatingButtons";
import styles from "./RatingCard.module.css";

/**
 * RatingCard Component
 *
 * @param {number[]} ratingOption - Rating option
 * @param {number|null} selectedRating - Currently selected rating. Null if not selected.
 * @param {(value: number) => void} onSelectRating - Callback fired when a rating is selected.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - Form submit handler.
 */
export default function RatingCard({
  ratingOption,
  selectedRating,
  onSelectRating,
}) {
  return (
    <section className={styles.card} aria-labelledby="rating-title">
      <h1 id="rating-title" className={styles.card__title}>
        How many stars would you give to our Online Code Editor?
      </h1>
      <RatingButtons
        ratingOption={ratingOption}
        selectedRating={selectedRating}
        onSelectRating={onSelectRating}
      />
      <p className={styles.card__description}>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </section>
  );
}
