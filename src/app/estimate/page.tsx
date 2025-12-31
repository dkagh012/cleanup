"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.scss";
import Link from "next/link";
export default function EstimatePage() {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        description: "",
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.name.trim()) {
            newErrors.name = "이름을 입력해주세요.";
        }

        if (!formData.contact.trim()) {
            newErrors.contact = "연락처를 입력해주세요.";
        } else if (!/^[0-9-]+$/.test(formData.contact)) {
            newErrors.contact = "올바른 연락처 형식이 아닙니다.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다.";
        }

        if (!formData.description.trim()) {
            newErrors.description = "프로젝트 설명을 입력해주세요.";
        } else if (formData.description.trim().length < 10) {
            newErrors.description = "프로젝트 설명을 10자 이상 입력해주세요.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // 실제 백엔드 연동은 여기서 진행
        // 현재는 시뮬레이션
        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // 폼 초기화
        setFormData({
            name: "",
            contact: "",
            email: "",
            description: "",
        });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // 에러 초기화
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h1 className={styles.successTitle}>
                            견적 요청이 접수되었습니다
                        </h1>
                        <p className={styles.successDescription}>
                            빠른 시일 내에 연락드리겠습니다.
                        </p>
                        <Link href="/" className={styles.backButton}>
                            홈으로 돌아가기
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div>
                    <h1 className={styles.title}>기본 정보</h1>
                </div>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>
                            이름 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                            placeholder="홍길동"
                        />
                        {errors.name && (
                            <span className={styles.error}>{errors.name}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="contact" className={styles.label}>
                            연락처 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="tel"
                            id="contact"
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.contact ? styles.inputError : ""}`}
                            placeholder="010-1234-5678"
                        />
                        {errors.contact && (
                            <span className={styles.error}>
                                {errors.contact}
                            </span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email" className={styles.label}>
                            이메일 <span className={styles.required}>*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                            placeholder="example@email.com"
                        />
                        {errors.email && (
                            <span className={styles.error}>{errors.email}</span>
                        )}
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description" className={styles.label}>
                            프로젝트 설명{" "}
                            <span className={styles.required}>*</span>
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={6}
                            className={`${styles.textarea} ${errors.description ? styles.inputError : ""}`}
                            placeholder="프로젝트의 현재 상태, 주요 문제점, 개선하고 싶은 부분 등을 자세히 설명해주세요."
                        />
                        {errors.description && (
                            <span className={styles.error}>
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "제출 중..." : "견적 요청하기"}
                    </button>
                </form>
            </div>
        </div>
    );
}
