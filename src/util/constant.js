import {
  Smartphone,
  Users,
  Code,
  Cpu,
  Bot,
  Database,
  Cloud,
  Box,
  MemoryStick,
  Gamepad2,
  Network,
} from "lucide-react";
import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";
//industries
import governance from "../assets/images/industries/governance.jpg";
import fintech from "../assets/images/industries/fintech.jpg";
import healthcare from "../assets/images/industries/healthcare.jpg";
import advancedrobotics from "../assets/images/industries/advancedrobotics.jpg";
import energy from "../assets/images/industries/energy.jpg";
import edtech from "../assets/images/industries/edtech.jpg";
import space from "../assets/images/industries/space.jpg";
import security from "../assets/images/industries/security.jpg";
// porfolio image
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/web-development-portfolio/5ghomes.png";
import ColdCreekcapImg from "../assets/web-development-portfolio/cold creekcap.png";
import ThinkRealityImg from "../assets/web-development-portfolio/think reality.png";
import AkashMegaMart from "../assets/web-development-portfolio/Akash Mega Mart.png";
import MidwamImmersive from "../assets/web-development-portfolio/Midwam – Immersive Experience Design Company.png";

// Import all images at the top (App Development)
import RentopBikeAndCarImgapp from "../assets/app-development-portfolio/Rentop – Bike & Car Rentals.jpg";
import AkashMegaMartApp from "../assets/app-development-portfolio/Akash Mega Mart Mobile App.jpg";
import FeelItMobileApp from "../assets/app-development-portfolio/FeelIt Mobile App.jpg";
import KlikomicsMobileApp from "../assets/app-development-portfolio/Klikomics Mobile App.jpg";
import AutoSnapMobileApp from "../assets/app-development-portfolio/AutoSnap Mobile App.jpg";
//portfolio
import nanoflow from "../assets/portfolio/nanoflow.png";
import padipal from "../assets/portfolio/padipal.png";
import cryptopadie from "../assets/portfolio/cryptopadie.png";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

export const companyDetails = {
  name: "Onfuturesites",
  email: "example@gmail.com",
  phone: "+91-6238763290",
  address: "company address",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/onfuturesites/?viewAsMember=true",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/onfuturesites/",
      icon: FaInstagram,
    },
    { href: "https://x.com/Onfuturesites", icon: FaXTwitter },
    {
      href: "https://api.whatsapp.com/send/?phone=916238763290&text&type=phone_number&app_absent=0",
      icon: FaWhatsapp,
    },
    // {
    //   href: "",
    //   icon: FaYoutube,
    // },
  ],
  whatsapp:
    "https://api.whatsapp.com/send/?phone=916238763290&text&type=phone_number&app_absent=0",
};

export const services = [
  {
    title: "Mobile App Development",
    link: "mobile-app-development",
    description:
      "Develop secure, high-performance iOS and Android apps with seamless user experiences.",
    icon: Smartphone,
    bgColor: "bg-blue-500",
  },
  {
    title: "Full Stack Web Development",
    link: "full-stack-web-development",
    description:
      "Design and develop responsive websites and scalable web applications with secure backends.",
    icon: Code,
    bgColor: "bg-gray-900",
  },
  {
    title: "Artificial Intelligence Solutions",
    link: "artificial-intelligence-solutions",
    description:
      "Leverage AI to automate processes, enhance decision-making, and gain real-time insights.",
    icon: MemoryStick,
    bgColor: "bg-gray-900",
  },
  {
    title: "Chatbot Development",
    link: "chatbot-development",
    description:
      "Build AI-driven chatbots that enhance support and engagement across platforms.",
    icon: Bot,
    bgColor: "bg-gray-900",
  },
  {
    title: "AI Calling Agency",
    link: "ai-calling-agency",
    description:
      "Automate inbound and outbound calls with intelligent voice agents and CRM integration.",
    icon: Cpu,
    bgColor: "bg-gray-900",
  },
  {
    title: "Blockchain Development",
    link: "blockchain-development",
    description:
      "Create secure, decentralized apps with smart contracts and blockchain consulting.",
    icon: Cloud,
    bgColor: "bg-gray-900",
  },
  {
    title: "AR & VR Development",
    link: "ar-vr-development",
    description:
      "Develop immersive AR/VR experiences for training, retail, education, and entertainment.",
    icon: Box,
    bgColor: "bg-gray-900",
  },
  {
    title: "Game Development",
    link: "game-development",
    description:
      "Design and develop games for mobile, console, and VR with strong gameplay and narratives.",
    icon: Gamepad2,
    bgColor: "bg-gray-900",
  },
  {
    title: "IoT Development",
    link: "iot-development",
    description:
      "Connect smart devices and analyze real-time data to improve efficiency and decision-making.",
    icon: Network,
    bgColor: "bg-gray-900",
  },
];

export const whyChooseUs = [
  "Experienced Team: Our talented developers, designers, and engineers bring years of experience to deliver top-notch results.",
  "Customized Solutions: Every business is unique. We tailor our services to align with your specific goals and challenges.",
  "Innovation at Our Core: We embrace emerging technologies and continuously explore new ideas to deliver future-ready solutions.",
  "Collaborative Approach: We work closely with you throughout the project lifecycle to ensure alignment with your vision.",
  "Scalability & Security: Our solutions are designed to grow with your business, with strong emphasis on performance and data protection.",
];

export const testimonials = [
  {
    quote:
      "Collaborating with Onfuturesites for our application development needs has been a transformative experience. Their team's technical expertise and dedication resulted in a user-friendly and robust application that has significantly enhanced our business operations.",
    author: "John Doe, CEO of Tech Innovations Ltd.",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "The full-stack web development services provided by Onfuturesites have been instrumental in transforming our online presence. Their seamless integration of front-end and back-end technologies has enhanced user engagement and streamlined our processes.",
    author: "Jane Smith, Founder of Creative Solutions Inc.",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Implementing AI solutions developed by Onfuturesites has revolutionized our data analysis capabilities. Their tailored AI models have provided actionable insights, driving strategic decisions and fostering growth.",
    author: "Michael Johnson, CTO of Data Insights Corp.",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "The AI chatbot developed by Onfuturesites has significantly improved our customer service operations. It handles inquiries efficiently, providing instant responses and enhancing user satisfaction.",
    author: "Emily Davis, Customer Support Manager at Retail World",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Leveraging Onfuturesites's AI calling services has optimized our outreach campaigns. The automated system ensures personalized interactions, leading to increased engagement and conversion rates.",
    author: "Robert Brown, Marketing Director of EngageNow",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Custom AI Solutions for Business Growth",
    description:
      "Our AI-powered systems are tailored to your business needs—driving efficiency, automation, and data-driven decision-making with precision and scalability.",
  },
  {
    id: 2,
    icon: graph,
    title: "Predictive Analytics & Smart Insights",
    description:
      "Unlock the power of predictive analytics and machine learning to anticipate trends, optimize strategies, and make smarter, faster decisions.",
  },
  {
    id: 3,
    icon: rocket,
    title: "AI-Driven Automation at Scale",
    description:
      "Automate complex business operations using AI tools like chatbots, intelligent calling systems, and process optimization models built for growth.",
  },
  {
    id: 4,
    icon: start,
    title: "Future-Ready Innovation",
    description:
      "Stay ahead with future-proof technology solutions — from AI and IoT to blockchain and AR/VR — engineered to evolve with your business.",
  },
];

export const faqs = [
  {
    question: "What is Onfuturesites?",
    answer: `Onfuturesites is a full-service technology company delivering innovative digital solutions including web and mobile app development, AI systems, blockchain platforms, AR/VR experiences, and IoT solutions. We help businesses grow and thrive in a digital-first world.`,
  },
  {
    question: "What services does Onfuturesites offer?",
    answer: `Our services include full-stack web development, custom mobile app development, AI and machine learning solutions, blockchain development, AR/VR experiences, game development, and IoT systems integration.`,
  },
  {
    question: "Who can benefit from Onfuturesites services?",
    answer: `Our solutions are designed for businesses of all sizes—from startups to enterprises—across industries like healthcare, finance, retail, entertainment, and logistics. If you're looking to innovate and scale digitally, we can help.`,
  },
  {
    question: "How does the development process work?",
    answer: `We follow a collaborative, end-to-end approach. From idea validation and planning to development, deployment, and support—we work closely with you at every step to ensure alignment with your goals.`,
  },
  {
    question: "What makes Onfuturesites different?",
    answer: `We offer tailored solutions, cutting-edge innovation, and a highly experienced team. Our focus on collaboration, quality, and future-readiness sets us apart in delivering meaningful, scalable, and secure technology solutions.`,
  },
  {
    question: "Is Onfuturesites experienced in emerging technologies?",
    answer: `Yes. We specialize in modern and emerging tech including AI, machine learning, blockchain, AR/VR, and IoT. We continuously explore new tools and methodologies to stay ahead of tech trends.`,
  },
  {
    question: "Do you provide post-launch support?",
    answer: `Absolutely. We offer ongoing support, maintenance, and optimization services to ensure your product continues to perform at the highest standards post-launch.`,
  },
  {
    question: "Can Onfuturesites build custom solutions?",
    answer: `Yes. All our services are customized to match your business needs, industry requirements, and user expectations. We don't believe in one-size-fits-all—each project is uniquely crafted.`,
  },
  {
    question: "How secure are your digital solutions?",
    answer: `We prioritize security and compliance across all projects. From secure code practices and encryption to compliance with industry standards, we build solutions that protect your business and customer data.`,
  },
  {
    question: "How do I get started with a project?",
    answer: `You can reach out to us through our website’s contact form, phone, or email. We'll schedule a consultation to understand your needs, goals, and how we can help.`,
  },
  {
    question: "Where can I learn more about your work?",
    answer: `Visit our website to explore our portfolio, client testimonials, and service breakdowns. You can also follow us on social media to stay updated on our latest projects and innovations.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Integrity",
    description:
      "We believe in building long-term relationships based on trust, honesty, and transparency. We always put your needs first and deliver on our promises.",
  },
  {
    id: 2,
    icon: quality,
    title: "Excellence",
    description:
      "We are committed to delivering the highest quality work in everything we do—from initial planning to the final product, we strive for excellence at every step.",
  },
  {
    id: 3,
    icon: success,
    title: "Customer Focus",
    description:
      "Our clients are at the center of everything we do. We take the time to understand your unique challenges and deliver solutions that work for you.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Innovation",
    description:
      "We constantly embrace new technologies and ideas to create forward-thinking solutions. Experimentation and learning fuel our drive to stay ahead.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "To empower businesses through innovative technology that drives growth, efficiency, and digital transformation—shaping a smarter, more connected future.",
  },
  {
    title: "Our Mission",
    description:
      "To deliver cutting-edge, customized solutions by leveraging emerging technologies like AI, blockchain, IoT, and more—helping clients navigate and lead in a constantly evolving digital landscape.",
  },
  {
    title: "Our Journey",
    description:
      "What began as a small team of innovators has grown into a trusted technology partner for clients across industries. Our evolution is driven by a passion for progress, a commitment to excellence, and a vision to shape the future through tech.",
  },
];

// web development services
export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-commerce Websites",
    // icon: require("./assets/images/icons/online-shopping.png"),
    img: CgWebsite,
    description:
      "Empowering online businesses with tailored e-commerce solutions powered by AI. Our platforms enhance customer engagement, streamline operations, and drive substantial revenue growth through personalized shopping experiences and intelligent recommendations.",
  },
  {
    id: 2,
    title: "Social Media Websites",
    img: GoFileMedia,
    // icon: require("./assets/images/icons/socialmedia.png"),
    description:
      "Creating custom social media websites that captivate audiences with AI-driven content recommendations and engagement strategies, building brand loyalty and driving growth effortlessly.",
  },
  {
    id: 3,
    title: "Landing Websites",
    img: TfiLayoutMediaRightAlt,
    // icon: require("./assets/images/icons/landing-page.png"),
    description:
      "Crafting high-converting landing pages with AI-enhanced design and user behavior tracking to grab attention and inspire action. Designs that showcase your brand’s message and maximize conversions through personalized experiences.",
  },
  {
    id: 4,
    title: "Custom Websites",
    img: MdOutlineDashboardCustomize,
    // icon: require("./assets/images/icons/software-development.png"),
    description:
      "Delivering bespoke websites powered by AI to meet your unique business needs. Our solutions seamlessly combine creativity, functionality, and AI-driven features for an exceptional online presence.",
  },
];

// app development services
export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS App Development",
    img: FaAppStoreIos,
    // icon: require("./assets/images/icons/ios-development.png"),
    description:
      "Specializing in iOS app development using Swift and Objective-C. Delivering apps optimized for performance, speed, and responsiveness with AI-powered features like predictive analytics and personalized user experiences.",
  },
  {
    id: 2,
    title: "Android App Development",
    img: IoLogoAndroid,
    // icon: require("./assets/images/icons/android-development.png"),
    description:
      "Designing and developing Android apps tailored to your business goals. Leveraging Java and Kotlin alongside AI technologies to create robust, efficient applications with intelligent automation and enhanced user engagement.",
  },
  {
    id: 3,
    title: "Flutter App Development",
    img: SiFlutter,

    // icon: require("./assets/images/icons/flutter-development.png"),
    description:
      "Using Flutter to create apps for both iOS and Android with a single codebase. Integrating AI-driven solutions to overcome challenges, enhance performance, and deliver smarter, feature-rich applications.",
  },
  {
    id: 4,
    title: "Hybrid App Development",
    img: TbDeviceMobileCode,
    // icon: require("./assets/images/icons/hybrid-app-development.png"),
    description:
      "Developing feature-rich hybrid apps tailored to your business needs. Incorporating AI-powered tools to create mobile-friendly apps that work seamlessly across iOS and Android platforms while delivering intelligent insights and improved functionality.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: governance,
    title: "Governance & Law",
    description:
      "AI-driven governance systems, decentralized smart city infrastructure, and AI-optimized public resource management for transparent and efficient decision-making.",
  },
  {
    id: 2,
    img: fintech,
    title: "Fintech & Decentralized Economy",
    description:
      "Holo-economy platforms integrating AI, blockchain, and quantum computing, self-regulating DeFi ecosystems, and quantum-secure financial systems.",
  },
  {
    id: 3,
    img: healthcare,
    title: "Healthcare & Bioinformatics",
    description:
      "AI-augmented healthcare ecosystems, personalized genetic and consciousness-based medicine, and neural AI interfaces for mind-body optimization.",
  },
  {
    id: 4,
    img: advancedrobotics,
    title: "Advanced Robotics & Automation",
    description:
      "Quantum AI-driven manufacturing, sentient AI collaborators in R&D, and self-sustaining AI factories for intelligent industrial solutions.",
  },
  {
    id: 5,
    img: energy,
    title: "Energy & Climate Sustainability",
    description:
      "AI-based universal energy flow management, quantum blockchain for global resource distribution, and zero-point energy-powered decentralized grids.",
  },
  {
    id: 6,
    img: edtech,
    title: "Edtech & Meta-Learning",
    description:
      "AI-driven knowledge expansion networks, holo-academies for experiential learning, and quantum neuro-learning systems for accelerated education.",
  },
  {
    id: 7,
    img: space,
    title: "Space & Extraterrestrial Expansion",
    description:
      "Astrocomputing networks utilizing AI and quantum for space travel, terraforming AI systems, and extraterrestrial economy with Web 5.0 communication.",
  },
  {
    id: 8,
    img: security,
    title: "Advanced Defense & Autonomous Security",
    description:
      "AI-driven autonomous weapon systems, private military contracting for force projection, and directed energy and hypersonic tech for advanced defense.",
  },
];

export const webPortfolio = [
  {
    id: 1,
    img: FiveGHomesImg,
    title: "5g Homes",
    link: "https://5ghighspeedinternet.co",
  },
  {
    id: 3,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 9,
    img: ThinkRealityImg,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 90,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 91,
    img: MidwamImmersive,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// export const appPortfolio = [
//   {
//     id: 1,
//     img: DubaiTravelGuideImg,
//     title: "Dubai Travel Guide",
//     link: "https://play.google.com/store/apps/details?id=com.eBps.dubai.travel.guide&pcampaignid=web_share",
//   },
//   {
//     id: 2,
//     img: EloraHairPalourImg,
//     title: "Elora Hair Palour",
//     link: "https://play.google.com/store/apps/details?id=app.barbera.io&pcampaignid=web_share",
//   },
//   {
//     id: 3,
//     img: EvansFrancisImg,
//     title: "Evans Francis",
//     link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.evansfrancis&pcampaignid=web_share",
//   },
//   {
//     id: 4,
//     img: HouseOfDeliverenceImg,
//     title: "House of Deliverence",
//     link: "https://play.google.com/store/apps/details?id=com.chrisBanappdevelopers.hod&pcampaignid=web_share",
//   },
//   {
//     id: 5,
//     img: MybitsShopImg,
//     title: "Mybits Shop",
//     link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
//   },
//   {
//     id: 6,
//     img: NamazImg,
//     title: "Namaz",
//     link: "https://play.google.com/store/apps/details?id=com.iccbrossard.prayerBmes&pcampaignid=web_share",
//   },
//   {
//     id: 7,
//     img: PoteaImg,
//     title: "Potea",
//     link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
//   },
//   {
//     id: 8,
//     img: RentopBikeAndCarImg,
//     title: "Rentop Bike and Car",
//     link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
//   },
// ];

export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItMobileApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 3,
    img: KlikomicsMobileApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutoSnapMobileApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 8,
    img: RentopBikeAndCarImgapp,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

export const blockchainPortfolio = [
  {
    id: 1,
    img: nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
