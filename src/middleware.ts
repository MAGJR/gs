
import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntMiddleware  = createMiddleware({
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
})

export default function (req: NextRequest): NextResponse {
    return nextIntMiddleware(req)
}

export const config = {
    matcher: ['/', '/(pt-BR|en)/:path*']
  };