"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import styles from "./page.module.scss";

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
    const [showModal, setShowModal] = useState(false);
    const [showTermsModal, setShowTermsModal] = useState(false);
    const shouldScrollToError = useRef(false);

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
        "AI가 만든 코드라 구조를 파악하기 어려움",
        "어디가 문제인지 전혀 모르겠음",
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
                            견적 요청이 접수되었습니다
                        </h2>
                        <div className={styles.modalContent}>
                            <p>요청 내용을 확인한 후</p>
                            <p>영업일 기준 3일 이내에 안내드릴 예정입니다.</p>
                            <p>필요 정보 확인 후 무료 진단이 진행됩니다.</p>
                        </div>
                        <div className={styles.modalButtons}>
                            <button
                                type="button"
                                className={styles.modalCancelButton}
                                onClick={handleModalClose}
                            >
                                취소
                            </button>
                            <button
                                type="button"
                                className={styles.modalConfirmButton}
                                onClick={handleModalConfirm}
                            >
                                확인
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
                                type="text"
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
                                type="text"
                                id="serviceUrl"
                                name="serviceUrl"
                                value={formData.serviceUrl}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="URL을 입력해주세요"
                            />
                        </div>
                    </div>

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
                            문제 설명 <span className={styles.required}>*</span>
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
                        <label className={styles.label}>사용 기술 스택</label>
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
                                개인정보 수집동의{" "}
                                <span className={styles.required}>*</span>{" "}
                                <button
                                    type="button"
                                    className={styles.termsLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setShowTermsModal(true);
                                    }}
                                >
                                    [약관보기]
                                </button>
                            </label>
                        </div>
                        {errors.privacyConsent && (
                            <span className={styles.error}>
                                {errors.privacyConsent}
                            </span>
                        )}
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
