// ============= SAMPLE TUTORS DATA =============
const TUTORS_DATA = [
  {
    id: 1,
    name: 'Руслан Сафин',
    subject: 'english',
    subjectName: 'Английский язык',
    photo: 'https://randomuser.me/api/portraits/men/1.jpg',
    rating: 4.8,
    reviews: 145,
    experience: 8,
    students: 180,
    price: 1500,
    bio: 'Опытный преподаватель с 8 годами практики. Использую современные методики обучения.',
    qualifications: [
      'Высшее лингвистическое образование',
      'Сертификат TEFL',
      'Опыт работы с международными системами',
    ],
    availability: [
      { day: 'Пн', times: ['15:00', '17:00', '19:00', '20:00'] },
      { day: 'Вт', times: ['16:00', '18:00', '20:00'] },
      { day: 'Ср', times: ['15:00', '17:00', '19:00'] },
      { day: 'Чт', times: ['16:00', '18:00', '20:00'] },
      { day: 'Пт', times: ['17:00', '19:00'] },
      { day: 'Сб', times: ['10:00', '12:00', '14:00', '16:00'] },
      { day: 'Вс', times: ['11:00', '13:00', '15:00'] }
    ]
  },
  {
    id: 2,
    name: 'Мария Кузнецова',
    subject: 'russian',
    subjectName: 'Русский язык',
    photo: 'https://randomuser.me/api/portraits/women/1.jpg',
    rating: 4.9,
    reviews: 98,
    experience: 6,
    students: 120,
    price: 1200,
    bio: 'Специалист по русскому языку и литературе. Помогу подготовиться к экзаменам.',
    qualifications: [
      'Кандидат филологических наук',
      'Опыт преподавания в школе 10 лет',
      'Подготовка к ЕНТ',
    ],
    availability: [
      { day: 'Пн', times: ['14:00', '16:00', '18:00'] },
      { day: 'Вт', times: ['15:00', '17:00', '19:00'] },
      { day: 'Ср', times: ['14:00', '16:00'] },
      { day: 'Чт', times: ['15:00', '17:00', '19:00'] },
      { day: 'Пт', times: ['18:00', '20:00'] },
      { day: 'Сб', times: ['10:00', '13:00', '15:00'] },
    ]
  },
  {
    id: 3,
    name: 'Алексей Петров',
    subject: 'math',
    subjectName: 'Математика',
    photo: 'https://randomuser.me/api/portraits/men/2.jpg',
    rating: 4.7,
    reviews: 132,
    experience: 10,
    students: 200,
    price: 1800,
    bio: 'Профессор по математике. Специализирусь на подготовке к сложным экзаменам.',
    qualifications: [
      'Высшее математическое образование',
      'Кандидат наук',
      'Опыт преподавания 15 лет',
    ],
    availability: [
      { day: 'Пн', times: ['16:00', '18:00', '20:00'] },
      { day: 'Вт', times: ['14:00', '16:00', '18:00'] },
      { day: 'Ср', times: ['17:00', '19:00'] },
      { day: 'Чт', times: ['16:00', '18:00', '20:00'] },
      { day: 'Пт', times: ['15:00', '17:00', '19:00'] },
      { day: 'Сб', times: ['11:00', '13:00', '15:00', '17:00'] },
    ]
  },
  {
    id: 4,
    name: 'Елена Морозова',
    subject: 'english',
    subjectName: 'Английский язык',
    photo: 'https://randomuser.me/api/portraits/women/2.jpg',
    rating: 4.6,
    reviews: 87,
    experience: 5,
    students: 95,
    price: 1400,
    bio: 'Преподаю английский онлайн с фокусом на разговорные навыки.',
    qualifications: [
      'Сертификат IELTS',
      'Опыт в международных компаниях',
      'Специалист по бизнес-английскому',
    ],
    availability: [
      { day: 'Пн', times: ['15:00', '17:00', '19:00'] },
      { day: 'Вт', times: ['16:00', '18:00', '20:00'] },
      { day: 'Ср', times: ['15:00', '17:00', '19:00'] },
      { day: 'Чт', times: ['14:00', '16:00', '18:00'] },
      { day: 'Пт', times: ['18:00', '20:00'] },
      { day: 'Сб', times: ['12:00', '14:00', '16:00'] },
    ]
  },
  {
    id: 5,
    name: 'Дмитрий Волков',
    subject: 'physics',
    subjectName: 'Физика',
    photo: 'https://randomuser.me/api/portraits/men/3.jpg',
    rating: 4.8,
    reviews: 76,
    experience: 7,
    students: 110,
    price: 1600,
    bio: 'Увлеченный преподаватель физики. Делаю науку понятной и интересной.',
    qualifications: [
      'Высшее техническое образование',
      'Опыт в научных лабораториях',
      'Автор методик преподавания',
    ],
    availability: [
      { day: 'Пн', times: ['16:00', '18:00', '20:00'] },
      { day: 'Вт', times: ['17:00', '19:00'] },
      { day: 'Ср', times: ['16:00', '18:00', '20:00'] },
      { day: 'Чт', times: ['15:00', '17:00', '19:00'] },
      { day: 'Пт', times: ['18:00', '20:00'] },
      { day: 'Сб', times: ['10:00', '12:00', '14:00'] },
    ]
  }
];

// ============= LOCAL STORAGE MANAGEMENT =============
const StorageManager = {
  favorites: {
    get() {
      return JSON.parse(localStorage.getItem('favorites') || '[]');
    },
    add(tutorId) {
      const favs = this.get();
      if (!favs.includes(tutorId)) {
        favs.push(tutorId);
        localStorage.setItem('favorites', JSON.stringify(favs));
      }
    },
    remove(tutorId) {
      const favs = this.get();
      localStorage.setItem('favorites', JSON.stringify(favs.filter(id => id !== tutorId)));
    },
    has(tutorId) {
      return this.get().includes(tutorId);
    }
  },

  bookings: {
    get() {
      return JSON.parse(localStorage.getItem('bookings') || '[]');
    },
    add(booking) {
      const bookings = this.get();
      booking.id = Date.now();
      bookings.push(booking);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      return booking.id;
    },
    remove(bookingId) {
      const bookings = this.get();
      localStorage.setItem('bookings', JSON.stringify(bookings.filter(b => b.id !== bookingId)));
    },
    getByStudent(studentName) {
      return this.get().filter(b => b.studentName === studentName);
    }
  },

  userProfile: {
    get() {
      return JSON.parse(localStorage.getItem('userProfile') || 'null');
    },
    set(profile) {
      localStorage.setItem('userProfile', JSON.stringify(profile));
    }
  }
};

// ============= TUTOR CATALOG PAGE =============
function initTutorsCatalog() {
  if (!document.getElementById('tutors-container')) return;

  const container = document.getElementById('tutors-container');
  const subjectFilter = document.getElementById('subject-filter');
  const experienceFilter = document.getElementById('experience-filter');
  const ratingFilter = document.getElementById('rating-filter');
  const priceFilter = document.getElementById('price-filter');
  const priceValue = document.getElementById('price-value');
  const searchInput = document.getElementById('search-input');
  const searchBtn = document.getElementById('search-btn');
  const applyFiltersBtn = document.getElementById('apply-filters');
  const resetFiltersBtn = document.getElementById('reset-filters');

  function getTutorsByFilters() {
    const subject = subjectFilter.value;
    const experience = parseInt(experienceFilter.value) || 0;
    const rating = parseFloat(ratingFilter.value) || 0;
    const maxPrice = parseInt(priceFilter.value);
    const searchTerm = searchInput.value.toLowerCase();

    return TUTORS_DATA.filter(tutor => {
      return (
        (!subject || tutor.subject === subject) &&
        (tutor.experience >= experience) &&
        (tutor.rating >= rating) &&
        (tutor.price <= maxPrice) &&
        (!searchTerm || tutor.name.toLowerCase().includes(searchTerm))
      );
    });
  }

  function renderTutors(tutors) {
    container.innerHTML = tutors.map(tutor => `
      <div class="tutor-card" data-tutor-id="${tutor.id}">
        <div class="tutor-card-image">
          <img src="${tutor.photo}" alt="${tutor.name}">
          <button class="btn-favorite ${StorageManager.favorites.has(tutor.id) ? 'active' : ''}" 
                  data-tutor-id="${tutor.id}" title="Добавить в избранное">
            ${StorageManager.favorites.has(tutor.id) ? '❤️' : '🤍'}
          </button>
        </div>
        <div class="tutor-card-content">
          <h3>${tutor.name}</h3>
          <p class="tutor-subject">${tutor.subjectName}</p>
          <div class="tutor-stats">
            <div class="stat">
              <span class="rating">⭐ ${tutor.rating}</span>
              <span class="reviews">(${tutor.reviews})</span>
            </div>
            <div class="stat">
              <span>${tutor.experience} лет опыта</span>
            </div>
          </div>
          <p class="tutor-price">${tutor.price} ₸ <span>/час</span></p>
          <a href="tutor-profile.html?id=${tutor.id}" class="btn btn-small">Посмотреть профиль</a>
        </div>
      </div>
    `).join('');

    // Add favorite button listeners
    document.querySelectorAll('.btn-favorite').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tutorId = parseInt(btn.dataset.tutorId);
        if (StorageManager.favorites.has(tutorId)) {
          StorageManager.favorites.remove(tutorId);
          btn.classList.remove('active');
          btn.textContent = '🤍';
        } else {
          StorageManager.favorites.add(tutorId);
          btn.classList.add('active');
          btn.textContent = '❤️';
        }
      });
    });
  }

  function updatePriceDisplay() {
    const minPrice = 1000;
    const maxPrice = parseInt(priceFilter.value);
    priceValue.textContent = `1000 - ${maxPrice} ₸`;
  }

  // Event listeners
  applyFiltersBtn.addEventListener('click', () => {
    const filtered = getTutorsByFilters();
    renderTutors(filtered);
  });

  resetFiltersBtn.addEventListener('click', () => {
    subjectFilter.value = '';
    experienceFilter.value = '';
    ratingFilter.value = '';
    priceFilter.value = '10000';
    searchInput.value = '';
    updatePriceDisplay();
    renderTutors(TUTORS_DATA);
  });

  searchBtn.addEventListener('click', () => {
    renderTutors(getTutorsByFilters());
  });

  searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      renderTutors(getTutorsByFilters());
    }
  });

  priceFilter.addEventListener('input', updatePriceDisplay);

  // Initial render
  renderTutors(TUTORS_DATA);
}

// ============= TUTOR PROFILE PAGE =============
function initTutorProfile() {
  const params = new URLSearchParams(window.location.search);
  const tutorId = parseInt(params.get('id')) || 1;
  const tutor = TUTORS_DATA.find(t => t.id === tutorId);

  if (!tutor) return;

  // Populate profile
  document.getElementById('tutor-photo').src = tutor.photo;
  document.getElementById('tutor-name').textContent = tutor.name;
  document.getElementById('tutor-subject').textContent = tutor.subjectName;
  document.getElementById('tutor-rating').textContent = '⭐'.repeat(Math.round(tutor.rating)) + ' ' + tutor.rating;
  document.getElementById('tutor-reviews-count').textContent = `(${tutor.reviews} отзывов)`;
  document.getElementById('tutor-experience').textContent = tutor.experience;
  document.getElementById('tutor-students').textContent = tutor.students + '+';
  document.getElementById('tutor-price').textContent = tutor.price + '₸';
  document.getElementById('tutor-description').textContent = tutor.bio;
  document.getElementById('tutor-qualifications').innerHTML = tutor.qualifications
    .map(q => `<li>${q}</li>`).join('');

  // Render availability slots
  const slotsContainer = document.getElementById('available-slots');
  slotsContainer.innerHTML = tutor.availability
    .map(slot => `
      <div class="day-slot">
        <h4>${slot.day}</h4>
        <div class="times">
          ${slot.times.map(time => `<span class="time-slot">${time}</span>`).join('')}
        </div>
      </div>
    `).join('');

  // Add to favorites button
  const favBtn = document.getElementById('add-to-favorites-btn');
  function updateFavButton() {
    if (StorageManager.favorites.has(tutorId)) {
      favBtn.classList.add('active');
      favBtn.textContent = '❤️ В избранном';
    } else {
      favBtn.classList.remove('active');
      favBtn.textContent = '♡ Добавить в избранное';
    }
  }
  updateFavButton();

  favBtn.addEventListener('click', () => {
    if (StorageManager.favorites.has(tutorId)) {
      StorageManager.favorites.remove(tutorId);
    } else {
      StorageManager.favorites.add(tutorId);
    }
    updateFavButton();
  });

  // Booking modal
  const modal = document.getElementById('booking-modal');
  const bookBtn = document.getElementById('book-lesson-btn');
  const closeBtn = document.querySelector('.modal-close');
  const bookForm = document.getElementById('booking-form');

  bookBtn.addEventListener('click', () => {
    document.getElementById('modal-tutor-name').textContent = tutor.name;
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  bookForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const booking = {
      tutorId: tutorId,
      tutorName: tutor.name,
      subject: tutor.subjectName,
      date: document.getElementById('booking-date').value,
      time: document.getElementById('booking-time').value,
      studentName: document.getElementById('student-name').value,
      studentContact: document.getElementById('student-contact').value,
      studentLevel: document.getElementById('student-level').value,
      notes: document.getElementById('booking-notes').value,
      price: tutor.price,
      status: 'active'
    };

    const bookingId = StorageManager.bookings.add(booking);
    
    alert(`Алина, урок с репетитором ${tutor.name} подтвержден!\n` +
          `Дата: ${booking.date}\n` +
          `Время: ${booking.time}\n` +
          `Ждем вас в ${booking.time}. Данные сохранены в вашем кабинете.`);
    
    modal.style.display = 'none';
    bookForm.reset();
  });

  // Reviews section (sample data)
  const reviewsContainer = document.getElementById('reviews-container');
  const sampleReviews = [
    { name: 'Иван', rating: 5, text: 'Отличный преподаватель! Очень профессионален.' },
    { name: 'Света', rating: 5, text: 'Спасибо за помощь! Мой английский улучшился.' },
    { name: 'Петр', rating: 4, text: 'Хороший урок, много полезной информации.' },
  ];

  reviewsContainer.innerHTML = sampleReviews.map(review => `
    <div class="review-item">
      <div class="review-header">
        <strong>${review.name}</strong>
        <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
      </div>
      <p>${review.text}</p>
    </div>
  `).join('');
}

// ============= FAVORITES PAGE =============
function initFavoritesPage() {
  if (!document.getElementById('favorites-content')) return;
  
  const favoritesContent = document.getElementById('favorites-content');
  const emptyState = document.getElementById('empty-state');
  const comparisonSection = document.getElementById('comparison-section');
  const clearBtn = document.getElementById('clear-comparison-btn');

  function renderFavorites() {
    const favoriteIds = StorageManager.favorites.get();
    const favorites = TUTORS_DATA.filter(t => favoriteIds.includes(t.id));

    if (favorites.length === 0) {
      if (favoritesContent) favoritesContent.style.display = 'none';
      if (emptyState) emptyState.style.display = 'block';
      if (comparisonSection) comparisonSection.style.display = 'none';
      return;
    }

    if (favoritesContent) favoritesContent.style.display = 'block';
    if (emptyState) emptyState.style.display = 'none';
    if (comparisonSection) comparisonSection.style.display = 'block';

    favoritesContent.innerHTML = `
      <div class="favorites-list">
        ${favorites.map(tutor => `
          <div class="favorite-card">
            <img src="${tutor.photo}" alt="${tutor.name}" class="fav-photo">
            <div class="fav-info">
              <h3>${tutor.name}</h3>
              <p style="color: #f9d16b; font-weight: 600; margin-bottom: 12px;">${tutor.subjectName}</p>
              <div class="fav-stats">
                <span>⭐ ${tutor.rating} <small>(${tutor.reviews} отзывов)</small></span>
                <span>📅 ${tutor.experience} лет</span>
                <span>💰 ${tutor.price} ₸/ч</span>
              </div>
              <p style="color: #666; font-size: 0.9rem; margin-top: 12px;">${tutor.bio}</p>
            </div>
            <div class="fav-actions">
              <a href="tutor-profile.html?id=${tutor.id}" class="btn btn-small">👁️ Профиль</a>
              <button class="btn btn-small remove-from-fav" data-tutor-id="${tutor.id}" style="background: #d9534f; color: white; border: none;">🗑️ Удалить</button>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Add remove event listeners
    document.querySelectorAll('.remove-from-fav').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const tutorId = parseInt(btn.dataset.tutorId);
        StorageManager.favorites.remove(tutorId);
        renderFavorites();
      });
    });

    // Update comparison table
    updateComparisonTable(favorites);
  }

  function updateComparisonTable(favorites) {
    // Clear all cells first
    for (let i = 1; i <= 3; i++) {
      const col = document.getElementById(`compare-col-${i}`);
      const exp = document.getElementById(`compare-exp-${i}`);
      const rating = document.getElementById(`compare-rating-${i}`);
      const price = document.getElementById(`compare-price-${i}`);
      const reviews = document.getElementById(`compare-reviews-${i}`);
      
      if (col) col.textContent = `Репетитор ${i}`;
      if (exp) exp.textContent = '-';
      if (rating) rating.textContent = '-';
      if (price) price.textContent = '-';
      if (reviews) reviews.textContent = '-';
    }

    // Fill with data
    for (let i = 0; i < Math.min(3, favorites.length); i++) {
      const tutor = favorites[i];
      const colNum = i + 1;
      
      const col = document.getElementById(`compare-col-${colNum}`);
      const exp = document.getElementById(`compare-exp-${colNum}`);
      const rating = document.getElementById(`compare-rating-${colNum}`);
      const price = document.getElementById(`compare-price-${colNum}`);
      const reviews = document.getElementById(`compare-reviews-${colNum}`);
      
      if (col) col.textContent = tutor.name;
      if (exp) exp.textContent = `${tutor.experience} лет`;
      if (rating) rating.textContent = `${tutor.rating}⭐`;
      if (price) price.textContent = `${tutor.price} ₸`;
      if (reviews) reviews.textContent = `${tutor.reviews}`;
    }
  }

  // Clear button listener
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      StorageManager.favorites.get().forEach(id => {
        StorageManager.favorites.remove(id);
      });
      renderFavorites();
    });
  }

  // Initial render
  renderFavorites();
}

// ============= STUDENT CABINET PAGE =============
function initStudentCabinet() {
  const menuItems = document.querySelectorAll('.menu-item:not(.logout)');
  const tabs = document.querySelectorAll('.cabinet-tab');
  const logoutBtn = document.getElementById('logout-btn');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(m => m.classList.remove('active'));
      tabs.forEach(t => t.style.display = 'none');
      
      item.classList.add('active');
      const tabId = item.dataset.tab + '-tab';
      document.getElementById(tabId).style.display = 'block';

      // Load content for the active tab
      if (item.dataset.tab === 'bookings') loadBookings();
      if (item.dataset.tab === 'favorites') loadCabinetFavorites();
      if (item.dataset.tab === 'history') loadHistory();
    });
  });

  function loadBookings() {
    const bookingsList = document.getElementById('bookings-list');
    const noBookings = document.getElementById('no-bookings');
    const bookings = StorageManager.bookings.get();

    if (bookings.length === 0) {
      bookingsList.style.display = 'none';
      noBookings.style.display = 'block';
      return;
    }

    bookingsList.style.display = 'block';
    noBookings.style.display = 'none';
    
    bookingsList.innerHTML = bookings.filter(b => b.status === 'active').map(booking => `
      <div class="booking-card">
        <h3>${booking.tutorName}</h3>
        <p>${booking.subject}</p>
        <p class="booking-date">📅 ${booking.date} в ${booking.time}</p>
        <p>Уровень: ${booking.studentLevel}</p>
        <div class="booking-actions">
          <button class="btn btn-small" onclick="alert('Вы подтвердили присутствие')">Подтвердить</button>
          <button class="btn btn-small btn-cancel" data-booking-id="${booking.id}">Отменить</button>
        </div>
      </div>
    `).join('');

    document.querySelectorAll('.btn-cancel').forEach(btn => {
      btn.addEventListener('click', () => {
        StorageManager.bookings.remove(parseInt(btn.dataset.bookingId));
        loadBookings();
      });
    });
  }

  function loadCabinetFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    const noFavorites = document.getElementById('no-favorites');
    const favoriteIds = StorageManager.favorites.get();
    const favorites = TUTORS_DATA.filter(t => favoriteIds.includes(t.id));

    if (favorites.length === 0) {
      favoritesList.style.display = 'none';
      noFavorites.style.display = 'block';
      return;
    }

    favoritesList.style.display = 'block';
    noFavorites.style.display = 'none';

    favoritesList.innerHTML = favorites.map(tutor => `
      <div class="favorite-mini-card">
        <img src="${tutor.photo}" alt="${tutor.name}">
        <div>
          <h4>${tutor.name}</h4>
          <p>${tutor.subjectName}</p>
          <p>⭐ ${tutor.rating} | ${tutor.price} ₸</p>
          <a href="tutor-profile.html?id=${tutor.id}" class="btn btn-small">Профиль</a>
        </div>
      </div>
    `).join('');
  }

  function loadHistory() {
    const historyList = document.getElementById('history-list');
    const noHistory = document.getElementById('no-history');
    const bookings = StorageManager.bookings.get();
    const completedBookings = bookings.filter(b => b.status === 'completed');

    if (completedBookings.length === 0) {
      historyList.style.display = 'none';
      noHistory.style.display = 'block';
      return;
    }

    historyList.style.display = 'block';
    noHistory.style.display = 'none';

    historyList.innerHTML = completedBookings.map(booking => `
      <div class="history-card">
        <h3>${booking.tutorName}</h3>
        <p>${booking.date} в ${booking.time}</p>
        <p>${booking.subject}</p>
      </div>
    `).join('');
  }

  // Settings form
  const settingsForm = document.getElementById('settings-form');
  settingsForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const profile = {
      name: document.getElementById('settings-name').value,
      email: document.getElementById('settings-email').value,
      phone: document.getElementById('settings-phone').value,
      level: document.getElementById('settings-level').value,
      interests: document.getElementById('settings-interests').value
    };
    StorageManager.userProfile.set(profile);
    alert('Профиль обновлен!');
  });

  logoutBtn.addEventListener('click', () => {
    alert('Вы вышли из системы');
    window.location.href = 'index.html';
  });

  // Load initial data
  loadBookings();
}

// ============= TEACHER CABINET PAGE =============
function initTeacherCabinet() {
  const menuItems = document.querySelectorAll('.menu-item:not(.logout)');
  const tabs = document.querySelectorAll('.cabinet-tab');
  const logoutBtn = document.getElementById('logout-btn');

  menuItems.forEach(item => {
    item.addEventListener('click', () => {
      menuItems.forEach(m => m.classList.remove('active'));
      tabs.forEach(t => t.style.display = 'none');
      
      item.classList.add('active');
      const tabId = item.dataset.tab + '-tab';
      document.getElementById(tabId).style.display = 'block';
    });
  });

  logoutBtn.addEventListener('click', () => {
    alert('Вы вышли из системы');
    window.location.href = 'index.html';
  });

  // Profile form
  const profileForm = document.getElementById('profile-form');
  profileForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Профиль обновлен!');
  });

  // Add time modal
  const addTimeBtn = document.getElementById('add-schedule-btn');
  const addTimeModal = document.getElementById('add-time-modal');
  const addTimeForm = document.getElementById('add-time-form');
  const modalClose = document.querySelector('.modal-close');

  addTimeBtn?.addEventListener('click', () => {
    addTimeModal.style.display = 'block';
  });

  modalClose?.addEventListener('click', () => {
    addTimeModal.style.display = 'none';
  });

  addTimeForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Время добавлено в ваш график');
    addTimeModal.style.display = 'none';
    addTimeForm.reset();
  });
}

// ============= INITIALIZE ON PAGE LOAD =============
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    function toggleMenu() {
        const isOpen = navToggle.classList.contains('active');
        
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        
        if (!isOpen) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    }

    function closeMenu() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
        body.classList.remove('menu-open');
    }

    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    document.addEventListener('click', (e) => {
        if (navLinks?.classList.contains('active') && !e.target.closest('.nav-container')) {
            closeMenu();
        }
    });

    window.addEventListener('orientationchange', () => {
        closeMenu();
    });

    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                closeMenu();
            }
        }, 250);
    });

    // Initialize specific pages
    initTutorsCatalog();
    initTutorProfile();
    initFavoritesPage();
    initStudentCabinet();
    initTeacherCabinet();
});
