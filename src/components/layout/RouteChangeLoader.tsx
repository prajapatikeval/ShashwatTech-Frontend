import { useEffect, useState, useRef } from "react";
import { useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

export function RouteChangeLoader() {
  const [location] = useLocation();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const locationRef = useRef(location);
  const progressRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (location !== locationRef.current) {
      locationRef.current = location;
      
      // Reset and Start
      if (intervalRef.current) clearInterval(intervalRef.current);
      setLoading(true);
      setProgress(0);
      progressRef.current = 0;

      // Real progress simulation (would be replaced by real loading state if available)
      // For now, we use a smoother, faster monotonic approach that matches real page feel
      intervalRef.current = setInterval(() => {
        if (progressRef.current < 95) {
          const increment = Math.random() * 20;
          const nextProgress = Math.min(progressRef.current + increment, 95);
          progressRef.current = nextProgress;
          setProgress(nextProgress);
        }
      }, 100);

      // Finalize immediately
      const finalize = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        setProgress(100);
        setTimeout(() => {
          setLoading(false);
          setProgress(0);
          progressRef.current = 0;
        }, 300);
      };

      // In a SPA, navigation is often instant, so we show a brief loader
      const completionTimer = setTimeout(finalize, 400);

      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
        clearTimeout(completionTimer);
      };
    }
  }, [location]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-[200] h-[2px] pointer-events-none"
        >
          <motion.div
            className="h-full bg-primary"
            style={{ width: `${progress}%` }}
            transition={{
              width: { type: "spring", stiffness: 150, damping: 25 },
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
