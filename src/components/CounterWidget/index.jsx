import { useEffect, useRef, useState } from "react";

const Counter = ({ end, label, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          animateCount();
          setHasAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    let start = 0;
    const incrementTime = 50;
    const totalIncrements = Math.ceil(duration / incrementTime);
    const increment = end / totalIncrements;

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(interval);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, incrementTime);
  };

  return (
    <div ref={ref} className="flex flex-col items-center p-4">
      <span className="lg:text-4xl md:text-2xl text-lg font-bold text-white">
        {count}
        {typeof end === "number" && "+"}
      </span>
      <span className="lg:text-lg md:text-base text-sm text-gray-400 text-center">{label}</span>
    </div>
  );
};

export default Counter;
