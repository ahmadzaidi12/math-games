# PixiJS Setup Guide for Next.js (TypeScript)

## Working Configuration

This project uses **PixiJS v7** API (not v8). The v8 API with `app.init()`, `.circle()`, and `.fill()` does NOT work reliably.

## Correct Implementation Pattern

### Component Setup
```tsx
'use client';

import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function Game() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let app: PIXI.Application | null = null;

    (async () => {
      if (!containerRef.current) return;

      // v7 API - synchronous initialization
      app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1a1a1a,
      });

      containerRef.current.appendChild(app.view as HTMLCanvasElement);

      // Game logic here...
    })();

    return () => {
      if (app) {
        app.destroy(true);
      }
    };
  }, []);

  return <div ref={containerRef} />;
}
```

### Graphics Drawing (v7 API)
```tsx
const sprite = new PIXI.Graphics();
sprite.beginFill(0x3498db);
sprite.drawCircle(0, 0, 10);
sprite.endFill();
sprite.x = x;
sprite.y = y;
app.stage.addChild(sprite);
```

## Key Points
- Use `app.view as HTMLCanvasElement` not `app.canvas`
- Use `backgroundColor` not `background` in config
- Use `beginFill()`, `drawCircle()`, `endFill()` not `.circle().fill()`
- Use `.x` and `.y` properties directly, not `.position.set()`
- Container div doesn't need explicit dimensions (canvas handles it)
- Always check `containerRef.current` before appending canvas
- Ref type: `useRef<HTMLDivElement>(null)` for containers
- Application ref type: `PIXI.Application | null`
