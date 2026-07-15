const translations = {
    "en": {
        "nav_about": "About",
        "nav_experience": "Experience",
        "nav_education": "Education",
        "nav_projects": "Projects",
        "nav_awards": "Awards",
        "hero_hello": "Hello, I'm",
        "hero_name": "Xu Minghan",
        "hero_sub_1": "SRE / DevOps",
        "hero_sub_2": "Security Researcher",
        "hero_sub_3": "Linux SysAdmin",
        "hero_sub_4": "Chihuahua Lover",
        "hero_sub_5": "Coffee",
        "hero_sub_6": "Hiking",
        "about_title": "About Me",
        "about_p1": "I'm a Computer Science student at National Chung Cheng University, pursuing a career as a Site Reliability Engineer (SRE). My focus spans Linux infrastructure operations, identity & storage services (LDAP / NIS / NFS), virtualization, and information security.",
        "about_p2": "Outside of tech, my interests revolve around specialty coffee brewing (experimenting with extraction parameters and flavor profiling), exploring social philosophy, hiking beautiful trails, and spending quality time with chihuahuas.",
        "about_skills": "Technical Arsenal",
        "exp_title": "Experience",
        "exp_date1": "Mar 2026 – Present",
        "exp_role1": "Dept. of CSIE - System Administrator (SA) / Network Operations Engineer",
        "exp_org1": "National Chung Cheng University",
        "exp_desc1_1": "Maintained Linux LDAP / NIS authentication services for a multi-user computing environment.",
        "exp_desc1_2": "Operated NFS file storage services for centralized account data access.",
        "exp_desc1_3": "Supported VMware virtualization platform operations.",
        "exp_desc1_4": "Validated backup and recovery workflows to improve service reliability.",
        "exp_desc1_5": "Supported centralized login and computing environment operations for departmental workstations.",
        "exp_desc1_6": "Assisted with storage capacity management and operational troubleshooting.",
        "exp_desc1_7": "Handled emergency patching of Linux CVE privilege-escalation vulnerabilities; performed risk assessment and update strategy decisions.",
        "exp_date2": "Oct 2023 – Present",
        "exp_role2": "Information Technology Office - Student Worker (managing 5-8 staff)",
        "exp_org2": "National Chung Cheng University",
        "exp_desc2_1": "Maintained Windows Active Directory authentication environment for computer labs.",
        "exp_desc2_2": "Maintained FOG Project open-source imaging deployment system; managed image deployment and environment restoration for 200+ lab workstations.",
        "exp_desc2_3": "Operated centralized lab environment deployment and rapid recovery workflows campus-wide.",
        "exp_desc2_4": "Developed automation scripts for security administration data processing to improve efficiency.",
        "exp_desc2_5": "Built an IoT device weak-password detection tool to support campus security inventory.",
        "exp_desc2_6": "Developed a Nessus vulnerability scan report management system to support vulnerability tracking.",
        "exp_desc2_7": "Built a Node.js real-time monitoring platform for computer lab usage status.",
        "edu_title": "Education",
        "edu_date1": "Aug 2023 – Jul 2027 (Expected)",
        "edu_degree1": "B.S. in Computer Science and Information Engineering",
        "edu_org1": "National Chung Cheng University (CCU)",
        "edu_date2": "Aug 2020 – Jul 2023 (Graduated)",
        "edu_degree2": "Department of Computer Science",
        "edu_org2": "National Hsinying Industrial Vocational High School",
        "edu_desc2_1": "Technical foundation in Object-Oriented Programming (C#)",
        "edu_desc2_2": "FPGA Digital Logic Design (VHDL)",
        "edu_desc2_3": "Basic Electrical Engineering & Electronics Laboratory Practice",
        "proj_title": "Featured Projects",
        "proj_name0": "WebInspect Vulnerability Management Platform",
        "proj_role0": "Solo Developer (AI-assisted) · Jun 2026 – Ongoing · CCU IT Office",
        "proj_desc0": "Independently designed and built an enterprise-grade vulnerability management platform integrating the OpenText WebInspect REST API. Implemented cross-scan comparison and full vulnerability lifecycle tracking (new / fixed / persisting), built role-based access control (ADMIN / SECURITY_CONTACT / USER) compatible with CAS SSO, and shipped a fully integrated frontend/backend/database deployment via Docker Compose. Solo dev + AI-assisted delivery of a production-grade application for the university IT office.",
        "proj_name1": "O-RAN RIC xApp Security Research",
        "proj_role1": "Security Researcher · Feb 2026 – Ongoing",
        "proj_desc1": "Analyzing CVE exposure and attack paths in the O-RAN RIC xApp architecture, and studying security risk models for Kubernetes-based telecom microservice platforms. Identified an actual CVE vulnerability, now in official Responsible Disclosure with CVE ID pending assignment.",
        "proj_name2": "Multi-Agent AI Software Engineering Copilot",
        "proj_role2": "Architect Agent Development · Junior-year Software Engineering Course Project",
        "proj_desc2": "Designed an Architect Agent for structured requirement analysis, reducing LLM hallucination via strict JSON schema contracts. Implemented intent keyword detection to control execution flow and applied RAG with relevance filtering. Built an Architect → Coder → Verifier → Tester multi-agent workflow with LLM API failover between OpenAI and Gemini, and adaptive model tiering to optimize token usage and latency.",
        "proj_name3": "Nessus Scan Report Management & Tracking System",
        "proj_role3": "Backend Developer · CCU IT Office",
        "proj_desc3": "Developed a Nessus scan report management system prototype using C# WinForms, SQL Server, and a PDF generation module. Implemented scan result storage, historical report management, and vulnerability tracking features, with support for comparing multiple scans to analyze whether vulnerabilities improved, disappeared, or persisted. After the prototype proved successful, the IT office integrated its architecture into the campus-wide information management system.",
        "proj_name4": "CCU Finder - Campus Lost & Found Platform",
        "proj_role4": "Backend API Developer · Freshman-year Programming Project",
        "proj_desc4": "Developed a RESTful backend API for a campus-based lost-and-found platform. Implemented authentication and input validation, performed basic security review, and supported Flutter frontend integration.",
        "award_title": "Awards & Certifications",
        "award_subtitle1": "Awards",
        "award_item1_1": "<strong>54th National Skills Competition (Mobile App Development)</strong> - Gold Medal (South Region)",
        "award_item1_2": "<strong>54th National Skills Competition (Mobile App Development)</strong> - National Final (Excellence Award)",
        "award_item1_3": "<strong>53rd National Skills Competition (Mobile App Development)</strong> - Gold Medal (South Region)",
        "award_item1_4": "<strong>53rd National Skills Competition / 2nd AsiaSkills / 47th WorldSkills National Team Selection (Mobile App Development)</strong> - Excellence Award",
        "award_subtitle2": "Certifications",
        "award_item2_1": "<strong>iPAS Information Security Engineer (Intermediate)</strong> - Ministry of Economic Affairs",
        "award_item2_2": "<strong>Computer Software Application – Level B</strong> - Ministry of Labor",
        "award_item2_3": "<strong>Computer Hardware Maintenance – Level B</strong> - Ministry of Labor",
        "award_item2_4": "<strong>Computer Software Design – Level C</strong> - Ministry of Labor",
        "award_item2_5": "<strong>Computer Hardware Maintenance – Level C</strong> - Ministry of Labor",
        "award_item2_6": "<strong>Computer Software Application – Level C</strong> - Ministry of Labor",
        "award_item2_7": "<strong>Industrial Electronics – Level C</strong> - Ministry of Labor",
        "footer_text": "&copy; 2026 Xu Minghan. Built with passion and specialty coffee"
    },
    "zh": {
        "nav_about": "關於我",
        "nav_experience": "經歷",
        "nav_education": "學歷",
        "nav_projects": "專案",
        "nav_awards": "得獎",
        "hero_hello": "你好，我是",
        "hero_name": "許銘漢",
        "hero_sub_1": "SRE / DevOps",
        "hero_sub_2": "資安研究",
        "hero_sub_3": "Linux 系統維運",
        "hero_sub_4": "狗派",
        "hero_sub_5": "手沖咖啡",
        "hero_sub_6": "爬山",
        "about_title": "關於我",
        "about_p1": "就讀於國立中正大學資訊工程學系，希望往 Site Reliability Engineer (SRE) 領域發展。專長涵蓋 Linux 基礎設施維運、身分與儲存服務 (LDAP / NIS / NFS)、虛擬化平台，以及資訊安全。",
        "about_p2": "在技術領域之外，我喜歡手沖咖啡、探索社會哲學、爬山，以及與可愛的吉娃娃。",
        "about_skills": "技術堆疊",
        "exp_title": "經歷",
        "exp_date1": "2026/3 – 至今",
        "exp_role1": "資訊工程學系 - 系統管理員 (SA) / 網路管理工程師",
        "exp_org1": "國立中正大學",
        "exp_desc1_1": "維護 Linux LDAP / NIS 身分驗證服務，支援多使用者計算環境。",
        "exp_desc1_2": "維運 NFS 檔案儲存服務，提供帳號資料集中存取。",
        "exp_desc1_3": "支援 VMware 虛擬化平台之服務運作。",
        "exp_desc1_4": "協助備份與復原流程驗證，提升服務可靠度。",
        "exp_desc1_5": "支援系上工作站集中式登入與運算環境維運。",
        "exp_desc1_6": "協助儲存系統容量管理與服務維運問題排除。",
        "exp_desc1_7": "處理 Linux 系統 CVE 提權漏洞緊急修補作業，並進行風險評估與更新策略判斷。",
        "exp_date2": "2023/10 – 至今",
        "exp_role2": "資訊處 - 工讀生 (管理 5~8 人)",
        "exp_org2": "國立中正大學",
        "exp_desc2_1": "維護 Windows Active Directory 電腦教室身分驗證環境。",
        "exp_desc2_2": "維護 FOG Project 開源映像部署系統，管理 200+ 台電腦教室主機之映像部署與環境還原作業。",
        "exp_desc2_3": "維護校級電腦教室集中式環境部署與快速復原流程。",
        "exp_desc2_4": "開發資安行政資料自動化處理腳本，提升作業效率。",
        "exp_desc2_5": "建置 IoT 設備弱密碼檢測工具，支援校園資安盤點作業。",
        "exp_desc2_6": "開發 Nessus 弱點掃描報告管理系統，支援弱點追蹤流程。",
        "exp_desc2_7": "建置 Node.js 即時電腦教室使用狀態監控平台。",
        "edu_title": "學歷",
        "edu_date1": "2023/8 – 2027/7（預計）",
        "edu_degree1": "資訊工程學系 學士",
        "edu_org1": "國立中正大學 (CCU)",
        "edu_date2": "2020/8 – 2023/7（已畢業）",
        "edu_degree2": "資訊科",
        "edu_org2": "國立新營高級工業職業學校",
        "edu_desc2_1": "物件導向程式設計基礎 (C#)",
        "edu_desc2_2": "FPGA 數位邏輯設計 (VHDL)",
        "edu_desc2_3": "基本電學與電子學實習",
        "proj_title": "精選專案",
        "proj_name0": "WebInspect 弱點管理平台",
        "proj_role0": "獨立開發（AI 協作） · 2026/6 – 進行中 · 中正大學資訊處",
        "proj_desc0": "獨立設計並開發企業級弱點管理平台，整合 OpenText WebInspect REST API。實作跨次掃描比對、弱點生命週期管理與新增/修復/持續存在分析，建置 ADMIN / SECURITY_CONTACT / USER 角色權限控管並與 CAS SSO 相容，以 Docker Compose 完成前後端與資料庫整合部署。Solo dev + AI 協作完成 production 級應用，客戶為校方資訊處。",
        "proj_name1": "O-RAN RIC xApp 資安研究",
        "proj_role1": "資安研究員 · 2026/2 – 進行中",
        "proj_desc1": "分析 O-RAN RIC xApp 架構之 CVE 暴露面與攻擊路徑，研究 Kubernetes-based 電信微服務平台之安全風險模型。實際發現 CVE 漏洞，已進入官方 Responsible Disclosure 程序，CVE 編號等待官方核發中。",
        "proj_name2": "多代理 AI 軟體工程 Copilot",
        "proj_role2": "架構師 Agent 開發 · 大三軟體工程課程專案",
        "proj_desc2": "設計架構師 Agent 進行結構化的需求分析，透過 JSON Schema 降低 LLM 幻覺。實作意圖關鍵字偵測控制執行流程並結合 RAG 檢索增強。建立 Architect → Coder → Verifier → Tester 多代理工作流，支援 OpenAI 與 Gemini API 備援，並採用 adaptive model tiering 最佳化 token 使用與延遲。",
        "proj_name3": "Nessus 掃描報告管理與追蹤系統",
        "proj_role3": "後端開發者 · 中正大學資訊處",
        "proj_desc3": "使用 C# WinForms、SQL Server 與 PDF 產生模組開發 Nessus 掃描報告管理系統原型。實作掃描結果儲存、歷史報告管理與弱點追蹤功能，支援多次掃描結果比對，分析弱點改善、消失或持續存在情況。原型驗證成功後，架構已被資訊處整併至全校資訊管理系統。",
        "proj_name4": "CCU Finder - 校園失物招領平台",
        "proj_role4": "後端 API 開發者 · 大一程式設計專案",
        "proj_desc4": "開發校園失物招領平台之 RESTful 後端 API。實作身分驗證與輸入資料驗證機制，進行基礎安全性檢視，並協助 Flutter 前端串接整合。",
        "award_title": "獎項與證照",
        "award_subtitle1": "獎項",
        "award_item1_1": "<strong>第54屆全國技能競賽 (行動應用開發)</strong> - 南區金牌",
        "award_item1_2": "<strong>第54屆全國技能競賽 (行動應用開發)</strong> - 全國賽決賽（佳作）",
        "award_item1_3": "<strong>第53屆全國技能競賽 (行動應用開發)</strong> - 南區金牌",
        "award_item1_4": "<strong>第53屆全國技能競賽暨第2屆亞洲技能競賽及第47屆國際技能競賽國手選拔賽 (行動應用開發)</strong> - 佳作",
        "award_subtitle2": "證照",
        "award_item2_1": "<strong>iPAS 資訊安全工程師 (中級能力鑑定)</strong> - 經濟部",
        "award_item2_2": "<strong>電腦軟體應用 – 乙級</strong> - 勞動部",
        "award_item2_3": "<strong>電腦硬體裝修 – 乙級</strong> - 勞動部",
        "award_item2_4": "<strong>電腦軟體設計 – 丙級</strong> - 勞動部",
        "award_item2_5": "<strong>電腦硬體裝修 – 丙級</strong> - 勞動部",
        "award_item2_6": "<strong>電腦軟體應用 – 丙級</strong> - 勞動部",
        "award_item2_7": "<strong>工業電子 – 丙級</strong> - 勞動部",
        "footer_text": "&copy; 2026 許銘漢。"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const langBtn = document.getElementById('lang-toggle');
    const langLabel = document.getElementById('lang-label');

    // Check saved language or default to 'zh'
    let currentLang = localStorage.getItem('language') || 'zh';

    // Function to apply language
    const applyLanguage = (lang) => {
        document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
        if (langLabel) {
            langLabel.innerText = lang === 'zh' ? 'EN' : '中文';
        }

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        localStorage.setItem('language', lang);
        currentLang = lang;
    };

    // Initial apply
    applyLanguage(currentLang);

    // Toggle language
    if (langBtn) {
        langBtn.addEventListener('click', (e) => {
            e.preventDefault();
            applyLanguage(currentLang === 'zh' ? 'en' : 'zh');
        });
    }
});
