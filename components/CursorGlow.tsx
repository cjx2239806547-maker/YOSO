"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CursorGlow() {
  const [isFinePointer, setIsFinePointer] = useState(false);
  const pointerX = useMotionValue(-200);
  const pointerY = useMotionValue(-200);
  const x = useSpring(pointerX, { stiffness: 90, damping: 24, mass: 0.4 });
  const y = useSpring(pointerY, { stiffness: 90, damping: 24, mass: 0.4 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const updatePointer = () => setIsFinePointer(media.matches);
    const handleMove = (event: PointerEvent) => {
      pointerX.set(event.clientX - 144);
      pointerY.set(event.clientY - 144);
    };

    updatePointer();
    media.addEventListener("change", updatePointer);
    window.addEventListener("pointermove", handleMove);

    return () => {
      media.removeEventListener("change", updatePointer);
      window.removeEventListener("pointermove", handleMove);
    };
  }, [pointerX, pointerY]);

  if (!isFinePointer) {
    return null;
  }

  return <motion.div aria-hidden className="glow-cursor" style={{ x, y }} />;
}
