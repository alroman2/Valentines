import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import Cursor from "./cursor";
import { useEffect } from "react";

export default function TextAnim() {
  const text = "Dear Kelly,";
  const count = useMotionValue(0);
  const rounded = useTransform(count, (x) => Math.round(x));
  const displayText = useTransform(rounded, (x) => text.slice(0, x));

  useEffect(() => {
    const controls = animate(count, text.length, {
      type: "tween",
      duration: 1,
      ease: "easeInOut",
    });
    return controls.stop;
  }, []);
  return (
    <>
      <span className="">
        <motion.span>{displayText}</motion.span>
        <Cursor />
      </span>
    </>
  );
}
