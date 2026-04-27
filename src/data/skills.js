export const skills = [
  {
    id: 1,
    name: "React Development",
    category: "Web Development",
    difficulty: "Intermediate",
    trending: true,
    editorsPick: false,
    tags: ["Free", "Certification"],
    description: "Master modern React development with hooks, state management, and component architecture.",
    howToLearn: [
      "Learn JavaScript fundamentals and ES6+ features",
      "Understand components, props, and state",
      "Master React hooks (useState, useEffect, useContext)",
      "Learn state management with Context API or Redux",
      "Build real-world projects and deploy them"
    ],
    whereToLearn: [
      { name: "React Official Documentation", type: "Documentation", url: "https://react.dev" },
      { name: "freeCodeCamp React Course", type: "YouTube", url: "https://youtube.com" },
      { name: "Scrimba React Course", type: "Interactive", url: "https://scrimba.com" },
      { name: "Udemy React Complete Guide", type: "Course", url: "https://udemy.com" }
    ]
  },
  {
    id: 2,
    name: "Python Programming",
    category: "Programming",
    difficulty: "Beginner",
    trending: true,
    editorsPick: true,
    tags: ["Free"],
    description: "Start your programming journey with Python, one of the most versatile languages.",
    howToLearn: [
      "Learn basic syntax and data types",
      "Practice with loops, conditions, and functions",
      "Understand OOP concepts",
      "Work with libraries like NumPy and Pandas",
      "Build automation scripts and small projects"
    ],
    whereToLearn: [
      { name: "Python.org Tutorial", type: "Documentation", url: "https://python.org" },
      { name: "Codecademy Python", type: "Interactive", url: "https://codecademy.com" },
      { name: "CS50 Python", type: "Course", url: "https://cs50.harvard.edu" },
      { name: "Automate the Boring Stuff", type: "Book", url: "https://automatetheboringstuff.com" }
    ]
  },
  {
    id: 3,
    name: "Machine Learning",
    category: "Data Science",
    difficulty: "Advanced",
    trending: true,
    editorsPick: true,
    tags: ["Paid", "Certification"],
    description: "Dive into ML algorithms, model training, and predictive analytics.",
    howToLearn: [
      "Master Python and statistics fundamentals",
      "Learn linear algebra and calculus basics",
      "Study ML algorithms (regression, classification, clustering)",
      "Practice with scikit-learn and TensorFlow",
      "Work on Kaggle competitions and real datasets"
    ],
    whereToLearn: [
      { name: "Andrew Ng's ML Course", type: "Course", url: "https://coursera.org" },
      { name: "Fast.ai", type: "Course", url: "https://fast.ai" },
      { name: "Kaggle Learn", type: "Interactive", url: "https://kaggle.com" },
      { name: "Hands-On ML Book", type: "Book", url: "https://oreilly.com" }
    ]
  },
  {
    id: 4,
    name: "Data Structures & Algorithms",
    category: "Core Engineering",
    difficulty: "Intermediate",
    trending: false,
    editorsPick: true,
    tags: ["Free"],
    description: "Essential for technical interviews and efficient problem-solving.",
    howToLearn: [
      "Understand basic data structures (arrays, linked lists, stacks, queues)",
      "Learn trees, graphs, and hash tables",
      "Master sorting and searching algorithms",
      "Practice dynamic programming and greedy algorithms",
      "Solve problems on LeetCode and HackerRank daily"
    ],
    whereToLearn: [
      { name: "LeetCode", type: "Practice", url: "https://leetcode.com" },
      { name: "NeetCode YouTube", type: "YouTube", url: "https://youtube.com" },
      { name: "GeeksforGeeks", type: "Documentation", url: "https://geeksforgeeks.org" },
      { name: "Cracking the Coding Interview", type: "Book", url: "https://amazon.com" }
    ]
  },
  {
    id: 5,
    name: "UI/UX Design",
    category: "Web Development",
    difficulty: "Beginner",
    trending: true,
    editorsPick: false,
    tags: ["Free", "Paid"],
    description: "Create beautiful and user-friendly interfaces with design thinking.",
    howToLearn: [
      "Learn design principles (color, typography, spacing)",
      "Master Figma or Adobe XD",
      "Study user research and personas",
      "Practice wireframing and prototyping",
      "Build a portfolio with case studies"
    ],
    whereToLearn: [
      { name: "Figma YouTube Channel", type: "YouTube", url: "https://youtube.com" },
      { name: "Google UX Design Certificate", type: "Course", url: "https://coursera.org" },
      { name: "Laws of UX", type: "Documentation", url: "https://lawsofux.com" },
      { name: "Daily UI Challenge", type: "Practice", url: "https://dailyui.co" }
    ]
  },
  {
    id: 6,
    name: "Communication Skills",
    category: "Soft Skills",
    difficulty: "Beginner",
    trending: false,
    editorsPick: false,
    tags: ["Free"],
    description: "Master effective communication for professional success.",
    howToLearn: [
      "Practice active listening",
      "Learn to structure your thoughts clearly",
      "Work on public speaking and presentations",
      "Improve written communication (emails, reports)",
      "Seek feedback and iterate"
    ],
    whereToLearn: [
      { name: "Toastmasters", type: "Community", url: "https://toastmasters.org" },
      { name: "Coursera Communication Courses", type: "Course", url: "https://coursera.org" },
      { name: "TED Talks", type: "YouTube", url: "https://ted.com" },
      { name: "LinkedIn Learning", type: "Course", url: "https://linkedin.com" }
    ]
  },
  {
    id: 7,
    name: "Docker & Kubernetes",
    category: "Core Engineering",
    difficulty: "Advanced",
    trending: true,
    editorsPick: false,
    tags: ["Free", "Certification"],
    description: "Master containerization and orchestration for modern DevOps.",
    howToLearn: [
      "Understand containerization concepts",
      "Learn Docker basics (images, containers, volumes)",
      "Master Docker Compose for multi-container apps",
      "Study Kubernetes architecture and components",
      "Deploy applications on K8s clusters"
    ],
    whereToLearn: [
      { name: "Docker Documentation", type: "Documentation", url: "https://docs.docker.com" },
      { name: "Kubernetes Official Tutorials", type: "Documentation", url: "https://kubernetes.io" },
      { name: "TechWorld with Nana", type: "YouTube", url: "https://youtube.com" },
      { name: "KodeKloud", type: "Course", url: "https://kodekloud.com" }
    ]
  },
  {
    id: 8,
    name: "SQL & Database Design",
    category: "Data Science",
    difficulty: "Beginner",
    trending: false,
    editorsPick: true,
    tags: ["Free"],
    description: "Learn to design, query, and manage relational databases effectively.",
    howToLearn: [
      "Understand database fundamentals and RDBMS concepts",
      "Learn SQL syntax (SELECT, JOIN, GROUP BY, etc.)",
      "Practice database normalization and design",
      "Master indexing and query optimization",
      "Work with PostgreSQL or MySQL"
    ],
    whereToLearn: [
      { name: "SQLBolt", type: "Interactive", url: "https://sqlbolt.com" },
      { name: "Mode SQL Tutorial", type: "Interactive", url: "https://mode.com" },
      { name: "W3Schools SQL", type: "Documentation", url: "https://w3schools.com" },
      { name: "LeetCode SQL Problems", type: "Practice", url: "https://leetcode.com" }
    ]
  },
  {
    id: 9,
    name: "Git & Version Control",
    category: "Programming",
    difficulty: "Beginner",
    trending: false,
    editorsPick: true,
    tags: ["Free"],
    description: "Essential tool for collaborative development and code management.",
    howToLearn: [
      "Understand version control concepts",
      "Learn basic Git commands (commit, push, pull, branch)",
      "Master branching strategies and merge conflicts",
      "Practice with GitHub/GitLab workflows",
      "Contribute to open-source projects"
    ],
    whereToLearn: [
      { name: "Git Official Documentation", type: "Documentation", url: "https://git-scm.com" },
      { name: "GitHub Learning Lab", type: "Interactive", url: "https://lab.github.com" },
      { name: "Atlassian Git Tutorials", type: "Documentation", url: "https://atlassian.com" },
      { name: "freeCodeCamp Git Course", type: "YouTube", url: "https://youtube.com" }
    ]
  },
  {
    id: 10,
    name: "Time Management",
    category: "Soft Skills",
    difficulty: "Beginner",
    trending: false,
    editorsPick: false,
    tags: ["Free"],
    description: "Optimize productivity and balance multiple responsibilities effectively.",
    howToLearn: [
      "Learn prioritization techniques (Eisenhower Matrix)",
      "Practice time blocking and scheduling",
      "Use productivity tools (Notion, Todoist)",
      "Eliminate distractions and build focus",
      "Review and adjust your systems regularly"
    ],
    whereToLearn: [
      { name: "Getting Things Done", type: "Book", url: "https://gettingthingsdone.com" },
      { name: "Productivity YouTube Channels", type: "YouTube", url: "https://youtube.com" },
      { name: "Coursera Time Management", type: "Course", url: "https://coursera.org" },
      { name: "Notion Templates", type: "Tool", url: "https://notion.so" }
    ]
  },
  {
    id: 11,
    name: "Node.js Backend Development",
    category: "Web Development",
    difficulty: "Intermediate",
    trending: true,
    editorsPick: false,
    tags: ["Free"],
    description: "Build scalable server-side applications with JavaScript.",
    howToLearn: [
      "Master JavaScript and asynchronous programming",
      "Learn Node.js fundamentals and npm",
      "Study Express.js for building APIs",
      "Understand authentication and authorization",
      "Practice with databases (MongoDB, PostgreSQL)"
    ],
    whereToLearn: [
      { name: "Node.js Documentation", type: "Documentation", url: "https://nodejs.org" },
      { name: "freeCodeCamp Backend Course", type: "YouTube", url: "https://youtube.com" },
      { name: "The Odin Project", type: "Course", url: "https://theodinproject.com" },
      { name: "Traversy Media", type: "YouTube", url: "https://youtube.com" }
    ]
  },
  {
    id: 12,
    name: "Cloud Computing (AWS)",
    category: "Core Engineering",
    difficulty: "Advanced",
    trending: true,
    editorsPick: true,
    tags: ["Free", "Certification"],
    description: "Master cloud infrastructure and services with Amazon Web Services.",
    howToLearn: [
      "Understand cloud computing fundamentals",
      "Learn core AWS services (EC2, S3, RDS, Lambda)",
      "Study networking and security in AWS",
      "Practice with AWS Free Tier",
      "Prepare for AWS certifications"
    ],
    whereToLearn: [
      { name: "AWS Free Training", type: "Course", url: "https://aws.amazon.com/training" },
      { name: "A Cloud Guru", type: "Course", url: "https://acloudguru.com" },
      { name: "freeCodeCamp AWS Course", type: "YouTube", url: "https://youtube.com" },
      { name: "AWS Documentation", type: "Documentation", url: "https://docs.aws.amazon.com" }
    ]
  }
];

export const categories = [
  "All",
  "Programming",
  "Web Development",
  "Data Science",
  "Core Engineering",
  "Soft Skills"
];
