const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

// دالة لتوليد موضع عشوائي جديد لزر "لا"
function moveNoButton() {
    // 1. التأكد من تحويل الزر إلى موضع مطلق
    if (!noBtn.classList.contains('moving-no-btn')) {
        noBtn.classList.add('moving-no-btn');
    }

    // تحديد أبعاد الحركة ضمن كامل النافذة
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    // حساب المدى الأقصى للحركة ليبقى الزر مرئياً
    const maxX = containerWidth - noBtn.offsetWidth;
    const maxY = containerHeight - noBtn.offsetHeight;
    
    // توليد موقع عشوائي جديد
    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    // تطبيق الموقع الجديد
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
}

// 1. حركة زر "لا" عند الضغط (click)
noBtn.addEventListener("click", (e) => {
    e.preventDefault(); 
    moveNoButton();
});

// 2. رسالة التأكيد عند الضغط على "أكيد"
yesBtn.addEventListener("click", () => {
    alert("حتى محمد يحبك 💜💜💜");
});


