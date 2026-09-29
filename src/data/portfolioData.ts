export interface ProjectItem {
  id: string;
  title: string;
  summary: string;
  problem: string;
  techStack: string[];
  features: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  type?: string;
  duration?: string;
  description: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}

export interface CertificationItem {
  title: string;
}

export const PERSONAL_INFO = {
  name: "Manibhushan Kumar",
  title: "Aspiring AI and Data Science enthusiast",
  educationSubtitle: "B.Tech CSE (AI & Data Science)",
  institution: "Poornima College of Engineering, Jaipur",
  expectedYear: "Pursuing, expected 2027",
  email: "bhushanmani2205@gmail.com",
  phone: "+91 6206264155",
  linkedIn: "https://www.linkedin.com/in/manibhushan-kumar-299a6739a",
  about:
    "Aspiring AI and Data Science enthusiast seeking to apply technical skills to real-world problem solving and contribute to AI-driven projects.",
};

// The current resume does not list employment or internships.
export const EXPERIENCES: ExperienceItem[] = [];

export const PROJECTS: ProjectItem[] = [
  {
    id: "library-management",
    title: "Library Management System",
    summary:
      "A web-based database application that digitizes daily library operations and provides real-time inventory and circulation tracking.",
    problem:
      "Replace manual paper-based record keeping with an easier way to manage library books, members, issues, returns and availability.",
    techStack: ["Python", "Streamlit", "SQLite", "SQL", "Datetime", "VS Code", "Git"],
    features: [
      "Separate Administrator and Student portals",
      "Role-based access with isolated Streamlit session state",
      "Digitized library records and circulation workflows",
      "Real-time inventory and book availability tracking",
    ],
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting for Small Retail Stores",
    summary:
      "An AI-driven retail analytics system that forecasts revenue from historical sales, supports inventory planning and helps guide data-driven decisions.",
    problem:
      "Help small retailers understand historical sales trends and use forecasts and business KPIs to plan inventory and make informed decisions.",
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit", "Matplotlib", "Seaborn", "Linear Regression"],
    features: [
      "Linear Regression model analyzes historical sales and forecasts future performance",
      "Interactive dashboard visualizes revenue, profit margin, average order value and category contribution",
      "Sales trend visualizations support retail planning",
    ],
  },
  {
    id: "classcapture",
    title: "ClassCapture — AI Smart Classroom & Live Transcript System",
    summary:
      "An AI-powered classroom platform for automated attendance and real-time multilingual lecture transcripts with summarized notes.",
    problem:
      "Support digital learning with automatic attendance and accessible Hindi/English lecture transcripts and summaries.",
    techStack: ["Python", "Flask", "OpenCV", "Face Recognition", "VOSK", "Whisper AI", "HuggingFace Transformers", "PyTorch", "PyAudio", "MySQL"],
    features: [
      "Detects and marks attendance from live camera feeds using OpenCV and face recognition",
      "Converts classroom lectures into real-time Hindi/English transcripts using VOSK and Whisper AI",
      "Supports language detection and summarized lecture notes",
    ],
  },
];

export const SKILLS: string[] = [
  "Full Stack Developer",
  "Python for Data Science",
  "DSA with Java",
  "JavaScript",
  "MySQL",
  "Excel",
  "Data Analysis",
  "Computer Vision",
  "DBMS",
  "English",
  "Hindi",
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "B.Tech CSE (AI & Data Science)",
    institution: "Poornima College of Engineering",
    location: "Jaipur",
    year: "Expected 2027",
    grade: "Pursuing",
  },
  {
    degree: "Diploma in CSE",
    institution: "Suresh Gyan Vihar University",
    location: "Jaipur",
    year: "2024",
    grade: "7.21",
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  { title: "Google Cloud Launchpad" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional" },
  { title: "Python for Data Science" },
  { title: "DSA with Java" },
  { title: "JavaScript" },
];
