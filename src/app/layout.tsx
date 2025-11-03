import type { Metadata } from 'next';
import './globals.css';
import { Inter_Tight } from 'next/font/google';

 
// Load Inter Tight
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // choose weights you need
});
 

export const metadata: Metadata = {
  title: 'Into AI',
  description: 'Into AI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${interTight.className} bg-[#111] antialiased`}>
        {children}
      </body>
    </html>
  );
}


