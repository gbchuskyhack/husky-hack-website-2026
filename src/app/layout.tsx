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

export const metadata: Metadata = {
    title: "HuskyHack",
    description: "Husky Hack 2026",
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
