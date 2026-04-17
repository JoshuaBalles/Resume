// ===== Modal Content Data =====
const modalData = {
    // Capstone Project
    capstone: {
        icon: 'fas fa-brain',
        title: 'Capstone Project',
        body: `
            <h3>Deep Learning-Based Multi-Object Weight Estimation for Livestock Management</h3>
            <p>A comprehensive deep learning system designed to estimate the weight of multiple livestock objects in real-time.</p>
            <h3>Technologies Used</h3>
            <ul>
                <li>TensorFlow / Keras for deep learning model development</li>
                <li>OpenCV for image processing and object detection</li>
                <li>Computer Vision techniques for object segmentation</li>
                <li>Python for data preprocessing and analysis</li>
            </ul>
            <h3>Key Features</h3>
            <ul>
                <li>Multi-object detection and tracking</li>
                <li>Real-time weight estimation</li>
                <li>Automated livestock management monitoring</li>
            </ul>
        `
    },

    // Robotany Project
    robotany: {
        icon: 'fas fa-seedling',
        title: 'Robotany',
        body: `
            <h3>A Technological and Interactive Approach for Nurturing House Plants</h3>
            <p>An IoT-based system that helps users monitor and care for their house plants through automated watering, light adjustment, and health monitoring.</p>
            <h3>Technologies Used</h3>
            <ul>
                <li>Arduino / ESP32 for hardware control</li>
                <li>Various sensors: soil moisture, temperature, light</li>
                <li>Mobile app for remote monitoring and control</li>
                <li>Cloud data storage and analytics</li>
            </ul>
            <h3>Key Features</h3>
            <ul>
                <li>Automated watering based on soil moisture levels</li>
                <li>Sunlight exposure monitoring and alerts</li>
                <li>Plant health tracking over time</li>
                <li>Mobile notifications for plant care</li>
            </ul>
        `
    },

    // Google Dino AI
    dino: {
        icon: 'fas fa-gamepad',
        title: 'Google Dino Game AI',
        body: `
            <h3>Automating Google Chrome's Dino Game Using Image Processing</h3>
            <p>A computer vision project that uses image processing techniques to automatically play Chrome's offline dinosaur game.</p>
            <h3>Technologies Used</h3>
            <ul>
                <li>Python with OpenCV for image processing</li>
                <li>NumPy for numerical operations</li>
                <li>Screenshot capture and analysis</li>
                <li>Keyboard input simulation</li>
            </ul>
            <h3>Key Features</h3>
            <ul>
                <li>Real-time obstacle detection</li>
                <li>Automated jump and duck actions</li>
                <li>Adaptive speed handling</li>
                <li>High score optimization</li>
            </ul>
        `
    },

    // COVID-19 Analysis
    covid: {
        icon: 'fas fa-chart-line',
        title: 'COVID-19 Data Analysis',
        body: `
            <h3>Data Analysis of COVID-19 Trends</h3>
            <p>A data analysis project examining COVID-19 trends, patterns, and visualizations to understand the pandemic's spread and impact.</p>
            <h3>Technologies Used</h3>
            <ul>
                <li>Pandas for data manipulation</li>
                <li>NumPy for numerical analysis</li>
                <li>Seaborn and Matplotlib for data visualization</li>
                <li>Python for data processing</li>
            </ul>
            <h3>Key Features</h3>
            <ul>
                <li>Trend analysis and forecasting</li>
                <li>Geographic distribution mapping</li>
                <li>Statistical analysis of case data</li>
                <li>Interactive visualizations</li>
            </ul>
        `
    },

    // TP-Link Experience
    tplink: {
        icon: 'fas fa-wifi',
        title: 'Technical Support Specialist',
        body: `
            <h3>TP-Link Customer Services Inc.</h3>
            <p>3403B 34th One Corp. Centre, J. Vargas Cor., Meralco Ave, Ortigas, Pasig</p>
            <p><strong>October 2024 – February 2026</strong></p>
            
            <h3>Key Responsibilities</h3>
            <ul>
                <li>Configured and optimized Routers, Access Points, Switches, and Wi-Fi Extenders for enterprise and residential clients</li>
                <li>Responded to a daily average of 24+ customers providing remote technical assistance</li>
                <li>Managed high-priority networking issues including Internet Connection Setup, Local IP Addressing, and VPN configurations</li>
            </ul>
            
            <h3>Networking Expertise</h3>
            <ul>
                <li>VPN Client and Server configuration</li>
                <li>Network troubleshooting and diagnostics</li>
                <li>Router firmware updates and optimization</li>
            </ul>
            
            <h3>IoT Support</h3>
            <ul>
                <li>Wi-Fi Cameras and Hub setup and configuration</li>
                <li>Smart Outlet Plugs and Light Switches installation</li>
                <li>Robot Vacuum integration and troubleshooting</li>
            </ul>
        `
    },

    // R.G. Power Experience
    rgpower: {
        icon: 'fas fa-laptop-code',
        title: 'Technical Support Intern',
        body: `
            <h3>R.G. Power Cleaning Solutions, Inc.</h3>
            <p>Bonifacio Global City, Taguig City</p>
            <p><strong>Internship Period</strong></p>
            
            <h3>Web Development</h3>
            <ul>
                <li>Designed, developed, and deployed a complete service booking web application</li>
                <li>Created user-facing features and admin dashboard</li>
                <li>Implemented database integration and user authentication</li>
            </ul>
            
            <h3>IT Support</h3>
            <ul>
                <li>Installed, configured, and maintained computer systems and network connections</li>
                <li>Set up hardware, devices, and software for employee workstations</li>
                <li>Reduced workstation downtime through proactive hardware and network diagnostics</li>
            </ul>
            
            <h3>Customer Service</h3>
            <ul>
                <li>Responded to customer inquiries via phone and in-person</li>
                <li>Provided technical assistance and troubleshooting guidance</li>
                <li>Configured and tested new software and hardware deployments</li>
            </ul>
        `
    },

    // Skills - Python
    'skills-python': {
        icon: 'fab fa-python',
        title: 'Python Programming',
        body: `
            <h3>Python for Data Analysis & ML</h3>
            <p>Proficient in Python programming with focus on data analysis and machine learning applications.</p>
            <h3>Relevant Libraries</h3>
            <ul>
                <li><strong>Pandas</strong> - Data manipulation and analysis</li>
                <li><strong>NumPy</strong> - Numerical computing</li>
                <li><strong>TensorFlow</strong> - Deep learning framework</li>
                <li><strong>Keras</strong> - Neural network API</li>
                <li><strong>Scikit-learn</strong> - Machine learning toolkit</li>
                <li><strong>PyTorch</strong> - Deep learning framework</li>
            </ul>
        `
    },

    // Skills - C++
    'skills-cpp': {
        icon: 'fas fa-code',
        title: 'C++ Programming',
        body: `
            <h3>C++ Programming</h3>
            <p>Solid foundation in C++ programming language for system-level and application development.</p>
            <h3>Applications</h3>
            <ul>
                <li>Embedded systems programming</li>
                <li>Algorithm implementation</li>
                <li>System utility development</li>
                <li>Performance-critical applications</li>
            </ul>
        `
    },

    // Skills - ML
    'skills-ml': {
        icon: 'fas fa-network-wired',
        title: 'Machine Learning',
        body: `
            <h3>Machine Learning & Deep Learning</h3>
            <p>Experienced in building and deploying machine learning models for various applications.</p>
            <h3>Frameworks & Tools</h3>
            <ul>
                <li><strong>TensorFlow</strong> - Production-grade deep learning</li>
                <li><strong>Keras</strong> - High-level neural networks API</li>
                <li><strong>PyTorch</strong> - Flexible deep learning framework</li>
                <li><strong>Scikit-learn</strong> - Classical ML algorithms</li>
            </ul>
            <h3>Experience</h3>
            <ul>
                <li>Deep learning model development</li>
                <li>Computer vision applications</li>
                <li>Data preprocessing and feature engineering</li>
                <li>Model evaluation and optimization</li>
            </ul>
        `
    },

    // Skills - Data Analysis
    'skills-data': {
        icon: 'fas fa-table',
        title: 'Data Analysis',
        body: `
            <h3>Data Analysis & Visualization</h3>
            <p>Skilled in analyzing and visualizing data to extract meaningful insights.</p>
            <h3>Tools & Libraries</h3>
            <ul>
                <li><strong>Pandas</strong> - Data manipulation and analysis</li>
                <li><strong>NumPy</strong> - Numerical operations and arrays</li>
                <li><strong>Seaborn</strong> - Statistical data visualization</li>
                <li><strong>Matplotlib</strong> - Plotting and visualization</li>
            </ul>
            <h3>Capabilities</h3>
            <ul>
                <li>Data cleaning and preprocessing</li>
                <li>Statistical analysis</li>
                <li>Trend identification</li>
                <li>Interactive dashboard creation</li>
            </ul>
        `
    }
};

// ===== DOM Elements =====
const modalOverlay = document.getElementById('modalOverlay');
const modalCard = document.getElementById('modalCard');
const modalClose = document.getElementById('modalClose');
const modalIcon = document.getElementById('modalIcon');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');

// ===== Modal Functions =====
function openModal(key) {
    const data = modalData[key];
    if (!data) return;

    modalIcon.className = data.icon;
    modalTitle.textContent = data.title;
    modalBody.innerHTML = data.body;
    
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

// ===== Event Listeners =====

// Clickable cards in coursework
document.querySelectorAll('.clickable-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalKey = card.dataset.modal;
        openModal(modalKey);
    });
});

// Clickable experience entries
document.querySelectorAll('.clickable-entry').forEach(entry => {
    entry.addEventListener('click', () => {
        const modalKey = entry.dataset.modal;
        openModal(modalKey);
    });
});

// Clickable skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', () => {
        const modalKey = card.dataset.modal;
        openModal(modalKey);
    });
});

// Close button
modalClose.addEventListener('click', closeModal);

// Click outside modal to close
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});
