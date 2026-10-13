import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        transformOrigin: "0%",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3.5px",
        background: "linear-gradient(90deg, #16a34a, #22c55e, #4ade80)",
        boxShadow: "0 0 10px rgba(34, 197, 94, 0.7), 0 0 20px rgba(74, 222, 128, 0.4)",
        zIndex: 9999,
        pointerEvents: "none"
      }}
    />
  );
}
