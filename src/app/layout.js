"use client";

import { Provider } from 'react-redux';
import { CountProvider } from '@/components/StateManagement/useCount';
import store from "@/components/StateManagement/Redux/store"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider store={store}>
          <CountProvider>
            {children}
          </CountProvider>
        </Provider>
      </body>
    </html>
  );
}
