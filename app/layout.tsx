import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://personal-career-portfolio-2026.jovial-fox-1949.chatgpt.site"),
  title: "黄盛宝｜产品经理个人作品集",
  description: "黄盛宝的产品经理作品集：5 年+ To B / To G 产品及用户运营经验，覆盖政企数字化、数据运营与复杂项目交付。",
  icons: { icon: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/favicon.svg` },
  openGraph: { title: "黄盛宝｜产品经理个人作品集", description: "让复杂业务，成为可落地的产品。", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
