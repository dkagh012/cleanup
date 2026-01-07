"use client";

import { useState, FormEvent } from "react";
import styles from "./page.module.scss";
import Link from "next/link";

export default function EstimatePage() {
    const [formData, setFormData] = useState({
        // 기본 정보
        name: "",
        email: "",
        contact: "",
        // 서비스 정보
        companyName: "",
        serviceName: "",
        serviceDescription: "",
        serviceScale: "",
        serviceUrl: "",
        currentProblems: [] as string[],
        // 문제 보고
        problemDescription: "",
        techStack: [] as string[],
        developmentMethod: "",
        privacyConsent: false,
    });

    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const serviceScaleOptions = [
        "내부 테스트 단계",
        "운영하면서 문제가 느껴짐",
        "기능이 많고, 서비스가 꽤 복잡한 상태",
        "잘 모르겠음",
    ];

    const currentProblemsOptions = [
        "기능이 제대로 작동하지 않음",
        "오류가 자주 발생",
        "특정 상황에서만 문제가 생김",
        "속도가 느림",
        "업데이트 또는 수정하면 다른 기능이 깨짐",
    ];

    const problemOptions = [
        "기능이 제대로 작동하지 않음",
        "오류가 자주 발생",
        "특정 상황에서만 문제가 생김",
        "속도가 느림",
        "업데이트 또는 수정하면 다른 기능이 깨짐",
        "AI로 만든 기능이 의도대로 동작하지 않음",
        "AI가 만든 코드라 구조를 파악하기 어려움",
        "어디가 문제인지 전혀 모르겠음",
    ];

    const techStackOptions = [
        "React / Next.js",
        "Vue / Nuxt",
        "React Native / Flutter",
        "Node.js / Nest.js",
        "Django / FastAPI",
        "Spring / Java",
    ];

    const developmentMethodOptions = [
        "AI로 대부분 구현",
        "외주 개발",
        "혼합",
        "모르겠음",
    ];

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // 기본 정보 검증
        if (!formData.name.trim()) {
            newErrors.name = "이름을 입력해주세요.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "이메일을 입력해주세요.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "올바른 이메일 형식이 아닙니다.";
        }
        if (!formData.contact.trim()) {
            newErrors.contact = "연락처를 입력해주세요.";
        }

        // 서비스 정보 검증
        if (!formData.companyName.trim()) {
            newErrors.companyName = "회사명을 입력해주세요.";
        }
        if (!formData.serviceName.trim()) {
            newErrors.serviceName = "서비스명을 입력해주세요.";
        }
        if (!formData.serviceDescription.trim()) {
            newErrors.serviceDescription = "서비스 간략 설명을 입력해주세요.";
        }
        if (formData.currentProblems.length === 0) {
            newErrors.currentProblems = "현재 겪고 있는 문제를 선택해주세요.";
        }

        // 문제 보고 검증
        if (!formData.problemDescription.trim()) {
            newErrors.problemDescription = "문제 설명을 입력해주세요.";
        }
        if (!formData.privacyConsent) {
            newErrors.privacyConsent = "개인정보 수집동의에 체크해주세요.";
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

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handleCheckboxChange = (name: string, value: string) => {
        setFormData((prev) => {
            const currentArray = prev[name as keyof typeof prev] as string[];
            const newArray = currentArray.includes(value)
                ? currentArray.filter((item) => item !== value)
                : [...currentArray, value];
            return { ...prev, [name]: newArray };
        });
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const handlePrivacyConsentChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData((prev) => ({ ...prev, privacyConsent: e.target.checked }));
        if (errors.privacyConsent) {
            setErrors((prev) => ({ ...prev, privacyConsent: "" }));
        }
    };

    const handleRadioChange = (name: string, value: string) => {
        setFormData((prev) => ({ ...prev, [name]: value }));
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
                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* 기본 정보 섹션 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>기본 정보</h2>

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
                                placeholder="이름을 입력해주세요."
                            />
                            {errors.name && (
                                <span className={styles.error}>
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                이메일{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                placeholder="이메일을 입력해주세요."
                            />
                            {errors.email && (
                                <span className={styles.error}>
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contact" className={styles.label}>
                                연락처{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.contact ? styles.inputError : ""}`}
                                placeholder="연락처를 입력해주세요."
                            />
                            {errors.contact && (
                                <span className={styles.error}>
                                    {errors.contact}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* 서비스 정보 섹션 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>서비스 정보</h2>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="companyName"
                                className={styles.label}
                            >
                                회사명{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.companyName ? styles.inputError : ""}`}
                                placeholder="회사명을 입력해주세요."
                            />
                            {errors.companyName && (
                                <span className={styles.error}>
                                    {errors.companyName}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="serviceName"
                                className={styles.label}
                            >
                                서비스명{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="serviceName"
                                name="serviceName"
                                value={formData.serviceName}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.serviceName ? styles.inputError : ""}`}
                                placeholder="서비스명을 입력해주세요."
                            />
                            {errors.serviceName && (
                                <span className={styles.error}>
                                    {errors.serviceName}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="serviceDescription"
                                className={styles.label}
                            >
                                서비스 간략 설명{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="serviceDescription"
                                name="serviceDescription"
                                value={formData.serviceDescription}
                                onChange={handleChange}
                                rows={4}
                                className={`${styles.textarea} ${errors.serviceDescription ? styles.inputError : ""}`}
                                placeholder="서비스에 대한 간략한 설명을 입력해주세요."
                            />
                            {errors.serviceDescription && (
                                <span className={styles.error}>
                                    {errors.serviceDescription}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>서비스 규모</label>
                            <div className={styles.optionGroup}>
                                {serviceScaleOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`${styles.optionButton} ${formData.serviceScale === option ? styles.optionButtonActive : ""}`}
                                        onClick={() =>
                                            handleRadioChange(
                                                "serviceScale",
                                                option
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="serviceUrl"
                                className={styles.label}
                            >
                                서비스 접속 URL
                            </label>
                            <input
                                type="url"
                                id="serviceUrl"
                                name="serviceUrl"
                                value={formData.serviceUrl}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="URL을 입력해주세요"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                현재 겪고 있는 문제(중복 선택){" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.optionGroup}>
                                {currentProblemsOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`${styles.optionButton} ${formData.currentProblems.includes(option) ? styles.optionButtonActive : ""}`}
                                        onClick={() =>
                                            handleCheckboxChange(
                                                "currentProblems",
                                                option
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {errors.currentProblems && (
                                <span className={styles.error}>
                                    {errors.currentProblems}
                                </span>
                            )}
                        </div>
                    </div>

                    {/* 문제 보고 섹션 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>문제 보고</h2>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                현재 겪고 있는 문제(중복 선택){" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.optionGroup}>
                                {problemOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`${styles.optionButton} ${formData.currentProblems.includes(option) ? styles.optionButtonActive : ""}`}
                                        onClick={() =>
                                            handleCheckboxChange(
                                                "currentProblems",
                                                option
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {errors.currentProblems && (
                                <span className={styles.error}>
                                    {errors.currentProblems}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="problemDescription"
                                className={styles.label}
                            >
                                문제 설명{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="problemDescription"
                                name="problemDescription"
                                value={formData.problemDescription}
                                onChange={handleChange}
                                rows={6}
                                className={`${styles.textarea} ${errors.problemDescription ? styles.inputError : ""}`}
                                placeholder="내용을 입력해주세요"
                            />
                            {errors.problemDescription && (
                                <span className={styles.error}>
                                    {errors.problemDescription}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                사용 기술 스택
                            </label>
                            <div className={styles.optionGroup}>
                                {techStackOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`${styles.optionButton} ${formData.techStack.includes(option) ? styles.optionButtonActive : ""}`}
                                        onClick={() =>
                                            handleCheckboxChange(
                                                "techStack",
                                                option
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>개발 방식</label>
                            <div className={styles.optionGroup}>
                                {developmentMethodOptions.map((option) => (
                                    <button
                                        key={option}
                                        type="button"
                                        className={`${styles.optionButton} ${formData.developmentMethod === option ? styles.optionButtonActive : ""}`}
                                        onClick={() =>
                                            handleRadioChange(
                                                "developmentMethod",
                                                option
                                            )
                                        }
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <div className={styles.checkboxGroup}>
                                <input
                                    type="checkbox"
                                    id="privacyConsent"
                                    name="privacyConsent"
                                    checked={formData.privacyConsent}
                                    onChange={handlePrivacyConsentChange}
                                    className={styles.checkbox}
                                />
                                <label
                                    htmlFor="privacyConsent"
                                    className={styles.checkboxLabel}
                                >
                                    개인정보 수집동의{" "}
                                    <span className={styles.required}>*</span>{" "}
                                    <Link
                                        href="#"
                                        className={styles.termsLink}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // 약관 보기 로직
                                        }}
                                    >
                                        [약관보기]
                                    </Link>
                                </label>
                            </div>
                            {errors.privacyConsent && (
                                <span className={styles.error}>
                                    {errors.privacyConsent}
                                </span>
                            )}
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitButton}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "제출 중..." : "견적 요청"}
                    </button>
                </form>
            </div>
        </div>
    );
}
