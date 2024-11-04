"use client";

import { CountProvider } from '@/components/StateManagement/useCount';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CountProvider>
          {children}
        </CountProvider>
      </body>
    </html>
  );
}
