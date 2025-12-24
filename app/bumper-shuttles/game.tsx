'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function Game() {
  const containerRef = useRef<HTMLDivElement>(null);
  const appRef = useRef<PIXI.Application | null>(null);
  const initializedRef = useRef(false);

  useEffect(() => {
    if (initializedRef.current) return;
    initializedRef.current = true;

    let app: PIXI.Application | null = null;

    (async () => {
      if (!containerRef.current) return;

      app = new PIXI.Application();
      appRef.current = app;
      await app.init({
        width: 800,
        height: 600,
        backgroundColor: 0x1a1a1a,
      });

      if (!containerRef.current) return;
      containerRef.current.appendChild(app.canvas);

      // Create a simple test circle to verify rendering
      const testCircle = new PIXI.Graphics();
      testCircle.beginFill(0xff0000);
      testCircle.drawCircle(0, 0, 20);
      testCircle.endFill();
      testCircle.x = 400;
      testCircle.y = 300;
      app.stage.addChild(testCircle);

      console.log('PixiJS initialized, test circle added');

      // Your game logic
      class Agent {
        x: number;
        y: number;
        vx: number;
        vy: number;
        sprite: PIXI.Graphics;

        constructor(x: number, y: number) {
          this.x = x;
          this.y = y;
          this.vx = (Math.random() * 4 - 2) * 60;
          this.vy = (Math.random() * 4 - 2) * 60;
          
          this.sprite = new PIXI.Graphics();
          this.sprite.beginFill(0x3498db);
          this.sprite.drawCircle(0, 0, 10);
          this.sprite.endFill();
          this.sprite.x = x;
          this.sprite.y = y;
          app!.stage.addChild(this.sprite);
        }
        
        update(dt: number) {
          this.x += this.vx * dt;
          this.y += this.vy * dt;
          
          // Bounce off walls
          if (this.x < 10 || this.x > 790) {
            this.vx *= -1;
            this.x = Math.max(10, Math.min(790, this.x));
          }
          if (this.y < 10 || this.y > 590) {
            this.vy *= -1;
            this.y = Math.max(10, Math.min(590, this.y));
          }
          
          this.sprite.x = this.x;
          this.sprite.y = this.y;
        }
      }

      const agents = Array.from({ length: 20 }, () => 
        new Agent(Math.random() * 780 + 10, Math.random() * 580 + 10)
      );

      app.ticker.add((ticker) => {
        const dt = ticker.deltaTime / 60;
        agents.forEach(a => a.update(dt));
      });
    })();

    return () => {
      if (app && app.ticker) {
        app.ticker.stop();
        if (app.stage) {
          app.stage.removeChildren();
        }
        app.destroy(true, { children: true, texture: true, textureSource: true });
      }
    };
  }, []);

  return <div ref={containerRef} />;
}