"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/constants/translations";
import styles from "./page.module.scss";

export default function EstimatePage() {
    const { language } = useLanguage();
    const t = (translations[language] ||
        translations.ko) as typeof translations.ko;

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
    const [showModal, setShowModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const shouldScrollToError = useRef(false);

    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // 기본 정보 검증
        if (!formData.name.trim()) {
            newErrors.name = t.estimate.basicInfo.errors.name;
        }
        if (!formData.email.trim()) {
            newErrors.email = t.estimate.basicInfo.errors.email;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = t.estimate.basicInfo.errors.emailInvalid;
        }
        if (!formData.contact.trim()) {
            newErrors.contact = t.estimate.basicInfo.errors.contact;
        }

        // 서비스 정보 검증
        if (!formData.companyName.trim()) {
            newErrors.companyName = t.estimate.serviceInfo.errors.companyName;
        }
        if (!formData.serviceName.trim()) {
            newErrors.serviceName = t.estimate.serviceInfo.errors.serviceName;
        }
        if (!formData.serviceDescription.trim()) {
            newErrors.serviceDescription =
                t.estimate.serviceInfo.errors.serviceDescription;
        }
        if (formData.currentProblems.length === 0) {
            newErrors.currentProblems =
                t.estimate.serviceInfo.errors.currentProblems;
        }

        // 문제 보고 검증
        if (!formData.problemDescription.trim()) {
            newErrors.problemDescription =
                t.estimate.problemReport.errors.problemDescription;
        }
        if (!formData.privacyConsent) {
            newErrors.privacyConsent =
                t.estimate.problemReport.errors.privacyConsent;
        }

        setErrors(newErrors);
        return {
            isValid: Object.keys(newErrors).length === 0,
            errors: newErrors,
        };
    };

    // 에러 상태 변경 시 첫 번째 에러 필드로 스크롤
    useEffect(() => {
        if (shouldScrollToError.current && Object.keys(errors).length > 0) {
            const firstErrorField = Object.keys(errors)[0];
            if (firstErrorField) {
                setTimeout(() => {
                    const errorElement =
                        document.getElementById(firstErrorField);
                    if (errorElement) {
                        errorElement.scrollIntoView({
                            behavior: "smooth",
                            block: "center",
                        });
                        errorElement.focus();
                    }
                }, 100);
            }
            shouldScrollToError.current = false;
        }
    }, [errors]);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const validation = validateForm();
        if (!validation.isValid) {
            // 에러 상태 업데이트 후 스크롤하도록 플래그 설정
            shouldScrollToError.current = true;
            return;
        }

        setIsSubmitting(true);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    const handleModalConfirm = () => {
        setShowModal(false);
        // 폼 초기화
        setFormData({
            name: "",
            email: "",
            contact: "",
            companyName: "",
            serviceName: "",
            serviceDescription: "",
            serviceScale: "",
            serviceUrl: "",
            currentProblems: [],
            problemDescription: "",
            techStack: [],
            developmentMethod: "",
            privacyConsent: false,
        });
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

    return (
        <div className={styles.page}>
            {showModal && (
                <div className={styles.modalOverlay} onClick={handleModalClose}>
                    <div
                        className={styles.modal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className={styles.modalTitle}>
                            {t.estimate.modal.title}
                        </h2>
                        <div className={styles.modalContent}>
                            {t.estimate.modal.content.map(
                                (text: string, index: number) => (
                                    <p key={index}>{text}</p>
                                )
                            )}
                        </div>
                        <div className={styles.modalButtons}>
                            <button
                                type="button"
                                className={styles.modalCancelButton}
                                onClick={handleModalClose}
                            >
                                {t.estimate.modal.cancel}
                            </button>
                            <button
                                type="button"
                                className={styles.modalConfirmButton}
                                onClick={handleModalConfirm}
                            >
                                {t.estimate.modal.confirm}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {showTermsModal && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setShowTermsModal(false)}
                >
                    <div
                        className={styles.termsModal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            className={styles.termsModalClose}
                            onClick={() => setShowTermsModal(false)}
                        >
                            ×
                        </button>
                        <h2 className={styles.termsModalTitle}>
                            개인정보 수집·이용 동의
                        </h2>
                        <div className={styles.termsModalContent}>
                            <div className={styles.termsSection}>
                                <h3 className={styles.termsSectionTitle}>
                                    <span className={styles.termsSectionNumber}>
                                        1.
                                    </span>{" "}
                                    개인정보 수집·이용 안내
                                </h3>
                                <p className={styles.termsText}>
                                    회사는 아래와 같이 개인정보를 수집·이용하고
                                    있습니다.
                                </p>
                                <p className={styles.termsText}>
                                    컨설팅 요청 접수 및 무료 진단 진행을 위해
                                    아래의 개인정보를 수집·이용합니다.
                                </p>
                            </div>

                            <div className={styles.termsSection}>
                                <h3 className={styles.termsSectionTitle}>
                                    <span className={styles.termsSectionNumber}>
                                        2.
                                    </span>{" "}
                                    수집 항목
                                </h3>
                                <ul className={styles.termsList}>
                                    <li>이름(또는 닉네임)</li>
                                    <li>이메일 주소</li>
                                    <li>연락처</li>
                                    <li>컨설팅 요청 내용</li>
                                </ul>
                            </div>

                            <div className={styles.termsSection}>
                                <h3 className={styles.termsSectionTitle}>
                                    <span className={styles.termsSectionNumber}>
                                        3.
                                    </span>{" "}
                                    수집·이용 목적
                                </h3>
                                <ul className={styles.termsList}>
                                    <li>컨설팅 요청 접수 및 본인 확인</li>
                                    <li>컨설팅 진행을 위한 안내 및 의사소통</li>
                                    <li>
                                        요청 내용 검토 및 사전 진단(무료 진단
                                        포함)
                                    </li>
                                    <li>진단 결과 및 컨설팅 관련 후속 안내</li>
                                </ul>
                            </div>

                            <div className={styles.termsSection}>
                                <h3 className={styles.termsSectionTitle}>
                                    <span className={styles.termsSectionNumber}>
                                        4.
                                    </span>{" "}
                                    보유 및 이용 기간
                                </h3>
                                <p className={styles.termsText}>
                                    컨설팅 요청일로부터 최대 1년간 보관 후 파기
                                </p>
                                <p className={styles.termsText}>
                                    단, 관련 법령에 따라 보관이 필요한 경우 해당
                                    법령을 따릅니다.
                                </p>
                            </div>

                            <div className={styles.termsSection}>
                                <h3 className={styles.termsSectionTitle}>
                                    <span className={styles.termsSectionNumber}>
                                        5.
                                    </span>{" "}
                                    동의 거부 권리 및 불이익
                                </h3>
                                <p className={styles.termsText}>
                                    개인정보 수집·이용에 대한 동의를 거부할 수
                                    있으나,
                                </p>
                                <p className={styles.termsText}>
                                    동의하지 않을 경우 컨설팅 요청 접수가 제한될
                                    수 있습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className={styles.container}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    {/* 기본 정보 섹션 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            {t.estimate.basicInfo.title}
                        </h2>

                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>
                                {t.estimate.basicInfo.name}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.basicInfo.placeholders.name
                                }
                            />
                            {errors.name && (
                                <span className={styles.error}>
                                    {errors.name}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>
                                {t.estimate.basicInfo.email}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.basicInfo.placeholders.email
                                }
                            />
                            {errors.email && (
                                <span className={styles.error}>
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="contact" className={styles.label}>
                                {t.estimate.basicInfo.contact}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="contact"
                                name="contact"
                                value={formData.contact}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.contact ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.basicInfo.placeholders.contact
                                }
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
                        <h2 className={styles.sectionTitle}>
                            {t.estimate.serviceInfo.title}
                        </h2>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="companyName"
                                className={styles.label}
                            >
                                {t.estimate.serviceInfo.companyName}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="companyName"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.companyName ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.serviceInfo.placeholders
                                        .companyName
                                }
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
                                {t.estimate.serviceInfo.serviceName}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="serviceName"
                                name="serviceName"
                                value={formData.serviceName}
                                onChange={handleChange}
                                className={`${styles.input} ${errors.serviceName ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.serviceInfo.placeholders
                                        .serviceName
                                }
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
                                {t.estimate.serviceInfo.serviceDescription}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="serviceDescription"
                                name="serviceDescription"
                                value={formData.serviceDescription}
                                onChange={handleChange}
                                rows={4}
                                className={`${styles.textarea} ${errors.serviceDescription ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.serviceInfo.placeholders
                                        .serviceDescription
                                }
                            />
                            {errors.serviceDescription && (
                                <span className={styles.error}>
                                    {errors.serviceDescription}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                {t.estimate.serviceInfo.serviceScale}
                            </label>
                            <div className={styles.optionGroup}>
                                {t.estimate.serviceInfo.scaleOptions.map(
                                    (option: string) => (
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
                                    )
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label
                                htmlFor="serviceUrl"
                                className={styles.label}
                            >
                                {t.estimate.serviceInfo.serviceUrl}
                            </label>
                            <input
                                type="text"
                                id="serviceUrl"
                                name="serviceUrl"
                                value={formData.serviceUrl}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder={
                                    t.estimate.serviceInfo.placeholders
                                        .serviceUrl
                                }
                            />
                        </div>
                    </div>

                    {/* 문제 보고 섹션 */}
                    <div className={styles.section}>
                        <h2 className={styles.sectionTitle}>
                            {t.estimate.problemReport.title}
                        </h2>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                {t.estimate.serviceInfo.currentProblems}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <div className={styles.optionGroup}>
                                {t.estimate.problemReport.problemOptions.map(
                                    (option: string) => (
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
                                    )
                                )}
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
                                {t.estimate.problemReport.problemDescription}{" "}
                                <span className={styles.required}>*</span>
                            </label>
                            <textarea
                                id="problemDescription"
                                name="problemDescription"
                                value={formData.problemDescription}
                                onChange={handleChange}
                                rows={6}
                                className={`${styles.textarea} ${errors.problemDescription ? styles.inputError : ""}`}
                                placeholder={
                                    t.estimate.problemReport.placeholders
                                        .problemDescription
                                }
                            />
                            {errors.problemDescription && (
                                <span className={styles.error}>
                                    {errors.problemDescription}
                                </span>
                            )}
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                {t.estimate.problemReport.techStack}
                            </label>
                            <div className={styles.optionGroup}>
                                {t.estimate.problemReport.techStackOptions.map(
                                    (option: string) => (
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
                                    )
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label}>
                                {t.estimate.problemReport.developmentMethod}
                            </label>
                            <div className={styles.optionGroup}>
                                {t.estimate.problemReport.developmentMethodOptions.map(
                                    (option: string) => (
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
                                    )
                                )}
                            </div>
                        </div>

                        <div
                            className={styles.formGroup}
                            style={{ paddingTop: "20px" }}
                        >
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
                                    {t.estimate.problemReport.privacyConsent}{" "}
                                    <span className={styles.required}>*</span>{" "}
                                    <button
                                        type="button"
                                        className={styles.termsLink}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setShowTermsModal(true);
                                        }}
                                    >
                                        {t.estimate.problemReport.viewTerms}
                                    </button>
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
                        {isSubmitting
                            ? t.estimate.submitting
                            : t.estimate.submitButton}
                    </button>
                </form>
            </div>
        </div>
    );
}
