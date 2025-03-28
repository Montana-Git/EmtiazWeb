document.addEventListener('DOMContentLoaded', () => {

    const translations = {
        // French Translations
        'fr': {
            'page_title': "Bureau d'Etude Imtiaz - Gestion de Projets Agricoles",
            'main_title': "Bureau d'Etude Imtiaz",
            'main_subtitle': "مكتب دراسات الامتياز",
            'nav_about': "À Propos",
            'nav_services': "Services",
            'nav_contact': "Contact",
            'hero_title': "Gestion Experte de Projets Agricoles",
            'hero_subtitle': "Votre partenaire pour la réussite de vos initiatives agricoles.",
            // 'hero_cta': "Contactez-nous", // Optional button
            'about_title': "À Propos de Nous",
            'about_text': "Bureau d'Etude Imtiaz est spécialisé dans le conseil et la gestion de projets pour le secteur agricole. Nous aidons nos clients à concevoir, planifier et mettre en œuvre des projets durables et rentables, en apportant expertise technique et vision stratégique.",
            'services_title': "Nos Services",
            'service_1_title': "Études & Planification",
            'service_1_desc': "Études de faisabilité complètes et élaboration de plans d'affaires stratégiques.",
            'service_2_title': "Conception & Ingénierie",
            'service_2_desc': "Conception technique détaillée et planification rigoureuse de chaque phase du projet.",
            'service_3_title': "Suivi & Évaluation",
            'service_3_desc': "Mise en place de systèmes de suivi et évaluation performants pour garantir l'atteinte des objectifs.",
            'service_4_title': "Conseil Technique",
            'service_4_desc': "Expertise en techniques agricoles modernes et durables pour optimiser vos rendements.",
            'service_5_title': "Accès au Financement",
            'service_5_desc': "Accompagnement personnalisé pour identifier et sécuriser les financements adaptés à votre projet.",
            'service_6_title': "Gestion Complète",
            'service_6_desc': "Prise en charge de la gestion globale de votre projet agricole, de A à Z.",
            'contact_title': "Contactez-Nous",
            'contact_text': "Pour discuter de votre projet ou pour plus d'informations, n'hésitez pas à nous contacter :",
            'contact_email': "Email:",
            'contact_phone': "Téléphone:",
            'contact_address': "Adresse:",
            // 'contact_form_title': "Envoyer un message", // Optional form
            'footer_rights': "Tous droits réservés."
        },
        // Arabic Translations
        'ar': {
            'page_title': "مكتب دراسات الامتياز - إدارة المشاريع الزراعية",
            'main_title': "مكتب دراسات الامتياز",
            'main_subtitle': "Bureau d'Etude Imtiaz",
            'nav_about': "من نحن",
            'nav_services': "خدماتنا",
            'nav_contact': "اتصل بنا",
            'hero_title': "إدارة متخصصة للمشاريع الزراعية",
            'hero_subtitle': "شريكك لنجاح مبادراتك الزراعية.",
            // 'hero_cta': "اتصل بنا", // Optional button
            'about_title': "عن مكتبنا",
            'about_text': "مكتب دراسات الامتياز متخصص في الاستشارات وإدارة المشاريع للقطاع الزراعي. نساعد عملائنا على تصميم وتخطيط وتنفيذ مشاريع مستدامة ومربحة، مع تقديم الخبرة الفنية والرؤية الاستراتيجية.",
            'services_title': "خدماتنا",
            'service_1_title': "الدراسات والتخطيط",
            'service_1_desc': "دراسات جدوى شاملة وتطوير خطط عمل استراتيجية.",
            'service_2_title': "التصميم والهندسة",
            'service_2_desc': "تصميم فني مفصل وتخطيط دقيق لكل مرحلة من مراحل المشروع.",
            'service_3_title': "المتابعة والتقييم",
            'service_3_desc': "تطبيق أنظمة متابعة وتقييم فعالة لضمان تحقيق الأهداف.",
            'service_4_title': "الاستشارات الفنية",
            'service_4_desc': "خبرة في التقنيات الزراعية الحديثة والمستدامة لتحسين إنتاجيتك.",
            'service_5_title': "الحصول على التمويل",
            'service_5_desc': "مرافقة شخصية لتحديد وتأمين التمويل المناسب لمشروعك.",
            'service_6_title': "الإدارة المتكاملة",
            'service_6_desc': "تولي الإدارة الشاملة لمشروعك الزراعي، من البداية إلى النهاية.",
            'contact_title': "اتصل بنا",
            'contact_text': "لمناقشة مشروعك أو لمزيد من المعلومات، لا تتردد في الاتصال بنا:",
            'contact_email': "البريد الإلكتروني:",
            'contact_phone': "الهاتف:",
            'contact_address': "العنوان:",
            // 'contact_form_title': "أرسل رسالة", // Optional form
            'footer_rights': "جميع الحقوق محفوظة."
        }
    };

    const htmlTag = document.documentElement;
    const langFrButton = document.getElementById('lang-fr');
    const langArButton = document.getElementById('lang-ar');
    const translatableElements = document.querySelectorAll('[data-translate-key]');
    const currentYearSpan = document.getElementById('current-year');

    // Function to apply translations and update UI elements
    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language "${lang}" not found.`);
            return;
        }

        // 1. Update HTML lang attribute
        htmlTag.lang = lang;

        // 2. Save preference
        localStorage.setItem('preferredLanguage', lang);

        // 3. Translate elements
        translatableElements.forEach(element => {
            const key = element.dataset.translateKey; // Use dataset for modern access
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Translation key "${key}" not found for language "${lang}". Element:`, element);
            }
        });

        // 4. Update UI elements (e.g., active button state)
        updateUI(lang);

        console.log(`Language set to: ${lang}`); // For debugging
    }

    // Function to update non-text UI parts
    function updateUI(currentLang) {
        // Update button active states
        if (langFrButton && langArButton) {
            langFrButton.classList.toggle('active', currentLang === 'fr');
            langArButton.classList.toggle('active', currentLang === 'ar');
        }
    }

     // --- Footer Year ---
     if (currentYearSpan) {
         currentYearSpan.textContent = new Date().getFullYear();
     }

    // --- Event Listeners for Language Buttons ---
    if (langFrButton) {
        langFrButton.addEventListener('click', () => setLanguage('fr'));
    }
    if (langArButton) {
        langArButton.addEventListener('click', () => setLanguage('ar'));
    }

    // --- Initial Language Load ---
    const preferredLanguage = localStorage.getItem('preferredLanguage');
    // Default to 'fr' if no preference stored or if stored lang is invalid
    const initialLang = (preferredLanguage && translations[preferredLanguage]) ? preferredLanguage : 'fr';
    setLanguage(initialLang);

    // Optional: Add listener for mobile nav toggle if implemented
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const mainNav = document.querySelector('.main-navigation');
    if(mobileNavToggle && mainNav) {
      mobileNavToggle.addEventListener('click', () => {
    const isExpanded = mainNav.getAttribute('aria-expanded') === 'true';
     mainNav.setAttribute('aria-expanded', !isExpanded);
        mainNav.classList.toggle('is-open', !isExpanded);
        // Optionally, you can add a class to the mobile nav toggle button to show/hide with CSS
        mobileNavToggle.classList.toggle('is-open', !isExpanded);
        // Optionally, you can add a class to mainNav to show/hide with CSS
         mainNav.classList.toggle('is-hidden', isExpanded);
        mainNav.classList.toggle('is-visible', !isExpanded); 
    //       // Add a class to mainNav to show/hide with CSS
      });
    }

});