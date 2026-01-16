"use client";

import { useMemo } from "react";
import DOMPurify from "isomorphic-dompurify";
import { cn } from "@/utils/cn";

interface SafeHTMLProps {
    html: string;
    className?: string;
}

export default function SafeHTML({ html, className }: SafeHTMLProps) {
    const sanitized = useMemo(() => {
        return DOMPurify.sanitize(html, {
            ALLOWED_TAGS: ["br", "p", "strong", "em", "u", "span"],
            ALLOWED_ATTR: ["class"],
        });
    }, [html]);

    return (
        <div
            className={cn(className)}
            dangerouslySetInnerHTML={{ __html: sanitized }}
        />
    );
}

