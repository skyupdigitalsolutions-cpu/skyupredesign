import React from "react";
import { Star } from "lucide-react";

/**
 * GoogleReviews — a Google-style reviews section on a white background.
 * Stack: React + Tailwind + lucide-react (matches the rest of the site).
 * Swap the SUMMARY + REVIEWS data for your real Google Business Profile data,
 * or fetch it from the Google Places API and map it into the same shape.
 */

const SUMMARY = {
  rating: 4.9,
  count: 92,
  writeReviewUrl: "#", // your Google "write a review" link
  allReviewsUrl: "https://share.google/0iNO9uI09kcC5H3XP", // link to your Google Business Profile
};

const REVIEWS = [
  {
    name: "Pooja M S",
    initial: "A",
    color: "#1A73E8",
    rating: 5,
    text: "I had a very good experience with SKYUP Digital Solutions LLP. The team is friendly, professional, and easy to work with. They helped me improve my online presence and bring more leads to my business. They explained everything in a simple way and delivered work on time. I am happy with their service and strongly recommend them for digital marketing.",
  },
  {
    name: "Maltesh G",
    initial: "R",
    color: "#D93025",

    rating: 5,
    text: "Skyup Digital Solution did an excellent job in website design and development for our business. The website is fast, responsive, and SEO-friendly. If you are looking for a professional web development company, I highly recommend them.",
  },
  {
    name: "Pranoy Gowda",
    initial: "P",
    color: "#188038",

    rating: 5,
    text: "SKYUP Digital Solutions LLP delivers effective digital advertising solutions with a strong focus on performance and ROI. Their team creates targeted campaigns across search and social platforms, helping brands increase visibility, generate quality leads, and drive measurable business growth through data-driven strategies and continuous optimization.",
  },
];

function GoogleG({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
      />
      <path
        fill="#4285F4"
        d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
      />
      <path
        fill="#FBBC05"
        d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
      />
      <path
        fill="#34A853"
        d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
      />
    </svg>
  );
}

function Stars({ rating = 5, size = 16 }) {
  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`${rating} out of 5 stars`}
    >
      {[0, 1, 2, 3, 4].map((i) => (
        <Star
          key={i}
          size={size}
          strokeWidth={0}
          className={i < rating ? "fill-[#FBBC04]" : "fill-gray-200"}
        />
      ))}
    </div>
  );
}

export default function GoogleReviews() {
  return (
    <section className="bg-white px-6 py-10 lg:px-[120px] lg:py-12">
      <div className="mx-auto max-w-7xl text-center">
        <div className="font-bold text-3xl lg:text-5xl">
          Real Reviews from Real Businesses
        </div>
        <p className="py-6 lg:px-[250px]">
          Do not just take our word for it. Here is what business owners across
          Bangalore say about working with Skyup Digital Solutions.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r) => (
            <article
              key={r.name}
              className="group relative rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-[0_18px_40px_-22px_rgba(15,23,41,0.35)]"
            >
              {/* Google G top-right, like a real Google review card */}
              <span className="absolute right-4 top-4">
                <GoogleG size={20} />
              </span>

              <div className="flex items-center gap-3">
                <span
                  className="grid h-10 w-10 flex-none place-items-center rounded-full text-base font-semibold text-white"
                  style={{ background: r.color }}
                  aria-hidden="true"
                >
                  {r.initial}
                </span>
                <div>
                  <p className="text-[15px] font-semibold ">
                    {r.name}
                  </p>
                  <p className="text-xs ">{r.time}</p>
                </div>
              </div>

              <div className="mt-3">
                <Stars rating={r.rating} size={16} />
              </div>

              <p className="mt-2.5 text-sm leading-relaxed text-justify">
                {r.text}
              </p>
            </article>
          ))}
        </div>

        {/* footer link */}
        <div className="mt-10 flex justify-center">
          <a
            target="_blank"
            href={SUMMARY.allReviewsUrl}
            className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold transition-colors duration-200 hover:border-gray-400 hover:bg-gray-50"
          >
            <GoogleG size={16} />
            View all reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
}
