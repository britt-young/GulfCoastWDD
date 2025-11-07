import { useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Jane Smith",
      role: "Local Farm Owner",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      alt: "avatar",
    },
    {
      id: 2,
      name: "Jogn Smith",
      role: "Local Florist CEO",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      alt: "avatar",
    },
    {
      id: 3,
      name: "Julia Rose",
      role: "Owner of Julia Rose Photo",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      alt: "avatar",
    },
    {
      id: 4,
      name: "Jane Smith",
      role: "Local Farm Owner",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      alt: "avatar",
    },
    {
      id: 5,
      name: "Jogn Smith",
      role: "Local Florist CEO",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      alt: "avatar",
    },
    {
      id: 6,
      name: "Julia Rose",
      role: "Owner of Julia Rose Photo",
      content: "Testimonial coming soon",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      alt: "avatar",
    },
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY,
        behavior: "smooth",
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="w-full bg-alternate py-16">
      <div className="lg:px-25">
        <div className="max-w-7xl mx-auto py-2 mb-5 text-center text-white">
          <h4>Testimonials</h4>
          <h2>What our clients are saying</h2>
          <p className="mt-5 mx-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
        {/* scrolling cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth p-10"
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-[320px] md:w-[360px] bg-white rounded-2xl shadow-white/30 shadow-lg p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.alt}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {t.name}
                  </h3>
                  <p className="text-gray-500">{t.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-left italic text-base">
                “{t.content}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

{
  /*  */
}
