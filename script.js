const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsContainer = document.querySelector(".buttons"); // الحصول على حاوية الأزرار

// دالة لتوليد موضع عشوائي جديد لزر "لا"
function moveNoButton() {
    // 1. التأكد من تحويل الزر إلى موضع مطلق
    if (!noBtn.classList.contains('moving-no-btn')) {
        // إذا كانت هذه هي المرة الأولى، نحوله إلى مطلق ونضيف الفئة
        noBtn.classList.add('moving-no-btn');
    }

    // تحديد أبعاد الحركة ضمن حاوية الأزرار
    const containerWidth = buttonsContainer.clientWidth;
    const containerHeight = buttonsContainer.clientHeight;
    
    // حساب المدى الأقصى للحركة ليبقى الزر مرئياً
    const maxX = containerWidth - noBtn.offsetWidth;
    const maxY = containerHeight - noBtn.offsetHeight;
    
    // إذا كانت الأبعاد صغيرة جداً، قد يتحرك الزر خارج نطاق الحاوية قليلاً، لكن هذا يضمن عدم اختفائه
    
    // توليد موقع عشوائي جديد
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // تطبيق الموقع الجديد
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// 1. حركة زر "لا" عند الضغط (click)
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); // منع أي سلوك افتراضي للزر
    moveNoButton();
});

// 2. رسالة التأكيد عند الضغط على "أكيد"
yesBtn.addEventListener("click", () => {
    alert("حتى محمد يحبك 💜💜💜");
    // زر "أكيد" ثابت ولا يحتاج لأي كود إضافي للثبات
});
