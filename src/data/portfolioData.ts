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
  expectedYear: "expected 2027",
  email: "bhushanmani2205@gmail.com",
  phone: "+91 6206264155",
  linkedIn: "https://www.linkedin.com/in/manibhushan-kumar-299a6739a",
  about:
    "Aspiring AI and Data Science enthusiast with practical experience in Python, Machine Learning, and Generative AI, seeking to apply technical skills to real-world problem solving and contribute to AI-driven projects.",
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Associate Software Intern",
    company: "SingleTap Software Solution",
    description:
      "Developing AI and web-based applications through project-driven learning and practical assignments; solving coding challenges; building hands-on projects using Git-based version control and collaborative workflows; working with mentors on industry-aligned projects.",
  },
  {
    role: "Data Science Intern",
    company: "Bussibees EdTech Pvt. Ltd.",
    type: "Summer Internship",
    duration: "45-day intensive summer internship",
    description:
      "Completed a 45-day intensive summer internship focused on data-driven solutions and machine learning workflows. Hands-on with data acquisition, cleaning, exploratory data analysis using Python, AI, statistical modelling, machine learning algorithms, and collaborating with a technical team to develop and validate predictive models.",
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "classcapture",
    title: "ClassCapture — AI Smart Classroom & Live Transcript System",
    summary:
      "AI-powered smart classroom platform automating attendance and generating real-time multilingual lecture transcripts and summarized notes.",
    problem:
      "Automating attendance tracking and generating real-time bilingual (Hindi-English) lecture transcripts and summarized notes for accessible learning.",
    techStack: [
      "Python",
      "Flask",
      "OpenCV",
      "Face Recognition",
      "VOSK",
      "Whisper AI",
      "HuggingFace Transformers",
      "PyTorch",
      "PyAudio",
    ],
    features: [
      "Live camera attendance detection",
      "VOSK/Whisper Hindi-English transcription with language detection",
      "Transformer-based lecture note summaries",
      "Flask dashboard for attendance, transcripts, summaries",
      "Multilingual accessible learning support",
    ],
  },
  {
    id: "sales-forecasting",
    title: "Sales Forecasting for Small Retail Stores",
    summary:
      "AI-driven retail analytics system using historical sales to forecast revenue, optimize inventory planning, and support decisions.",
    problem:
      "Using historical sales data to forecast revenue, optimize inventory planning, evaluate discount impact, and identify declining sales or low margins without claiming quantified accuracy or business results.",
    techStack: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit",
      "Matplotlib",
      "Seaborn",
      "Linear Regression",
    ],
    features: [
      "Linear-regression sales forecasts",
      "Streamlit KPI dashboard for revenue, profit margin, average order value, category contribution and trends",
      "Preprocessing, moving averages, trend analysis, discount impact",
      "Flags declining sales, low margins, and excessive discount dependency with improvement suggestions",
    ],
  },
  {
    id: "library-management",
    title: "Library Management System",
    summary:
      "Web-based application digitizing library operations with real-time inventory and circulation tracking.",
    problem:
      "Digitizing library operations with real-time inventory and circulation tracking for administrative and student users.",
    techStack: [
      "Python",
      "Streamlit",
      "SQLite",
      "SQL",
      "Datetime",
      "VS Code",
      "Git",
    ],
    features: [
      "Admin and student portals with isolated sessions",
      "SQLite catalog by title, author, category, ISBN and copy availability",
      "Issue/return flows tracking copy counts and dates",
      "Student enrollment login and borrow/due/overdue/history view",
      "Admin dashboard with catalogue, volumes, active issues and overdue alerts",
    ],
  },
];

export const SKILLS: string[] = [
  "Data Structures and Algorithms in C++",
  "Python",
  "Machine Learning",
  "MySQL",
  "Excel",
  "Data Analysis",
  "NLP",
  "Computer Vision",
  "NumPy",
  "Pandas",
  "Operating Systems",
  "DBMS",
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    degree: "B.Tech CSE (AI & Data Science)",
    institution: "Poornima College of Engineering",
    location: "Jaipur",
    year: "Expected 2027",
    grade: "CGPA 7.15",
  },
  {
    degree: "Diploma in CSE",
    institution: "Gyan Vihar School of Engineering & Technology",
    location: "Jaipur",
    year: "2024",
    grade: "CGPA 7.21",
  },
  {
    degree: "Matriculation",
    institution: "BSEB",
    location: "Patna",
    year: "2021",
    grade: "75.4%",
  },
];

export const CERTIFICATIONS_LIST: CertificationItem[] = [
  {
    title: "Google Cloud Launchpad",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
  },
  {
    title: "Python for Data Science",
  },
  {
    title: "DSA with Java",
  },
  {
    title: "JavaScript",
  },
];
