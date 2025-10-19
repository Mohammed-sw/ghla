const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const buttonsContainer = document.querySelector(".buttons"); // الحصول على حاوية الأزرار

// دالة لتوليد موضع عشوائي جديد لزر "لا"
function moveNoButton() {
    // 1. التأكد من تحويل الزر إلى موضع مطلق
    noBtn.classList.add('moving-no-btn');

    // تحديد أبعاد الحركة ضمن حاوية الأزرار
    // يتم استخدام buttonsContainer.clientWidth/Height للحركة داخل الحاوية
    const containerWidth = buttonsContainer.clientWidth;
    const containerHeight = buttonsContainer.clientHeight;
    
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
    e.preventDefault(); // منع أي سلوك افتراضي للزر (مثل إرسال نموذج)
    moveNoButton();
});

// 2. رسالة التأكيد عند الضغط على "أكيد"
yesBtn.addEventListener("click", () => {
    alert("حتى محمد يحبك 💜💜💜");
});

// ملاحظة: بما أن زر "لا" أصبح مطلقا داخل buttons، قد تحتاجين لضبط قيمة top و left
// في الـ CSS إذا كان يتحرك بشكل غريب.
