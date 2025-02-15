import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    carrent,
    jobit,
    usermanagement,
    gitsniffer,
    passwordmanager,
    github,
    Postman,
    Vercel
} from "../assets";

export const navLinks = [
    {
    id: "about",
    title: "About",
    },
    {
    id: "technologies",
    title: "Technologies",
    },
    {
    id: "projects",
    title: "Projects",
    },
    {
    id: "contact",
    title: "Contact",
    },
];

const services = [
    {
    title: "Web Developer",
    icon: web,
    },
    {
    title: "React Developer",
    icon: mobile,
    },
    {
    title: "Frontend Developer",
    icon: backend,
    },
    {
    title: "UI Developer",
    icon: creator,
    },
];

const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "CSS 3",
    icon: css,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    {
    name: "React JS",
    icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
    name: "figma",
    icon: figma,
    },
    {
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "MongoDB",
    icon: mongodb,
    },
    {
    name: "git",
    icon: git,
    },
    {
    name: "github",
    icon: github,
    },
    {
    name: "postman",
    icon: Postman,
    },
    {
    name: "vercel",
    icon: Vercel,
    },
];


const projects = [
    {
    name: "Bistro Boss",
    description:
        "Bistro Boss is a web-based platform that enables users to browse and order food online, providing a convenient solution for enjoying meals at home.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "mongodb",
        color: "green-text-gradient",
        },
        {
        name: "tailwind",
        color: "pink-text-gradient",
        },
    ],
    image: carrent,
    source_code_link: "https://github.com/Khalid09dev/bistro-boss-client",
    live_link: "https://bistro-boss-bca3b.web.app",
    },
    {
    name: "Dashdeals",
    description:
        "Dashdeals is an online platform where users can browse, purchase, and manage a variety of products, offering a seamless shopping experience for all their needs.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "restapi",
        color: "green-text-gradient",
        },
        {
        name: "tanstackquery",
        color: "pink-text-gradient",
        },
    ],
    image: jobit,
    source_code_link: "https://github.com/Khalid09dev/E-Commerce",
    live_link: "https://dashdeals-8226d.web.app",
    },
    {
    name: "User Management",
    description:
        "This User Management System simplifies user data management with features like search, update, delete, and sorting, improving organization and scalability for platforms of any size.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "tailwind",
        color: "green-text-gradient",
        },
        {
        name: "node",
        color: "pink-text-gradient",
        },
        {
        name: "express",
        color: "yellow-text-gradient",
        },
    ],
    image: usermanagement,
    source_code_link: "https://github.com/iamkhalidhussein/User-Management",
    live_link: "https://user-management-amber-two.vercel.app",
    },
    {
    name: "Password Manager",
    description:
        "The Password Manager web app securely stores, updates, and deletes passwords, ensuring encryption and protection against unauthorized access while helping users manage login details efficiently.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "tailwind",
        color: "green-text-gradient",
        },
        {
        name: "node",
        color: "pink-text-gradient",
        },
        {
        name: "express",
        color: "yellow-text-gradient",
        },
    ],
    image: passwordmanager,
    source_code_link: "https://github.com/iamkhalidhussein/password-manager",
    live_link: "https://neovaults.web.app",
    },
    {
    name: "Github Profile Explorer",
    description:
        "The GitHub Profile Explorer displays detailed GitHub profile information, including repositories, followers, and contributions, using GitHub's public API, allowing users to easily explore profiles and contributions.",
    tags: [
        {
        name: "react",
        color: "blue-text-gradient",
        },
        {
        name: "tailwind",
        color: "green-text-gradient",
        },
        {
        name: "node",
        color: "pink-text-gradient",
        },
        {
        name: "express",
        color: "yellow-text-gradient",
        },
    ],
    image: gitsniffer,
    source_code_link: "https://github.com/iamkhalidhussein/github-profile-viewer",
    live_link: "https://gitsniffer.web.app",
    },
];

export { services, technologies, projects };