// ملف js.js

document.addEventListener("DOMContentLoaded", function () {
    // افحص اللغة المحفوظة في الذاكرة المحلية
    var selectedLanguage = localStorage.getItem("selectedLanguage");

    // قم بتحديد اللغة الافتراضية إذا لم يتم اختيار أي لغة بعد
    if (!selectedLanguage) {
        selectedLanguage = "ar"; // اللغة العربية هي اللغة الافتراضية
    }

    // قم بتعيين اللغة المحددة للصفحة
    document.documentElement.lang = selectedLanguage;

    // قم بتحديث النصوص في الصفحة بناءً على اللغة المحددة
    updatePageContent(selectedLanguage);

    // اضف معالج لتغيير اللغة عند النقر على العنصر الذي يحتوي على الرمز fa-globe
    var languageSwitcher = document.querySelector(".fa-globe");
    languageSwitcher.addEventListener("click", function () {
        // قم بتبديل اللغة
        selectedLanguage = selectedLanguage === "ar" ? "en" : "ar";

        // قم بتغيير اللغة المحددة في الذاكرة المحلية
        localStorage.setItem("selectedLanguage", selectedLanguage);

        // قم بتحديث النصوص في الصفحة بناءً على اللغة الجديدة
        updatePageContent(selectedLanguage);
    });

    // تحديث النصوص في الصفحة بناءً على اللغة المحددة
    function updatePageContent(language) {
        // قم بتحديث النصوص هنا باستخدام شروط اللغة المحددة
        if (language === "ar") {
            // نصوص باللغة العربية
            document.querySelector(".about-us-text").textContent = "نحن شركة رائدة في مجال الخدمات النفطية...";
            document.querySelector(".services-header").textContent = "خدماتنا";
            document.querySelector(".contact-header").textContent = "تواصل معنا";
            // قم بتحديث أي نصوص أخرى...
        } else if (language === "en") {
            // نصوص باللغة الإنجليزية
            document.querySelector(".about-us-text").textContent = "We are a leading company in the field of oil services...";
            document.querySelector(".services-header").textContent = "Our Services";
            document.querySelector(".contact-header").textContent = "Contact Us";
            // قم بتحديث أي نصوص أخرى...
        }
        // قم بتحديث المحتويات الأخرى...
    }
});
