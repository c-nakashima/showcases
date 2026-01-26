import type { RatingOption } from "../types";

//rating options
// -- The displayed text changes based on the selected rating
export const ratingOptions: RatingOption[] = [
  {
    value: 1,
    text: "We're sorry to hear that you had a bad experience. We would like to learn more about what happened and how we can make things right.",
  },
  {
    value: 2,
    text: "We apologize for the inconvenience you experienced. We appreciate your feedback and would like to work with you to address any issues.",
  },
  {
    value: 3,
    text: "Thank you for your feedback. We're sorry to hear that your experience wasn't perfect. We would love to hear more about your concerns to see how we can improve.",
  },
  {
    value: 4,
    text: "Thank you for your positive feedback! We're glad to know that you had a great experience and we appreciate your support.",
  },
  {
    value: 5,
    text: "Excellent! We're thrilled to hear you had such a positive experience. Thank you for choosing our platform",
  },
];
