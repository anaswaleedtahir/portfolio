"use client";

import { useEffect, useRef } from "react";
import styles from "./ambient-field.module.css";

type Point = { x: number; y: number };

const LINE_COUNT = 6;
const SAMPLE_COUNT = 84;

export function AmbientField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer: Point = { x: 0.5, y: 0.5 };
    const target: Point = { x: 0.5, y: 0.5 };
    let width = 0;
    let height = 0;
    let frame = 0;
    let isVisible = !document.hidden;
    let previousElapsed = 0;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw(0);
    };

    const draw = (elapsed: number) => {
      context.clearRect(0, 0, width, height);
      const delta =
        previousElapsed && elapsed > previousElapsed
          ? Math.min(elapsed - previousElapsed, 50)
          : 16;
      const follow = 1 - Math.exp(-delta / 650);
      pointer.x += (target.x - pointer.x) * follow;
      pointer.y += (target.y - pointer.y) * follow;
      previousElapsed = elapsed;

      const time = reduceMotion.matches ? 0 : elapsed * 0.00018;
      const centerY = height * (height < 620 ? 0.48 : 0.51);
      const amplitude = Math.min(height * 0.075, 76);

      for (let line = 0; line < LINE_COUNT; line += 1) {
        const offset = line - (LINE_COUNT - 1) / 2;
        context.beginPath();

        for (let sample = 0; sample <= SAMPLE_COUNT; sample += 1) {
          const progress = sample / SAMPLE_COUNT;
          const x = progress * width;
          const pointerDistance = Math.abs(progress - pointer.x);
          const influence = Math.max(0, 1 - pointerDistance * 3.2);
          const baseWave = Math.sin(progress * 7.2 + time + offset * 0.52);
          const detailWave = Math.sin(progress * 15.8 - time * 1.7 + offset) * 0.27;
          const pointerBend = (pointer.y - 0.5) * amplitude * influence * 1.6;
          const y =
            centerY +
            offset * 12 +
            (baseWave + detailWave) * amplitude +
            pointerBend;

          if (sample === 0) context.moveTo(x, y);
          else context.lineTo(x, y);
        }

        context.strokeStyle = `rgba(25, 35, 51, ${0.2 - line * 0.012})`;
        context.lineWidth = line === 2 ? 1.25 : 0.8;
        context.stroke();
      }
    };

    const animate = (elapsed: number) => {
      draw(elapsed);
      if (isVisible && !reduceMotion.matches) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    const start = () => {
      window.cancelAnimationFrame(frame);
      previousElapsed = 0;
      if (isVisible && !reduceMotion.matches) {
        frame = window.requestAnimationFrame(animate);
      } else {
        draw(0);
      }
    };

    const onPointerMove = (event: PointerEvent) => {
      target.x = event.clientX / Math.max(width, 1);
      target.y = event.clientY / Math.max(height, 1);
    };

    const onPointerLeave = () => {
      target.x = 0.5;
      target.y = 0.5;
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      start();
    };

    resize();
    start();
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibilityChange);
    reduceMotion.addEventListener("change", start);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      reduceMotion.removeEventListener("change", start);
    };
  }, []);

  return (
    <div aria-hidden="true" className={styles.field}>
      <div className={styles.fallback} />
      <canvas className={styles.canvas} ref={canvasRef} />
    </div>
  );
}
