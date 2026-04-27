export const resumeTemplates = [
  {
    id: 1,
    name: "Classic Professional",
    description: "Traditional format perfect for corporate roles",
    style: "Formal, single-column layout with clear sections",
    bestFor: "Finance, Consulting, Traditional Industries",
    downloadUrl: "#"
  },
  {
    id: 2,
    name: "Modern Tech",
    description: "Clean, contemporary design for tech positions",
    style: "Two-column layout with skills sidebar",
    bestFor: "Software Engineering, Data Science, Tech Startups",
    downloadUrl: "#"
  },
  {
    id: 3,
    name: "Creative Portfolio",
    description: "Visually appealing for design and creative roles",
    style: "Colorful accents with portfolio section",
    bestFor: "UI/UX Design, Graphic Design, Marketing",
    downloadUrl: "#"
  }
];

export const promptLibrary = [
  {
    id: 1,
    title: "Resume Improvement",
    category: "Career",
    prompt: "Review my resume for a [Job Title] position. Analyze the job description below and suggest improvements to my resume to better match the requirements. Focus on quantifiable achievements and relevant keywords.\n\nJob Description:\n[Paste job description here]\n\nMy Resume:\n[Paste your resume here]",
    usage: "Replace placeholders with your actual job title, description, and resume content"
  },
  {
    id: 2,
    title: "Interview Preparation",
    category: "Career",
    prompt: "I have an interview for a [Job Title] position at [Company Name]. Generate 10 common interview questions for this role, including both technical and behavioral questions. For each question, provide a framework for answering effectively.",
    usage: "Customize with your specific job title and company name"
  },
  {
    id: 3,
    title: "LinkedIn Optimization",
    category: "Professional Branding",
    prompt: "Help me optimize my LinkedIn profile for [Your Field/Role]. Generate:\n1. A compelling headline (under 120 characters)\n2. An engaging About section (under 2000 characters)\n3. 5 key skills to highlight\n4. Suggestions for featured content\n\nMy background: [Brief description of your experience and goals]",
    usage: "Fill in your field and background information"
  },
  {
    id: 4,
    title: "Cover Letter Generator",
    category: "Career",
    prompt: "Write a compelling cover letter for a [Job Title] position at [Company Name]. Highlight my relevant experience and explain why I'm a great fit.\n\nJob Description:\n[Paste job description]\n\nMy Key Qualifications:\n[List your relevant skills and experiences]",
    usage: "Provide job details and your qualifications"
  },
  {
    id: 5,
    title: "Learning Roadmap",
    category: "Skill Development",
    prompt: "Create a detailed 6-month learning roadmap to become proficient in [Skill/Technology]. Include:\n1. Week-by-week breakdown\n2. Recommended resources (free and paid)\n3. Project ideas for practice\n4. Milestones to track progress\n\nMy current level: [Beginner/Intermediate/Advanced]\nTime available: [Hours per week]",
    usage: "Specify the skill you want to learn and your availability"
  },
  {
    id: 6,
    title: "Project Idea Generator",
    category: "Skill Development",
    prompt: "Generate 5 project ideas to practice [Technology/Skill]. For each project:\n1. Provide a clear description\n2. List key features to implement\n3. Estimate difficulty level\n4. Suggest technologies to use\n\nMy skill level: [Beginner/Intermediate/Advanced]\nInterests: [Your specific interests]",
    usage: "Customize with your target technology and interests"
  },
  {
    id: 7,
    title: "Salary Negotiation",
    category: "Career",
    prompt: "Help me prepare for salary negotiation for a [Job Title] position. Provide:\n1. Market research talking points\n2. How to present my value proposition\n3. Response templates for different scenarios\n4. Questions to ask about compensation package\n\nOffered salary: [Amount]\nMy target: [Amount]\nLocation: [City/Country]",
    usage: "Include your specific salary details and location"
  },
  {
    id: 8,
    title: "Code Review Request",
    category: "Technical",
    prompt: "Review this code and provide feedback on:\n1. Code quality and best practices\n2. Potential bugs or edge cases\n3. Performance optimizations\n4. Readability and maintainability\n\nLanguage: [Programming Language]\nPurpose: [What the code does]\n\n```\n[Paste your code here]\n```",
    usage: "Include your code and specify the programming language"
  }
];

export const linkedInFields = {
  "Web Developer": {
    headline: "Full Stack Web Developer | React, Node.js, MongoDB | Building Scalable Web Applications",
    about: "Passionate web developer with expertise in modern JavaScript frameworks and full-stack development. I specialize in creating responsive, user-friendly web applications that solve real-world problems.\n\n🔧 Technical Skills:\n• Frontend: React, JavaScript, HTML5, CSS3\n• Backend: Node.js, Express, RESTful APIs\n• Database: MongoDB, PostgreSQL\n• Tools: Git, Docker, AWS\n\n💡 What I Do:\nI transform ideas into functional, elegant web solutions. Whether it's building interactive user interfaces or architecting robust backend systems, I focus on writing clean, maintainable code that scales.\n\n🎯 Currently:\nExploring serverless architectures and contributing to open-source projects. Always eager to learn new technologies and collaborate on innovative projects.\n\nLet's connect and build something amazing together!"
  },
  "Data Scientist": {
    headline: "Data Scientist | Machine Learning | Python, SQL | Turning Data into Actionable Insights",
    about: "Data scientist passionate about extracting meaningful insights from complex datasets and building predictive models that drive business decisions.\n\n📊 Core Competencies:\n• Machine Learning: Scikit-learn, TensorFlow, PyTorch\n• Data Analysis: Python, Pandas, NumPy\n• Visualization: Matplotlib, Seaborn, Tableau\n• Databases: SQL, NoSQL\n• Statistics: Hypothesis testing, A/B testing\n\n🔍 What I Do:\nI bridge the gap between data and decision-making. From exploratory data analysis to deploying ML models in production, I help organizations leverage their data assets effectively.\n\n🚀 Projects:\nDeveloped predictive models improving accuracy by 25%, created automated data pipelines processing millions of records, and built interactive dashboards for stakeholder insights.\n\nAlways exploring new ML techniques and staying current with the latest in AI/ML research."
  },
  "Software Engineer": {
    headline: "Software Engineer | Full Stack Development | Cloud Architecture | Problem Solver",
    about: "Software engineer dedicated to building robust, scalable applications and solving complex technical challenges.\n\n💻 Technical Expertise:\n• Languages: Python, JavaScript, Java, Go\n• Frameworks: React, Django, Spring Boot\n• Cloud: AWS, Azure, Docker, Kubernetes\n• Practices: Agile, TDD, CI/CD\n\n🛠️ What I Do:\nI design and implement end-to-end software solutions, from system architecture to deployment. My focus is on writing efficient, maintainable code and following best practices for software development.\n\n🎯 Achievements:\n• Architected microservices handling 1M+ daily requests\n• Reduced application load time by 40% through optimization\n• Led team of 5 developers on critical projects\n\n📚 Continuous Learner:\nRegularly contributing to open source, attending tech conferences, and staying updated with emerging technologies.\n\nLet's connect and discuss technology, software architecture, or potential collaborations!"
  },
  "UI/UX Designer": {
    headline: "UI/UX Designer | User-Centered Design | Figma Expert | Creating Delightful Digital Experiences",
    about: "UI/UX designer passionate about creating intuitive, accessible, and visually appealing digital experiences that users love.\n\n🎨 Design Skills:\n• Tools: Figma, Adobe XD, Sketch\n• Research: User interviews, usability testing, personas\n• Design: Wireframing, prototyping, design systems\n• Principles: Accessibility, responsive design, interaction design\n\n✨ What I Do:\nI transform complex problems into simple, elegant solutions through user-centered design. My process involves deep user research, iterative prototyping, and close collaboration with development teams.\n\n🏆 Impact:\n• Redesigned app increasing user engagement by 35%\n• Created design system adopted across 10+ products\n• Conducted 50+ user interviews informing product decisions\n\n🌱 Philosophy:\nGreat design is invisible. It's about understanding user needs, removing friction, and creating experiences that feel natural and effortless.\n\nAlways excited to discuss design, collaborate on projects, or share insights about UX best practices!"
  },
  "DevOps Engineer": {
    headline: "DevOps Engineer | Cloud Infrastructure | CI/CD | Kubernetes | Automation Enthusiast",
    about: "DevOps engineer focused on building reliable, scalable infrastructure and streamlining development workflows through automation.\n\n⚙️ Technical Stack:\n• Cloud: AWS, Azure, GCP\n• Containers: Docker, Kubernetes, Helm\n• CI/CD: Jenkins, GitHub Actions, GitLab CI\n• IaC: Terraform, Ansible, CloudFormation\n• Monitoring: Prometheus, Grafana, ELK Stack\n\n🚀 What I Do:\nI bridge development and operations, implementing DevOps practices that accelerate delivery while maintaining system reliability. From infrastructure as code to automated deployment pipelines, I optimize the entire software lifecycle.\n\n📈 Achievements:\n• Reduced deployment time from hours to minutes\n• Achieved 99.9% uptime for critical services\n• Automated infrastructure provisioning saving 20+ hours/week\n\n🔧 Approach:\nEverything as code. Automate everything. Monitor everything. My goal is to make deployments boring and predictable while empowering developers to ship faster.\n\nLet's connect to discuss DevOps practices, cloud architecture, or infrastructure challenges!"
  }
};
