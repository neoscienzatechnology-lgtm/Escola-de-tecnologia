// Mock data for courses
const courses = [
    {
        id: 1,
        title: "Desenvolvimento Web Fullstack",
        description: "Aprenda HTML, CSS, JavaScript, React e Node.js",
        image: "https://via.placeholder.com/300x200/3B82F6/FFFFFF?text=Fullstack",
        duration: "40 horas",
        level: "Iniciante",
        price: "R$ 299"
    },
    {
        id: 2,
        title: "Python para Data Science",
        description: "Análise de dados com Python, Pandas e Machine Learning",
        image: "https://via.placeholder.com/300x200/10B981/FFFFFF?text=Python",
        duration: "35 horas",
        level: "Intermediário",
        price: "R$ 399"
    },
    {
        id: 3,
        title: "DevOps e Cloud Computing",
        description: "Docker, Kubernetes, AWS e práticas DevOps",
        image: "https://via.placeholder.com/300x200/F59E0B/FFFFFF?text=DevOps",
        duration: "50 horas",
        level: "Avançado",
        price: "R$ 499"
    },
    {
        id: 4,
        title: "Mobile com React Native",
        description: "Desenvolva apps para iOS e Android",
        image: "https://via.placeholder.com/300x200/8B5CF6/FFFFFF?text=Mobile",
        duration: "30 horas",
        level: "Intermediário",
        price: "R$ 349"
    },
    {
        id: 5,
        title: "UI/UX Design",
        description: "Design de interfaces e experiência do usuário",
        image: "https://via.placeholder.com/300x200/EF4444/FFFFFF?text=Design",
        duration: "25 horas",
        level: "Iniciante",
        price: "R$ 249"
    },
    {
        id: 6,
        title: "Cybersecurity Essentials",
        description: "Fundamentos de segurança da informação",
        image: "https://via.placeholder.com/300x200/6366F1/FFFFFF?text=Security",
        duration: "45 horas",
        level: "Intermediário",
        price: "R$ 449"
    }
];

// Mock user data
let currentUser = null;
let enrolledCourses = [];

// DOM Elements
const loginBtn = document.getElementById('loginBtn');
const loginModal = document.getElementById('loginModal');
const closeModal = document.getElementById('closeModal');
const loginForm = document.getElementById('loginForm');
const coursesGrid = document.getElementById('coursesGrid');

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    loadCourses();
    setupEventListeners();
    checkAuthState();
});

// Setup event listeners
function setupEventListeners() {
    loginBtn.addEventListener('click', openLoginModal);
    closeModal.addEventListener('click', closeLoginModal);
    loginForm.addEventListener('submit', handleLogin);
    
    // Close modal when clicking outside
    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            closeLoginModal();
        }
    });
}

// Authentication functions
function openLoginModal() {
    loginModal.classList.remove('hidden');
    loginModal.classList.add('flex');
}

function closeLoginModal() {
    loginModal.classList.add('hidden');
    loginModal.classList.remove('flex');
}

function handleLogin(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    // Mock authentication
    if (email && password) {
        currentUser = {
            id: 1,
            name: email.split('@')[0],
            email: email,
            role: 'student'
        };
        
        // Save to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        updateAuthState();
        closeLoginModal();
        showNotification('Login realizado com sucesso!', 'success');
    }
}

function logout() {
    currentUser = null;
    enrolledCourses = [];
    localStorage.removeItem('currentUser');
    localStorage.removeItem('enrolledCourses');
    updateAuthState();
    showNotification('Logout realizado com sucesso!', 'info');
}

function checkAuthState() {
    const savedUser = localStorage.getItem('currentUser');
    const savedEnrollments = localStorage.getItem('enrolledCourses');
    
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateAuthState();
    }
    
    if (savedEnrollments) {
        enrolledCourses = JSON.parse(savedEnrollments);
    }
}

function updateAuthState() {
    if (currentUser) {
        loginBtn.innerHTML = `
            <div class="flex items-center space-x-2">
                <span>Olá, ${currentUser.name}</span>
                <button onclick="logout()" class="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600">
                    Sair
                </button>
            </div>
        `;
    } else {
        loginBtn.innerHTML = 'Entrar';
        loginBtn.onclick = openLoginModal;
    }
    
    loadCourses(); // Reload courses to show enrollment status
}

// Course functions
function loadCourses() {
    coursesGrid.innerHTML = '';
    
    courses.forEach(course => {
        const isEnrolled = enrolledCourses.includes(course.id);
        const courseCard = createCourseCard(course, isEnrolled);
        coursesGrid.appendChild(courseCard);
    });
}

function createCourseCard(course, isEnrolled) {
    const card = document.createElement('div');
    card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow';
    
    card.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="w-full h-48 object-cover">
        <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">${course.title}</h3>
            <p class="text-gray-600 mb-4">${course.description}</p>
            <div class="flex justify-between items-center mb-4">
                <span class="text-sm text-gray-500">
                    <i class="fas fa-clock mr-1"></i>${course.duration}
                </span>
                <span class="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    ${course.level}
                </span>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-2xl font-bold text-blue-600">${course.price}</span>
                ${isEnrolled ? 
                    '<button class="bg-green-500 text-white px-4 py-2 rounded-lg cursor-default">Matriculado</button>' :
                    `<button onclick="enrollCourse(${course.id})" class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                        ${currentUser ? 'Matricular' : 'Fazer Login'}
                    </button>`
                }
            </div>
        </div>
    `;
    
    return card;
}

function enrollCourse(courseId) {
    if (!currentUser) {
        openLoginModal();
        return;
    }
    
    if (!enrolledCourses.includes(courseId)) {
        enrolledCourses.push(courseId);
        localStorage.setItem('enrolledCourses', JSON.stringify(enrolledCourses));
        loadCourses();
        
        const course = courses.find(c => c.id === courseId);
        showNotification(`Você se matriculou no curso "${course.title}"!`, 'success');
    }
}

// Utility functions
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg text-white max-w-sm ${
        type === 'success' ? 'bg-green-500' : 
        type === 'error' ? 'bg-red-500' : 
        'bg-blue-500'
    }`;
    
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span>${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}