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
];

const Testimonials = () => {
  const [page, setPage] = React.useState(0);
  const [reviewsPerPage, setReviewsPerPage] = React.useState(4);

  React.useEffect(() => {
    const updateReviewsPerPage = () => {
      const width = window.innerWidth;
      if (width >= 1024) setReviewsPerPage(4); // lg
      else if (width >= 768) setReviewsPerPage(2); // md
      else if (width >= 640) setReviewsPerPage(2); // sm
      else setReviewsPerPage(1); // xs
    };
    updateReviewsPerPage();
    window.addEventListener("resize", updateReviewsPerPage);
    return () => window.removeEventListener("resize", updateReviewsPerPage);
  }, []);

  const startIndex = page * reviewsPerPage;
  const currentReviews = reviews.slice(startIndex, startIndex + reviewsPerPage);
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);

  return (
    <div className="flex flex-col justify-around gap-8 px-5 lg:px-0 items-center lg:py-24 py-20">
      {/* Left: Title + Description + Pagnation on sm screens*/}
      <div className="w-full flex flex-col items-center text-center">
        <h4>testimonials</h4>
        <h2 className="text-white mb-2">What our clients are saying</h2>
        <p className="text-white">
          Real feedback from real people. We strive to exceed expectations every
          day.
        </p>
        
      </div>

      {/* Right: Horizontal Testimonials + Pagnation on lg screens*/}
      <div className="flex flex-row gap-6 items-center">
        <button
          className="h-fit py-8 px-2 bg-transparent text-alt disabled:text-alternate disabled:bg-transparent hidden lg:block"
          onClick={() => setPage((p) => Math.max(0, p - 1))}
          disabled={page === 0}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4 overflow-hidden">
          {currentReviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="rounded-2xl p-8 md:p-4 bg-white border border-dark w-[80] md:w-[350px] lg:w-[400px] min-h-[180px] flex flex-col justify-between">
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
                  <p className="font-semibold text-gray-900 text-sm">
                    - {review.name}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          className="h-fit py-8 px-2 bg-transparent text-alt disabled:text-alternate disabled:bg-transparent hidden lg:block"
          onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
          disabled={page === totalPages - 1}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      {/* Pagination Arrows */}
        <div className="lg:hidden flex gap-5 mt-0 transition-all duration-300 ease-in-out">
          <button
            className="shadow-none h-fit bg-transparent text-alt disabled:text-alternate disabled:bg-transparent block"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            className="shadow-none h-fit bg-transparent text-alt disabled:text-alternate disabled:bg-transparent block"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
    </div>
  );
};

export default Testimonials;
