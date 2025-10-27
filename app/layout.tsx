import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title: {
    default: 'KuroHelper使用說明文件',
    template: '%s | KuroHelper-doc',
  },
  description: 'KuroHelper 使用說明文件',
  keywords: ['KuroHelper'],
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-Hant" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
