"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";

export function useTranslation() {
    const { language } = useLanguage();
    return useMemo(
        () => (translations[language] || translations.ko) as typeof translations.ko,
        [language]
    );
}

