import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AOSProvider from "@/components/layout/AOSProvider";
import ViewportScale from "@/components/layout/ViewportScale";
import "@/styles/globals.scss";

export const metadata: Metadata = {
    title: "VibeCoding 클린업 | 정비된 코드로 성장하세요",
    description:
        "바이브코딩으로 만들어진 서비스를 정비된 코드 구조로 리빌딩합니다. 불안정한 구조와 기술 부채를 해결하고, 확장 가능한 아키텍처로 전환하세요.",
    keywords: [
        "코드 클린업",
        "리팩토링",
        "기술 부채",
        "바이브코딩",
        "코드 정비",
    ],
    openGraph: {
        title: "VibeCoding 클린업",
        description: "정비된 코드로 성장하세요",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body>
                <AOSProvider>
                    <ViewportScale>
                        <Header />
                        <main>{children}</main>
                        <Footer />
                    </ViewportScale>
                </AOSProvider>
            </body>
        </html>
    );
}
