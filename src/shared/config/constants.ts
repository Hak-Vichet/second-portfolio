import classNames from "classnames";
import { ProjectTypes } from "./types";

// whenever wee need to change default className value we will use this
export const cx = classNames;

// nav data
export const navData = [ "About", "Experience", "Works", "Contact" ]

// project data
export const projects : ProjectTypes[] = [
    {
        title : "Web3 Trading Bot",
        description : "Personal Website V2 Second iteration of my personal website. Designed and developed with a conscious effort to avoid Personal Website V1 Second iteration of my personal website. and Also I add Blog section and saleing system",
        tech : [ "React Js", "Material UI", "TypeScript", "Blockchain" ],
        code : '',
        live : 'https://web3-tradingbot.vercel.app/',
        thumnail : "web3.png",
        featured : true
    },

    {
        title : "Proadvisor",
        description : "'Dg team' an company management system. I use this system for front end “Next js, Tailwind CSS, Axios, Redux, Redux-thunk, Formik, Yup, react-query” and for Backend “Node js, Express js, MongoDB, Socket.io, webRtc”",
        tech : [ "React js", "tailwind CSS", "Next Js", "Spring Boot", "TypeScript" ],
        code : 'https://github.com/Hak-Vichet/Proadvisor',
        live : 'https://proadvisors.vercel.app/',
        thumnail : "proadvisor.png",
        featured : true
    },

    {
        title : "Smart Laundry Dashboard",
        description : "Airebix is an web development agency website. ",
        tech : [ "Figma", "React Js", "Tailwind CSS", "Mongodb", "Express JS" ],
        live : '',
        thumnail : "laundry.png",
    },
    {
        title : "PomoDesk | Desktop Application",
        description : "I clone World Largest E-commerce website Amazon using react js",
        tech : [ "React js", "Tailwind CSS", "Figma" ],
        code : '',
        live : '',
        thumnail : "pomo.png"
    },

    {
        title : "Amazon clone",
        description : "I clone World Largest E-commerce website Amazon using react js",
        tech : [ "React js", "Redux" ],
        // code : 'https://github.com/raihanhosen011/amazon-nw',
        live : 'https://amazon-nw.vercel.app/',
        thumnail : "amazon.png"
    },

    // {
    //     title : "Powermall",
    //     description : "This is an largest e-commerce website of bangladesh",
    //     tech : [ "next js", "tailwind css", "MERN" ],
    //     live : 'https://powermall.com',
    //     thumnail : "powermall.png"
    // }
]