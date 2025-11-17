import React from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Jane Doe",
    rating: 5,
    text: "Amazing service! Everything was smooth and professional.",
  },
  {
    name: "John Smith",
    rating: 4,
    text: "Great experience overall. Will use again!",
  },
  {
    name: "Emily Johnson",
    rating: 5,
    text: "Absolutely outstanding. Highly recommend!",
  },
  {
    name: "Michael Brown",
    rating: 5,
    text: "Fantastic! Couldn’t be happier with the results.",
  },
  {
    name: "Sarah Williams",
    rating: 4,
    text: "Very good experience—would recommend to friends.",
  },
  {
    name: "Jane Doe",
    rating: 5,
    text: "Amazing service! Everything was smooth and professional.",
  },
  {
    name: "John Smith",
    rating: 4,
    text: "Great experience overall. Will use again!",
  },
  {
    name: "Emily Johnson",
    rating: 5,
    text: "Absolutely outstanding. Highly recommend!",
  },
];

const Testimonials = () => {
  const [page, setPage] = React.useState(0);
  const [reviewsPerPage, setReviewsPerPage] = React.useState(4);

  React.useEffect(() => {
    const updateReviewsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setReviewsPerPage(4); // lg
      else if (width >= 768) setReviewsPerPage(3); // md
      else if (width >= 640) setReviewsPerPage(2); // sm
      else setReviewsPerPage(1); // xs
    };
    updateReviewsPerPage();
    window.addEventListener('resize', updateReviewsPerPage);
    return () => window.removeEventListener('resize', updateReviewsPerPage);
  }, []);

  const startIndex = page * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="flex lg:flex-row flex-col justify-around gap-5 p-10 items-center lg:py-24 py-20">
      {/* Left: Title + Description */}
      <div className="w-fit">
        <h4>testimonials</h4>
        <h2 className="text-white mb-5">What our clients are saying</h2>
        <p className="text-white">
          Real feedback from real people. We strive to exceed expectations every day.
        </p>
        {/* Pagination Arrows */}
        <div className="flex gap-4 self-end mt-5 transition-all duration-300 ease-in-out">
          <button
            className="rounded-xl p-2 border bg-alt shadow disabled:bg-white/50"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            className="rounded-xl p-2 border bg-alt shadow disabled:bg-white/50"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Right: Horizontal Testimonials */}
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 overflow-hidden">
          {currentReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-2xl shadow p-4 bg-white border w-64 min-h-[180px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm">{review.text}</p>
                  <p className="font-semibold text-gray-900 text-sm">- {review.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default Testimonials;
