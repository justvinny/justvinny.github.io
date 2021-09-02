const projectData = [
    {
        isFeatured: false,
        isFinished: true,
        title: "This Website",
        image: "images/website-screen.JPG",
        iamgeAlt: "Screenshot of this portfolio website.",
        link: "https://github.com/justvinny/justvinny.github.io",
        shortDescription: "Simple SPA portfolio website that uses HTML, CSS, Javascript, React, React Router, Material UI, and GitHub Pages.",
        detailedDescription: [
            "HTML content is dynamically added through Javascript React.",
            "CSS and JSS through Material UI. Most of the layouts are handled using CSS Flexbox.",
            "Material UI is used for most of the components such as App Bar, Navigation Drawer, Card Layouts, Avatars, etc.",
            "Menu navigation uses React Router so user won't have to load new pages from scratch.",
            "Site is built mobile first but is responsive to larger screens such as Tablets and Desktops.",
            "Site is hosted on Github pages."
        ],
        technologies: [
            "Javascript",
            "HTML",
            "CSS",
            "React",
            "Material UI",
            "Github Pages"
        ]
    },
    {
        isFeatured: true,
        isFinished: true,
        title: "Basic 2D RPG Game",
        youtubeId: "oBZ6oHcIP7Y",
        image: "images/rpg-project-image.JPG",
        iamgeAlt: "RPG Game Screenshot with character and golem sprite.",
        link: "https://github.com/justvinny/rpg-game-pdc",
        shortDescription: "Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and "
            + "Construction Paper.",
        detailedDescription: [
            "Simple map exploration with a 2D animated character",
            "Classic turn based combat reminescent of old school J-RPGs.",
            "Random monster encounters.",
            "Treasure hunting.",
            "Challenging(?) boss battle.",
            "Inventory system where you can equip your character with items to make it stronger or heal up with",
            "Event log for player interactions with different game objects such as treasures, battles, and bosses.",
            "Map generated from ASCII text.",
            "Camera view that centers on player."
        ],
        technologies: [
            "Java",
            "Swing",
            "Lanterna CLI",
            "JDBC"
        ]
    },
    {
        isFeatured: true,
        isFinished: true,
        title: "Password Manager (Android)",
        image: "images/password-manager-screens-p1.png",
        iamgeAlt: "Password Manager Android Application Screenshot",
        link: "https://github.com/justvinny/pass-vault-java-android",
        shortDescription: "Native android password manager application to manage all my passwords. No more getting locked out by Study Link!",
        detailedDescription: [
            "Store accounts to persistent storage.",
            "View accounts stored and copy password to clipboard.",
            "Delete accounts from persistent storage.",
            "Random password generator.",
            "Username search feature.",
            "Account sorting feature.",
            "Import/Export CSV feature.",
            "Create passcode and login feature using SharedPreferences."
        ],
        technologies: [
            "Java",
            "Android Studio",
            "Room"
        ]
    },
    {
        isFeatured: false,
        isFinished: true,
        title: "Life Manager",
        image: "images/life-manager-screen.PNG",
        iamgeAlt: "Life Manager Application Screenshot",
        link: "https://github.com/justvinny/life-manager-app/tree/main",
        shortDescription: "Journal entry and weekly scheduler Desktop application made in Java and Swing where you can either write about your day or schedule events that will happen for that week. This application was made for a School Project where we were free to write any program we wish as long as we demonstrate our knowledge of OOP and core Java.",
        detailedDescription: [
            "Write journal entries about your day and store them permanently to local storage.",
            "Add events to your weekly scheduler so you can priorities things you should do in a week.",
            "Various sortings option availalbe for the weekly scheduler such as sorting by date."
        ],
        technologies: [
            "Java",
            "Swing"
        ]
    },
    {
        isFeatured: false,
        isFinished: true,
        title: "Pass Volt",
        image: "images/tk-pass-volt-screen.png",
        iamgeAlt: "Pass Volt Application Screenshot",
        link: "https://github.com/justvinny/tk_PassVolt",
        shortDescription: "This marks the start of my programming journey in 2019 where I made my very first destop GUI applicating using Python and Tkinter after self-teaching myself programming the past few months at the time.",
        detailedDescription: [
            "Login page to avoid unauthorized users. Account is stored as key value pair using shelve module.",
            "Store account passwords to local storage.",
            "Easily retrieve account passwords stored by copying a password to the clipboard.",
            "Remove old accounts that you don't need anymore."
        ],
        technologies: [
            "Python",
            "Tkinter"
        ]
    },
    {
        isFeatured: false,
        isFinished: false,
        isMobile: true,
        featuredOngoing: true,
        title: "Patient Management System",
        image: "images/patient-management-system.gif",
        iamgeAlt: "Patient Management System Animated GIF Screenshot",
        link: "https://github.com/justvinny/sdp-team-doctor-hu",
        shortDescription: "This is a project I'm working on with 3 other people for our Software Development Practice paper. It allows staff at small clinics to communicate with each other realtime, post important notes for staff & patients to read, upload medical results, and book appointments. Below are features I was primarily responsible for.",
        detailedDescription: [
            "Realtime messaging using Firebase.",
            "Authentication flow",
            "Search feature to look up staff and patients.",
            "Search filters and sorting",
            "Firestore queries"
        ],
        technologies: [
            "Javascript",
            "React Native",
            "Firebase"
        ]
    },
    {
        isFeatured: false,
        isFinished: false,
        title: "Gym Tracker Web App",
        image: "images/gym-tracker-screens.PNG",
        iamgeAlt: "Pass Volt Application Screenshot",
        link: "https://github.com/justvinny/full-stack-gym-tracker-app",
        shortDescription: "As an avid gym goer, I always thought it'd be nice to be able to track my progress in the gym. This is to ensure that I am indeed pushing myself hard enough and induce progressive overload. This is still a work in progress and has taken a backseat due to university studies. Nevertheless, I already am using this in my workouts even though it is still very bare bones. Listed below are the currently working features.",
        detailedDescription: [
            "Create workout routines",
            "Dynamically adding exercises to your routines",
            "Track and record your progress such as number of repetitions, sets, and weight lifted."
        ],
        technologies: [
            "Javascript",
            "HTML",
            "CSS",
            "Material UI",
            "MongoDB",
            "NodeJS",
            "Express"
        ]
    }
];

const featuredProjects = projectData.filter(project => project.isFeatured);
const ongoingProjects = projectData.filter(project => !project.isFinished);
const finishedProjects = projectData.filter(project => project.isFinished);
const featuredOngoingProject = projectData.filter(project => project.featuredOngoing);

export {finishedProjects, featuredProjects, featuredOngoingProject, ongoingProjects};