import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.delete('x-middleware-prefetch');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
} 