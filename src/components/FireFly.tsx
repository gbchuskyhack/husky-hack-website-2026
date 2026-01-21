"use client";
import { useEffect, useState, CSSProperties } from "react";
import styles from "./firefly.module.css";

interface FireflyProps {
  /** Top position (e.g. "50%", "100px") */
  top?: string;
  /** Left position (e.g. "50%", "100px") */
  left?: string;
  /** Color of the firefly glow */
  color?: string;
  /** Size of the firefly dot */
  size?: string;
  /** Minimum animation duration (seconds) for X movement */
  minDurationX?: number;
  /** Maximum animation duration (seconds) for X movement */
  maxDurationX?: number;
  /** Minimum animation duration (seconds) for Y movement */
  /** Minimum animation duration (seconds) for Y movement */
  minDurationY?: number;
  /** Maximum animation duration (seconds) for Y movement */
  maxDurationY?: number;
  /** Maximum distance to move horizontally in pixels */
  widthRange?: number;
  /** Maximum distance to move vertically in pixels */
  heightRange?: number;
}

const Firefly = ({
  top = "50%",
  left = "50%",
  color = "#fbbf24",
  size = "4px",
  minDurationX = 15,
  maxDurationX = 30,
  minDurationY = 10,
  maxDurationY = 20,
  widthRange = 100,
  heightRange = 75,
}: FireflyProps) => {
  const [style, setStyle] = useState<CSSProperties>({}); // Start empty to match server

  useEffect(() => {
    // Generate random values only on client to ensure uniqueness per instance
    // and avoid hydration mismatch errors.
    const durationX =
      Math.random() * (maxDurationX - minDurationX) + minDurationX;
    const durationY =
      Math.random() * (maxDurationY - minDurationY) + minDurationY;
    const durationFlash = Math.random() * 2 + 1; // 1s to 3s

    const delayX = Math.random() * -20; // Start at random point in cycle
    const delayY = Math.random() * -20;
    const delayFlash = Math.random() * -3;

    // Randomize movement range slightly to prevent them looking like they're in a box
    // Varies from 0.5x to 1x of the provided range
    const moveXrange = Math.random() * (widthRange / 2) + widthRange / 2;
    const moveYrange = Math.random() * (heightRange / 2) + heightRange / 2;

    setStyle({
      "--firefly-top": top,
      "--firefly-left": left,
      "--firefly-color": color,
      "--firefly-size": size,
      "--duration-move-x": `${durationX}s`,
      "--duration-move-y": `${durationY}s`,
      "--duration-flash": `${durationFlash}s`,
      "--delay-move-x": `${delayX}s`,
      "--delay-move-y": `${delayY}s`,
      "--delay-flash": `${delayFlash}s`,
      "--move-x-from": `-${moveXrange}px`,
      "--move-x-to": `${moveXrange}px`,
      "--move-y-from": `-${moveYrange}px`,
      "--move-y-to": `${moveYrange}px`,
    } as CSSProperties);
  }, [
    top,
    left,
    color,
    size,
    minDurationX,
    maxDurationX,
    minDurationY,
    maxDurationY,
    widthRange,
    heightRange,
  ]);

  return (
    <div className={styles.fireflyWrapper} style={style}>
      <div className={styles.fireflyY}>
        <div className={styles.fireflyPoint} />
      </div>
    </div>
  );
};

export default Firefly;