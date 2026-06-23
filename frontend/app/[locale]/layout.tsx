import '@/app/globals.css';
import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';

type Props = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

export default function LocaleLayout({ children, params }: Props) {
  return (
    <html lang={params.locale}>
      <body>
        <NextIntlClientProvider locale={params.locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}