"""
Seed command: loads all static JS data into the SQLite database.
Run with: python manage.py seed_data
"""
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from api.models import (
    Job, Bulletin, Skill, Roadmap,
    ResumeTemplate, Prompt, LinkedInField,
    Country, University, Internship
)


class Command(BaseCommand):
    help = 'Seeds the database with initial data from the static JS files'

    def handle(self, *args, **kwargs):
        self.stdout.write(self.style.MIGRATE_HEADING('[*] Seeding Chronicle database...'))

        self._seed_superuser()
        self._seed_jobs()
        self._seed_bulletins()
        self._seed_skills()
        self._seed_roadmaps()
        self._seed_toolkit()
        self._seed_flysky()

        self.stdout.write(self.style.SUCCESS('âœ… Database seeded successfully!'))

    # â”€â”€ Admin User â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_superuser(self):
        if not User.objects.filter(username='admin').exists():
            User.objects.create_superuser('admin', 'admin@chronicle.com', 'admin123')
            self.stdout.write('  âœ“ Admin user created (admin / admin123)')
        else:
            self.stdout.write('  - Admin user already exists, skipping')

    # â”€â”€ Jobs â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_jobs(self):
        if Job.objects.exists():
            self.stdout.write('  - Jobs already seeded, skipping')
            return

        jobs = [
            {
                'title': 'Software Engineering Intern',
                'company': 'TechCorp Industries',
                'type': 'Internship',
                'location': 'San Francisco, CA',
                'domain': 'Technology',
                'urgent': True,
                'description': 'Join our dynamic team as a Software Engineering Intern. You\'ll work on cutting-edge projects, collaborate with experienced engineers, and gain hands-on experience with modern web technologies.',
                'requirements': ['Currently pursuing a degree in Computer Science or related field', 'Proficiency in JavaScript, Python, or Java', 'Strong problem-solving skills', 'Excellent communication abilities'],
                'responsibilities': ['Develop and maintain web applications', 'Participate in code reviews', 'Collaborate with cross-functional teams', 'Write clean, maintainable code'],
                'apply_link': 'https://example.com/apply/1',
            },
            {
                'title': 'Marketing Coordinator',
                'company': 'Brand Solutions Ltd',
                'type': 'Job',
                'location': 'New York, NY',
                'domain': 'Marketing',
                'urgent': False,
                'description': 'We are seeking a creative Marketing Coordinator to join our growing team. The ideal candidate will assist in developing marketing campaigns, managing social media presence, and analyzing market trends.',
                'requirements': ["Bachelor's degree in Marketing or related field", '2+ years of marketing experience', 'Proficiency in social media platforms', 'Strong analytical skills'],
                'responsibilities': ['Develop marketing strategies', 'Manage social media accounts', 'Create content for campaigns', 'Analyze campaign performance'],
                'apply_link': 'https://example.com/apply/2',
            },
            {
                'title': 'Data Science Intern',
                'company': 'Analytics Pro',
                'type': 'Internship',
                'location': 'Boston, MA',
                'domain': 'Data Science',
                'urgent': True,
                'description': 'Exciting opportunity for a Data Science Intern to work with large datasets and machine learning models. Gain experience in data analysis, visualization, and predictive modeling.',
                'requirements': ['Pursuing degree in Statistics, Mathematics, or Computer Science', 'Knowledge of Python and R', 'Understanding of machine learning concepts', 'Strong mathematical background'],
                'responsibilities': ['Analyze complex datasets', 'Build predictive models', 'Create data visualizations', 'Present findings to stakeholders'],
                'apply_link': 'https://example.com/apply/3',
            },
            {
                'title': 'UX Designer',
                'company': 'Creative Digital Agency',
                'type': 'Job',
                'location': 'Austin, TX',
                'domain': 'Design',
                'urgent': False,
                'description': 'Join our award-winning design team as a UX Designer. You\'ll be responsible for creating intuitive and engaging user experiences for web and mobile applications.',
                'requirements': ['3+ years of UX design experience', 'Proficiency in Figma and Adobe Creative Suite', 'Strong portfolio demonstrating UX work', 'Understanding of user-centered design principles'],
                'responsibilities': ['Design user interfaces and experiences', 'Conduct user research and testing', 'Create wireframes and prototypes', 'Collaborate with development teams'],
                'apply_link': 'https://example.com/apply/4',
            },
            {
                'title': 'Financial Analyst Intern',
                'company': 'Global Finance Corp',
                'type': 'Internship',
                'location': 'Chicago, IL',
                'domain': 'Finance',
                'urgent': False,
                'description': 'Gain valuable experience in financial analysis and corporate finance. This internship offers exposure to financial modeling, market research, and investment analysis.',
                'requirements': ['Pursuing degree in Finance, Economics, or Accounting', 'Strong Excel skills', 'Analytical mindset', 'Attention to detail'],
                'responsibilities': ['Assist in financial modeling', 'Conduct market research', 'Prepare financial reports', 'Support investment analysis'],
                'apply_link': 'https://example.com/apply/5',
            },
            {
                'title': 'Full Stack Developer',
                'company': 'StartupHub Inc',
                'type': 'Job',
                'location': 'Seattle, WA',
                'domain': 'Technology',
                'urgent': True,
                'description': 'We\'re looking for a talented Full Stack Developer to join our innovative startup. You\'ll work on building scalable web applications using modern technologies.',
                'requirements': ['5+ years of full stack development experience', 'Expertise in React, Node.js, and databases', 'Experience with cloud platforms (AWS/Azure)', 'Strong problem-solving abilities'],
                'responsibilities': ['Develop full stack web applications', 'Design system architecture', 'Optimize application performance', 'Mentor junior developers'],
                'apply_link': 'https://example.com/apply/6',
            },
            {
                'title': 'Content Writing Intern',
                'company': 'Media House Publishing',
                'type': 'Internship',
                'location': 'Remote',
                'domain': 'Content',
                'urgent': False,
                'description': 'Join our editorial team as a Content Writing Intern. You\'ll create engaging content for various platforms, learn about content strategy, and develop your writing skills.',
                'requirements': ['Excellent writing and editing skills', 'Currently pursuing degree in Journalism, English, or related field', 'Familiarity with SEO principles', 'Creative thinking'],
                'responsibilities': ['Write articles and blog posts', 'Research trending topics', 'Edit and proofread content', 'Assist with content strategy'],
                'apply_link': 'https://example.com/apply/7',
            },
            {
                'title': 'Product Manager',
                'company': 'Innovation Labs',
                'type': 'Job',
                'location': 'San Diego, CA',
                'domain': 'Product',
                'urgent': False,
                'description': 'Lead product development initiatives as a Product Manager. You\'ll define product vision, prioritize features, and work with cross-functional teams to deliver exceptional products.',
                'requirements': ['4+ years of product management experience', 'Strong technical background', 'Excellent communication skills', 'Experience with Agile methodologies'],
                'responsibilities': ['Define product roadmap', 'Gather and prioritize requirements', 'Work with engineering and design teams', 'Analyze product metrics'],
                'apply_link': 'https://example.com/apply/8',
            },
        ]
        for job_data in jobs:
            Job.objects.create(**job_data)
        self.stdout.write(f'  âœ“ Seeded {len(jobs)} jobs')

    # â”€â”€ Bulletins â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_bulletins(self):
        if Bulletin.objects.exists():
            self.stdout.write('  - Bulletins already seeded, skipping')
            return

        bulletins = [
            {'title': 'New Internship Added', 'content': 'Software Engineering Intern position now available at TechCorp Industries. Apply before May 15th!', 'urgent': True},
            {'title': 'Career Fair Announcement', 'content': 'Annual Tech Career Fair scheduled for May 10th. Register now to meet top employers.', 'urgent': False},
            {'title': 'Resume Workshop', 'content': 'Free resume review sessions available every Tuesday. Book your slot in the Career Center.', 'urgent': False},
            {'title': 'Breaking: Multiple Openings', 'content': 'Data Science Intern and Full Stack Developer positions added today. Check the Archive for details.', 'urgent': True},
            {'title': 'Interview Tips Session', 'content': 'Join us for a virtual session on mastering technical interviews. Thursday at 3 PM.', 'urgent': False},
        ]
        for b in bulletins:
            Bulletin.objects.create(**b)
        self.stdout.write(f'  âœ“ Seeded {len(bulletins)} bulletins')

    # â”€â”€ Skills â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_skills(self):
        if Skill.objects.exists():
            self.stdout.write('  - Skills already seeded, skipping')
            return

        skills = [
            {
                'name': 'React Development',
                'category': 'Web Development',
                'difficulty': 'Intermediate',
                'trending': True,
                'editors_pick': False,
                'tags': ['Free', 'Certification'],
                'description': 'Master modern React development with hooks, state management, and component architecture.',
                'how_to_learn': ['Learn JavaScript fundamentals and ES6+ features', 'Understand components, props, and state', 'Master React hooks (useState, useEffect, useContext)', 'Learn state management with Context API or Redux', 'Build real-world projects and deploy them'],
                'where_to_learn': [{'name': 'React Official Documentation', 'type': 'Documentation', 'url': 'https://react.dev'}, {'name': 'freeCodeCamp React Course', 'type': 'YouTube', 'url': 'https://youtube.com'}, {'name': 'Scrimba React Course', 'type': 'Interactive', 'url': 'https://scrimba.com'}],
            },
            {
                'name': 'Python Programming',
                'category': 'Programming',
                'difficulty': 'Beginner',
                'trending': True,
                'editors_pick': True,
                'tags': ['Free'],
                'description': 'Start your programming journey with Python, one of the most versatile languages.',
                'how_to_learn': ['Learn basic syntax and data types', 'Practice with loops, conditions, and functions', 'Understand OOP concepts', 'Work with libraries like NumPy and Pandas', 'Build automation scripts and small projects'],
                'where_to_learn': [{'name': 'Python.org Official Tutorial', 'type': 'Documentation', 'url': 'https://python.org'}, {'name': 'CS50P Python Course', 'type': 'Course', 'url': 'https://cs50.harvard.edu'}, {'name': 'Automate the Boring Stuff', 'type': 'Book', 'url': 'https://automatetheboringstuff.com'}],
            },
            {
                'name': 'Machine Learning',
                'category': 'Data Science',
                'difficulty': 'Advanced',
                'trending': True,
                'editors_pick': True,
                'tags': ['Certification', 'High Demand'],
                'description': 'Dive into machine learning algorithms, neural networks, and AI applications.',
                'how_to_learn': ['Master Python and statistics basics', 'Learn scikit-learn for classical ML', 'Understand deep learning with TensorFlow/PyTorch', 'Practice on Kaggle datasets', 'Build and deploy ML models'],
                'where_to_learn': [{'name': 'Coursera ML Specialization', 'type': 'Course', 'url': 'https://coursera.org'}, {'name': 'fast.ai', 'type': 'Course', 'url': 'https://fast.ai'}, {'name': 'Kaggle Learn', 'type': 'Interactive', 'url': 'https://kaggle.com/learn'}],
            },
            {
                'name': 'UI/UX Design',
                'category': 'Design',
                'difficulty': 'Intermediate',
                'trending': False,
                'editors_pick': True,
                'tags': ['Free', 'Portfolio'],
                'description': 'Learn user interface and experience design principles with modern tools like Figma.',
                'how_to_learn': ['Understand design principles and typography', 'Learn Figma for wireframing and prototyping', 'Study user research methods', 'Practice designing real apps', 'Build a design portfolio'],
                'where_to_learn': [{'name': 'Google UX Design Certificate', 'type': 'Course', 'url': 'https://coursera.org'}, {'name': 'Figma Official Tutorials', 'type': 'Documentation', 'url': 'https://figma.com'}, {'name': 'Dribbble for Inspiration', 'type': 'Community', 'url': 'https://dribbble.com'}],
            },
            {
                'name': 'Cloud Computing (AWS)',
                'category': 'Cloud & DevOps',
                'difficulty': 'Intermediate',
                'trending': True,
                'editors_pick': False,
                'tags': ['Certification', 'High Demand', 'Paid'],
                'description': 'Master Amazon Web Services â€” the world\'s leading cloud platform.',
                'how_to_learn': ['Understand cloud fundamentals (IaaS, PaaS, SaaS)', 'Learn core AWS services (EC2, S3, RDS, Lambda)', 'Practice with AWS Free Tier', 'Study for AWS Cloud Practitioner certification', 'Build cloud-native projects'],
                'where_to_learn': [{'name': 'AWS Official Training', 'type': 'Course', 'url': 'https://aws.amazon.com/training'}, {'name': 'A Cloud Guru', 'type': 'Course', 'url': 'https://acloudguru.com'}, {'name': 'AWS Free Tier', 'type': 'Hands-On', 'url': 'https://aws.amazon.com/free'}],
            },
            {
                'name': 'Data Analysis with Excel',
                'category': 'Data Science',
                'difficulty': 'Beginner',
                'trending': False,
                'editors_pick': False,
                'tags': ['Free', 'Business'],
                'description': 'Master Excel for data analysis, visualization, and business intelligence.',
                'how_to_learn': ['Learn Excel formulas and functions', 'Master pivot tables and charts', 'Understand data cleaning techniques', 'Learn Power Query for data transformation', 'Practice with real business datasets'],
                'where_to_learn': [{'name': 'ExcelJet', 'type': 'Documentation', 'url': 'https://exceljet.net'}, {'name': 'Microsoft Excel Training', 'type': 'Course', 'url': 'https://support.microsoft.com'}, {'name': 'Chandoo.org', 'type': 'Blog', 'url': 'https://chandoo.org'}],
            },
        ]
        for s in skills:
            Skill.objects.create(**s)
        self.stdout.write(f'  âœ“ Seeded {len(skills)} skills')

    # â”€â”€ Roadmaps â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_roadmaps(self):
        if Roadmap.objects.exists():
            self.stdout.write('  - Roadmaps already seeded, skipping')
            return

        roadmaps = [
            {
                'role': 'Software Engineer',
                'description': 'Comprehensive path to becoming a full-stack software engineer',
                'steps': [
                    {'id': 1, 'title': 'Fundamentals', 'duration': '3-4 months', 'skills': ['Programming basics (Python or JavaScript)', 'Data structures and algorithms', 'Git and version control', 'Command line basics'], 'resources': ['CS50 Introduction to Computer Science', 'freeCodeCamp JavaScript course', 'LeetCode Easy problems'], 'projects': ['Build a calculator app', 'Create a to-do list application', 'Solve 50+ coding problems']},
                    {'id': 2, 'title': 'Frontend Development', 'duration': '3-4 months', 'skills': ['HTML, CSS, JavaScript', 'React or Vue.js', 'Responsive design', 'State management'], 'resources': ['MDN Web Docs', 'React official documentation', 'Frontend Mentor challenges'], 'projects': ['Portfolio website', 'Weather app with API integration', 'E-commerce product page']},
                    {'id': 3, 'title': 'Backend Development', 'duration': '3-4 months', 'skills': ['Node.js or Python backend', 'REST APIs', 'Database design (SQL & NoSQL)', 'Authentication & authorization'], 'resources': ['Node.js official docs', 'Django or Express tutorials', 'PostgreSQL tutorial'], 'projects': ['Blog API', 'User authentication system', 'RESTful API with CRUD operations']},
                    {'id': 4, 'title': 'DevOps & Deployment', 'duration': '2-3 months', 'skills': ['Docker and containerization', 'CI/CD pipelines', 'Cloud platforms (AWS/Heroku)', 'Monitoring and logging'], 'resources': ['Docker documentation', 'GitHub Actions tutorials', 'AWS Free Tier'], 'projects': ['Dockerize your applications', 'Set up a CI/CD pipeline', 'Deploy a full-stack app to the cloud']},
                    {'id': 5, 'title': 'Advanced Topics & Job Prep', 'duration': '2-3 months', 'skills': ['System design principles', 'Advanced algorithms', 'Technical interview prep', 'Open source contributions'], 'resources': ['System Design Primer', 'LeetCode Medium/Hard problems', 'Grokking the System Design Interview'], 'projects': ['Contribute to open source', 'Build a complex full-stack project', 'Create technical blog posts']},
                ],
            },
            {
                'role': 'Data Scientist',
                'description': 'From statistics to machine learning â€” your path to data science',
                'steps': [
                    {'id': 1, 'title': 'Mathematics & Statistics', 'duration': '2-3 months', 'skills': ['Linear algebra basics', 'Statistics and probability', 'Calculus fundamentals', 'Python for data science'], 'resources': ['Khan Academy Statistics', '3Blue1Brown Linear Algebra', 'Think Stats book'], 'projects': ['Statistical analysis of a dataset', 'Probability simulations', 'EDA on Kaggle datasets']},
                    {'id': 2, 'title': 'Data Analysis & Visualization', 'duration': '2-3 months', 'skills': ['Pandas and NumPy', 'Data cleaning and wrangling', 'Matplotlib and Seaborn', 'SQL for data querying'], 'resources': ['Pandas documentation', 'Python for Data Analysis book', 'Mode Analytics SQL tutorial'], 'projects': ['Analyze a real-world dataset', 'Create interactive visualizations', 'Build a data pipeline']},
                    {'id': 3, 'title': 'Machine Learning', 'duration': '3-4 months', 'skills': ['Supervised learning algorithms', 'Unsupervised learning', 'Model evaluation and validation', 'Feature engineering'], 'resources': ['Scikit-learn documentation', 'Coursera ML by Andrew Ng', 'Kaggle competitions'], 'projects': ['Classification project', 'Regression analysis', 'Clustering analysis']},
                    {'id': 4, 'title': 'Deep Learning & AI', 'duration': '3-4 months', 'skills': ['Neural networks fundamentals', 'TensorFlow or PyTorch', 'Computer vision basics', 'NLP fundamentals'], 'resources': ['fast.ai course', 'Deep Learning Specialization', 'PyTorch tutorials'], 'projects': ['Image classification model', 'Sentiment analysis', 'Build a simple chatbot']},
                    {'id': 5, 'title': 'Production & Portfolio', 'duration': '2-3 months', 'skills': ['Model deployment (Flask/FastAPI)', 'MLOps basics', 'Data storytelling', 'Business acumen'], 'resources': ['Towards Data Science blog', 'Full Stack Deep Learning', 'DataTalks.Club'], 'projects': ['Deploy an ML model as an API', 'End-to-end ML project', 'Data science portfolio on GitHub']},
                ],
            },
            {
                'role': 'UI/UX Designer',
                'description': 'Master user-centered design and create stunning digital experiences',
                'steps': [
                    {'id': 1, 'title': 'Design Fundamentals', 'duration': '1-2 months', 'skills': ['Typography and color theory', 'Layout and composition', 'Design principles (CRAP)', 'Visual hierarchy'], 'resources': ['Canva Design School', 'The Futur YouTube channel', 'Design Principles by Frank Chimero'], 'projects': ['Redesign a poorly designed website', 'Create a poster using design principles', 'Typography exercise']},
                    {'id': 2, 'title': 'UX Research & Strategy', 'duration': '2-3 months', 'skills': ['User interviews and surveys', 'Persona creation', 'User journey mapping', 'Competitive analysis'], 'resources': ['Nielsen Norman Group articles', 'UX Research Cheat Sheet', 'Just Enough Research book'], 'projects': ['Conduct user interviews for an app idea', 'Create user personas', 'Map a user journey for a product']},
                    {'id': 3, 'title': 'UI Design & Figma', 'duration': '2-3 months', 'skills': ['Figma proficiency', 'Wireframing and prototyping', 'Design systems', 'Mobile-first design'], 'resources': ['Figma official tutorials', 'Google Material Design', 'Apple Human Interface Guidelines'], 'projects': ['Design a mobile app UI', 'Create a design system', 'Build an interactive prototype']},
                    {'id': 4, 'title': 'Portfolio & Job Search', 'duration': '2-3 months', 'skills': ['Portfolio presentation', 'Case study writing', 'Design critique skills', 'Collaboration with developers'], 'resources': ['Bestfolios for inspiration', 'UX Portfolio Reviewed YouTube', 'Behance and Dribbble'], 'projects': ['Create 3 polished case studies', 'Build a portfolio website', 'Contribute to design challenges']},
                ],
            },
        ]
        for r in roadmaps:
            Roadmap.objects.create(**r)
        self.stdout.write(f'  âœ“ Seeded {len(roadmaps)} roadmaps')

    # â”€â”€ Toolkit â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_toolkit(self):
        if ResumeTemplate.objects.exists():
            self.stdout.write('  - Toolkit already seeded, skipping')
            return

        templates = [
            {'name': 'Classic Professional', 'description': 'Traditional format perfect for corporate roles', 'style': 'Formal, single-column layout with clear sections', 'best_for': 'Finance, Consulting, Traditional Industries'},
            {'name': 'Modern Tech', 'description': 'Clean, contemporary design for tech positions', 'style': 'Two-column layout with skills sidebar', 'best_for': 'Software Engineering, Data Science, Tech Startups'},
            {'name': 'Creative Portfolio', 'description': 'Visually appealing for design and creative roles', 'style': 'Colorful accents with portfolio section', 'best_for': 'UI/UX Design, Graphic Design, Marketing'},
        ]
        for t in templates:
            ResumeTemplate.objects.create(**t)

        prompts = [
            {'title': 'Resume Improvement', 'category': 'Career', 'prompt_text': 'Review my resume for a [Job Title] position. Analyze the job description and suggest improvements to match requirements. Focus on quantifiable achievements and relevant keywords.\n\nJob Description:\n[Paste job description here]\n\nMy Resume:\n[Paste your resume here]', 'usage': 'Replace placeholders with your actual job title, description, and resume content'},
            {'title': 'Interview Preparation', 'category': 'Career', 'prompt_text': 'I have an interview for a [Job Title] position at [Company Name]. Generate 10 common interview questions, including both technical and behavioral questions. For each question, provide a framework for answering effectively.', 'usage': 'Customize with your specific job title and company name'},
            {'title': 'Cover Letter Generator', 'category': 'Career', 'prompt_text': 'Write a compelling cover letter for a [Job Title] position at [Company Name]. Highlight my relevant experience and explain why I\'m a great fit.\n\nJob Description:\n[Paste job description]\n\nMy Key Qualifications:\n[List your relevant skills and experiences]', 'usage': 'Provide job details and your qualifications'},
            {'title': 'LinkedIn Optimization', 'category': 'Professional Branding', 'prompt_text': 'Help me optimize my LinkedIn profile for [Your Field/Role]. Generate:\n1. A compelling headline (under 120 characters)\n2. An engaging About section\n3. 5 key skills to highlight\n4. Suggestions for featured content\n\nMy background: [Brief description of your experience and goals]', 'usage': 'Fill in your field and background information'},
            {'title': 'Learning Roadmap', 'category': 'Skill Development', 'prompt_text': 'Create a detailed 6-month learning roadmap to become proficient in [Skill/Technology]. Include:\n1. Week-by-week breakdown\n2. Recommended resources\n3. Project ideas for practice\n4. Milestones to track progress\n\nMy current level: [Beginner/Intermediate/Advanced]', 'usage': 'Specify the skill you want to learn and your availability'},
            {'title': 'Salary Negotiation', 'category': 'Career', 'prompt_text': 'Help me prepare for salary negotiation for a [Job Title] position. Provide:\n1. Market research talking points\n2. How to present my value proposition\n3. Response templates for different scenarios\n4. Questions to ask about compensation package\n\nOffered salary: [Amount]\nMy target: [Amount]', 'usage': 'Include your specific salary details and location'},
            {'title': 'Code Review Request', 'category': 'Technical', 'prompt_text': 'Review this code and provide feedback on:\n1. Code quality and best practices\n2. Potential bugs or edge cases\n3. Performance optimizations\n4. Readability and maintainability\n\nLanguage: [Programming Language]\nPurpose: [What the code does]\n\n```\n[Paste your code here]\n```', 'usage': 'Include your code and specify the programming language'},
        ]
        for p in prompts:
            Prompt.objects.create(**p)

        linkedin_fields = [
            {
                'field_name': 'Web Developer',
                'headline': 'Full Stack Web Developer | React, Node.js, MongoDB | Building Scalable Web Applications',
                'about': 'Passionate web developer with expertise in modern JavaScript frameworks and full-stack development. I specialize in creating responsive, user-friendly web applications.\n\nðŸ”§ Technical Skills:\nâ€¢ Frontend: React, JavaScript, HTML5, CSS3\nâ€¢ Backend: Node.js, Express, RESTful APIs\nâ€¢ Database: MongoDB, PostgreSQL\nâ€¢ Tools: Git, Docker, AWS\n\nðŸ’¡ What I Do:\nI transform ideas into functional, elegant web solutions. Let\'s connect and build something amazing!',
            },
            {
                'field_name': 'Data Scientist',
                'headline': 'Data Scientist | Machine Learning | Python, SQL | Turning Data into Actionable Insights',
                'about': 'Data scientist passionate about extracting meaningful insights from complex datasets and building predictive models.\n\nðŸ“Š Core Competencies:\nâ€¢ Machine Learning: Scikit-learn, TensorFlow, PyTorch\nâ€¢ Data Analysis: Python, Pandas, NumPy\nâ€¢ Visualization: Matplotlib, Seaborn, Tableau\n\nðŸ” What I Do:\nI bridge the gap between data and decision-making. Always exploring new ML techniques.',
            },
            {
                'field_name': 'Software Engineer',
                'headline': 'Software Engineer | Full Stack Development | Cloud Architecture | Problem Solver',
                'about': 'Software engineer dedicated to building robust, scalable applications and solving complex technical challenges.\n\nðŸ’» Technical Expertise:\nâ€¢ Languages: Python, JavaScript, Java, Go\nâ€¢ Frameworks: React, Django, Spring Boot\nâ€¢ Cloud: AWS, Azure, Docker, Kubernetes\n\nðŸŽ¯ Achievements:\nâ€¢ Architected microservices handling 1M+ daily requests\nâ€¢ Reduced application load time by 40%\n\nLet\'s connect and discuss technology!',
            },
            {
                'field_name': 'UI/UX Designer',
                'headline': 'UI/UX Designer | User-Centered Design | Figma Expert | Creating Delightful Digital Experiences',
                'about': 'UI/UX designer passionate about creating intuitive, accessible, and visually appealing digital experiences.\n\nðŸŽ¨ Design Skills:\nâ€¢ Tools: Figma, Adobe XD, Sketch\nâ€¢ Research: User interviews, usability testing\nâ€¢ Principles: Accessibility, responsive design\n\nâœ¨ What I Do:\nI transform complex problems into simple, elegant solutions through user-centered design.',
            },
            {
                'field_name': 'DevOps Engineer',
                'headline': 'DevOps Engineer | Cloud Infrastructure | CI/CD | Kubernetes | Automation Enthusiast',
                'about': 'DevOps engineer focused on building reliable, scalable infrastructure and streamlining development workflows.\n\nâš™ï¸ Technical Stack:\nâ€¢ Cloud: AWS, Azure, GCP\nâ€¢ Containers: Docker, Kubernetes, Helm\nâ€¢ CI/CD: Jenkins, GitHub Actions\nâ€¢ IaC: Terraform, Ansible\n\nðŸš€ What I Do:\nI bridge development and operations, implementing DevOps practices that accelerate delivery.',
            },
        ]
        for lf in linkedin_fields:
            LinkedInField.objects.create(**lf)

        self.stdout.write(f'  âœ“ Seeded {len(templates)} templates, {len(prompts)} prompts, {len(linkedin_fields)} LinkedIn fields')

    # â”€â”€ FlySky â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    def _seed_flysky(self):
        if Country.objects.exists():
            self.stdout.write('  - FlySky data already seeded, skipping')
            return

        countries = [
            {
                'name': 'United States',
                'flag': 'ðŸ‡ºðŸ‡¸',
                'description': 'Home to world-renowned universities and diverse academic programs',
                'requirements': ['Valid passport', 'University acceptance letter (I-20)', 'F-1 Student Visa', 'Proof of financial support', 'Academic transcripts'],
                'popular_universities': ['MIT', 'Stanford University', 'Harvard University', 'Caltech', 'Carnegie Mellon'],
                'scholarships': ['Fulbright Program', 'Hubert Humphrey Fellowship', 'NSF Graduate Fellowship'],
            },
            {
                'name': 'Germany',
                'flag': 'ðŸ‡©ðŸ‡ª',
                'description': 'Quality education with low or no tuition fees at public universities',
                'requirements': ['Valid passport', 'University admission letter', 'Student visa (National Visa)', 'Blocked account (â‚¬11,208 minimum)', 'Health insurance'],
                'popular_universities': ['TU Munich', 'LMU Munich', 'Heidelberg University', 'Humboldt University', 'KIT'],
                'scholarships': ['DAAD Scholarships', 'Erasmus+', 'Heinrich BÃ¶ll Foundation'],
            },
            {
                'name': 'Canada',
                'flag': 'ðŸ‡¨ðŸ‡¦',
                'description': 'Welcoming immigration policies and high-quality education system',
                'requirements': ['Valid passport', 'Canadian study permit', 'University acceptance letter', 'Proof of financial support', 'IELTS/TOEFL scores'],
                'popular_universities': ['University of Toronto', 'McGill University', 'UBC', 'University of Waterloo', 'McMaster'],
                'scholarships': ['Vanier Canada Graduate Scholarships', 'Canada Graduate Scholarships', 'Ontario Graduate Scholarship'],
            },
            {
                'name': 'United Kingdom',
                'flag': 'ðŸ‡¬ðŸ‡§',
                'description': 'World-class universities with rich academic traditions',
                'requirements': ['Valid passport', 'Student Visa (Tier 4)', 'CAS from university', 'IELTS 6.0+', 'Proof of financial support'],
                'popular_universities': ['Oxford University', 'Cambridge University', 'Imperial College London', 'UCL', 'LSE'],
                'scholarships': ['Chevening Scholarship', 'Commonwealth Scholarship', 'GREAT Scholarship'],
            },
            {
                'name': 'Australia',
                'flag': 'ðŸ‡¦ðŸ‡º',
                'description': 'High quality of life with excellent research opportunities',
                'requirements': ['Valid passport', 'Student Visa (subclass 500)', 'CoE from institution', 'IELTS 6.0+', 'Overseas Student Health Cover'],
                'popular_universities': ['ANU', 'University of Melbourne', 'University of Sydney', 'UNSW', 'Monash University'],
                'scholarships': ['Australia Awards', 'Endeavour Scholarships', 'Research Training Program'],
            },
        ]
        for c in countries:
            Country.objects.create(**c)

        universities = [
            {'name': 'MIT', 'country': 'United States', 'program': 'Computer Science', 'ranking': 1, 'tuition': '$57,986/year', 'acceptance_rate': '4%', 'description': 'Leading STEM research university'},
            {'name': 'Stanford University', 'country': 'United States', 'program': 'Engineering', 'ranking': 3, 'tuition': '$58,416/year', 'acceptance_rate': '4.7%', 'description': 'World-class research and entrepreneurship hub'},
            {'name': 'TU Munich', 'country': 'Germany', 'program': 'Engineering', 'ranking': 50, 'tuition': 'â‚¬0 (no tuition)', 'acceptance_rate': '8%', 'description': 'Top German technical university'},
            {'name': 'University of Toronto', 'country': 'Canada', 'program': 'Computer Science', 'ranking': 25, 'tuition': 'CAD $45,000/year', 'acceptance_rate': '43%', 'description': "Canada's top research university"},
            {'name': 'Oxford University', 'country': 'United Kingdom', 'program': 'All Programs', 'ranking': 4, 'tuition': 'Â£26,770-Â£37,510/year', 'acceptance_rate': '18%', 'description': 'One of the world\'s oldest and most prestigious universities'},
            {'name': 'University of Melbourne', 'country': 'Australia', 'program': 'Business', 'ranking': 33, 'tuition': 'AUD $35,000-$45,000/year', 'acceptance_rate': '70%', 'description': "Australia's leading research university"},
        ]
        for u in universities:
            University.objects.create(**u)

        internships = [
            {'title': 'Software Engineering Intern', 'company': 'Google EMEA', 'location': 'Dublin, Ireland', 'type': 'International', 'duration': '12 weeks', 'stipend': 'â‚¬4,000/month', 'description': 'Work on Google products affecting millions of users', 'requirements': ['Computer Science degree', 'Strong coding skills', 'Algorithm knowledge']},
            {'title': 'Research Intern', 'company': 'Max Planck Institute', 'location': 'Munich, Germany', 'type': 'Research', 'duration': '6 months', 'stipend': 'â‚¬1,500/month', 'description': 'Conduct cutting-edge research in computer science or life sciences', 'requirements': ['Master\'s student or above', 'Research experience', 'Publication record preferred']},
            {'title': 'Business Analyst Intern', 'company': 'McKinsey & Company', 'location': 'London, UK', 'type': 'Corporate', 'duration': '8 weeks', 'stipend': 'Â£4,500/month', 'description': 'Work on consulting projects for global Fortune 500 companies', 'requirements': ['Top academic performance', 'Strong analytical skills', 'Leadership experience']},
        ]
        for i in internships:
            Internship.objects.create(**i)

        self.stdout.write(f'  âœ“ Seeded {len(countries)} countries, {len(universities)} universities, {len(internships)} internships')
