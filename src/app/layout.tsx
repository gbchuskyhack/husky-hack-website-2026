import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "../providers/RecaptchaProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Husky Hack Website 2026",
    description: "Husky Hack 2026",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <RecaptchaProvider>
                    {children}
                </RecaptchaProvider>
            </body>
        </html>
    );
}
