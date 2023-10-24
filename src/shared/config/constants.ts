import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = ["About", "Experience", "Works", "Contact"];

// project data
export const projects: ProjectTypes[] = [
  {
    title: "Web3 Trading Bot",
    description:
      "I joined the Web3 team as fronend developer to develop a platform for trading bots that facilitates buying and selling. This platform enables all traders to showcase the performance of their trading bots. The platform employs blockchain technology for payment operations.",
    tech: ["React Js", "Material UI", "TypeScript", "Blockchain"],
    code: "",
    live: "https://web3-tradingbot.vercel.app/",
    thumnail: "web3.png",
    featured: true,
  },

  {
    title: "Proadvisor",
    description:
      "I've joined ProAdvisor to work on a platform related to the banking sector in Cambodia. This platform allows every user to access promotions and information from various banks. Additionally, it offers a comparison feature that allows users to view the differences between banks in terms of interest rates and savings options based on different terms.",
    tech: ["React js", "tailwind CSS", "Next Js", "Spring Boot", "TypeScript"],
    code: "https://github.com/Hak-Vichet/Proadvisor",
    live: "https://proadvisors.vercel.app/",
    thumnail: "proadvisor.png",
    featured: true,
  },

  {
    title: "Smart Laundry Dashboard",
    description:
      "This is a smart laundry dashboard that allows users to access all laundry-related information, including machine status, user schedules, the number of extra requests, and laundry roles.",
    tech: ["Figma", "React Js", "Tailwind CSS", "Mongodb", "Express JS"],
    live: "",
    thumnail: "laundry.png",
  },
  {
    title: "PomoDesk | Desktop Application",
    description:
      "I clone World Largest E-commerce website Amazon using react js",
    tech: ["React js", "Tailwind CSS", "Figma"],
    code: "",
    live: "",
    thumnail: "pomo.png",
  },
  {
    title: "Modern Bank | Website",
    description: "I have build a responsive and modern bank leading page.",
    tech: ["React js", "Tailwind CSS", "Figma"],
    code: "https://github.com/Hak-Vichet/Modern_Bank.git",
    live: "https://modern-bank-vichet.vercel.app/",
    thumnail: "modern_bank.png",
  },
  {
    title: "AI Summary | Website",
    description: "I have build SaaS website for AI Summary",
    tech: ["React js", "Tailwind CSS", "Redux", "Rapid Api"],
    code: "https://github.com/Hak-Vichet/AI_summary.git",
    live: "https://ai-summary-mu.vercel.app/",
    thumnail: "ai_summary.png",
  },

  // {
  //     title : "Amazon clone",
  //     description : "I clone World Largest E-commerce website Amazon using react js",
  //     tech : [ "React js", "Redux" ],
  //     // code : 'https://github.com/raihanhosen011/amazon-nw',
  //     live : 'https://amazon-nw.vercel.app/',
  //     thumnail : "amazon.png"
  // },

  // {
  //     title : "Powermall",
  //     description : "This is an largest e-commerce website of bangladesh",
  //     tech : [ "next js", "tailwind css", "MERN" ],
  //     live : 'https://powermall.com',
  //     thumnail : "powermall.png"
  // }
];
