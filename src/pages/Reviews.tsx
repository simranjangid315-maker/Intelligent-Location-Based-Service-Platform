import {
  MessageSquare,
  Star,
  Trash2,
} from "lucide-react";

import { useState } from "react";

import type { Review } from "../types";

const initialReviews: Review[] = [
  {
    id: 1,
    serviceId: 1,
    serviceName: "Apollo Hospitals",
    userName: "Simran",
    rating: 5,
    comment:
      "Very good service and helpful staff.",
    date: "2026-10-01",
  },
  {
    id: 2,
    serviceId: 4,
    serviceName: "Paradise Restaurant",
    userName: "Simran",
    rating: 4,
    comment:
      "Good food and convenient location.",
    date: "2026-09-28",
  },
];

export default function Reviews() {
  const [reviews, setReviews] =
    useState<Review[]>(initialReviews);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const addReview = () => {
    if (!comment.trim()) return;

    const review: Review = {
      id: Date.now(),
      serviceId: 1,
      serviceName: "Apollo Hospitals",
      userName: "Simran",
      rating,
      comment,
      date: new Date().toISOString().slice(0, 10),
    };

    setReviews((current) => [review, ...current]);
    setComment("");
  };

  const removeReview = (id: number) => {
    setReviews((current) =>
      current.filter((review) => review.id !== id)
    );
  };

  return (
    <div className="space-y-7">
      <div>
        <h1 className="text-3xl font-bold">
          Reviews
        </h1>

        <p className="mt-2 text-slate-500">
          Share your experience with local services.
        </p>
      </div>

      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex items-center gap-3">
          <MessageSquare className="text-blue-600" />
          <h2 className="text-lg font-bold">
            Add a Review
          </h2>
        </div>

        <div className="mt-5">
          <label className="text-sm font-medium">
            Rating
          </label>

          <div className="mt-2 flex gap-1">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                onClick={() => setRating(value)}
              >
                <Star
                  size={25}
                  className={
                    value <= rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-slate-300"
                  }
                />
              </button>
            ))}
          </div>
        </div>

        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="mt-5 min-h-28 w-full rounded-xl border p-4 outline-none focus:border-blue-500"
          placeholder="Write your experience..."
        />

        <button
          onClick={addReview}
          className="mt-4 rounded-xl bg-blue-600 px-5 py-3 text-sm font-medium text-white"
        >
          Submit Review
        </button>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="rounded-2xl border bg-white p-6 shadow-sm"
          >
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold">
                  {review.serviceName}
                </h3>

                <p className="mt-1 text-xs text-slate-500">
                  {review.userName} · {review.date}
                </p>
              </div>

              <button
                onClick={() =>
                  removeReview(review.id)
                }
                className="text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>

            <div className="mt-3 flex">
              {Array.from({ length: 5 }).map(
                (_, index) => (
                  <Star
                    key={index}
                    size={17}
                    className={
                      index < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }
                  />
                )
              )}
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}