'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function Game() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: PIXI.Application | null = null;

    if (!containerRef.current) return;

    // v7 API - synchronous initialization
    app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1a1a1a,
    });

    containerRef.current.appendChild(app.view as HTMLCanvasElement);

    const circleRadius = 30;
    const padding = 40;

    // Player circle at bottom
    const player = new PIXI.Graphics();
    player.beginFill(0x3498db); // Blue
    player.drawCircle(0, 0, circleRadius);
    player.endFill();
    player.x = 400;
    player.y = 600 - padding;
    app.stage.addChild(player);

    // Computer circle at center
    const computer = new PIXI.Graphics();
    computer.beginFill(0xe74c3c); // Red
    computer.drawCircle(0, 0, circleRadius);
    computer.endFill();
    computer.x = 400;
    computer.y = 300;
    app.stage.addChild(computer);

    return () => {
      if (app) {
        app.destroy(true);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}