export enum ProjectType {
  MOBILE,
  WEB,
  DESKTOP,
  ALL,
}

export interface Project {
  isFeatured: Boolean;
  isFinished: Boolean;
  projectType: ProjectType;
  title: string;
  youtubeIds?: Array<string>;
  images: Array<string>;
  imageAlt: string;
  link: string;
  shortDescription: string;
  detailedDescription: Array<string>;
  technologies: Array<string>;
}

const allProjects: Array<Project> = [
  {
    isFeatured: true,
    isFinished: false,
    projectType: ProjectType.MOBILE,
    title: "Pass Vault Rewrite (Kotlin Android)",
    images: [...Array(5)].map((_, n) => `/images/pass-vault-kotlin/${n + 1}.png`),
    imageAlt: "Pass Vault Rewrite screenshots",
    link: "https://github.com/justvinny/pass-vault-kotlin-android",
    shortDescription:
      "This is a rewrite of the previous Pass Vault android app which was made in Java almost 2 years ago. I wanted to do it properly this time by using recommended MVVM architecture, unit testing, instrumentation testing, CI using GitHub Actions, and persistence with Room SQLite.",
    detailedDescription: [
      "Fully offline so your data is not being collected",
      "Simple pass code authentication like in mobile banking apps",
      "Store your various account passwords and never forget them again",
      "Generate strong and randomised passwords",
      "Backup your accounts through import and export feature",
    ],
    technologies: [
      "Kotlin",
      "Android Studio",
      "Architecture Components",
      "Material UI",
      "Room SQLite",
      "Espresso",
      "JUnit4",
      "GitHub Actions",
    ],
  },
  {
    isFeatured: true,
    isFinished: true,
    projectType: ProjectType.MOBILE,
    title: "Patient Management System",
    images: [
      "/images/patient-management-system/1.gif",
      ...[...Array(15)].map((_, n) => `/images/patient-management-system/${n + 2}.jpg`),
    ],
    imageAlt: "Patient Management System Animated Screenshot",
    link: "https://github.com/justvinny/sdp-team-doctor-hu",
    shortDescription:
      "Group (4 people) project for our Software Development Practice paper. It's a Patient Management System that allows Staff and Patients to communicate realtime and gives the ability to update patients quickly on their medical results. Below are some features I was primarily responsible for.",
    detailedDescription: [
      "Realtime messaging using Firebase.",
      "Realtime comment chain for Staff and Patients",
      "Authentication flow",
      "Search feature to look up staff and patients.",
      "Search filters and sorting",
      "Firestore queries",
    ],
    technologies: ["Javascript", "React Native", "Firebase"],
  },
  {
    isFeatured: true,
    isFinished: true,
    projectType: ProjectType.DESKTOP,
    title: "Basic 2D RPG Game",
    youtubeIds: ["oBZ6oHcIP7Y"],
    images: [...Array(6)].map((_, n) => `/images/rpg-game-swing/${n + 1}.JPG`),
    imageAlt: "In-game screenshots of this RPG game project.",
    link: "https://github.com/justvinny/rpg-game-pdc",
    shortDescription:
      "Animated 2D RPG Game made in Java and Swing by a team of 3 people for our Program Design and " +
      "Construction Paper.",
    detailedDescription: [
      "Simple map exploration with a 2D animated character",
      "Classic turn based combat reminescent of old school J-RPGs.",
      "Random monster encounters.",
      "Treasure hunting.",
      "Challenging(?) boss battle.",
      "Inventory system where you can equip your character with items to make it stronger or heal up with",
      "Event log for player interactions with different game objects such as treasures, battles, and bosses.",
      "Map generated from ASCII text.",
      "Camera view that centers on player.",
    ],
    technologies: ["Java", "Swing", "Lanterna CLI", "JDBC"],
  },
  {
    isFeatured: false,
    isFinished: true,
    projectType: ProjectType.WEB,
    title: "This Website",
    images: [...Array(3)].map((_, n) => `/images/this-website/${n + 1}.png`),
    imageAlt: "Screenshot of this portfolio website.",
    link: "https://github.com/justvinny/justvinny.github.io",
    shortDescription:
      "Simple SPA portfolio website that uses HTML, CSS, Javascript, React, React Router, Material UI, and GitHub Pages.",
    detailedDescription: [
      "HTML content is dynamically added through Javascript React.",
      "CSS and JSS through Material UI. Most of the layouts are handled using CSS Flexbox.",
      "Material UI is used for most of the components such as App Bar, Navigation Drawer, Card Layouts, Avatars, etc.",
      "Menu navigation uses React Router so user won't have to load new pages from scratch.",
      "Site is built mobile first but is responsive to larger screens such as Tablets and Desktops.",
      "Site is hosted on Github pages.",
    ],
    technologies: [
      "Javascript",
      "HTML",
      "CSS",
      "React",
      "Material UI",
      "Github Pages",
    ],
  },
  {
    isFeatured: false,
    isFinished: false,
    projectType: ProjectType.WEB,
    title: "Gym Tracker Web App",
    images: ["/images/gym-tracker-web-app/gym-tracker-screens.PNG"],
    imageAlt: "Gym tracker app screenshots",
    link: "https://github.com/justvinny/full-stack-gym-tracker-app",
    shortDescription:
      "As an avid gym goer, I always thought it'd be nice to be able to track my progress in the gym. This is to ensure that I am indeed pushing myself hard enough and induce progressive overload. This is still a work in progress and has taken a backseat due to university studies. Nevertheless, I already am using this in my workouts even though it is still very bare bones. Listed below are the currently working features.",
    detailedDescription: [
      "Awesome looking dashboard.",
      "Create workout routines",
      "Dynamically adding exercises to your routines",
      "Track and record your progress such as number of repetitions, sets, and weight lifted.",
    ],
    technologies: [
      "Javascript",
      "HTML",
      "CSS",
      "Material UI",
      "MongoDB",
      "NodeJS",
      "Express",
    ],
  },
  {
    isFeatured: true,
    isFinished: true,
    projectType: ProjectType.MOBILE,
    title: "Pass Vault (Java Android)",
    images: [...Array(7)].map((_, n) => `/images/pass-vault-java/${n + 1}.png`),
    imageAlt: "Password Manager Android Application Screenshot",
    link: "https://github.com/justvinny/pass-vault-java-android",
    shortDescription:
      "Native android password manager application to manage all my passwords. No more getting locked out by Study Link!",
    detailedDescription: [
      "Store accounts to persistent storage.",
      "View accounts stored and copy password to clipboard.",
      "Delete accounts from persistent storage.",
      "Random password generator.",
      "Username search feature.",
      "Account sorting feature.",
      "Import/Export CSV feature.",
      "Create passcode and login feature using SharedPreferences.",
    ],
    technologies: ["Java", "Android Studio", "Room"],
  },
  {
    isFeatured: false,
    isFinished: true,
    projectType: ProjectType.DESKTOP,
    title: "Life Manager",
    images: [...Array(5)].map((_, n) => `/images/life-manager/${n + 1}.png`),
    imageAlt: "Life Manager Application Screenshot",
    link: "https://github.com/justvinny/life-manager-app/tree/main",
    shortDescription:
      "Journal entry and weekly scheduler Desktop application made in Java and Swing where you can either write about your day or schedule events that will happen for that week. This application was made for a School Project where we were free to write any program we wish as long as we demonstrate our knowledge of OOP and core Java.",
    detailedDescription: [
      "Write journal entries about your day and store them permanently to local storage.",
      "Add events to your weekly scheduler so you can priorities things you should do in a week.",
      "Various sortings option availalbe for the weekly scheduler such as sorting by date.",
    ],
    technologies: ["Java", "Swing"],
  },
  {
    isFeatured: false,
    isFinished: true,
    projectType: ProjectType.DESKTOP,
    title: "Pass Volt",
    images: [...Array(4)].map((_, n) => `/images/pass-volt-python/${n + 1}.png`),
    imageAlt: "Pass Volt Application Screenshot",
    link: "https://github.com/justvinny/tk_PassVolt",
    shortDescription:
      "This marks the start of my programming journey in 2019 where I made my very first destop GUI applicating using Python and Tkinter after self-teaching myself programming the past few months at the time.",
    detailedDescription: [
      "Login page to avoid unauthorized users. Account is stored as key value pair using shelve module.",
      "Store account passwords to local storage.",
      "Easily retrieve account passwords stored by copying a password to the clipboard.",
      "Remove old accounts that you don't need anymore.",
    ],
    technologies: ["Python", "Tkinter"],
  },
];

const filteredProjects = (
  isFeatured: Boolean,
  isCompleted: Boolean,
  projectTypes: Array<ProjectType>
) =>
  allProjects.filter(
    (project) =>
      (!isFeatured || isFeatured === project.isFeatured) &&
      (!isCompleted || isCompleted === project.isFinished) &&
      (projectTypes.length === 0 || projectTypes.includes(project.projectType))
  );

export { allProjects, filteredProjects };
