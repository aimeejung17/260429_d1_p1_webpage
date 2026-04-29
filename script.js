(() => {
  const prefersReducedMotion = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
    : false;

  const CONTACT_TO = "nocodedx.ai@gmail.com";
  let currentLang = "ko";

  const TRANSLATIONS = {
    ko: {
      nav: {
        overview: "서비스",
        capabilities: "핵심 역량",
        process: "작업 프로세스",
        deliverables: "결과물",
        faq: "FAQ",
      },
      hero: {
        kicker: "AI 에이전트 기반 애플리케이션 빌드",
        title: "아이디어를 현대적인 앱으로, AI 에이전트와 함께 빠르게 구현합니다",
        sub:
          "DX Soultion Studio는 AI 에이전트 기반 워크플로우로 기획, UI, 프론트엔드, 자동화까지 연결해 실제 동작하는 제품을 만듭니다.",
        badge1: "기획 → 구현 → 개선",
        badge2: "입문자도 이해하는 단계",
        badge3: "반복 업무 자동화",
        ctaContact: "프로젝트 문의하기",
        ctaProcess: "작업 방식 보기",
      },
      sections: {
        overview: {
          kicker: "서비스 개요",
          title: "AI 에이전트로 더 빠르게, 더 구조적으로",
          desc:
            "현대적인 애플리케이션 빌드에 필요한 기획부터 UI, 프론트엔드, 자동화까지 한 흐름으로 연결합니다.",
        },
        capabilities: {
          kicker: "핵심 역량",
          title: "AI를 “도구”가 아니라 “에이전트”로",
          desc:
            "단순 생성이 아니라, 설계-구현-검토까지 이어지는 워크플로우로 생산성과 품질을 동시에 높입니다.",
        },
        process: {
          kicker: "작업 프로세스",
          title: "아이디어를 구조로 만들고, 실행으로 연결",
          desc:
            "복잡한 기술 용어보다, 입문자도 따라갈 수 있게 단계별로 진행 상황을 보여드립니다.",
          sideTitle1: "입문자용 약속",
          sideText1:
            "“어디까지 만들었는지”가 보이도록 작은 산출물을 자주 보여드려요.",
          sideBullets1: ["짧은 피드백 루프", "변경 이력의 명확함", "실행 가능한 결과"],
          sideTitle2: "현재 예시(샘플 작업)",
          sideText2:
            "이 페이지는 위 프로세스로 “싱글 페이지 랜딩” 데모 형태를 구성한 예시입니다.",
          sideButton: "결과물 보기",
        },
        deliverables: {
          kicker: "제공 결과물",
          title: "바로 써볼 수 있는 형태로 전달",
          desc: "목표에 맞춰 필요한 산출물을 조합해 드립니다.",
        },
        differentiators: {
          kicker: "차별점",
          title: "“만드는 것”보다 “흐름을 만드는 것”",
          desc: "일반 외주 방식과 달리, AI 에이전트 기반 워크플로우로 품질을 끌어올립니다.",
          leftTitle: "일반 방식",
          rightTitle: "DX Soultion Studio",
          leftList: [
            "요구사항이 바뀌면 재작업 비용 증가",
            "단계가 명확하지 않아 검토 타이밍이 늦어짐",
            "수정이 어려워 품질이 고정되기 쉬움",
          ],
          rightList: [
            "구조화된 개발로 변경에도 유연",
            "AI 에이전트 워크플로우로 설계-구현-개선 연결",
            "빠른 반복과 검토로 “완성”의 기준을 상향",
          ],
        },
        audience: {
          kicker: "추천 대상",
          title: "이런 상황이면 잘 맞아요",
          desc: "바이브코딩 입문자부터 작은 팀까지, 빠르게 시작하고 싶을 때 추천합니다.",
        },
        faq: {
          kicker: "FAQ",
          title: "자주 묻는 질문",
          desc: "문의 전에 궁금한 점을 미리 정리했습니다.",
          q: [
            "개발을 잘 몰라도 의뢰할 수 있나요?",
            "어디까지 만들어주나요?",
            "작업 기간은 어느 정도인가요?",
            "디자인 시안도 포함되나요?",
            "추후 수정도 가능한가요?",
          ],
          a: [
            "네. DX Soultion Studio는 입문자도 이해할 수 있게 요구사항을 구조화하고, 단계별 산출물을 보여드리는 방식으로 진행합니다.",
            "목표에 따라 랜딩/웹사이트/초기 MVP 프론트엔드/프로토타입까지 제공합니다. 서버 연동이 필요하면 범위를 협의합니다(이번 스펙 범위에서는 서버 연동은 필수 아님).",
            "프로젝트 범위에 따라 달라집니다. 다만 AI 에이전트 워크플로우로 “MVP-first”를 지향해 빠르게 첫 결과물을 확보하는 것을 목표로 합니다.",
            "네. 이 페이지처럼 Claude 메인 테마 스타일의 차분한 다크 UI 관점에서 레이아웃/타이포/컴포넌트를 구성해 시각 흐름까지 포함합니다.",
            "가능합니다. 핵심은 “작은 단위 반복”이라 수정이 필요한 구간을 빠르게 찾아 반영하는 흐름을 제공합니다.",
          ],
        },
        contact: {
          kicker: "최종 CTA",
          title: "아이디어 단계여도 괜찮습니다. 함께 구조를 잡아드립니다.",
          desc: "DX Soultion Studio와 함께 AI 에이전트 기반 워크플로우로 현대적인 애플리케이션을 만들어보세요.",
          contactTitle: "빠른 상담용 요약",
          emailCta: "이메일로 문의하기",
          copyEmail: "이메일 복사",
          metaLabel: "연락처",
          metaHint: "답변은 보통 24~48시간 내로 드립니다. (데모 페이지)",
          submit: "문의 보내기",
          note: "서버 전송 없이 `mailto:`로 연결됩니다.",
          fields: {
            deliverable: "원하는 결과물",
            situation: "현재 상황(한 줄)",
            timeline: "원하는 일정",
            name: "이름",
            email: "이메일",
            message: "문의 사항",
          },
          placeholders: {
            deliverable: "",
            situation: "예: 기획은 있는데 화면/인터랙션이 필요해요",
            timeline: "예: 2~3주 내 MVP",
            name: "예: 홍길동",
            email: "예: you@example.com",
            message: "예: 어떤 화면을 만들고 싶은지 알려주세요.",
          },
        },
      },
      cards: {
        services: [
          {
            title: "AI 기반 MVP 제작",
            text: "아이디어를 최소 기능 제품으로 빠르게 전환하고, 검증에 필요한 화면/로직을 제공합니다.",
            foot: "기획 불명확함도 구조로 정리",
          },
          {
            title: "웹 앱 프론트엔드 구축",
            text: "컴포넌트 중심 UI와 상태/인터랙션을 깔끔하게 구성해 실제 동작하는 화면을 만듭니다.",
            foot: "반응형 + 접근성 고려",
          },
          {
            title: "반복 업무 자동화",
            text: "업무 패턴을 찾아 자동화 포인트를 설계하고, 운영에 바로 쓰이는 절차로 연결합니다.",
            foot: "시간을 되찾는 설계",
          },
          {
            title: "프로토타입 고도화",
            text: "데모 단계에서 멈추지 않고, 피드백을 반영해 안정성과 완성도를 단계적으로 끌어올립니다.",
            foot: "개선 루프가 기본",
          },
        ],
        capabilities: [
          {
            title: "AI 에이전트 기반 기획 보조",
            text: "목표를 더 짧고 명확하게 만들고, 입문자도 이해하는 단계로 요구사항을 구조화합니다.",
          },
          {
            title: "컴포넌트 중심 UI 구현",
            text: "일관된 레이아웃/타이포/카드 시스템으로 유지보수가 쉬운 화면을 구성합니다.",
          },
          {
            title: "빠른 반복 개발과 수정",
            text: "변경이 잦아도 흐름이 끊기지 않게 “작은 단위”로 결과를 만들어 빠르게 피드백을 받습니다.",
          },
          {
            title: "검토/개선 루프",
            text: "“되게 만든 뒤 끝”이 아니라, 실제 사용 흐름 관점에서 수정과 보완을 반복합니다.",
          },
        ],
        processSteps: [
          { title: "문제 정의", text: "목표/제약을 정리하고, “어떤 결과가 나오면 성공인지” 합의합니다." },
          { title: "화면/기능 설계", text: "섹션, 컴포넌트, 인터랙션을 먼저 구조화합니다." },
          { title: "AI 에이전트 구현", text: "바닐라 JS/CSS 기준으로 동작하는 화면을 빠르게 만듭니다." },
          { title: "검토 및 개선", text: "사용 흐름을 기준으로 수정하고, 디테일을 다듬습니다." },
          { title: "배포 준비", text: "최종 정리, 반응형 점검, 가벼운 운영 가이드를 전달합니다." },
        ],
        deliverables: [
          { title: "반응형 랜딩 페이지", text: "hero~FAQ까지 한 화면에서 설득 흐름이 자연스럽게 이어지는 구조.", foot: "HTML/CSS/JS만으로 동작" },
          { title: "서비스 소개 웹사이트", text: "브랜드 톤에 맞춘 다크 테마/카드 레이아웃 및 CTA 흐름.", foot: "가독성 중심 구성" },
          { title: "초기 MVP 프론트엔드", text: "사용자 흐름 기반으로 화면/인터랙션을 빠르게 구현.", foot: "입문자 친화 문서화" },
          { title: "관리/운영 대시보드 초안", text: "운영 관점에서 필요한 UI를 우선순위로 배치.", foot: "확장 가능한 구조" },
          { title: "기능 데모 프로토타입", text: "“동작”을 먼저 보여주고, 이후 개선으로 확장.", foot: "피드백을 빠르게 반영" },
          { title: "AI 에이전트 워크플로우 설계", text: "다음 작업에 바로 쓰일 수 있게 단계/입력/출력을 정리.", foot: "재사용 가능한 설계" },
        ],
        differentiators: {
          leftTitle: "일반 방식",
          rightTitle: "DX Soultion Studio",
          leftList: [
            "요구사항이 바뀌면 재작업 비용 증가",
            "단계가 명확하지 않아 검토 타이밍이 늦어짐",
            "수정이 어려워 품질이 고정되기 쉬움",
          ],
          rightList: [
            "구조화된 개발로 변경에도 유연",
            "AI 에이전트 워크플로우로 설계-구현-개선 연결",
            "빠른 반복과 검토로 “완성”의 기준을 상향",
          ],
        },
        audience: [
          { title: "MVP 검증이 급한 창업팀", text: "사용자 흐름을 빠르게 만들고, 다음 의사결정에 필요한 화면을 확보합니다." },
          { title: "개발 리소스가 부족한 소규모 조직", text: "바로 실행 가능한 결과로 “할 일”을 줄이고, 운영까지 이어지게 합니다." },
          { title: "시제품이 필요한 기획자/마케터", text: "그럴듯한 기획 문서가 아니라, 실제로 동작하는 프로토타입으로 설득합니다." },
          { title: "AI 기반 제작 방식을 시도하려는 입문자", text: "복잡한 설정 없이 단계별로 이해하며 결과를 만들어봅니다." },
        ],
      },
      ui: { copySuccess: "복사 완료", copyFail: "복사 실패" },
      deliverableOptions: {
        landing: "랜딩 페이지",
        website: "서비스 소개 웹사이트",
        mvp: "초기 MVP 프론트엔드",
        prototype: "기능 데모 프로토타입",
        workflow: "AI 에이전트 워크플로우 설계",
      },
      footer: { backTop: "맨 위로", faq: "FAQ", copySuffix: "Demo single page." },
    },
    en: {
      nav: { overview: "Services", capabilities: "Capabilities", process: "Process", deliverables: "Deliverables", faq: "FAQ" },
      hero: {
        kicker: "Agentic application build",
        title: "Turn ideas into modern apps—fast, with AI agents.",
        sub: "DX Soultion Studio connects planning, UI, frontend, and automation through an agentic workflow—so you get a real, working product.",
        badge1: "Plan → Build → Improve",
        badge2: "Beginner-friendly steps",
        badge3: "Automate repeat work",
        ctaContact: "Contact us",
        ctaProcess: "See our process",
      },
      sections: {
        overview: { kicker: "Service overview", title: "Faster, more structured builds with AI agents", desc: "We connect planning, UI, frontend, and automation into one continuous workflow for modern application delivery." },
        capabilities: { kicker: "Core capabilities", title: "AI as an agent, not just a tool", desc: "Not just generation—our workflow carries design → implementation → review to improve productivity and quality." },
        process: {
          kicker: "How we work",
          title: "Structure your idea—then ship it",
          desc: "Instead of heavy jargon, we show progress step-by-step so beginners can follow along.",
          sideTitle1: "A promise for beginners",
          sideText1: "We share small, concrete outputs frequently so you can always see “how far we’ve gone.”",
          sideBullets1: ["Short feedback loops", "Clear iteration history", "Actionable outputs"],
          sideTitle2: "Current example (sample work)",
          sideText2: "This page is a demo-style example built with the workflow above for a single-page landing.",
          sideButton: "View deliverables",
        },
        deliverables: { kicker: "Deliverables", title: "Delivered in a usable form", desc: "We assemble the right outputs based on your goals." },
        differentiators: { kicker: "Why us", title: "Make the flow, not just the thing", desc: "Unlike typical outsourcing, we raise quality through an agentic development workflow.", leftTitle: "Traditional approach", rightTitle: "DX Soultion Studio", leftList: ["Higher rework cost when requirements change", "Late reviews because stages aren’t clearly defined", "Quality tends to get “locked in” and is hard to revise"], rightList: ["Structured development stays flexible to change", "Agentic workflow connects design → build → improve", "Fast iteration and review raise the bar for “done”"] },
        audience: { kicker: "Best for", title: "Great when you need to move quickly", desc: "From beginner vibe-coders to small teams—ideal when you want to start fast." },
        faq: {
          kicker: "FAQ",
          title: "Frequently asked questions",
          desc: "We’ve collected the questions people usually ask before contacting us.",
          q: ["Can I hire you even if I’m not great with development?", "How far can you build?", "How long does a project usually take?", "Do you include design mockups?", "Can I request changes later?"],
          a: [
            "Yes. We structure requirements in a beginner-friendly way and share step-by-step outputs throughout the process.",
            "Depending on your goals, we can deliver landing pages, service websites, initial MVP frontend, and functional prototypes. If server integration is needed, we align on the scope (server integration isn’t required for this demo spec).",
            "It depends on the project scope. Our approach aims for an MVP-first workflow so you can secure a first result quickly.",
            "Yes. Like this page, we craft a calm dark UI inspired by the Claude theme—covering layout, typography, and components to create the full visual flow.",
            "Absolutely. The key is repeating in small units—so we can quickly identify and apply changes where needed.",
          ],
        },
        contact: {
          kicker: "Final CTA",
          title: "It’s okay if you’re still at idea stage. We’ll help you shape the structure.",
          desc: "Build a modern application with DX Soultion Studio using an agentic workflow.",
          contactTitle: "Quick consultation summary",
          emailCta: "Email us",
          copyEmail: "Copy email",
          metaLabel: "Contact",
          metaHint: "We usually reply within 24–48 hours. (Demo page)",
          submit: "Send inquiry",
          note: "Opens your email client via `mailto:` (no server submission).",
          fields: { deliverable: "Desired deliverable", situation: "Current situation (one line)", timeline: "Preferred timeline", name: "Name", email: "Email", message: "Your message" },
          placeholders: { deliverable: "", situation: "e.g., I have the plan, but need UI & interactions", timeline: "e.g., An MVP in 2–3 weeks", name: "e.g., John Doe", email: "e.g., you@example.com", message: "e.g., Tell us what screen you want to build." },
        },
      },
      cards: {
        services: [
          { title: "AI-powered MVP", text: "Turn your idea into a minimal functional product quickly, with screens/logic needed for validation.", foot: "Structure unclear planning into clarity" },
          { title: "Frontend for web apps", text: "Create real, working screens with component-driven UI and clean state/interactions.", foot: "Responsive + accessibility-first" },
          { title: "Automation for repetitive work", text: "Find automation opportunities, then connect them into operationally usable procedures.", foot: "Design that gives time back" },
          { title: "Prototype to polished demo", text: "Don’t stop at demo—iterate with feedback to improve stability and completeness step-by-step.", foot: "Iteration loop is default" },
        ],
        capabilities: [
          { title: "Planning support with AI agents", text: "Make goals shorter and clearer, then structure requirements into beginner-friendly steps." },
          { title: "Component-driven UI implementation", text: "Build maintainable screens with consistent layout, typography, and card system." },
          { title: "Fast iteration and refinements", text: "Keep flow unbroken even when changes are frequent—ship small units and get fast feedback." },
          { title: "Review & improvement loop", text: "Not “done when it works”—we refine from the perspective of real usage flows." },
        ],
        processSteps: [
          { title: "Problem definition", text: "Align on goals/constraints and what “success” looks like." },
          { title: "Screen & feature design", text: "Structure sections, components, and interactions first." },
          { title: "Implement with AI agents", text: "Build an agentic UI quickly using vanilla JS/CSS standards." },
          { title: "Review and refine", text: "Adjust based on user flows and polish the details." },
          { title: "Prepare for launch", text: "Final checks, responsive verification, and lightweight runbook guidance." },
        ],
        deliverables: [
          { title: "Responsive landing page", text: "A persuasive flow across hero to FAQ on a single screen.", foot: "Works with HTML/CSS/JS only" },
          { title: "Service website", text: "Dark theme + card layout tailored to your brand tone, plus CTA flow.", foot: "Readability-first structure" },
          { title: "Initial MVP frontend", text: "Implement screens/interactions quickly based on user flow.", foot: "Beginner-friendly documentation" },
          { title: "Ops & admin dashboard draft", text: "Prioritize UI components from an operational perspective.", foot: "Extendable architecture" },
          { title: "Functional demo prototype", text: "Show the “it works” part first, then extend through improvements.", foot: "Incorporate feedback quickly" },
          { title: "Agentic workflow design", text: "Define steps, inputs, and outputs so the next work is straightforward.", foot: "Reusable workflow design" },
        ],
        differentiators: {
          leftTitle: "Traditional approach",
          rightTitle: "DX Soultion Studio",
          leftList: ["Higher rework cost when requirements change", "Late reviews because stages aren’t clearly defined", "Quality tends to get “locked in” and is hard to revise"],
          rightList: ["Structured development stays flexible to change", "Agentic workflow connects design → build → improve", "Fast iteration and review raise the bar for “done”"],
        },
        audience: [
          { title: "Startup teams needing fast MVP validation", text: "Secure the key screens quickly and accelerate user flow creation." },
          { title: "Small teams with limited dev resources", text: "Reduce “things to do” with actionable results—and carry it through to operations." },
          { title: "Planners/marketers who need prototypes", text: "Sell with a working prototype, not just a polished document." },
          { title: "Beginners exploring agent-based development", text: "Learn step-by-step with minimal setup and create real results." },
        ],
      },
      ui: { copySuccess: "Copied!", copyFail: "Copy failed" },
      deliverableOptions: { landing: "Landing page", website: "Service website", mvp: "Initial MVP frontend", prototype: "Functional demo prototype", workflow: "AI agent workflow design" },
      footer: { backTop: "Back to top", faq: "FAQ", copySuffix: "Demo single page." },
    },
    ja: {
      nav: { overview: "サービス", capabilities: "強み", process: "進め方", deliverables: "成果物", faq: "FAQ" },
      hero: {
        kicker: "エージェント型アプリ開発",
        title: "アイデアをモダンなアプリへ。AIエージェントと一緒に素早く実装。",
        sub: "DX Soultion Studioは、エージェント型のワークフローで企画・UI・フロントエンド・自動化までつなぎ、実際に動くプロダクトを作ります。",
        badge1: "企画 → 実装 → 改善",
        badge2: "初心者にもわかるステップ",
        badge3: "繰り返し業務を自動化",
        ctaContact: "お問い合わせ",
        ctaProcess: "進め方を見る",
      },
      sections: {
        overview: { kicker: "サービス概要", title: "AIエージェントで、より速く・より構造的に", desc: "企画からUI、フロントエンド、そして自動化までを一本の流れでつなぎます。" },
        capabilities: { kicker: "主要な強み", title: "AIを「ツール」ではなく「エージェント」として", desc: "生成だけで終わらず、設計→実装→レビューまでつながるワークフローで生産性と品質を両立します。" },
        process: {
          kicker: "進め方",
          title: "アイデアを構造にして、実行につなぐ",
          desc: "難しい専門用語ではなく、初心者でも追えるように段階ごとの進行状況を見せます。",
          sideTitle1: "初心者向けの約束",
          sideText1: "「どこまで進んだか」が分かるように、小さな成果物を頻繁に共有します。",
          sideBullets1: ["短いフィードバックループ", "変更履歴が明確", "すぐ使えるアウトプット"],
          sideTitle2: "現在の例（サンプル作業）",
          sideText2: "このページは上のプロセスで作った「シングルページLP」デモの例です。",
          sideButton: "成果物を見る",
        },
        deliverables: { kicker: "成果物", title: "すぐ使える形でお届け", desc: "目的に合わせて必要なアウトプットを組み合わせて提供します。" },
        differentiators: { kicker: "差別化ポイント", title: "「作る」より「流れを作る」", desc: "一般的な外注とは違い、AIエージェント型のワークフローで品質を高めます。", leftTitle: "一般的な進め方", rightTitle: "DX Soultion Studio", leftList: ["要件が変わるたびに手戻りコストが増える", "工程が曖昧で、レビューのタイミングが遅れる", "修正が難しく、品質が固定されがち"], rightList: ["構造化された開発で、変更にも柔軟に対応", "AIエージェントのワークフローで設計→実装→改善をつなぐ", "速い反復とレビューで「完成」の基準を引き上げる"] },
        audience: { kicker: "おすすめ", title: "こんな状況に向いています", desc: "バイブコーディング初心者から小さなチームまで、素早く始めたいときにおすすめです。" },
        faq: {
          kicker: "FAQ",
          title: "よくある質問",
          desc: "連絡前に、よくいただく疑問をまとめました。",
          q: ["開発が得意じゃなくても依頼できますか？", "どこまで作ってもらえますか？", "作業期間はどれくらいですか？", "デザイン案も含まれますか？", "後から修正できますか？"],
          a: [
            "はい。DX Soultion Studioでは、初心者にも分かる形で要件を整理し、段階ごとの成果物を共有しながら進めます。",
            "目的に応じて、LP/サービスサイト/初期MVPのフロントエンド/機能デモのプロトタイプまで提供します。サーバー連携が必要な場合は範囲を相談します（このデモの仕様では必須ではありません）。",
            "プロジェクトの範囲によって変わります。ただし、AIエージェントのワークフローで「MVP-first」を目指し、最初の成果を素早く確保することを目標にしています。",
            "はい。このページのように、Claudeメインテーマの落ち着いたダークUIの観点で、レイアウト/タイポ/コンポーネントを構成し、視覚的な流れまで含めます。",
            "可能です。「小さな単位で繰り返す」ことが要点なので、修正が必要な箇所を素早く見つけて反映します。",
          ],
        },
        contact: {
          kicker: "最終CTA",
          title: "アイデア段階でも大丈夫です。一緒に構造を作ります。",
          desc: "DX Soultion Studioと一緒に、AIエージェント型のワークフローで現代的なアプリを作ってみませんか？",
          contactTitle: "クイック相談サマリー",
          emailCta: "メールで問い合わせる",
          copyEmail: "メールをコピー",
          metaLabel: "連絡先",
          metaHint: "通常24〜48時間以内に返信します。（デモページ）",
          submit: "問い合わせを送信",
          note: "サーバー送信なしで`mailto:`によりメールアプリが開きます。",
          fields: { deliverable: "希望する成果物", situation: "現状（1行）", timeline: "希望するスケジュール", name: "お名前", email: "メールアドレス", message: "お問い合わせ内容" },
          placeholders: { deliverable: "", situation: "例：企画はあるけど、画面/インタラクションが必要", timeline: "例：2〜3週間でMVP", name: "例：山田 太郎", email: "例：you@example.com", message: "例：どんな画面を作りたいか教えてください。" },
        },
      },
      cards: {
        services: [
          { title: "AIでMVPを素早く作成", text: "アイデアを最小機能のプロダクトへ素早く変換し、検証に必要な画面/ロジックを提供します。", foot: "曖昧な企画も構造化して整理" },
          { title: "Webアプリのフロントエンド構築", text: "コンポーネント中心のUIと状態/インタラクションを整えて、動く画面を作ります。", foot: "レスポンシブ + アクセシビリティ" },
          { title: "繰り返し業務の自動化", text: "業務パターンを見つけて自動化ポイントを設計し、運用にすぐ使える手順につなげます。", foot: "時間を取り戻す設計" },
          { title: "プロトタイプを磨き込む", text: "デモで止まらず、フィードバックを反映して安定性と完成度を段階的に高めます。", foot: "改善ループが標準" },
        ],
        capabilities: [
          { title: "AIエージェントによる企画サポート", text: "目標を短く明確にし、初心者でも理解できるステップへ要件を構造化します。" },
          { title: "コンポーネント中心のUI実装", text: "一貫したレイアウト/タイポ/カードシステムで保守しやすい画面を構築します。" },
          { title: "高速な反復開発と改善", text: "変更が多くても流れを止めずに、小さな単位で成果を出し、素早いフィードバックを得ます。" },
          { title: "レビュー/改善ループ", text: "「動いたら終わり」ではなく、実際の利用フローの視点で修正と改善を繰り返します。" },
        ],
        processSteps: [
          { title: "課題の定義", text: "目的/制約を整理し、「何が出たら成功か」を合意します。" },
          { title: "画面・機能の設計", text: "セクション、コンポーネント、インタラクションを先に構造化します。" },
          { title: "AIエージェントで実装", text: "バニラJS/CSS基準で動く画面を素早く作ります。" },
          { title: "レビューと改善", text: "利用フローを基準に調整し、細部を磨きます。" },
          { title: "公開準備", text: "最終整理、レスポンシブ確認、軽い運用ガイドをお渡しします。" },
        ],
        deliverables: [
          { title: "レスポンシブLP", text: "ヒーロー〜FAQまでを1画面で自然につなぐ説得フロー。", foot: "HTML/CSS/JSのみで動作" },
          { title: "サービス紹介サイト", text: "ブランドトーンに合わせたダークテーマ/カードレイアウトとCTAの流れ。", foot: "読みやすい構成" },
          { title: "初期MVPのフロントエンド", text: "ユーザーフローに基づいて画面/インタラクションを素早く実装。", foot: "初心者にやさしいドキュメント" },
          { title: "管理/運用ダッシュボード案", text: "運用目線で必要なUIを優先度順に配置。", foot: "拡張可能な構造" },
          { title: "機能デモのプロトタイプ", text: "まず「動く」を見せ、その後改善で拡張。", foot: "フィードバックを素早く反映" },
          { title: "AIエージェント型のワークフロー設計", text: "次の作業にそのまま使えるように、ステップ/入力/出力を整理します。", foot: "再利用できる設計" },
        ],
        differentiators: {
          leftTitle: "一般的な進め方",
          rightTitle: "DX Soultion Studio",
          leftList: ["要件が変わるたびに手戻りコストが増える", "工程が曖昧で、レビューのタイミングが遅れる", "修正が難しく、品質が固定されがち"],
          rightList: ["構造化された開発で、変更にも柔軟に対応", "AIエージェントのワークフローで設計→実装→改善をつなぐ", "速い反復とレビューで「完成」の基準を引き上げる"],
        },
        audience: [
          { title: "MVP検証を急ぐスタートアップ", text: "ユーザーフローを素早く作り、次の判断に必要な画面を確保します。" },
          { title: "開発リソースが限られた小規模組織", text: "すぐ実行できる成果で「やること」を減らし、運用までつなげます。" },
          { title: "試作が必要な企画者/マーケター", text: "それっぽい企画書ではなく、実際に動くプロトタイプで説得します。" },
          { title: "AIベースの制作を試したい初心者", text: "複雑な設定なしで、段階的に理解しながら結果を作ります。" },
        ],
      },
      ui: { copySuccess: "コピーしました！", copyFail: "コピーできませんでした" },
      deliverableOptions: { landing: "LP（ランディングページ）", website: "サービス紹介サイト", mvp: "初期MVPフロントエンド", prototype: "機能デモプロトタイプ", workflow: "AIエージェントのワークフロー設計" },
      footer: { backTop: "トップへ", faq: "FAQ", copySuffix: "Demo single page." },
    },
  };

  function setYear() {
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function setText(selector, text) {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  }

  function setPlaceholder(input, value) {
    if (!input) return;
    input.placeholder = value;
  }

  function updateFieldLabel(form, fieldName, labelText) {
    const labels = form.querySelectorAll("label.field");
    labels.forEach((lbl) => {
      const ctrl = lbl.querySelector(`[name="${fieldName}"]`);
      if (!ctrl) return;
      const labelEl = lbl.querySelector(".field-label");
      if (labelEl) labelEl.textContent = labelText;
    });
  }

  function updateLanguageUI(lang) {
    currentLang = lang;
    const t = TRANSLATIONS[lang] || TRANSLATIONS.ko;

    document.documentElement.lang = lang;

    // Header nav
    const navLinks = document.querySelectorAll(".nav-list a");
    if (navLinks.length >= 5) {
      navLinks[0].textContent = t.nav.overview;
      navLinks[1].textContent = t.nav.capabilities;
      navLinks[2].textContent = t.nav.process;
      navLinks[3].textContent = t.nav.deliverables;
      navLinks[4].textContent = t.nav.faq;
    }

    // Mobile nav (6th item: 문의)
    const mobileLinks = document.querySelectorAll("#mobileMenu .mobile-nav-list a");
    if (mobileLinks.length >= 6) {
      mobileLinks[0].textContent = t.nav.overview;
      mobileLinks[1].textContent = t.nav.capabilities;
      mobileLinks[2].textContent = t.nav.process;
      mobileLinks[3].textContent = t.nav.deliverables;
      mobileLinks[4].textContent = t.nav.faq;
      mobileLinks[5].textContent = lang === "en" ? "Contact" : lang === "ja" ? "お問い合わせ" : "문의";
    }

    // Hero
    setText(".hero-copy .kicker", t.hero.kicker);
    setText(".hero-copy .hero-title", t.hero.title);
    setText(".hero-copy .hero-sub", t.hero.sub);
    const badgeTexts = document.querySelectorAll(".hero-badges .badge span:last-child");
    if (badgeTexts.length >= 3) {
      badgeTexts[0].textContent = t.hero.badge1;
      badgeTexts[1].textContent = t.hero.badge2;
      badgeTexts[2].textContent = t.hero.badge3;
    }
    const heroButtons = document.querySelectorAll(".cta-row a.button");
    if (heroButtons.length >= 2) {
      heroButtons[0].textContent = t.hero.ctaContact;
      heroButtons[1].textContent = t.hero.ctaProcess;
    }

    // Section heads
    setText("#overview .section-kicker", t.sections.overview.kicker);
    setText("#overview .section-title", t.sections.overview.title);
    setText("#overview .section-desc", t.sections.overview.desc);

    setText("#capabilities .section-kicker", t.sections.capabilities.kicker);
    setText("#capabilities .section-title", t.sections.capabilities.title);
    setText("#capabilities .section-desc", t.sections.capabilities.desc);

    setText("#process .section-kicker", t.sections.process.kicker);
    setText("#process .section-title", t.sections.process.title);
    setText("#process .section-desc", t.sections.process.desc);

    setText("#deliverables .section-kicker", t.sections.deliverables.kicker);
    setText("#deliverables .section-title", t.sections.deliverables.title);
    setText("#deliverables .section-desc", t.sections.deliverables.desc);

    setText("#differentiators .section-kicker", t.sections.differentiators.kicker);
    setText("#differentiators .section-title", t.sections.differentiators.title);
    setText("#differentiators .section-desc", t.sections.differentiators.desc);

    setText("#audience .section-kicker", t.sections.audience.kicker);
    setText("#audience .section-title", t.sections.audience.title);
    setText("#audience .section-desc", t.sections.audience.desc);

    setText("#faq .section-kicker", t.sections.faq.kicker);
    setText("#faq .section-title", t.sections.faq.title);
    setText("#faq .section-desc", t.sections.faq.desc);

    setText("#contact .section-kicker", t.sections.contact.kicker);
    setText("#contact .section-title", t.sections.contact.title);
    setText("#contact .section-desc", t.sections.contact.desc);

    // Service cards (4)
    const overviewCards = document.querySelectorAll("#overview .grid-4 article.card");
    overviewCards.forEach((card, i) => {
      const d = t.cards.services[i];
      if (!d) return;
      const titleEl = card.querySelector(".card-title");
      const textEl = card.querySelector(".card-text");
      const footEl = card.querySelector(".card-foot");
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
      if (footEl) footEl.textContent = d.foot;
    });

    // Capabilities (4)
    const capBlocks = document.querySelectorAll("#capabilities .cap-block");
    capBlocks.forEach((blk, i) => {
      const d = t.cards.capabilities[i];
      if (!d) return;
      const titleEl = blk.querySelector(".cap-title");
      const textEl = blk.querySelector(".cap-text");
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
    });

    // Process steps (5)
    const steps = document.querySelectorAll("#process .timeline-steps .step");
    steps.forEach((step, i) => {
      const d = t.cards.processSteps[i];
      if (!d) return;
      const titleEl = step.querySelector(".step-title");
      const textEl = step.querySelector(".step-text");
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
    });

    // Process side cards
    const sideCards = document.querySelectorAll("#process .process-side .side-card");
    if (sideCards.length >= 2) {
      const s1 = sideCards[0];
      const s2 = sideCards[1];
      const sideTitle1 = s1.querySelector(".side-title");
      const sideText1 = s1.querySelector(".side-text");
      if (sideTitle1) sideTitle1.textContent = t.sections.process.sideTitle1;
      if (sideText1) sideText1.textContent = t.sections.process.sideText1;
      const bullets = s1.querySelectorAll(".side-bullets .side-bullet");
      const b = t.sections.process.sideBullets1;
      bullets.forEach((li, idx) => {
        if (b[idx]) li.textContent = b[idx];
      });

      const sideTitle2 = s2.querySelector(".side-title");
      const sideText2 = s2.querySelector(".side-text");
      if (sideTitle2) sideTitle2.textContent = t.sections.process.sideTitle2;
      if (sideText2) sideText2.textContent = t.sections.process.sideText2;
      const sideButton = s2.querySelector(".button");
      if (sideButton) sideButton.textContent = t.sections.process.sideButton;
    }

    // Deliverables cards (6)
    const delCards = document.querySelectorAll("#deliverables .grid-3 article.card");
    delCards.forEach((card, i) => {
      const d = t.cards.deliverables[i];
      if (!d) return;
      const titleEl = card.querySelector(".card-title");
      const textEl = card.querySelector(".card-text");
      const footEl = card.querySelector(".card-foot");
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
      if (footEl) footEl.textContent = d.foot;
    });

    // Differentiators compare
    const compareCards = document.querySelectorAll("#differentiators .compare-card");
    if (compareCards.length >= 2) {
      compareCards[0].querySelector(".compare-title").textContent = t.cards.differentiators.leftTitle;
      compareCards[1].querySelector(".compare-title").textContent = t.cards.differentiators.rightTitle;

      const leftLis = compareCards[0].querySelectorAll(".compare-list li");
      const rightLis = compareCards[1].querySelectorAll(".compare-list li");

      t.cards.differentiators.leftList.forEach((txt, idx) => {
        if (leftLis[idx]) leftLis[idx].textContent = txt;
      });
      t.cards.differentiators.rightList.forEach((txt, idx) => {
        if (rightLis[idx]) rightLis[idx].textContent = txt;
      });
    }

    // Audience cards (4)
    const audCards = document.querySelectorAll("#audience .audience-grid .aud-card");
    audCards.forEach((card, i) => {
      const d = t.cards.audience[i];
      if (!d) return;
      const titleEl = card.querySelector(".card-title");
      const textEl = card.querySelector(".card-text");
      if (titleEl) titleEl.textContent = d.title;
      if (textEl) textEl.textContent = d.text;
    });

    // FAQ
    const faqItems = document.querySelectorAll("#faq .faq-item");
    faqItems.forEach((item, i) => {
      const dQ = t.sections.faq.q[i];
      const dA = t.sections.faq.a[i];
      const btn = item.querySelector(".faq-question");
      const ans = item.querySelector(".faq-answer");
      if (btn && typeof dQ === "string") btn.textContent = dQ;
      if (ans && typeof dA === "string") ans.textContent = dA;
    });

    // Contact
    setText("#contact .contact-card-title", t.sections.contact.contactTitle);
    setText("#mailtoBtn", t.sections.contact.emailCta);
    const copyBtn = document.getElementById("copyEmailBtn");
    if (copyBtn) {
      copyBtn.textContent = t.sections.contact.copyEmail;
      copyBtn.dataset.originalText = t.sections.contact.copyEmail;
    }

    setText("#contact .meta-label", t.sections.contact.metaLabel);
    const metaHintEl = document.querySelector("#contact .meta-hint");
    if (metaHintEl) metaHintEl.textContent = t.sections.contact.metaHint;

    const form = document.getElementById("contactForm");
    if (form) {
      // Labels/placeholders
      updateFieldLabel(form, "deliverable", t.sections.contact.fields.deliverable);
      updateFieldLabel(form, "situation", t.sections.contact.fields.situation);
      updateFieldLabel(form, "timeline", t.sections.contact.fields.timeline);
      updateFieldLabel(form, "name", t.sections.contact.fields.name);
      updateFieldLabel(form, "email", t.sections.contact.fields.email);
      updateFieldLabel(form, "message", t.sections.contact.fields.message);

      const deliverableSelect = form.elements.deliverable;
      if (deliverableSelect) {
        Object.keys(t.deliverableOptions).forEach((val) => {
          const opt = deliverableSelect.querySelector(`option[value="${val}"]`);
          if (opt) opt.textContent = t.deliverableOptions[val];
        });
      }

      setPlaceholder(form.elements.situation, t.sections.contact.placeholders.situation);
      setPlaceholder(form.elements.timeline, t.sections.contact.placeholders.timeline);
      setPlaceholder(form.elements.name, t.sections.contact.placeholders.name);
      setPlaceholder(form.elements.email, t.sections.contact.placeholders.email);
      setPlaceholder(form.elements.message, t.sections.contact.placeholders.message);

      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) submitBtn.textContent = t.sections.contact.submit;

      const noteEl = form.querySelector(".form-note");
      if (noteEl) noteEl.textContent = t.sections.contact.note;
    }

    // Footer (only link labels + suffix; keep year span)
    const footerLinks = document.querySelectorAll(".footer-links a");
    if (footerLinks.length >= 2) {
      footerLinks[0].textContent = t.footer.backTop;
      footerLinks[1].textContent = t.footer.faq;
    }
    const footerCopy = document.querySelector(".footer-copy");
    if (footerCopy && footerCopy.childNodes.length >= 3) {
      const last = footerCopy.childNodes[footerCopy.childNodes.length - 1];
      if (last && last.nodeType === Node.TEXT_NODE) {
        last.textContent = ` DX Soultion Studio. ${t.footer.copySuffix}`;
      }
    }
  }

  function initThemeToggle() {
    const body = document.body;
    const btn = document.querySelector("[data-theme-toggle]");
    if (!body || !btn) return;

    const saved = localStorage.getItem("theme");
    const initial = saved || body.dataset.theme || "light";
    applyTheme(initial);

    btn.addEventListener("click", () => {
      const current = body.dataset.theme || "light";
      const next = current === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      applyTheme(next);
    });
  }

  function applyTheme(theme) {
    const body = document.body;
    if (!body) return;
    body.dataset.theme = theme;
    const btn = document.querySelector("[data-theme-toggle]");
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  function initLanguageSelect() {
    const select = document.querySelector("[data-lang-select]");
    if (!select) return;

    const saved = localStorage.getItem("lang");
    const initial = saved || select.value || "ko";
    select.value = initial;
    updateLanguageUI(initial);

    select.addEventListener("change", () => {
      const next = select.value || "ko";
      localStorage.setItem("lang", next);
      updateLanguageUI(next);
    });
  }

  function initSmoothScroll() {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 0;

    const links = document.querySelectorAll('a[data-scroll][href^="#"]');
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        const rect = target.getBoundingClientRect();
        const y = window.scrollY + rect.top - headerHeight - 12;

        window.scrollTo({
          top: Math.max(0, y),
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });

        // 모바일 메뉴가 열려 있으면 닫기
        const menu = document.getElementById("mobileMenu");
        const toggle = document.querySelector("[data-mobile-nav-toggle]");
        if (menu && toggle && !menu.hidden) {
          menu.hidden = true;
          toggle.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    });
  }

  function initRevealOnScroll() {
    const revealEls = document.querySelectorAll(".reveal");
    if (!revealEls.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealEls.forEach((el) => io.observe(el));

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add("is-visible"));
    }
  }

  function initFaqAccordion() {
    const faqItems = document.querySelectorAll("#faq .faq-item");
    if (!faqItems.length) return;

    const openItem = (itemToOpen) => {
      faqItems.forEach((item) => {
        const btn = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        if (!btn || !answer) return;

        const shouldOpen = item === itemToOpen;
        btn.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
        item.dataset.open = shouldOpen ? "true" : "false";
        answer.hidden = !shouldOpen;
      });
    };

    faqItems.forEach((item, idx) => {
      const btn = item.querySelector(".faq-question");
      if (!btn) return;
      btn.addEventListener("click", () => {
        const isOpen = item.dataset.open === "true";
        if (isOpen) {
          // 열린 상태를 닫기(모두 닫힌 상태 허용)
          faqItems.forEach((other) => {
            const otherBtn = other.querySelector(".faq-question");
            const otherAnswer = other.querySelector(".faq-answer");
            if (!otherBtn || !otherAnswer) return;
            otherBtn.setAttribute("aria-expanded", "false");
            other.dataset.open = "false";
            otherAnswer.hidden = true;
          });
          return;
        }
        openItem(item);
      });

      // 첫 노출시 data-open 값 세팅(기본은 전부 닫힘)
      if (!item.dataset.open) item.dataset.open = "false";
    });
  }

  function initMobileNav() {
    const toggle = document.querySelector("[data-mobile-nav-toggle]");
    const menu = document.getElementById("mobileMenu");
    if (!toggle || !menu) return;

    function setOpen(nextOpen) {
      menu.hidden = !nextOpen;
      toggle.setAttribute("aria-expanded", nextOpen ? "true" : "false");
      document.body.style.overflow = nextOpen ? "hidden" : "";
    }

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    // ESC로 닫기
    document.addEventListener("keydown", (e) => {
      if (e.key !== "Escape") return;
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (!isOpen) return;
      setOpen(false);
    });
  }

  async function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }

    // fallback
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      return ok;
    } catch {
      document.body.removeChild(ta);
      return false;
    }
  }

  function initContactEmailActions() {
    const copyBtn = document.querySelector("[data-copy-email]");
    const emailEl = document.getElementById("contactEmail");
    if (!copyBtn || !emailEl) return;

    copyBtn.addEventListener("click", async () => {
      const email = (emailEl.textContent || "").trim();
      if (!email) return;

      const ok = await copyText(email);
      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ko;
      const original = copyBtn.dataset.originalText || copyBtn.textContent;
      copyBtn.textContent = ok ? t.ui.copySuccess : t.ui.copyFail;
      setTimeout(() => {
        copyBtn.textContent = original;
      }, 1200);
    });
  }

  function initContactFormMailto() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const deliverable = form.elements.deliverable?.value || "landing";
      const situation = form.elements.situation?.value || "";
      const timeline = form.elements.timeline?.value || "";
      const name = form.elements.name?.value || "";
      const fromEmail = form.elements.email?.value || "";
      const message = form.elements.message?.value || "";

      const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ko;
      const deliverableLabel = t.deliverableOptions[deliverable] || deliverable;

      const subjectBase =
        currentLang === "en"
          ? "DX Soultion Studio Inquiry"
          : currentLang === "ja"
            ? "DX Soultion Studio お問い合わせ"
            : "DX Soultion Studio 문의";

      const subject = `${subjectBase} - ${deliverableLabel}`;

      const bodyLines = [
        `${t.sections.contact.fields.name}: ${name || "-"}`,
        `${t.sections.contact.fields.email}: ${fromEmail || "-"}`,
        "",
        `${t.sections.contact.fields.message}:`,
        message || "-",
        "",
        `${t.sections.contact.fields.deliverable}: ${deliverableLabel}`,
        `${t.sections.contact.fields.situation}: ${situation || "-"}`,
        `${t.sections.contact.fields.timeline}: ${timeline || "-"}`,
      ];
      const body = bodyLines.join("\n");

      const mailto =
        "mailto:" +
        CONTACT_TO +
        "?subject=" +
        encodeURIComponent(subject) +
        "&body=" +
        encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  function init() {
    setYear();
    initSmoothScroll();
    initRevealOnScroll();
    initFaqAccordion();
    initMobileNav();
    initThemeToggle();
    initLanguageSelect();
    initContactEmailActions();
    initContactFormMailto();
  }

  document.addEventListener("DOMContentLoaded", init);
})();

