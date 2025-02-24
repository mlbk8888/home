// Card Test
// const card = document.querySelector('.project-card');

// card.addEventListener('mousemove', (e) => {
//     const rect = card.getBoundingClientRect();
//     const x = e.clientX - rect.left; 
//     const y = e.clientY - rect.top; 

//     card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.7) 40%)`;
// });

// card.addEventListener('mouseleave', () => {
//     card.style.background = 'rgba(0, 0, 0, 0.7)';
// });

// const showMoreBtn = document.querySelector('.show-more-btn');
// const projectCards = document.querySelectorAll('.project-card.hidden');

// showMoreBtn.addEventListener('click', () => {
//     if (showMoreBtn.textContent === 'Show More') {
//         // Hiển thị tất cả dự án ẩn
//         projectCards.forEach(card => card.classList.remove('hidden'));
//         showMoreBtn.textContent = 'Show Less';
//     } else {
//         // Ẩn các dự án ẩn (quay lại trạng thái ban đầu)
//         projectCards.forEach(card => card.classList.add('hidden'));
//         showMoreBtn.textContent = 'Show More';
//     }
// });


// Lấy tất cả các project-card, dù ẩn hay hiện
const projectCards = document.querySelectorAll('.project-card');

// Hàm thêm sự kiện cho từng card
function addHoverEffect(card) {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // Vị trí X của chuột trong card
        const y = e.clientY - rect.top;  // Vị trí Y của chuột trong card

        // Tạo hiệu ứng spotlight (ánh sáng tập trung)
        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.7) 40%)`;
    });

    card.addEventListener('mouseleave', () => {
        // Khi chuột rời khỏi, quay lại nền ban đầu
        card.style.background = 'rgba(0, 0, 0, 0.7)';
    });
}

// Áp dụng hiệu ứng cho tất cả card ngay khi trang tải
projectCards.forEach(card => {
    addHoverEffect(card);
});

// Kết hợp với chức năng Show More/Show Less để thêm hiệu ứng cho các card khi hiển thị
const showMoreBtn = document.querySelector('.show-more-btn');

if (showMoreBtn) {
    showMoreBtn.addEventListener('click', () => {
        if (showMoreBtn.textContent === 'Show More') {
            // Hiển thị tất cả dự án ẩn
            const hiddenCards = document.querySelectorAll('.project-card.hidden');
            hiddenCards.forEach(card => {
                card.classList.remove('hidden');
                card.classList.add('d');
                addHoverEffect(card); // Thêm hiệu ứng cho các card mới hiển thị
            });
            showMoreBtn.textContent = 'Show Less';
        } else {
            // Ẩn các dự án ẩn (quay lại trạng thái ban đầu)
            const allCards = document.querySelectorAll('.project-card.d');
            allCards.forEach(card => {
                if (!card.classList.contains('hidden')) {
                    card.classList.add('hidden');
                    card.classList.remove('d');
                }
            });
            showMoreBtn.textContent = 'Show More';
        }
    });
}