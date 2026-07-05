import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

export default function SpaceBackground() {
  const reduceMotion = useReducedMotion();

  const stars = useMemo(
    () =>
      Array.from({ length: 220 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${randomBetween(1, 3)}px`,
        opacity: randomBetween(0.2, 0.9),
        delay: randomBetween(0, 6),
        duration: randomBetween(2.5, 6),
      })),
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: 45 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${randomBetween(2, 5)}px`,
        delay: randomBetween(0, 5),
        duration: randomBetween(4, 9),
      })),
    []
  );

  const streaks = useMemo(
    () =>
      Array.from({ length: 4 }).map((_, i) => ({
        id: i,
        top: `${randomBetween(10, 85)}%`,
        delay: randomBetween(0, 8),
        duration: randomBetween(5, 10),
      })),
    []
  );

  const orbits = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: i,
        top: `${randomBetween(18, 82)}%`,
        left: `${randomBetween(10, 90)}%`,
        size: randomBetween(120, 240),
        rotate: randomBetween(-35, 35),
        delay: randomBetween(0, 4),
        duration: randomBetween(10, 18),
      })),
    []
  );

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#070712]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.14),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.10),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(236,72,153,0.08),transparent_26%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_35%,rgba(255,255,255,0.02)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-10 [mask-image:linear-gradient(to_bottom,transparent,black_12%,black_88%,transparent)]" />

      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { x: [0, 30, 0], y: [0, -18, 0] }}
        transition={reduceMotion ? {} : { duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[-8rem] top-[6rem] h-[30rem] w-[30rem] rounded-full bg-violet-500/20 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { x: [0, -24, 0], y: [0, 24, 0] }}
        transition={reduceMotion ? {} : { duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[-10rem] top-[10rem] h-[34rem] w-[34rem] rounded-full bg-sky-400/14 blur-3xl"
      />
      <motion.div
        aria-hidden
        animate={reduceMotion ? {} : { opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
        transition={reduceMotion ? {} : { duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[8%] right-[10%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
      />

      <div className="absolute inset-0">
        {stars.map((star) => (
          <motion.span
            key={star.id}
            aria-hidden
            animate={reduceMotion ? {} : { opacity: [0.15, 1, 0.15], scale: [1, 1.4, 1] }}
            transition={
              reduceMotion
                ? {}
                : { duration: star.duration, repeat: Infinity, delay: star.delay, ease: "easeInOut" }
            }
            className="absolute rounded-full bg-white"
            style={{
              top: star.top,
              left: star.left,
              width: star.size,
              height: star.size,
              opacity: star.opacity,
              boxShadow: "0 0 10px rgba(255,255,255,0.55)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            aria-hidden
            animate={reduceMotion ? {} : { y: [0, -18, 0], opacity: [0.2, 1, 0.2] }}
            transition={
              reduceMotion
                ? {}
                : { duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }
            }
            className="absolute rounded-full bg-sky-200/70"
            style={{
              top: p.top,
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 14px rgba(125,211,252,0.55)",
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0">
        {orbits.map((orbit) => (
          <motion.div
            key={orbit.id}
            aria-hidden
            animate={reduceMotion ? {} : { rotate: [orbit.rotate, orbit.rotate + 360] }}
            transition={
              reduceMotion
                ? {}
                : { duration: orbit.duration, repeat: Infinity, delay: orbit.delay, ease: "linear" }
            }
            className="absolute rounded-full border border-white/10"
            style={{
              top: orbit.top,
              left: orbit.left,
              width: `${orbit.size}px`,
              height: `${orbit.size * 0.55}px`,
              transform: `translate(-50%, -50%) rotate(${orbit.rotate}deg)`,
              boxShadow: "0 0 30px rgba(255,255,255,0.04)",
            }}
          >
            <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-white shadow-[0_0_18px_rgba(255,255,255,0.9)]" />
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0">
        {streaks.map((streak, i) => (
          <motion.div
            key={streak.id}
            aria-hidden
            initial={{ x: "-20%", opacity: 0 }}
            animate={reduceMotion ? {} : { x: "130%", opacity: [0, 1, 0] }}
            transition={
              reduceMotion
                ? {}
                : { duration: streak.duration, repeat: Infinity, delay: streak.delay, ease: "easeInOut" }
            }
            className="absolute h-[2px] w-40 bg-gradient-to-r from-white via-cyan-200/70 to-transparent"
            style={{
              top: streak.top,
              filter: i % 2 === 0 ? "blur(0.4px)" : "blur(0.8px)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
