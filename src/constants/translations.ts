export const translations = {
    ko: {
        header: {
            requestQuote: "클린업 견적 요청",
        },
        hero: {
            title: ["아이디어는 바이브 코드로", "성장은 정비된 코드로"],
            cta: "클린업 견적 요청",
        },
        problem: {
            title: "바이브코딩으로 시작했다면, 이제는 정리할 시점이 올 때입니다.",
            subtitle:
                "바이브코딩으로 시작한 서비스는 운영 단계에서 정리가 필요해집니다. <br/>불안정한 구조와 쌓여가는 기술 부채는 서비스 성장을 막습니다.",
            items: [
                {
                    title: "기능이 제대로 작동하지 않음",
                    description:
                        "만들었던 기능이 예상대로 작동하지 않거나 <br/> 특정 상황에서 오류가 발생",
                },
                {
                    title: "유지·운영이 어려움",
                    description:
                        "코드가 뒤엉켜 있어 작은 기능 하나만 수정해도<br/> 다른 부분에서 예기치 않은 문제가 발생함",
                },
                {
                    title: "확장·추가 개발이 어려움",
                    description:
                        "새로운 기능을 만들고 싶어도 기존 코드와 충돌하거나 <br/> 개발 속도가 점점 느려져 서비스 확장이 어려워짐",
                },
            ],
        },
        process: {
            title: "클린업 진행 과정",
            subtitle:
                "지금의 코드를 점검하고, 고치고, 더 성장할 수 있는 구조로 만드는 전체 절차입니다.",
            steps: [
                {
                    number: "1",
                    title: "초기 진단 & 코드 스캔(무료)",
                    description:
                        "서비스 전체 구조를 빠르게 스캔해 문제 영역을 구분합니다.",
                    details: "(코드 구조·오류·중복·성능·보안 1차 점검)",
                },
                {
                    number: "2",
                    title: "상세 분석 & 기술 부채 분류",
                    description:
                        "발견된 문제들을 카테고리별로 정밀 분류하고 영향도를 평가합니다.",
                    details: "(영향도 분석·우선순위 결정·리스크 구간 도출)",
                },
                {
                    number: "3",
                    title: "아키텍처 재정리",
                    description:
                        "서비스가 안정적으로 돌아가도록 폴더 구조, 모듈, 의존성을 재배치합니다.",
                    details: "(구조 정비·필요한 경우 부분적 재구현)",
                },
                {
                    number: "4",
                    title: "핵심 기능 클린업",
                    description:
                        "복잡하거나 깨진 기능을 안정화하고 로직을 재정비합니다.",
                    details: "(중복 제거·로직 간소화·오류 수정·API 정리)",
                },
                {
                    number: "5",
                    title: "테스트·보안·성능 개선",
                    description:
                        "테스트를 추가하고 기본 보안 점검 및 성능 최적화를 진행합니다.",
                    details: "(테스트 코드·취약점 점검·속도 개선)",
                },
                {
                    number: "6",
                    title: "배포·운영 자동화 & 문서화",
                    description:
                        "운영 효율을 높이기 위해 배포 환경을 정리하고 필요한 문서를 제공합니다.",
                    details: "(CI/CD·환경설정 정리·개발 규칙 문서화)",
                },
            ],
        },
        faq: {
            items: [
                {
                    question:
                        "우리 앱이 클린업이 필요한 상태인지 어떻게 알 수 있나요?",
                    answer: `다음 중 하나라도 해당된다면 클린업이 필요한 신호입니다.
• 기능은 있는데 '가끔' 혹은 특정 상황에서만 오류가 난다.
• 새 기능을 추가하면 기존 기능이 갑자기 깨진다.
• 같은 문제를 여러 번 고쳐도 시간이 지나면 다시 발생한다.
• 개발 속도가 점점 느려지고 유지보수 비용이 커진다.
• AI에게 기능을 요청했는데 의도와 다른 기능이 만들어지거나, 기능이 만들어져도 실제로 제대로 동작하지 않는다.
• 어디서 오류가 발생했는지 추적하기가 점점 어려워지고, 수정하면 다른 곳에서 문제가 생긴다.

이런 상황들은 대부분 빠르게 만든 초기 코드(MVP/바이브코딩)에서 공통적으로 나타나는 문제이며, 서비스를 확장하기 전 반드시 구조 정비(클린업)가 필요한 상태라는 의미입니다.`,
                },
                {
                    question: "무료 진단을 받으면 무엇을 알 수 있나요?",
                    answer: `무료 진단에서는 다음을 명확하게 알려드립니다.
• 현재 코드의 위험 요소와 기술 부채
• 자주 발생하는 오류의 근본 원인
• 향후 확장 시 문제가 될 가능성
• 개선을 위해 어떤 작업이 필요한지 등등`,
                },
                {
                    question: "클린업 과정은 어떻게 진행되나요?",
                    answer: `우리의 프로세스는 다음 6단계로 진행됩니다.
1. 현황 파악(무료) - 기능·코드 문제 원인을 빠르게 스캔
2. 심층 점검 - 구조·리스크·기술 부채를 세부 분석
3. 개선 전략 수립 - 우선순위 및 처리 범위 정의
4. 기능 오류 및 구조 개선 작업 - 깨진 기능/불안정 로직 정상화
5. 성능·안정성 강화 작업 - 테스트, 보안, 프로젝트 구조 정리
6. 지속 가능한 코드 기반 정비 - 향후 확장 가능한 형태로 재정리`,
                },
                {
                    question: "어떤 종류의 앱도 클린업이 가능한가요?",
                    answer: `네. 다음과 같은 상황이라면 대부분 가능합니다.
• React, React Native, Next.js, Flutter 등으로 만든 웹·앱
• 파이어베이스, Supabase, Node.js, Django 등 다양한 백엔드 구조
• 외주 개발 후 유지보수가 어려워진 프로젝트
• MVP 단계에서 빠르게 만들어진 서비스

단 예외는 있습니다. 코드가 거의 없는 상태 / 완전히 새로 만드는 게 더 효율적인 경우에는 리빌드를 권장드릴 수도 있습니다.`,
                },
                {
                    question: "작업 기간은 얼마나 걸리나요?",
                    answer: `일반적으로 다음 기준으로 책정됩니다:
• 소규모 문제(기능 몇 개 중심) → 2주 이상
• 중간 규모(전체 구조 정비 + 안정화) → 4주 이상
• 대규모 리팩토링/확장 대비 정비 → 8주 이상

정확한 기간은 무료 진단 후, 발견된 문제의 양과 범위에 따라 안내해드립니다.`,
                },
            ],
        },
        footer: {
            email: "gesun@gmail.com",
            copyright: "©2025 gesun",
        },
        estimate: {
            basicInfo: {
                title: "기본 정보",
                name: "이름",
                email: "이메일",
                contact: "연락처",
                placeholders: {
                    name: "이름을 입력해주세요.",
                    email: "이메일을 입력해주세요.",
                    contact: "연락처를 입력해주세요.",
                },
                errors: {
                    name: "이름을 입력해주세요.",
                    email: "이메일을 입력해주세요.",
                    emailInvalid: "올바른 이메일 형식이 아닙니다.",
                    contact: "연락처를 입력해주세요.",
                },
            },
            serviceInfo: {
                title: "서비스 정보",
                companyName: "회사명",
                serviceName: "서비스명",
                serviceDescription: "서비스 간략 설명",
                serviceScale: "서비스 규모",
                serviceUrl: "서비스 접속 URL",
                currentProblems: "현재 겪고 있는 문제(중복 선택)",
                placeholders: {
                    companyName: "회사명을 입력해주세요.",
                    serviceName: "서비스명을 입력해주세요.",
                    serviceDescription:
                        "서비스에 대한 간략한 설명을 입력해주세요.",
                    serviceUrl: "URL을 입력해주세요",
                },
                errors: {
                    companyName: "회사명을 입력해주세요.",
                    serviceName: "서비스명을 입력해주세요.",
                    serviceDescription: "서비스 간략 설명을 입력해주세요.",
                    currentProblems: "현재 겪고 있는 문제를 선택해주세요.",
                },
                scaleOptions: [
                    "내부 테스트 단계",
                    "운영하면서 문제가 느껴짐",
                    "기능이 많고, 서비스가 꽤 복잡한 상태",
                    "잘 모르겠음",
                ],
            },
            problemReport: {
                title: "문제 보고",
                problemDescription: "문제 설명",
                techStack: "사용 기술 스택",
                developmentMethod: "개발 방식",
                privacyConsent: "개인정보 수집동의",
                viewTerms: "[약관보기]",
                placeholders: {
                    problemDescription: "내용을 입력해주세요",
                },
                errors: {
                    problemDescription: "문제 설명을 입력해주세요.",
                    privacyConsent: "개인정보 수집동의에 체크해주세요.",
                },
                problemOptions: [
                    "기능이 제대로 작동하지 않음",
                    "오류가 자주 발생",
                    "특정 상황에서만 문제가 생김",
                    "속도가 느림",
                    "업데이트 또는 수정하면 다른 기능이 깨짐",
                    "AI로 만든 기능이 의도대로 동작하지 않음",
                    "AI가 만든 코드라 구조를 파악하기 어려움",
                    "어디가 문제인지 전혀 모르겠음",
                ],
                techStackOptions: [
                    "React / Next.js",
                    "Vue / Nuxt",
                    "React Native / Flutter",
                    "Node.js / Nest.js",
                    "Django / FastAPI",
                    "Spring / Java",
                    "AI가 만든 코드라 구조를 파악하기 어려움",
                    "어디가 문제인지 전혀 모르겠음",
                ],
                developmentMethodOptions: [
                    "AI로 대부분 구현",
                    "외주 개발",
                    "혼합",
                    "모르겠음",
                ],
            },
            submitButton: "견적 요청",
            submitting: "제출 중...",
            modal: {
                title: "견적 요청이 접수되었습니다",
                content: [
                    "요청 내용을 확인한 후<br/>영업일 기준 3일 이내에 안내드릴 예정입니다.",
                    "필요 정보 확인 후 무료 진단이 진행됩니다.",
                ],
                cancel: "취소",
                confirm: "확인",
            },
            termsModal: {
                title: "개인정보 수집·이용 동의",
                sections: {
                    overview: {
                        title: "개인정보 수집·이용 안내",
                        content: [
                            "회사는 아래와 같이 개인정보를 수집·이용하고 있습니다.",
                            "컨설팅 요청 접수 및 무료 진단 진행을 위해 아래의 개인정보를 수집·이용합니다.",
                        ],
                    },
                    collectedItems: {
                        title: "수집 항목",
                        items: [
                            "이름(또는 닉네임)",
                            "이메일 주소",
                            "연락처",
                            "컨설팅 요청 내용",
                        ],
                    },
                    purpose: {
                        title: "수집·이용 목적",
                        items: [
                            "컨설팅 요청 접수 및 본인 확인",
                            "컨설팅 진행을 위한 안내 및 의사소통",
                            "요청 내용 검토 및 사전 진단(무료 진단 포함)",
                            "진단 결과 및 컨설팅 관련 후속 안내",
                        ],
                    },
                    retention: {
                        title: "보유 및 이용 기간",
                        content: [
                            "컨설팅 요청일로부터 최대 1년간 보관 후 파기",
                            "단, 관련 법령에 따라 보관이 필요한 경우 해당 법령을 따릅니다.",
                        ],
                    },
                    refusal: {
                        title: "동의 거부 권리 및 불이익",
                        content: [
                            "개인정보 수집·이용에 대한 동의를 거부할 수 있으나,",
                            "동의하지 않을 경우 컨설팅 요청 접수가 제한될 수 있습니다.",
                        ],
                    },
                },
            },
        },
    },
    en: {
        header: {
            requestQuote: "Request Quote",
        },
        hero: {
            title: [
                "Ideas start with vibe coding.",
                "Growth needs clean, structured code.",
            ],
            cta: "Request Quote",
        },
        problem: {
            title: "If you started with vibe coding, it's time to clean things up.",
            subtitle:
                "Services built with vibe coding often need structure at the operation stage. <br/>Unstable code and tech debt slow growth.",
            items: [
                {
                    title: "Features don't work as expected",
                    description:
                        "Functions behave unpredictably <br/> or fail in specific cases",
                },
                {
                    title: "Hard to maintain and operate",
                    description:
                        "Small changes often cause <br/> unexpected issues elsewhere",
                },
                {
                    title: "Difficult to scale and extend",
                    description:
                        "New features conflict with <br/> existing code and slow development",
                },
            ],
        },
        process: {
            title: "Our Cleanup Process",
            subtitle:
                "We review, fix, and restructure your code to support stable growth.",
            steps: [
                {
                    number: "1",
                    title: "Initial Review & Code Scan (Free)",
                    description:
                        "We quickly scan the codebase to identify problem areas.",
                    details:
                        "(structure · bugs · duplication · performance · security)",
                },
                {
                    number: "2",
                    title: "Detailed Analysis & Technical Debt Assessment",
                    description:
                        "We carefully categorize identified issues and assess their impact.",
                    details:
                        "(impact analysis · priority setting · risk area identification)",
                },
                {
                    number: "3",
                    title: "Architecture Reorganization",
                    description:
                        "We rearrange folder structures, modules, and dependencies to ensure stable service operation.",
                    details:
                        "(structural cleanup · partial reimplementation when needed)",
                },
                {
                    number: "4",
                    title: "Core Feature Cleanup",
                    description:
                        "We stabilize complex or broken features and refactor the underlying logic.",
                    details:
                        "(duplication removal · logic simplification · bug fixes · API cleanup)",
                },
                {
                    number: "5",
                    title: "Testing, Security & Performance Improvements",
                    description:
                        "We add tests and perform basic security checks and performance optimization.",
                    details:
                        "(test code · vulnerability checks · speed improvements)",
                },
                {
                    number: "6",
                    title: "Deployment, Operation Automation & Documentation",
                    description:
                        "We organize the deployment environment and provide documentation to improve operational efficiency.",
                    details:
                        "(CI/CD · environment configuration · development guidelines)",
                },
            ],
        },
        faq: {
            items: [
                {
                    question: "How can I tell if my app needs cleanup?",
                    answer: `If any of the following applies, your app likely needs cleanup
Features exist but fail intermittently or only in specific situations.
Adding new features causes existing features to break.
The same issues reappear even after being fixed multiple times.
Development slows down and maintenance costs continue to increase.
You asked AI to build features, but the result differs from the intent, or the feature does not work properly in practice.
It becomes increasingly difficult to trace where errors occur, and fixing one issue causes problems elsewhere.
These issues are commonly found in early-stage codebases built quickly (MVPs or vibe coding) and indicate that structural cleanup is required before scaling the service.`,
                },
                {
                    question: "What can I learn from the free review?",
                    answer: `The free review clearly provides insights into
Risk factors and technical debt in the current codebase
Root causes of frequently occurring errors
Potential issues that may arise during future scaling
What kind of work is required for improvement`,
                },
                {
                    question: "How does the cleanup process work?",
                    answer: `The cleanup process consists of the following six steps
Initial assessment (free) – Quickly scan features, code, and problem sources
In-depth review – Analyze structure, risks, and technical debt in detail
Improvement strategy – Define priorities and scope of work
Feature fixes & structural improvements – Stabilize broken features and unstable logic
Performance & stability enhancements – Testing, security, and project structure cleanup
Sustainable codebase setup – Reorganize the code to support future scaling`,
                },
                {
                    question: "What types of apps can be cleaned up?",
                    answer: `Yes, cleanup is possible in most cases, including
Web and mobile apps built with React, React Native, Next.js, or Flutter
Backend setups using Firebase, Supabase, Node.js, Django, and more
Projects that became difficult to maintain after outsourced development
Services rapidly built during the MVP stage
However, if there is very little existing code or a complete rebuild is more efficient, we may recommend rebuilding instead.`,
                },
                {
                    question: "How long does the cleanup usually take?",
                    answer: `Timelines are generally estimated as follows
Small scope (a few features) → 2+ weeks
Medium scope (overall structural cleanup and stabilization) → 4+ weeks
Large-scale refactoring (preparing for scaling) → 8+ weeks
The exact timeline will be provided after the free review, based on the scope and severity of identified issues.`,
                },
            ],
        },
        footer: {
            email: "gesun@gmail.com",
            copyright: "©2025 gesun",
        },
        estimate: {
            basicInfo: {
                title: "Basic Information",
                name: "Name",
                email: "Email",
                contact: "Contact Number",
                placeholders: {
                    name: "Please enter your name.",
                    email: "Please enter your email.",
                    contact: "Please enter your contact number.",
                },
                errors: {
                    name: "Please enter your name.",
                    email: "Please enter your email.",
                    emailInvalid: "Invalid email format.",
                    contact: "Please enter your contact number.",
                },
            },
            serviceInfo: {
                title: "Service Information",
                companyName: "Company Name",
                serviceName: "Service Name",
                serviceDescription: "Service Description",
                serviceScale: "Service Stage",
                serviceUrl: "Service URL",
                currentProblems: "Current Issues (Multiple selection)",
                placeholders: {
                    companyName: "Please enter your company name.",
                    serviceName: "Please enter your service name.",
                    serviceDescription: "Please briefly describe your service.",
                    serviceUrl: "Please enter the URL.",
                },
                errors: {
                    companyName: "Please enter your company name.",
                    serviceName: "Please enter your service name.",
                    serviceDescription: "Please enter service description.",
                    currentProblems: "Please select current issues.",
                },
                scaleOptions: [
                    "Internal testing stage",
                    "Issues appearing during operation",
                    "Feature-rich & complex service",
                    "Not sure",
                ],
            },
            problemReport: {
                title: "Issue Report",
                problemDescription: "Issue Description",
                techStack: "Tech Stack",
                developmentMethod: "Development Method",
                privacyConsent: "Consent to personal data collection",
                viewTerms: "[View policy]",
                placeholders: {
                    problemDescription: "Please describe the issue.",
                },
                errors: {
                    problemDescription: "Please describe the issue.",
                    privacyConsent:
                        "Please consent to personal data collection.",
                },
                problemOptions: [
                    "Features not working properly",
                    "Frequent errors",
                    "Issues occur in specific cases",
                    "Slow performance",
                    "Updates break other features",
                    "AI-built features don't work as intended",
                    "Hard to understand AI-generated code",
                    "No idea where the issue is",
                ],
                techStackOptions: [
                    "React / Next.js",
                    "Vue / Nuxt",
                    "React Native / Flutter",
                    "Node.js / Nest.js",
                    "Django / FastAPI",
                    "Spring / Java",
                    "Hard to understand AI-generated code structure",
                    "No idea where the problem is",
                ],
                developmentMethodOptions: [
                    "Mostly built with AI",
                    "Outsourced development",
                    "Mixed",
                    "Not sure",
                ],
            },
            submitButton: "Request Quote",
            submitting: "Submitting...",
            modal: {
                title: "Your request has been received",
                content: [
                    "We will review your request and get back to you<br/>within 3 business days.",
                    "A free initial review will be conducted after confirming the details.",
                ],
                cancel: "Close",
                confirm: "OK",
            },
            termsModal: {
                title: "Consent to Collection and Use of Personal Information",
                sections: {
                    overview: {
                        title: "Overview of Personal Information Collection and Use",
                        content: [
                            "We collect and use personal information as outlined below.",
                            "We collect and use the following personal information for the purpose of receiving consulting requests and conducting a free initial review.",
                        ],
                    },
                    collectedItems: {
                        title: "Information Collected",
                        items: [
                            "Name (or nickname)",
                            "Email address",
                            "Contact information",
                            "Details of the consulting request",
                        ],
                    },
                    purpose: {
                        title: "Purpose of Collection and Use",
                        items: [
                            "To receive consulting requests and verify identity",
                            "To communicate and provide guidance during the consulting process",
                            "To review the request and conduct a preliminary assessment (including a free review)",
                            "To provide follow-up information related to diagnosis results and consulting services",
                        ],
                    },
                    retention: {
                        title: "Retention Period",
                        content: [
                            "Personal information will be retained for up to one year from the date of the consulting request and then securely deleted.",
                            "However, if retention is required by applicable laws, such information will be retained in accordance with those laws.",
                        ],
                    },
                    refusal: {
                        title: "Right to Refuse Consent and Consequences",
                        content: [
                            "You have the right to refuse consent to the collection and use of your personal information. However,",
                            "if you do not consent, submitting a consulting request may be restricted.",
                        ],
                    },
                },
            },
        },
    },
    ja: {
        header: {
            requestQuote: "見積もり依頼",
        },
        hero: {
            title: [
                "アイデアはバイブコーディングで",
                "成長のために、整ったコードを",
            ],
            cta: "見積もり依頼",
        },
        problem: {
            title: "バイブコーディングで始めたなら、 今こそ整理するタイミングです。",
            subtitle:
                "バイブコーディングで作られたサービスは、 運用フェーズで整理が必要になります。<br/>不安定な構造や技術的負債は成長を妨げます。",
            items: [
                {
                    title: "機能が正しく動作しない",
                    description:
                        "想定通りに動かなかったり、 <br/> 特定の条件でエラーが発生する",
                },
                {
                    title: "保守・運用が難しい",
                    description:
                        "小さな修正でも、 <br/> 別の箇所に問題が発生する",
                },
                {
                    title: "拡張・追加開発が難しい",
                    description:
                        "新機能が既存コードと衝突し、 <br/> 開発スピードが低下する",
                },
            ],
        },
        process: {
            title: "クリーンアップの進行プロセス",
            subtitle:
                "現在のコードを確認し、修正し、 成長できる構造へ整理します。",
            steps: [
                {
                    number: "1",
                    title: "初期診断・コードスキャン（無料）",
                    description:
                        "サービス全体を素早く確認し、 問題箇所を特定します。",
                    details: "(構造・エラー・重複・性能・セキュリティ)",
                },
                {
                    number: "2",
                    title: "詳細分析・技術的負債の分類",
                    description:
                        "発見された問題をカテゴリ別に整理し、 影響度を評価します。",
                    details: "(影響度分析・優先順位決定・リスク領域の特定)",
                },
                {
                    number: "3",
                    title: "アーキテクチャ再整理",
                    description:
                        "サービスが安定して動作するよう、 フォルダ構成・モジュール・依存関係を再配置します。",
                    details: "(構造整理・必要に応じた部分的な再実装)",
                },
                {
                    number: "4",
                    title: "主要機能のクリーンアップ",
                    description:
                        "複雑、または破損している機能を安定化し、 ロジックを再整理します。",
                    details: "(重複削除・ロジック簡素化・エラー修正・API整理)",
                },
                {
                    number: "5",
                    title: "テスト・セキュリティ・性能改善",
                    description:
                        "テストを追加し、 基本的なセキュリティ確認と性能最適化を行います。",
                    details: "(テストコード・脆弱性チェック・速度改善)",
                },
                {
                    number: "6",
                    title: "デプロイ・運用自動化・ドキュメント整備",
                    description:
                        "運用効率向上のため、 デプロイ環境を整理し必要なドキュメントを提供します。",
                    details: "(CI/CD・環境設定整理・開発ルールの文書化)",
                },
            ],
        },
        faq: {
            items: [
                {
                    question:
                        "自分のアプリにクリーンアップが必要かどうか、どう判断できますか？",
                    answer: `以下のいずれかに当てはまる場合、クリーンアップが必要な状態です。
• 機能はあるが、時々または特定の条件でエラーが発生する。
• 新機能を追加すると、既存の機能が突然壊れる。
• 同じ問題を何度修正しても、時間が経つと再発する。
• 開発スピードが低下し、保守コストが増加している。
• AIに機能を依頼したが、意図と異なる機能が作られたり、正しく動作しない。
• エラーの発生箇所を追跡するのが難しくなり、修正すると別の箇所で問題が起きる。
これらは、短期間で作られた初期コード（MVP／バイブコーディング）に共通して見られる問題であり、 サービス拡張前に構造整理（クリーンアップ）が必須であることを示しています。`,
                },
                {
                    question: "無料診断で何が分かりますか？",
                    answer: `無料診断では、以下の内容を明確にお伝えします。
• 現在のコードにおけるリスク要因と技術的負債
• 頻繁に発生するエラーの根本原因
• 将来的な拡張時に問題となる可能性
• 改善のために必要な作業内容`,
                },
                {
                    question: "クリーンアップの流れはどのようになりますか？",
                    answer: `クリーンアップは以下の6段階で進行します。
1. 現状把握（無料）– 機能・コード・問題原因を迅速に確認
2. 詳細点検 – 構造・リスク・技術的負債を分析
3. 改善戦略策定 – 優先順位と対応範囲を定義
4. 機能不具合・構造改善 – 壊れた機能や不安定なロジックを正常化
5. 性能・安定性強化 – テスト、セキュリティ、プロジェクト構造整理
6. 持続可能なコード基盤整備 – 将来の拡張に対応できる形へ再整理`,
                },
                {
                    question:
                        "どのようなアプリがクリーンアップの対象になりますか？",
                    answer: `はい、ほとんどのケースで対応可能です。
• React、React Native、Next.js、Flutter で作られた Web・アプリ
• Firebase、Supabase、Node.js、Django などのバックエンド構成
• 外注開発後に保守が困難になったプロジェクト
• MVP段階で短期間に作られたサービス
ただし、コードがほとんど存在しない場合や、 完全に作り直した方が効率的な場合は、 リビルドをおすすめすることがあります。`,
                },
                {
                    question: "作業期間はどのくらいかかりますか？",
                    answer: `作業期間は、一般的に以下の基準で算出されます。
• 小規模（機能数点中心）→ 2週間以上
• 中規模（全体構造整理・安定化）→ 4週間以上
• 大規模リファクタリング（拡張準備）→ 8週間以上
正確な期間は無料診断後、 問題の量と範囲に応じてご案内します。`,
                },
            ],
        },
        footer: {
            email: "gesun@gmail.com",
            copyright: "©2025 gesun",
        },
        estimate: {
            basicInfo: {
                title: "基本情報",
                name: "お名前",
                email: "メールアドレス",
                contact: "連絡先",
                placeholders: {
                    name: "お名前を入力してください。",
                    email: "メールアドレスを入力してください。",
                    contact: "連絡先を入力してください。",
                },
                errors: {
                    name: "お名前を入力してください。",
                    email: "メールアドレスを入力してください。",
                    emailInvalid: "正しいメールアドレス形式ではありません。",
                    contact: "連絡先を入力してください。",
                },
            },
            serviceInfo: {
                title: "サービス情報",
                companyName: "会社名",
                serviceName: "サービス名",
                serviceDescription: "サービス概要",
                serviceScale: "サービスの規模",
                serviceUrl: "サービスURL",
                currentProblems: "現在発生している問題（複数選択可）",
                placeholders: {
                    companyName: "会社名を入力してください。",
                    serviceName: "サービス名を入力してください。",
                    serviceDescription:
                        "サービスについて簡単に説明してください。",
                    serviceUrl: "URLを入力してください。",
                },
                errors: {
                    companyName: "会社名を入力してください。",
                    serviceName: "サービス名を入力してください。",
                    serviceDescription: "サービス概要を入力してください。",
                    currentProblems: "現在発生している問題を選択してください。",
                },
                scaleOptions: [
                    "内部テスト段階",
                    "運用中に問題が発生",
                    "機能が多く複雑な状態",
                    "よく分からない",
                ],
            },
            problemReport: {
                title: "問題報告",
                problemDescription: "問題の詳細",
                techStack: "使用技術スタック",
                developmentMethod: "開発方法",
                privacyConsent: "個人情報の収集に同意する",
                viewTerms: "[規約を見る]",
                placeholders: {
                    problemDescription: "内容を入力してください。",
                },
                errors: {
                    problemDescription: "問題の詳細を入力してください。",
                    privacyConsent: "個人情報の収集に同意してください。",
                },
                problemOptions: [
                    "機能が正しく動作しない",
                    "エラーが頻発する",
                    "特定の条件で問題が発生",
                    "動作が遅い",
                    "修正・更新で他の機能が壊れる",
                    "AIで作成した機能が意図通り動かない",
                    "AI生成コードの構造が分かりにくい",
                    "問題箇所が全く分からない",
                ],
                techStackOptions: [
                    "React / Next.js",
                    "Vue / Nuxt",
                    "React Native / Flutter",
                    "Node.js / Nest.js",
                    "Django / FastAPI",
                    "Spring / Java",
                    "AI生成コードの構造が把握しづらい",
                    "問題箇所が全く分からない",
                ],
                developmentMethodOptions: [
                    "AIで大部分を開発",
                    "外注開発",
                    "混合",
                    "分からない",
                ],
            },
            submitButton: "見積もり依頼",
            submitting: "送信中...",
            modal: {
                title: "お見積もり依頼を受け付けました",
                content: [
                    "ご依頼内容を確認のうえ、<br/>3営業日以内にご連絡いたします。",
                    "必要な情報を確認後、無料診断を実施いたします。",
                ],
                cancel: "閉じる",
                confirm: "確認",
            },
            termsModal: {
                title: "個人情報の収集・利用に関する同意",
                sections: {
                    overview: {
                        title: "個人情報の収集・利用について",
                        content: [
                            "当社は、以下のとおり個人情報を収集・利用いたします。",
                            "コンサルティングのご依頼受付および無料診断の実施のため、以下の個人情報を収集・利用いたします。",
                        ],
                    },
                    collectedItems: {
                        title: "収集する情報",
                        items: [
                            "氏名（またはニックネーム）",
                            "メールアドレス",
                            "連絡先",
                            "コンサルティング依頼内容",
                        ],
                    },
                    purpose: {
                        title: "利用目的",
                        items: [
                            "コンサルティング依頼の受付および本人確認",
                            "コンサルティング実施に関する案内および連絡",
                            "依頼内容の確認および事前診断（無料診断を含む）",
                            "診断結果およびコンサルティングに関する後続案内",
                        ],
                    },
                    retention: {
                        title: "保管および利用期間",
                        content: [
                            "コンサルティング依頼日から最大1年間保管後、適切に破棄します。",
                            "ただし、関連法令により保管が必要な場合は、当該法令に従います。",
                        ],
                    },
                    refusal: {
                        title: "同意拒否の権利および不利益",
                        content: [
                            "個人情報の収集・利用に関する同意を拒否することができますが、",
                            "同意いただけない場合、コンサルティング依頼の受付が制限される場合があります。",
                        ],
                    },
                },
            },
        },
    },
} as const;
