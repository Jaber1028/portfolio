import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'Jacob Aberasturi';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#030711',
          backgroundImage: 'radial-gradient(circle at 25px 25px, #333 2%, transparent 0%), radial-gradient(circle at 75px 75px, #333 2%, transparent 0%)',
          backgroundSize: '100px 100px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '40px 60px',
          }}
        >
          <h1
            style={{
              fontSize: 60,
              fontWeight: 800,
              color: 'white',
              marginBottom: 20,
              textAlign: 'center',
            }}
          >
            {title}
          </h1>
          <h2
            style={{
              fontSize: 30,
              fontWeight: 600,
              color: '#3b82f6',
              marginBottom: 40,
            }}
          >
            Software Engineer
          </h2>
          <div
            style={{
              display: 'flex',
              gap: '32px',
              color: '#94a3b8',
              fontSize: 24,
            }}
          >
            <span>React</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Next.js</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
} 