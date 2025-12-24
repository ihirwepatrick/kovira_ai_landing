import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About",
    url: "/about",
  },
  {
    id: "1",
    title: "What We Do",
    url: "#what-we-do",
  },
  {
    id: "2",
    title: "Join Network",
    url: "#join-network",
  },
  {
    id: "3",
    title: "Contact",
    url: "/contact",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const koviraServices = [
  "AI Engineering",
  "Data Science",
  "Machine Learning",
  "Robotics",
  "Medical AI",
  "Financial AI",
];

export const koviraServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const vision = [
  {
    id: "0",
    title: "Global Talent Network",
    text: "Building Africa's first intelligent AI talent ecosystem connecting skilled professionals worldwide.",
    date: "2024",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Intelligent Matching",
    text: "AI-powered automation matching top African engineers with global opportunities faster and smarter.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Multi-Domain Expertise",
    text: "Connecting AI professionals across engineering, data science, finance, medicine, robotics, and more.",
    date: "2024",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Affordable Access",
    text: "Making global opportunities accessible to African AI talent through smart, cost-effective solutions.",
    date: "2024",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Connecting top African AI talent with global companies through intelligent automation and smart matching.";

export const collabContent = [
  {
    id: "0",
    title: "Global Reach",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Expert Network",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const benefits = [
  {
    id: "0",
    title: "Global Opportunities",
    text: "Connect with companies worldwide seeking top AI talent. Access opportunities beyond borders.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Smart Matching",
    text: "AI-powered intelligent automation matches your skills with the perfect opportunities faster.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Multi-Domain Network",
    text: "Join professionals across engineering, data science, finance, medicine, robotics, and more.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Affordable Access",
    text: "Access global opportunities through cost-effective solutions designed for African talent.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
];

// Benefits moved above

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const contactEmail = "kovira.aai@gmail.com";

// IMPORTANT: Replace YOUR_FORM_ID with your actual Google Form ID
// To get your form ID: Create a Google Form, click "Send", then copy the form ID from the embed URL
// Example: https://docs.google.com/forms/d/e/1FAIpQLSd.../viewform?embedded=true
export const googleFormUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true";
