import RatingButtons from "./RatingButtons";

/**
 * RatingCard Component
 *
 * @param {number|null} selectedRating - Currently selected rating (1–5). Null if not selected.
 * @param {(value: number) => void} onSelectRating - Callback fired when a rating is selected.
 * @param {(event: React.FormEvent<HTMLFormElement>) => void} onSubmit - Form submit handler.
 */
export default function RatingCard({ selectedRating, onSelectRating }) {
  return (
    <section className="card" aria-labelledby="rating-title">
      <div className="card__icon" aria-hidden="true">
        <img src="/images/icon-star.svg" alt="" />
      </div>

      <h1 id="rating-title" className="card__title">
        How did we do?
      </h1>

      <RatingButtons
        selectedRating={selectedRating}
        onSelectRating={onSelectRating}
      />

      <p className="card__description">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
    </section>
  );
}
