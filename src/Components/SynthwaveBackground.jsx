"use client";

import { useEffect, useRef } from "react";

export default function SynthwaveBackground({ isDarkMode }) {
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let gridOffset = 0;
    const GRID_SPACING = 50;
    let HORIZON_Y = canvas.height * 0.6;
    const GRID_ROWS = 20;

    // 🌓 Dynamic theme colors
    const BACKGROUND_COLOR = isDarkMode ? "#0a0a1a" : "#ffffff";
    const GRID_COLOR_1 = isDarkMode ? "rgba(0, 255, 240, 0.7)" : "rgba(255, 0, 0, 0.5)";
    const GRID_COLOR_2 = isDarkMode ? "rgba(0, 255, 240, 0.3)" : "rgba(255, 100, 100, 0.5)";

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      HORIZON_Y = canvas.height * 0.6;
    };

    function drawGrid() {
      ctx.strokeStyle = GRID_COLOR_1;
      ctx.lineWidth = 1;

      for (let x = -canvas.width; x < canvas.width * 2; x += GRID_SPACING) {
        ctx.beginPath();
        ctx.moveTo(canvas.width / 2, HORIZON_Y);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      for (let i = 1; i <= GRID_ROWS; i++) {
        const y = HORIZON_Y + ((canvas.height - HORIZON_Y) / GRID_ROWS) * i - gridOffset;
        const opacity = i / GRID_ROWS;

        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.strokeStyle = `rgba(${isDarkMode ? '0,255,240' : '255,0,0'}, ${opacity * 0.5})`;
        ctx.stroke();
      }

      ctx.shadowColor = GRID_COLOR_2;
      ctx.shadowBlur = 10;
    }

    function draw() {
      ctx.fillStyle = BACKGROUND_COLOR;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();

      gridOffset += 0.4;
      if (gridOffset > GRID_SPACING) gridOffset = 0;

      animationRef.current = requestAnimationFrame(draw);
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [isDarkMode]);

  return (
    <div className="relative w-full h-screen overflow-hidden -z-10">
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
    </div>
  );
}
