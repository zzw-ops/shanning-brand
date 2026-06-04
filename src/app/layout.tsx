
import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: '山宁 SHANNING｜新式中药健康茶饮品牌',
  description: '山宁 SHANNING 专注于将东方草本、四季养生理念与现代茶饮体验结合，面向澳门及年轻消费群体，打造兼具日常性、文化感与社交传播力的新式草本茶饮品牌。',
  openGraph: {
    title: '山宁 SHANNING｜新式中药健康茶饮品牌',
    description: '以四季草本、现代茶饮与东方植物美学，重新定义年轻人的轻养生饮品体验。',
    images: ['https://picsum.photos/seed/shanning-og/1200/630'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased bg-texture min-h-screen">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
