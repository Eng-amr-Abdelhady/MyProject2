// إضافة حدث عند الضغط على زر "اشترك الآن"
document.querySelector('.hero button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'flex'; // إظهار النافذة المنبثقة
});

// وظيفة إغلاق النافذة المنبثقة
function closePopup() {
    document.getElementById('popup').style.display = 'none'; // إخفاء النافذة المنبثقة
}

document.querySelectorAll('.service button').forEach(button => {
    button.addEventListener('click', () => {
        alert('تم إرسال طلبك بنجاح! سنتواصل معك قريبًا.');
    });
});
document.getElementById('toggle-menu').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
});
const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // لمنع إعادة تحميل الصفحة
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
        alert('تم تسجيل الدخول بنجاح!');
    } else {
        alert('اسم المستخدم أو كلمة المرور غير صحيحة.');
    }
});

const scrollToTopButton = document.getElementById('scroll-to-top');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const body = document.body;
const hour = new Date().getHours();

if (hour < 12) {
    body.style.backgroundColor = '#f0e68c'; // صباح
} else if (hour < 18) {
    body.style.backgroundColor = '#87ceeb'; // ظهر
} else {
    body.style.backgroundColor = '#2c3e50'; // مساء
}

document.getElementById('newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    alert('تم اشتراكك بنجاح في النشرة الإخبارية: ' + email);
});

window.addEventListener('load', function() {
    document.getElementById('loading-spinner').style.display = 'none';
});
window.addEventListener('beforeunload', function() {
    document.getElementById('loading-spinner').style.display = 'block';
});

// إضافة التفاعل على القائمة المنسدلة (Menu)
document.getElementById('toggle-menu').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
document.getElementById("newsletter-form").addEventListener("submit", function(event) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(emailValue)) {
        alert("الرجاء إدخال بريد إلكتروني صالح");
        event.preventDefault();  // منع إرسال النموذج
    }
});
function closeNotification() {
    document.getElementById('notification-bar').style.display = 'none';
}

function filterServices() {
    const query = document.getElementById("service-search").value.toLowerCase();
    const services = document.querySelectorAll(".service");
    services.forEach(service => {
        if (service.textContent.toLowerCase().includes(query)) {
            service.style.display = "block";
        } else {
            service.style.display = "none";
        }
    });
}


