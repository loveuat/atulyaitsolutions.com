import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: ['/', '/(en|fr|ru|ja|ko|zh-CN|ar|nl|sv)/:path*']
};