const projects = [
 {
  id: "redhope",

  title: "RedHope",

  description:
    "A full-stack blood donation platform that connects patients with verified donors, enabling efficient blood request management, volunteer coordination, and secure fund donations.",

  image: "/all image/picture/redhope.webp",

  images: [
    "/all image/picture/redhope.webp",
    "/all image/picture/redhope1.webp",
    "/all image/picture/redhope2.webp",
  ],

  live: "https://redhope-1ec3a.web.app/",

  github: "https://github.com/sharmin133/blood-donation-client-site-code.git",

  techStack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Firebase",
    "Stripe",
  ],

  overview:
    "RedHope is a full-stack blood donation platform that connects patients with compatible donors during emergencies. It streamlines blood request management, volunteer coordination, donor eligibility verification, and secure online fund donations through a centralized platform.",

  keyFeatures: [
    "Role-based dashboards for Admin, Volunteer, and Donor with secure authentication.",
    "Blood request management, donor eligibility verification, and real-time request status tracking.",
    "Blood card generation and download with direct EmailJS communication.",
    "User reviews and feedback system.",
    "Secure Stripe payment integration for online fund donations.",
  ],

  technologyUsed: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Firebase",
    "Stripe",
  ],

  challengesFaced:[
    "Designing a scalable role-based permission system, implementing secure Stripe payment workflows, and managing dynamic blood request updates while maintaining a smooth user experience.",
  ],
  futurePlans: [
    "Implement real-time notifications using WebSockets for instant blood request updates.",
    "Add hospital and blood bank verification with advanced search and filtering.",
    "Develop a mobile-friendly PWA with push notifications and appointment scheduling.",
  ],
},

 {
  id: "primego",

  title: "PrimeGo",

  description:
    "A wholesale product management platform that connects suppliers and buyers, enabling secure product management, bulk purchasing, and order processing.",

  image: "/all image/picture/wholesale.webp",

  images: [
    "/all image/picture/wholesale.webp",
    "/all image/picture/wholesale1.webp",
    "/all image/picture/wholesale2.webp",
  ],

  live: "https://primego-wholesale-website.web.app",

  github: "https://github.com/sharmin133/Wholesale-Product-Website-Client.git",

  techStack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Firebase",
    "DaisyUI",
  ],

  overview:
    "PrimeGo is a wholesale product management platform that connects suppliers and buyers through a centralized marketplace. It simplifies bulk product management, order processing, and secure role-based access while providing an efficient purchasing experience.",

  keyFeatures: [
    "Role-based authentication and authorization for suppliers, buyers, and administrators.",
    "Product management with create, update, delete, category, brand, pricing, and minimum order quantity support.",
    "Shopping cart, bulk ordering, automatic inventory updates, and order management.",
    "Secure JWT authentication with protected routes and user-specific dashboards.",
  ],

  technologyUsed: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Auth",
    "Firebase",
    "DaisyUI",
  ],

  challengesFaced: [
    "Implementing secure role-based authentication and route protection using JWT.",
    "Synchronizing inventory updates with bulk order processing while maintaining data consistency.",
    "Managing product availability and cart operations across multiple user roles.",
  ],

  futurePlans: [
    "Integrate online payment gateways for wholesale transactions.",
    "Implement real-time order tracking and supplier notifications.",
    "Add advanced sales analytics and inventory forecasting dashboards.",
  ],
},

  {
  id: "erp-system",

  title: "ERP System",

  description:
    "A full-stack ERP platform for inventory, sales, and business management with secure JWT authentication, role-based access control, product management, and sales tracking.",

  image: "/all image/picture/erp.webp",

  images: [
    "/all image/picture/erp.webp",
    "/all image/picture/erp1.webp",
    "/all image/picture/erp2.webp",
  ],

  live: "https://erp-frontend-murex-three.vercel.app",

  github: "https://github.com/sharmin133/erp-frontend",

  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "JWT",
    "Socket.io",
  ],

  overview:
    "A modern ERP (Enterprise Resource Planning) system that streamlines inventory, sales, and business operations through a centralized dashboard. The application includes secure JWT authentication, role-based access control, inventory management, sales processing with automatic stock updates, dashboard analytics, and real-time notifications.",

  keyFeatures: [
    "JWT Authentication using HttpOnly Cookies",
    "Role-Based Access Control (Admin, Manager, Employee)",
    "Dynamic Role & Permission Management",
    "Inventory/Product Management (CRUD)",
    "Product Image Upload with Cloudinary",
    "Advanced Search, Filter & Pagination",
    "Sales Management with Multiple Product Selection",
    "Automatic Stock Deduction after Sales",
    "Stock Validation to Prevent Overselling",
    "Dashboard with Business Statistics & Low Stock Products",
    "Real-time Updates using Socket.io",
    "Responsive UI with React, TypeScript & Tailwind CSS",
  ],

  technologyUsed: [
    "React",
    "TypeScript",
    "Redux Toolkit",
    "TanStack Query",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT Auth",
    "Multer",
    "Cloudinary",
    "Socket.io",
    "Zod",
  ],

  challengesFaced:
   [ "Implementing secure role-based authorization, dynamic permission management, automatic inventory updates during sales, real-time synchronization with Socket.io, and designing a scalable feature-based architecture while maintaining reusable and clean code.",
   ],
  futurePlans:[
    "Integrate finance and accounting modules, purchase management, supplier management, invoice generation, PDF/Excel export, advanced analytics, barcode scanning, email notifications, and comprehensive sales reporting.",
  ]
},

 {
  id: "flatfusion",

  title: "FlatFusion",

  description:
    "A roommate finding platform that connects users with compatible roommates through personalized listings, preferences, and secure interactions.",

  image: "/all image/picture/flatfusion.webp",

  images: [
    "/all image/picture/flatfusion.webp",
    "/all image/picture/flatfusion1.webp",
    "/all image/picture/flatfusion2.webp",
  ],

  live: "https://roommate-finder-website.web.app/",

  github: "https://github.com/sharmin133/Roommate-Finder-website-Client.git",

  techStack: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase",
    "DaisyUI",
  ],

  overview:
    "FlatFusion is a roommate finding platform that helps users discover compatible roommates based on location, budget, and personal preferences. It simplifies room listing management, roommate matching, and secure user interactions through a centralized platform.",

  keyFeatures: [
    "Create, update, and manage roommate listings with detailed information, including location, rent, and availability.",
    "Search and filter roommate listings by location and budget, with sorting and like functionality.",
    "Secure Firebase authentication with protected routes and personalized dashboards for managing listings.",
    "View roommate profiles, submit reviews, and interact with listings through likes and contact features.",
  ],

  technologyUsed: [
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Firebase Auth",
    "DaisyUI",
  ],

  challengesFaced: [
    "Implementing protected routes and secure authentication using Firebase Authentication.",
    "Managing dynamic roommate listings while keeping data synchronized across users.",
    "Designing efficient filtering and search functionality for location and budget-based matching.",
  ],

  futurePlans: [
    "Implement real-time chat between potential roommates.",
    "Add AI-powered roommate compatibility recommendations based on lifestyle preferences.",
    "Integrate map-based room discovery with nearby amenities and transportation.",
  ],
},

  {
  id: "clin-technologies",

  title: "Clin Technologies",

  description:
    "An AI-powered healthcare landing page showcasing HIPAA-compliant clinical documentation, EMR integration, and intelligent medical AI solutions.",

  image: "/all image/picture/healthcare.webp",

  images: [
    "/all image/picture/healthcare.webp",
    "/all image/picture/healthcare1.webp",
    "/all image/picture/healthcare2.webp",
  ],

  live: "https://bespoke-crepe-2e675b.netlify.app",

  github: "https://github.com/sharmin133/healthcare",

  techStack: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  overview:
    "Clin Technologies is an AI-powered healthcare landing page designed to showcase intelligent clinical documentation solutions. It highlights HIPAA-compliant AI services, EMR integration, healthcare case studies, and enterprise-ready solutions through a modern, responsive user interface.",

  keyFeatures: [
    "Responsive healthcare landing page with modern UI and smooth user experience.",
    "Showcases AI-powered healthcare solutions, including TranscriptX, Chartwright, Redactify, and Validify.",
    "Dedicated sections for EMR integration, HIPAA compliance, technology, case studies, and product benefits.",
    "Interactive animations, solution highlights, and clear authentication entry points for users.",
  ],

  technologyUsed: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  challengesFaced: [
    "Designing a professional healthcare interface while maintaining a clean and trustworthy visual identity.",
    "Organizing large amounts of healthcare and AI-related content into an intuitive and responsive layout.",
    "Creating smooth animations without affecting overall page performance.",
  ],

  futurePlans: [
    "Integrate multilingual support for global healthcare providers.",
    "Add interactive product demonstrations and AI workflow visualizations.",
    "Develop a secure patient and healthcare provider portal with role-based authentication.",
  ],
},
{
  id: "software-chamber",

  title: "Software Chamber",

  description:
    "A modern software agency landing page showcasing software development services, company expertise, and business solutions.",

  image: "/all image/picture/software.webp",

  images: [
    "/all image/picture/software.webp",
    "/all image/picture/software1.webp",
    "/all image/picture/software2.webp",
  ],

  live: "https://software-chamber-nu.vercel.app/",

  github: "https://github.com/sharmin133/Software-Chamber",

  techStack: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  overview:
    "Software Chamber is a modern software agency landing page designed to showcase software development services, company expertise, development processes, and business solutions. It provides a professional and engaging experience for potential clients through responsive layouts, interactive animations, and well-structured content.",

  keyFeatures: [
    "Responsive landing page showcasing web development, mobile app development, UX/UI engineering, and software services.",
    "Interactive company statistics, development process, technology partners, and industry expertise sections.",
    "Animated service highlights, project showcase, client testimonials, FAQ, and contact form.",
    "Smooth page animations and modern UI built with Framer Motion for an engaging user experience.",
  ],

  technologyUsed: [
    "React",
    "Tailwind CSS",
    "Framer Motion",
  ],

  challengesFaced: [
    "Organizing multiple business sections while maintaining a clean and intuitive layout.",
    "Implementing smooth animations and responsive components without affecting performance.",
    "Creating a consistent design system across services, testimonials, FAQs, and contact sections.",
  ],

  futurePlans: [
    "Add a project portfolio and detailed case studies section.",
    "Integrate CMS support for dynamic content management.",
    "Implement multilingual support and advanced contact inquiry management.",
  ],
}
];

export default projects;