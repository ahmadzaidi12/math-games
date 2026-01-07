'use client';

import { useEffect, useRef } from 'react';
import { Application, Graphics } from 'pixi.js';

export default function Game() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<Application | null>(null);

  useEffect(() => {
    const initGame = async () => {
      if (!containerRef.current || appRef.current) return;

      const app = new Application();
      await app.init({
        width: 800,
        height: 600,
        background: 0x1a1a1a,
      });

      appRef.current = app;
      containerRef.current.appendChild(app.canvas);

      const circleRadius = 30;
      const padding = 40;

      // Player circle at bottom
      const player = new Graphics();
      player.circle(0, 0, circleRadius);
      player.fill(0x3498db); // Blue
      player.x = 400;
      player.y = 600 - padding;
      app.stage.addChild(player);

      // Computer circle at center
      const computer = new Graphics();
      computer.circle(0, 0, circleRadius);
      computer.fill(0xe74c3c); // Red
      computer.x = 400;
      computer.y = 300;
      app.stage.addChild(computer);
    };

    initGame();

    return () => {
      if (appRef.current) {
        appRef.current.destroy(true);
        appRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
}