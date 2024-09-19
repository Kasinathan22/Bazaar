"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";

const testimonials = [
  { id: 1, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'John Doe' },
  { id: 2, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'Jane Smith' },
  { id: 3, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'Emily Johnson' },
  { id: 4, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'Michael Brown' },
  { id: 5, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'Sarah Davis' },
  { id: 6, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'David Wilson' },
  { id: 7, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'Laura Miller' },
  { id: 8, imageSrc: 'https://randomuser.me/api/portraits/men/50.jpg', text: 'Well trained staff. Overall a positive experience in selling my phone at Cashify.', handle: 'TATA Group', author: 'James Taylor' },
];

const Testimonial = () => {
  const [ref, { width }] = useMeasure();
  const xTranslation = useMotionValue(0);
  const controls = useAnimation();
  const isAnimating = useRef(true);

  useEffect(() => {
    const finalPosition = -width / 2 - 8;
    
    controls.start({
      x: [0, finalPosition],
      transition: {
        ease: "linear",
        duration: 25,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      },
    });

    return () => controls.stop();
  }, [controls, width]);

  const handleMouseEnter = () => {
    isAnimating.current = false;
    controls.stop();
  };

  const handleMouseLeave = () => {
    isAnimating.current = true;
    const finalPosition = -width / 2 - 8;

    controls.start({
      x: [xTranslation.get(), finalPosition],
      transition: {
        ease: "linear",
        duration: 20,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      },
    });
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl overflow-hidden bg-black">
      <div className="text-white text-center">
        <h3 className="py-6 text-3xl text-center font-bold">Testimonials</h3>
        <p className='text-center text-base md:lg:text-2xl font-bold'>
          We are thankful to each and every company sponsored our plugin <br /> which helped us to continue working on it.
        </p>
      </div>
      <div className="relative py-10">
        <motion.div
          className="flex gap-4"
          style={{ x: xTranslation }}
          ref={ref}
          animate={controls}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-4">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col break-inside-avoid-page z-0 relative rounded-2xl h-56 bg-white">
                <div className="p-4 flex justify-between">
                  <div className="flex space-x-6">
                    <div className="flex space-x-4 flex-shrink-0 w-52 pt-5">
                      <img src={testimonial.imageSrc} className="w-10 h-10 rounded-full" alt="profile" />
                      <div>
                        <div className="font-bold">{testimonial.author}</div>
                        <div className="text-md font-semibold text-orange-500">{testimonial.handle}</div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href='#' target="_blank" className="px-4 pt-8 whitespace-pre-line break-inside-avoid-page">
                  <span>{testimonial.text}</span>
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonial;
