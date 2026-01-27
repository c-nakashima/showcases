export type RatingValue = 1 | 2 | 3 | 4 | 5;
/**
 * Rating Option Type
 *
 * @param {RatingValue} value - rating value.
 * @param {string} text - displayed description text.
 */
export type RatingOption = {
  value: RatingValue;
  text: string;
};
