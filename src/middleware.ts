// src/middleware.ts

import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

const nextIntMiddleware = createMiddleware({
    locales: ['en', 'pt-BR'],
    defaultLocale: 'en',
});

export default function middleware(req: NextRequest) {
    // Skip middleware for API routes
    if (req.nextUrl.pathname.startsWith('/api')) {
        return NextResponse.next();
    }

    return nextIntMiddleware(req);
}

export const config = {
    matcher: [
        '/',
        '/home',
        '/product',
        '/product1',
        '/product2',
        '/product3',
        '/product4',
        '/product5',
        '/product6',
        '/product7',
        '/product8',
        '/product9',
        '/product/:path*',
        '/:locale(pt-BR|en)/:path*',
    ],
};
