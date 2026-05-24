// ============================================
// DIGITAL CLOCK WITH MULTIPLE TIME ZONES
// ============================================

// Available time zones
const TIMEZONES = [
    // Asia
    'Asia/Jakarta',
    'Asia/Bangkok',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Asia/Hong_Kong',
    'Asia/Singapore',
    'Asia/Manila',
    'Asia/Kolkata',
    'Asia/Karachi',
    'Asia/Dubai',
    'Asia/Seoul',
    
    // Europe
    'Europe/London',
    'Europe/Paris',
    'Europe/Berlin',
    'Europe/Amsterdam',
    'Europe/Madrid',
    'Europe/Rome',
    'Europe/Moscow',
    'Europe/Istanbul',
    'Europe/Athens',
    'Europe/Stockholm',
    
    // Americas
    'America/New_York',
    'America/Chicago',
    'America/Denver',
    'America/Los_Angeles',
    'America/Anchorage',
    'Pacific/Honolulu',
    'America/Toronto',
    'America/Mexico_City',
    'America/Buenos_Aires',
    'America/Sao_Paulo',
    
    // Australia & Pacific
    'Australia/Sydney',
    'Australia/Melbourne',
    'Australia/Brisbane',
    'Australia/Perth',
    'Pacific/Auckland',
    'Pacific/Fiji',
    
    // Africa
    'Africa/Cairo',
    'Africa/Johannesburg',
    'Africa/Lagos',
    'Africa/Nairobi',
];

// Clock state
let clocks = [];
let is24HourFormat = true;

// DOM Elements
const clocksGrid = document.getElementById('clocksGrid');
const addClockBtn = document.getElementById('addClockBtn');
const resetBtn = document.getElementById('resetBtn');
const format24Checkbox = document.getElementById('format24');
const timezoneModal = document.getElementById('timezoneModal');
const closeModal = document.getElementById('closeModal');
const timezoneSearch = document.getElementById('timezoneSearch');
const timezoneList = document.getElementById('timezoneList');

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    loadClocks();
    updateAllClocks();
    setInterval(updateAllClocks, 1000);
    setupEventListeners();
    populateTimezoneList();
});

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    addClockBtn.addEventListener('click', openTimezoneModal);
    closeModal.addEventListener('click', closeTimezoneModal);
    resetBtn.addEventListener('click', resetClocks);
    format24Checkbox.addEventListener('change', (e) => {
        is24HourFormat = e.target.checked;
        updateAllClocks();
    });
    timezoneSearch.addEventListener('input', filterTimezones);
    window.addEventListener('click', (e) => {
        if (e.target === timezoneModal) {
            closeTimezoneModal();
        }
    });
}

// ============================================
// TIMEZONE MODAL FUNCTIONS
// ============================================

function openTimezoneModal() {
    timezoneModal.classList.add('show');
    timezoneSearch.focus();
}

function closeTimezoneModal() {
    timezoneModal.classList.remove('show');
    timezoneSearch.value = '';
    populateTimezoneList();
}

function populateTimezoneList() {
    timezoneList.innerHTML = '';
    
    TIMEZONES.forEach(tz => {
        const option = createTimezoneOption(tz);
        timezoneList.appendChild(option);
    });
}

function createTimezoneOption(timezone) {
    const option = document.createElement('div');
    option.className = 'timezone-option';
    
    const now = new Date();
    const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    
    const time = formatter.format(now);
    const offset = getTimezoneOffset(timezone);
    
    option.innerHTML = `
        <span class="timezone-option-name">${timezone}</span>
        <span class="timezone-option-offset">${offset}</span>
    `;
    
    option.addEventListener('click', () => {
        if (!clocks.includes(timezone)) {
            addClock(timezone);
            closeTimezoneModal();
        } else {
            alert(`${timezone} is already added!`);
        }
    });
    
    return option;
}

function filterTimezones() {
    const searchTerm = timezoneSearch.value.toLowerCase();
    const options = document.querySelectorAll('.timezone-option');
    
    options.forEach(option => {
        const tzName = option.querySelector('.timezone-option-name').textContent.toLowerCase();
        if (tzName.includes(searchTerm)) {
            option.style.display = 'flex';
        } else {
            option.style.display = 'none';
        }
    });
}

// ============================================
// CLOCK MANAGEMENT
// ============================================

function addClock(timezone) {
    if (!clocks.includes(timezone)) {
        clocks.push(timezone);
        saveClocks();
        renderClocks();
    }
}

function removeClock(timezone) {
    clocks = clocks.filter(tz => tz !== timezone);
    saveClocks();
    renderClocks();
}

function resetClocks() {
    if (confirm('Are you sure you want to reset all clocks?')) {
        clocks = [
            'Asia/Jakarta',
            'Europe/London',
            'America/New_York',
            'Australia/Sydney'
        ];
        saveClocks();
        renderClocks();
    }
}

function saveClocks() {
    localStorage.setItem('selectedClocks', JSON.stringify(clocks));
}

function loadClocks() {
    const saved = localStorage.getItem('selectedClocks');
    if (saved) {
        clocks = JSON.parse(saved);
    } else {
        // Default clocks
        clocks = [
            'Asia/Jakarta',
            'Europe/London',
            'America/New_York',
            'Australia/Sydney'
        ];
        saveClocks();
    }
}

// ============================================
// RENDERING
// ============================================

function renderClocks() {
    clocksGrid.innerHTML = '';
    
    if (clocks.length === 0) {
        clocksGrid.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h3>No clocks added</h3>
                <p>Click "Add Time Zone" button to add your first clock</p>
            </div>
        `;
        return;
    }
    
    clocks.forEach(timezone => {
        const card = createClockCard(timezone);
        clocksGrid.appendChild(card);
    });
}

function createClockCard(timezone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.id = `clock-${timezone}`;
    
    const offset = getTimezoneOffset(timezone);
    const cityName = timezone.split('/').pop().replace(/_/g, ' ');
    
    card.innerHTML = `
        <div class="clock-card-header">
            <div class="timezone-name">${cityName}</div>
            <div class="timezone-offset">${offset}</div>
            <button class="delete-btn" data-timezone="${timezone}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
        
        <div class="digital-display blink">
            <div class="time-display" data-timezone="${timezone}">--:--:--</div>
            <div class="date-display" data-timezone-date="${timezone}">--/--/----</div>
        </div>
        
        <div class="clock-info">
            <div class="info-item">
                <div class="info-label">Day of Week</div>
                <div class="info-value" data-timezone-day="${timezone}">---</div>
            </div>
            <div class="info-item">
                <div class="info-label">Week</div>
                <div class="info-value" data-timezone-week="${timezone}">--</div>
            </div>
            <div class="info-item">
                <div class="info-label">GMT Offset</div>
                <div class="info-value">${offset}</div>
            </div>
            <div class="info-item">
                <div class="info-label">Timezone</div>
                <div class="info-value">${timezone}</div>
            </div>
        </div>
    `;
    
    // Delete button listener
    const deleteBtn = card.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
        if (confirm(`Remove ${timezone}?`)) {
            removeClock(timezone);
        }
    });
    
    return card;
}

// ============================================
// TIME UPDATE
// ============================================

function updateAllClocks() {
    clocks.forEach(timezone => {
        updateClock(timezone);
    });
}

function updateClock(timezone) {
    const now = new Date();
    
    // Format time
    const timeFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: !is24HourFormat
    });
    
    // Format date
    const dateFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    });
    
    // Format day
    const dayFormatter = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        weekday: 'long'
    });
    
    const time = timeFormatter.format(now);
    const date = dateFormatter.format(now);
    const day = dayFormatter.format(now);
    const week = getWeekNumber(new Date(now.toLocaleString('en-US', { timeZone: timezone })));
    
    // Update DOM
    const timeElement = document.querySelector(`[data-timezone="${timezone}"]`);
    const dateElement = document.querySelector(`[data-timezone-date="${timezone}"]`);
    const dayElement = document.querySelector(`[data-timezone-day="${timezone}"]`);
    const weekElement = document.querySelector(`[data-timezone-week="${timezone}"]`);
    
    if (timeElement) timeElement.textContent = time;
    if (dateElement) dateElement.textContent = date;
    if (dayElement) dayElement.textContent = day;
    if (weekElement) weekElement.textContent = `W${week}`;
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function getTimezoneOffset(timezone) {
    const now = new Date();
    const tzTime = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    const offset = (now - tzTime) / (1000 * 60 * 60);
    
    const hours = Math.floor(Math.abs(offset));
    const minutes = Math.abs(offset % 1) * 60;
    const sign = offset > 0 ? '-' : '+';
    
    return `GMT${sign}${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
}

function getWeekNumber(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
}

// ============================================
// CONSOLE LOGGING
// ============================================

console.log('🕐 Digital Clock Application Loaded');
console.log('✅ Features:');
console.log('  - Display multiple time zones');
console.log('  - Toggle 24/12 hour format');
console.log('  - Add/Remove time zones');
console.log('  - Local storage persistence');
console.log('  - Real-time updates');
