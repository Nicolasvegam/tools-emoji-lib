import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['en', 'es', 'zh', 'hi', 'ar', 'pt'],
  defaultLocale: 'en',
  localePrefix: 'always'
});

export const {Link, redirect, usePathname, useRouter} = createNavigation(routing);