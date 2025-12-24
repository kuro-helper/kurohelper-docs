import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import { Banner } from 'fumadocs-ui/components/banner';

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
        <Banner>更新文檔也需要時間，所以建議還是加入官方討論群才能得到第一手消息</Banner>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
