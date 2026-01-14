"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "ko" | "en" | "ja";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("ko");

    useEffect(() => {
        // 브라우저 언어 감지
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith("ja")) {
            setLanguageState("ja");
        } else if (browserLang.startsWith("en")) {
            setLanguageState("en");
        } else {
            setLanguageState("ko");
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang && ["ko", "en", "ja"].includes(savedLang)) {
            setLanguageState(savedLang);
        }
    }, []);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}

