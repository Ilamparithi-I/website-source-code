export default function Projects(projectName: string) {
    switch (projectName) {
        case "BookIt":
            return {
                name: "BookIt",
                overview:
                    "A study space booking and browsing app solution for UBC students",
                description:
                    "BookIt is a study room booking system for UBC students. It was created as a project for CPEN 321, a Software Engineering Course. The project contains scraped data from UBC webpages for lecture times, bookable study rooms and Informal Learning Spaces to help students find a place to study.",
                images: [
                    "/BookIt/award.png",
                    "/BookIt/map.png",
                    "/BookIt/filter.png",
                    "/BookIt/booking.png",
                ],
                techStack: [
                    "Express",
                    "Java (Android)",
                    "WebSockets",
                    "Firebase notifications",
                    "Jest",
                    "GitHub Actions",
                ],
                features: [
                    "Real-time study room availability updates",
                    "Automatic booking reminders",
                    "Booking confirmation based on user location",
                    "Multiple filters for study spaces",
                    "Google Maps integration for directions",
                    "Google OAuth for secure login",
                ],
                challenges: [
                    "Scraping data from UBC websites",
                    "Real-time updates for study room availability",
                    "Implementing robust booking algorithms",
                    "Ensuring data privacy and security",
                ],
                futureEnhancements: [
                    "Integration with UBC's official APIs",
                    "Machine learning for personalized study space recommendations",
                    "Automatic booking based on user preferences",
                ],
                githubLink: "https://github.com/JavaJedis/BookIt",
                liveLink: "",
            };

        case "CourseQA":
            return {
                name: "CourseQA",
                overview:
                    "A Q&A platform for UBC students to ask and answer questions",
                description:
                    "CourseQA is a question and answer platform for UBC students. It won the APSC Faculty award for outstanding capstone project. It was created as a Capstone Project for Cloud Innovation Center at UBC. The project uses Retreival Augmented Generation (RAG) using Mistral-7b model for generating answers using the course documents.",
                images: [
                    "/CourseQA/award.jpg",
                    "/CourseQA/chat.png",
                    "/CourseQA/dashboard.png",
                    "/CourseQA/login.png",
                    "/CourseQA/upload.png",
                ],
                techStack: [
                    "Flask",
                    "React (Vite TypeScript)",
                    "LangChain",
                    "Mistral-7b",
                    "ChromaDB",
                    "Docker",
                    "AWS S3",
                    "AWS RDS (PostgreSQL)",
                    "AWS EC2",
                    "AWS SageMaker",
                    "AWS CloudFormation",
                    "AWS API Gateway",
                ],
                features: [
                    "Deployment with very little configuration using CloudFormation",
                    "Processing course documents for Q&A generation",
                    "Providing answers to student questions",
                    "Provides source of answer",
                    "Allows instructors to manaage enrollments",
                    "Uses Cognito for user authentication",
                ],
                challenges: [
                    "Seperating the documents based on courses and filtering only those for the context for the answer",
                    "Fast response time for the answers",
                    "Ensuring data privacy and security",
                    "Managing the AWS resources",
                ],
                futureEnhancements: [
                    "Processing more types of information sources like lecture videos",
                    "Integration with LMS for automatic course document retrieval",
                    "Generating Flashcards, notes and quizzes for enhancing learning experience",
                ],
                githubLink: "https://github.com/UBC-CIC/LLM-Course-QA",
                liveLink: "",
            };
        case "PortfolioWebsite":
            return {
                name: "Portfolio Website",
                overview:
                    "A website to showcase my projects, skills and experiences",
                description:
                    "This website was created to showcase my projects, skills and experiences. It was built using Vite-React-Ts, Tailwind CSS and Shadcn components. The website is responsive. It builds on each commit using GitHub Actions and is hosted on GitHub Pages.",
                images: [
                    "/PortfolioWebsite/home.png",
                    "/PortfolioWebsite/phone-1.jpg",
                    "/PortfolioWebsite/project.png",
                    "/PortfolioWebsite/phone-2.jpg",
                ],
                techStack: [
                    "React (Vite TypeScript)",
                    "Tailwind CSS",
                    "shadcn componenets",
                    "GitHub Actions",
                    "GitHub Pages",
                ],
                features: [
                    "Automatic deployment on each commit",
                    "Responsive design",
                    "Animated Background",
                ],
                challenges: [
                    "Coming up with a design that showcases my projects, skills and experiences",
                    "Making the website responsive",
                ],
                futureEnhancements: [
                    "Adding a blog section",
                    "Adding light/dark mode",
                ],
                githubLink:
                    "https://github.com/Ilamparithi-I/website-source-code",
                liveLink: "https://ilam.page",
            };
        case "WebAppAttackSB":
            return {
                name: "Web Application Attack Sandbox Environment",
                overview:
                    "A sandbox environment where students can learn about XSS, SQL Injection and XSRF web application attacks ",
                description:
                    "This project was created as a part of CPEN 442, a CyberSecurity Course. The project is a sandbox environment where students can learn about web application attacks like XSS, SQL Injection and XSRF. The project contains a web application that is vulnerable to these attacks and a testing environment where students can test their attacks.",
                images: [
                    "/WebAppAttackSB/photo-1.png",
                    "/WebAppAttackSB/photo-2.png",
                    "/WebAppAttackSB/photo-3.png",
                    "/WebAppAttackSB/photo-4.png",
                    "/WebAppAttackSB/photo-5.png",
                ],
                techStack: ["HTML", "CSS", "JS", "ExpressJs"],
                features: [
                    "Multiple web application attacks",
                    "Different Environments for each attack",
                    "Detailed instructions",
                    "Gamified learning experience",
                ],
                challenges: [
                    "Creating a vulnerable web application",
                    "Creating a fun and engaging learning experience",
                    "Ensuring data privacy and security",
                ],
                futureEnhancements: [
                    "Adding more web application attacks",
                    "Adding a leaderboard",
                    "Adding a discussion forum",
                ],
                githubLink:
                    "https://github.com/CPEN442-G10/CPEN442-G10-project",
                liveLink: "",
            };

        default:
            return undefined;
    }
}
