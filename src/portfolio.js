/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Tripathi",
  title: "Hi all, I'm Rahul",
  subTitle: emoji(
    "I’m a passionate Full Stack Software Developer with hands-on experience building scalable web and mobile applications using JavaScript, React.js, Node.js,PHP and a range of modern frameworks and tools. 🚀"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/rahul-tripathi-abaa9615/",
  gmail: "rahulknit007@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Full Stack Developer with Expertise in Cloud, APIs, and Scalable Architectures",
  skills: [
    "⚡ Programming Languages: JavaScript (ES5 & ES6), PHP, TypeScript, Node.js",
    "⚡ Databases: MySQL, PostgreSQL, NoSQL",
    "⚡ Frameworks: Express.js, NestJS, CodeIgniter",
    "⚡ Web Services & APIs: RESTful APIs, SOAP-based Services",
    "⚡ Event Streaming & Messaging: Apache Kafka, Google Pub/Sub, Amazon SQS",
    "⚡ Caching Systems: Memcached, Redis",
    "⚡ E-commerce Platforms: BigCommerce, Magento",
    "⚡ CMS: WordPress",
    "⚡ Cloud & DevOps: AWS Lambda, Amazon S3, Docker, GitHub/GitLab CI/CD"
  ],
    projects: [
    {
      title: "Scalable Lead Distribution System",
      role: "Full-stack Developer",
      duration: "1 month",
      technologies: ["Node.js", "AWS Lambda", "SQS", "CloudWatch", "Elasticsearch"],
      highlights: [
        "Migrated monolithic PHP CRM to serverless Node.js on AWS Lambda",
        "Handled 50,000+ leads/day with retry logic and error handling",
        "Improved processing time by 40% and reduced costs by 25%"
      ]
    },
    {
      title: "Travel Itinerary Management System",
      role: "Full-stack Developer",
      duration: "1 year",
      technologies: ["Node.js", "AWS Lambda", "SQS", "PostgreSQL", "CI/CD"],
      highlights: [
        "Built cloud-native travel itinerary management system",
        "Automated booking workflows & CRM integrations",
        "Implemented async fault-tolerant processing with SQS"
      ]
    },
    {
      title: "Booster",
      role: "Project Lead",
      duration: "1 year",
      technologies: ["Node.js", "Kafka", "Docker", "AWS Cognito", "Keycloak"],
      highlights: [
        "Developed real-time geofencing platform for operations",
        "Implemented secure service integrations with AWS Secret Manager",
        "Led backend API, infra setup, and CI/CD automation"
      ]
    },
    {
      title: "inkmeso.com",
      role: "Senior Developer",
      duration: "1 year",
      technologies: ["React.js", "Node.js", "PHP"],
      highlights: [
        "Developed custom e-commerce backend & REST APIs",
        "Integrated React.js frontend with legacy PHP modules"
      ]
    },
    {
      title: "inkdotpot.com",
      role: "Senior Developer",
      duration: "1 year",
      technologies: ["React.js", "Node.js"],
      highlights: [
        "Built backend APIs for scalable e-commerce site",
        "Worked with frontend team for seamless integration"
      ]
    },
    {
      title: "Viaspot",
      role: "Senior Developer",
      duration: "6 months",
      technologies: ["Laravel"],
      highlights: [
        "Delivered full-stack business application",
        "Handled bug fixes, feature rollouts, and performance tuning"
      ]
    },
    {
      title: "Marketplace Integrations",
      role: "Full-stack Developer",
      duration: "2 years",
      technologies: ["Node.js", "PHP"],
      highlights: [
        "Developed integrations with eBay, Walmart, Lazada",
        "Built order sync, multi-channel listing & stock automation"
      ]
    }
  ],
   domainExpertise: {
    VAS: [
      "Billing integrations with Airtel, MTS, Uninor, Reliance, Tata Docomo",
      "Developed MIS dashboards and shortcode-driven applications (SMS/USSD)",
      "Built XHTML WAP portals for early mobile devices",
      "Orchestrated SMS, MMS, and IVR communication strategies"
    ],
    EV: [
      "Implemented OCPP 2.0 for EV charging stations",
      "Integrated telematics & CRM for real-time analytics",
      "Developed predictive maintenance and load balancing",
      "Built real-time dashboards for charging sessions and billing"
    ],


  },

  softwareSkills: [
  // Programming Languages
  { skillName: "JavaScript (ES5 & ES6)", fontAwesomeClassname: "fab fa-js" },
  { skillName: "TypeScript", fontAwesomeClassname: "fas fa-code" },
  { skillName: "PHP", fontAwesomeClassname: "fab fa-php" },
  { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },

  // Databases
  { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
  { skillName: "NoSQL", fontAwesomeClassname: "fas fa-database" },

  // Frameworks
  { skillName: "Express.js", fontAwesomeClassname: "fas fa-server" },
  { skillName: "NestJS", fontAwesomeClassname: "fas fa-cubes" },
  { skillName: "CodeIgniter", fontAwesomeClassname: "fas fa-fire" },

  // Web Services & APIs
  { skillName: "RESTful APIs", fontAwesomeClassname: "fas fa-plug" },
  { skillName: "SOAP Services", fontAwesomeClassname: "fas fa-exchange-alt" },

  // Event Streaming & Messaging
  { skillName: "Apache Kafka", fontAwesomeClassname: "fas fa-stream" },
  { skillName: "Google Pub/Sub", fontAwesomeClassname: "fas fa-broadcast-tower" },
  { skillName: "Amazon SQS", fontAwesomeClassname: "fas fa-envelope" },

  // Caching Systems
  { skillName: "Memcached", fontAwesomeClassname: "fas fa-memory" },
  { skillName: "Redis", fontAwesomeClassname: "fas fa-database" },

  // E-commerce Platforms
  { skillName: "BigCommerce", fontAwesomeClassname: "fas fa-shopping-cart" },
  { skillName: "Magento", fontAwesomeClassname: "fas fa-shopping-bag" },

  // CMS
  { skillName: "WordPress", fontAwesomeClassname: "fab fa-wordpress" },

  // Cloud & DevOps
  { skillName: "AWS Lambda", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Amazon S3", fontAwesomeClassname: "fab fa-aws" },
  { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" },
  { skillName: "GitHub", fontAwesomeClassname: "fab fa-github" },
  { skillName: "GitLab", fontAwesomeClassname: "fab fa-gitlab" }
],

  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
  schoolName: "Kamla Nehru Institute of Technology, Sultanpur",
  logo: require("./assets/images/knitLogo.png"), // update with actual logo path
  subHeader: "Master of Computer Applications (MCA)",
  duration: "July 2007 - July 2010",
  desc: "Completed a postgraduate degree with emphasis on computer science concepts, software engineering, and application development.",
  descBullets: [
    "Gained expertise in programming, data structures, algorithms, and database management",
    "Worked on academic projects focusing on web and software development",
    "Participated in technical workshops, coding competitions, and seminars"
  ]
}
    ,
  {
  schoolName: "C.S.J.M University Kanpur",
  logo: require("./assets/images/csjmLogo.png"),
  subHeader: "Bachelor of Science (B.Sc.)",
  duration: "July 2002 - July 2005",
  desc: "Completed Bachelor of Science with a strong foundation in core scientific and mathematical concepts, along with practical lab experience.",
  descBullets: [
    "Studied subjects such as Physics, Chemistry, Mathematics, and Computer Applications",
    "Developed analytical, problem-solving, and research skills",
    "Engaged in laboratory work, experiments, and project-based learning"
  ]
}
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
      {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },

    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
  {
    role: "Senior Software Developer",
    company: "HolidayTribe.com",
    companylogo: require("./assets/images/holidaytribeLogo.png"),
    date: "Aug 2024 – May 2025",
    desc: "Leading end-to-end development and architecture of scalable travel tech solutions.",
    descBullets: [
      "Mentoring engineers and enforcing best practices in code quality and delivery",
      "Driving DevOps workflows and observability using AWS and Kibana (ELK stack)"
    ]
  },
  {
    role: "Project Lead",
    company: "Samin Tekmindz Pvt Ltd",
    companylogo: require("./assets/images/saminTekmindzLogo.png"),
    date: "May 2022 – Jul 2024",
    desc: "Directed development of enterprise-grade applications using NestJS with a focus on unit testing and maintainability.",
    descBullets: [
      "Designed and implemented microservices-based architecture, improving modularity and scalability",
      "Coordinated sprint planning, team performance, and code reviews",
      "Technologies: NestJS, PHP, Kafka, PostgreSQL, AWS SQS, Kibana"
    ]
  },
  {
    role: "Senior Software Developer",
    company: "IBA Craft Pvt Ltd, Noida",
    companylogo: require("./assets/images/ibacraftLogo.png"),
    date: "Jun 2019 – May 2022",
    desc: "Spearheaded the design and development of e-commerce platforms using Node.js and PHP.",
    descBullets: [
      "Implemented scalable microservices and managed cross-functional team efforts",
      "Led project estimations, deadlines, and agile delivery cycles",
      "Technologies: Node.js, PHP, Kafka, PostgreSQL"
    ]
  },
  {
    role: "Senior Software Developer",
    company: "Hungama Digital Media",
    companylogo: require("./assets/images/hungamaLogo.png"),
    date: "Sep 2014 – Jun 2019",
    desc: "Developed robust backend APIs and services for media platforms.",
    descBullets: [
      "Integrated multiple third-party systems including payment gateways and content providers",
      "Embraced event-driven design using Kafka to decouple services",
      "Technologies: Node.js, PHP, MySQL, Kafka"
    ]
  },
  // {
  //   role: "Team Lead",
  //   company: "Abaan Outsourcing Pvt Ltd, Lucknow",
  //   companylogo: require("./assets/images/abaanLogo.png"),
  //   date: "May 2012 – Jun 2014",
  //   desc: "Managed development and delivery of PHP-based web applications.",
  //   descBullets: [
  //     "Facilitated client communications, requirement analysis, and sprint planning",
  //     "Supervised junior developers and conducted code reviews",
  //     "Technologies: PHP, MySQL"
  //   ]
  // }
]

};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7042094905",
  email_address: "rahulknit007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
