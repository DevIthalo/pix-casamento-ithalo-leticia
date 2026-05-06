document.addEventListener("DOMContentLoaded", () => {
    // 1. Pix Copy Logic
    const pixKey = "00261556-e97a-4cdc-9ea3-fa2ebb3518d6";
    const copyBtn = document.getElementById("copy-btn");

    if (copyBtn) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(pixKey).then(() => {
                alert("Chave Pix copiada!");
            }).catch(err => {
                console.error("Erro ao copiar: ", err);
            });
        });
    }

    // 2. Entry Animations
    const bgImage = document.querySelector(".bg-image");
    const navbar = document.querySelector(".navbar");
    const reveals = document.querySelectorAll(".reveal");

    // Fade in background
    if (bgImage) {
        setTimeout(() => {
            bgImage.style.opacity = "1";
        }, 100);
    }

    // Slide down navbar
    if (navbar) {
        setTimeout(() => {
            navbar.style.transform = "translateY(0)";
        }, 300);
    }

    // Staggered reveal of elements
    reveals.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add("active");
        }, 500 + (index * 150));
    });

    // 3. Optional: Heart Animation feedback
    const heart = document.querySelector(".heart-icon");
    if (heart) {
        heart.addEventListener("mouseenter", () => {
            heart.style.animation = "none";
            setTimeout(() => {
                heart.style.animation = "pulse 0.5s ease-in-out";
            }, 10);
        });
        
        heart.addEventListener("mouseleave", () => {
            heart.style.animation = "pulse 2s infinite ease-in-out";
        });
    }
});
