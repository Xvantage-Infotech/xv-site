import { Code, Figma, Github, Globe, Instagram, Linkedin, Smartphone, Trophy, UserCheck, Users } from "lucide-react";

export const teamMember = [
  {
    img: "/vipulsapra (2).jpeg",
    name: "vipulsapra",
    position: "CEO & Founder",
    description:
      "A visionary leader with a passion for innovation, Vipul drives the company's strategic growth and fosters a culture of excellence.",
  },
  {
    img: "/rahul sapra.jfif",
    name: "Rahul Sapra",
    position: "CTO & Co-Founder",
    description:
      "With a deep technical background, Rahul spearheads the technology roadmap, ensuring cutting-edge solutions and scalable architectures.",
  },
  {
    img: "/harsh.jpeg",
    name: "Harsh Patel",
    position: "MERN Developer",
    description:
      "A full-stack expert specializing in the MERN stack, Harsh builds high-performance applications with seamless user experiences.",
  },
  {
    img: "/jenish.jpg",
    name: "Jenish Borad",
    position: "UI/UX Designer",
    description:
      "Jenish blends creativity with functionality, crafting visually appealing and user-friendly designs that enhance digital experiences.",
  },
];

export const completeProject = [
  {
    number: "250+",
    label: "Projects Completed",
    icon: <Trophy className="w-6 sm:w-8 h-6 sm:h-8" />,
  },
  {
    number: "120+",
    label: "Happy Clients",
    icon: <Users className="w-6 sm:w-8 h-6 sm:h-8" />,
  },
  {
    number: "15+",
    label: "Employees",
    icon: <UserCheck className="w-6 sm:w-8 h-6 sm:h-8" />,
  },
];

export const process = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deeply understanding your goals, target audience, and project requirements to lay a strong foundation.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "Crafting a tailored roadmap that aligns with your vision, ensuring a structured and efficient workflow.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Creating visually stunning and user-friendly interfaces that enhance engagement and usability.",
  },
  {
    number: "04",
    title: "Development",
    description:
      "Transforming designs into fully functional, high-performance digital experiences with clean, scalable code.",
  },
];

export const services = [
  {
    icon: <Figma className="w-8 h-8" />,
    title: "UI/UX Design",
    description:
      "Crafting seamless and visually compelling user experiences that enhance usability and engagement.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Developing fast, responsive, and scalable websites with modern technologies to ensure a smooth user experience.",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Design",
    description:
      "Designing intuitive, high-performance mobile interfaces for iOS and Android to maximize user satisfaction.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Brand Identity",
    description:
      "Creating strong and memorable brand identities that communicate your vision and connect with your audience.",
  },
];

export const navItems = ["Services","Portfolio", "Process", "Contact"];

export const featureWork = [
  {
    title: "Book My Farm",
    // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
    // link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
    image: "/bookmyfarm.png",
    // category: "Age Calc",
  },
  {
    title: "Book My Farm Admin Panel",
    // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
    // link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
    image: "/bmfadmin.png",
    // category: "Age Calc",
  },
  {
    title: "Car Info",
    // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
    // link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
    image: "/carinf.png",
    // category: "Age Calc",
  },
     {
    title: "Byting Korner",
    // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
    // link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
    image: "/Bk.png",
    // category: "Age Calc",
  },
  {
    title: "Spy Game",
    // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
    // link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
    image: "/spygame.png",
    // category: "Age Calc",
  },

  {
  title: "Age Calc",
  // desc: "Next-gen Age-Calc for count your perfect Age with Zodiac Sign",
  link: "https://apps.apple.com/us/app/agecalc-date-life-calculator/id6739868943",
  image: "/agecalc.png",
  // category: "Age Calc",
},

    {
    title: "Nandanvan Farm",
    // desc: "Modern Farm platform with booking features",
    link: "https://www.nandanvanfarm.com/",
    image: "/nandanvan.jpg",
    // category: "Nandanvan Farm",
  },
];

export const socialIcon = [
  {
    icon: <Github className="w-5 h-5 sm:w-6 sm:h-6" />,
    href: "https://github.com/XvantageInfotech",
    label: "GitHub",
  },
  {
    icon: <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />,
    href: "https://www.linkedin.com/company/xvantage-infotech",
    label: "LinkedIn",
  },
  {
    icon: <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />,
    href: "https://www.instagram.com/xvantage_infotech/",
    label: "Instagram",
  },
]; 

export const Ios = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    className="w-10 h-10 sm:w-10 sm:h-10 text-white"
    fill="currentColor"
  >
    <path d="M318.7 268.5c-2.1-35.3 16.2-61.8 50.4-80.4-19.1-27.8-47.6-43.1-84.2-45.3-35.3-2.1-73.5 20.7-86.4 20.7-13.1 0-48.3-19.8-74.6-19.3-59.6.9-113.1 43.6-113.1 126.3 0 27.7 5 56.5 16.7 85.5 14.8 37 69.4 128.7 112.6 127.3 21.7-.6 37.1-15.4 68.5-15.4 31.1 0 44.7 15.4 68.5 15.4 43.5 0 89.7-84.4 103.4-121.4-65.3-31.1-62.3-91.7-62.3-93.9zM260.1 100.4c23.1-27.9 21.3-53.6 20.5-62.5-19.9 1-43 13.3-56.2 30.1-13 16.6-24.3 42.6-21.3 67.3 21.9 1.7 42.2-9.5 57-24.9z" />
  </svg>
);


export const Android = () =>(
  <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.999 511.999"
                className="w-10 h-10 sm:w-9 sm:h-9"
              >
                <g>
                  <path
                    fill="#32BBFF"
                    d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                  />
                  <path
                    fill="#32BBFF"
                    d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                  />
                  <path
                    fill="#32BBFF"
                    d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                  />
                </g>
                <path
                  fill="#2C9FD9"
                  d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98H23.549z"
                />
                <path
                  fill="#29CC5E"
                  d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212C322.891,142.356,227.427,88.937,79.355,6.028z"
                />
                <path
                  fill="#D93F21"
                  d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
                />
                <path
                  fill="#FFD500"
                  d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
                />
                <path
                  fill="#FFAA00"
                  d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205C446.624,300.379,470.108,287.294,470.108,287.294z"
                />
              </svg>
);