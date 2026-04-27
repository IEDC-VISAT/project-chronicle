export const studyAbroadCountries = [
  {
    id: 1,
    name: "United States",
    flag: "🇺🇸",
    description: "Home to world-renowned universities and diverse academic programs",
    requirements: [
      "Valid passport",
      "University acceptance letter (I-20)",
      "F-1 Student Visa",
      "Proof of financial support",
      "Academic transcripts"
    ],
    exams: [
      { name: "TOEFL", score: "80-100", type: "English Proficiency" },
      { name: "IELTS", score: "6.5-7.5", type: "English Proficiency" },
      { name: "GRE", score: "310+", type: "Graduate" },
      { name: "GMAT", score: "650+", type: "Business School" },
      { name: "SAT", score: "1200+", type: "Undergraduate" }
    ],
    costOverview: {
      tuition: "$20,000 - $50,000 per year",
      living: "$10,000 - $18,000 per year",
      total: "$30,000 - $68,000 per year"
    },
    popularPrograms: ["Computer Science", "Business Administration", "Engineering", "Data Science"],
    workRights: "20 hours/week during semester, full-time during breaks"
  },
  {
    id: 2,
    name: "Germany",
    flag: "🇩🇪",
    description: "Quality education with low or no tuition fees at public universities",
    requirements: [
      "Valid passport",
      "University admission letter",
      "Student visa (National Visa)",
      "Blocked account (€11,208 minimum)",
      "Health insurance"
    ],
    exams: [
      { name: "TestDaF", score: "TDN 4", type: "German Language" },
      { name: "DSH", score: "DSH-2", type: "German Language" },
      { name: "IELTS", score: "6.0-6.5", type: "English Programs" },
      { name: "TOEFL", score: "80-90", type: "English Programs" }
    ],
    costOverview: {
      tuition: "€0 - €3,000 per year (public universities)",
      living: "€850 - €1,200 per month",
      total: "€10,000 - €15,000 per year"
    },
    popularPrograms: ["Engineering", "Automotive", "Computer Science", "Business"],
    workRights: "20 hours/week during semester, full-time during breaks (120 full days/year)"
  },
  {
    id: 3,
    name: "Canada",
    flag: "🇨🇦",
    description: "Welcoming immigration policies and high-quality education system",
    requirements: [
      "Valid passport",
      "Letter of acceptance from DLI",
      "Study permit",
      "Proof of financial support",
      "Medical exam (if required)"
    ],
    exams: [
      { name: "IELTS", score: "6.5 overall", type: "English Proficiency" },
      { name: "TOEFL", score: "90+", type: "English Proficiency" },
      { name: "GRE", score: "310+", type: "Graduate Programs" },
      { name: "GMAT", score: "550+", type: "MBA Programs" }
    ],
    costOverview: {
      tuition: "CAD 15,000 - 35,000 per year",
      living: "CAD 10,000 - 15,000 per year",
      total: "CAD 25,000 - 50,000 per year"
    },
    popularPrograms: ["Computer Science", "Business", "Engineering", "Healthcare"],
    workRights: "20 hours/week during semester, full-time during breaks"
  },
  {
    id: 4,
    name: "United Kingdom",
    flag: "🇬🇧",
    description: "Historic universities and shorter program durations",
    requirements: [
      "Valid passport",
      "CAS (Confirmation of Acceptance)",
      "Student visa (Tier 4)",
      "Proof of funds",
      "TB test certificate"
    ],
    exams: [
      { name: "IELTS", score: "6.0-7.0", type: "English Proficiency" },
      { name: "TOEFL", score: "80-100", type: "English Proficiency" },
      { name: "GRE", score: "310+", type: "Some Graduate Programs" },
      { name: "GMAT", score: "600+", type: "Business Schools" }
    ],
    costOverview: {
      tuition: "£10,000 - £38,000 per year",
      living: "£12,000 - £15,000 per year",
      total: "£22,000 - £53,000 per year"
    },
    popularPrograms: ["Business", "Law", "Engineering", "Arts & Humanities"],
    workRights: "20 hours/week during term, full-time during holidays"
  },
  {
    id: 5,
    name: "Australia",
    flag: "🇦🇺",
    description: "High quality of life and excellent research opportunities",
    requirements: [
      "Valid passport",
      "CoE (Confirmation of Enrolment)",
      "Student visa (Subclass 500)",
      "OSHC (health insurance)",
      "Financial capacity proof"
    ],
    exams: [
      { name: "IELTS", score: "6.5 overall", type: "English Proficiency" },
      { name: "TOEFL", score: "79+", type: "English Proficiency" },
      { name: "PTE Academic", score: "58+", type: "English Proficiency" },
      { name: "GRE", score: "310+", type: "Some Programs" }
    ],
    costOverview: {
      tuition: "AUD 20,000 - 45,000 per year",
      living: "AUD 21,000 - 27,000 per year",
      total: "AUD 41,000 - 72,000 per year"
    },
    popularPrograms: ["Engineering", "IT", "Business", "Health Sciences"],
    workRights: "48 hours per fortnight during semester, unlimited during breaks"
  }
];

export const internationalInternships = [
  {
    id: 1,
    name: "Google Summer of Code (GSoC)",
    organization: "Google",
    type: "Remote",
    duration: "12 weeks",
    stipend: "$1,500 - $6,600",
    eligibility: "University students (18+), Open source contributors",
    description: "Work with open source organizations on real-world projects. Gain mentorship from experienced developers and contribute to widely-used software.",
    applicationPeriod: "March - April",
    website: "https://summerofcode.withgoogle.com"
  },
  {
    id: 2,
    name: "MITACS Globalink",
    organization: "MITACS Canada",
    type: "In-person (Canada)",
    duration: "12 weeks",
    stipend: "CAD 9,000 + travel + accommodation",
    eligibility: "Undergraduate students from partner countries",
    description: "Research internship at Canadian universities. Work alongside faculty on cutting-edge research projects in various fields.",
    applicationPeriod: "September - October",
    website: "https://www.mitacs.ca/globalink"
  },
  {
    id: 3,
    name: "DAAD WISE Scholarship",
    organization: "DAAD Germany",
    type: "In-person (Germany)",
    duration: "2-3 months",
    stipend: "€1,200/month + travel + insurance",
    eligibility: "Undergraduate students in STEM fields",
    description: "Research internship at German universities and research institutions. Excellent opportunity for STEM students to gain international research experience.",
    applicationPeriod: "November - December",
    website: "https://www.daad.de/wise"
  },
  {
    id: 4,
    name: "Outreachy",
    organization: "Software Freedom Conservancy",
    type: "Remote",
    duration: "13 weeks",
    stipend: "$7,000",
    eligibility: "Underrepresented groups in tech",
    description: "Paid internships in open source and open science. Provides support for people subject to systemic bias and impacted by underrepresentation.",
    applicationPeriod: "February & August",
    website: "https://www.outreachy.org"
  },
  {
    id: 5,
    name: "CERN Summer Student Programme",
    organization: "CERN",
    type: "In-person (Switzerland)",
    duration: "8-13 weeks",
    stipend: "CHF 1,000/month + accommodation",
    eligibility: "Undergraduate students in physics, engineering, CS",
    description: "Work at the world's largest particle physics laboratory. Participate in cutting-edge research and attend lectures by leading scientists.",
    applicationPeriod: "December - January",
    website: "https://home.cern/summer-student-programme"
  },
  {
    id: 6,
    name: "NASA Internships",
    organization: "NASA",
    type: "In-person (USA) / Remote",
    duration: "10-16 weeks",
    stipend: "$7,000 - $9,000",
    eligibility: "US citizens, undergraduate/graduate students",
    description: "Work on NASA missions and research projects. Opportunities in engineering, science, IT, and business.",
    applicationPeriod: "Rolling applications",
    website: "https://intern.nasa.gov"
  },
  {
    id: 7,
    name: "Charpak Lab Scholarship",
    organization: "French Embassy",
    type: "In-person (France)",
    duration: "1-6 months",
    stipend: "€700/month",
    eligibility: "Indian students in science/engineering",
    description: "Research internship at French laboratories and institutions. Excellent opportunity for students interested in French research ecosystem.",
    applicationPeriod: "October - December",
    website: "https://www.inde.campusfrance.org/charpak-lab-scholarship"
  },
  {
    id: 8,
    name: "UN Internship Programme",
    organization: "United Nations",
    type: "In-person (Various locations)",
    duration: "2-6 months",
    stipend: "Varies by location (some unpaid)",
    eligibility: "Graduate students or recent graduates",
    description: "Gain experience in international affairs, development, human rights, and more. Work at UN headquarters or field offices worldwide.",
    applicationPeriod: "Rolling applications",
    website: "https://careers.un.org/internships"
  }
];

export const applicationSteps = [
  {
    step: 1,
    title: "Research & Choose Destination",
    description: "Research countries, universities, and programs that align with your goals",
    tasks: [
      "Identify your field of study and career goals",
      "Compare education systems and costs",
      "Check visa requirements and work rights",
      "Shortlist 5-8 universities/programs"
    ],
    timeline: "12-18 months before"
  },
  {
    step: 2,
    title: "Prepare for Exams",
    description: "Take required language proficiency and standardized tests",
    tasks: [
      "Register for IELTS/TOEFL/GRE/GMAT",
      "Study and prepare for exams",
      "Take the tests and achieve required scores",
      "Send official scores to universities"
    ],
    timeline: "10-12 months before"
  },
  {
    step: 3,
    title: "Build Your Profile",
    description: "Strengthen your application with relevant experiences",
    tasks: [
      "Maintain strong academic performance",
      "Gain relevant work/internship experience",
      "Participate in extracurricular activities",
      "Secure strong letters of recommendation"
    ],
    timeline: "Ongoing, 12+ months before"
  },
  {
    step: 4,
    title: "Prepare Application Materials",
    description: "Create compelling application documents",
    tasks: [
      "Write statement of purpose/personal statement",
      "Update and tailor your CV/resume",
      "Request letters of recommendation",
      "Prepare portfolio (if required)"
    ],
    timeline: "6-8 months before"
  },
  {
    step: 5,
    title: "Apply to Universities",
    description: "Submit applications before deadlines",
    tasks: [
      "Complete online application forms",
      "Upload all required documents",
      "Pay application fees",
      "Track application status"
    ],
    timeline: "6-10 months before start date"
  },
  {
    step: 6,
    title: "Secure Funding",
    description: "Arrange finances for tuition and living expenses",
    tasks: [
      "Apply for scholarships and grants",
      "Explore education loans",
      "Prepare financial documents",
      "Open blocked account (if required)"
    ],
    timeline: "4-6 months before"
  },
  {
    step: 7,
    title: "Apply for Visa",
    description: "Complete visa application process",
    tasks: [
      "Receive acceptance letter from university",
      "Gather visa documents",
      "Schedule visa interview",
      "Attend interview and submit biometrics"
    ],
    timeline: "3-4 months before"
  },
  {
    step: 8,
    title: "Pre-Departure Preparation",
    description: "Final preparations before traveling",
    tasks: [
      "Book flights and accommodation",
      "Arrange health insurance",
      "Attend pre-departure orientation",
      "Pack essentials and important documents"
    ],
    timeline: "1-2 months before"
  }
];
