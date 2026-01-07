import type { Metadata } from "next";
import { VT323, Chivo_Mono } from "next/font/google";
import "./globals.css";
import RecaptchaProvider from "../providers/RecaptchaProvider";

const vt323 = VT323({
    weight: "400",
    variable: "--font-vt323",
    subsets: ["latin"],
});

const chivoMono = Chivo_Mono({
    variable: "--font-chivo-mono",
    subsets: ["latin"],
});

// 1. Define the Base URL to fix image links in production
// Change this to your actual Vercel domain once you have it
const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000';

export const metadata: Metadata = {
    metadataBase: new URL(baseUrl),
    title: "HuskyHack 2026",
    description: "Everyone has a story to tell. Turn yours into something real alongside 100+ new friends in the heart of Toronto.",
    openGraph: {
        title: "HuskyHack 2026",
        description: "Everyone has a story to tell. Turn yours into something real alongside 100+ new friends in the heart of Toronto.",
        type: "website",
        url: "https://huskyhack.com",
        siteName: 'HuskyHack',
        locale: 'en_US',
        images: [
            {
                url: '/husky-use-computer.png', // Must be in your public folder
                width: 763,
                height: 554,
                alt: 'HuskyHack 2026 Preview',
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${vt323.variable} ${chivoMono.variable}`}>
                <RecaptchaProvider>
                    {children}
                </RecaptchaProvider>
            </body>
        </html>
    );
}
