const projectsData = [
  {
    id: 1,
    title: "Music Player 🎵📻",
    image: "./music-player.png",
    mainDescription:
      "Modern music player that connects to Deezer API, allowing users to explore tracks, play music, and enjoy a dynamic UI with toast notifications, sliders, and smooth navigation.",
    description:
      "ZaMusic is a dynamic and elegant web-based music player built with React and styled-components. It connects to the Deezer API (via proxy) using Axios to fetch real-time music data. Users can browse top tracks, play/pause music, and navigate between tracks with a custom slider powered by rc-slider. The interface includes responsive design elements, toast notifications with react-toastify, loading states with react-loading-skeleton, and a carousel experience using Swiper. Error handling is implemented via react-error-boundary, ensuring stability. This project demonstrates integration with third-party APIs and a well-structured, interactive audio player interface.",
    live: "https://react-music-player-za-music.vercel.app/",
    github: "https://github.com/Nikolic1992/react-music-player-za-music",
  },
  {
    id: 2,
    title: "Travel Marvel ✈️🌍",
    image: "./travel-marvel.png",
    mainDescription:
      "Smart and modern travel planner that helps users organize trips with ease. It allows users to log in, choose destinations, track expenses, and add images and documents — all designed to enhance the travel planning experience",
    description:
      "Travel Marvel is a sleek and interactive travel planning web app designed to help users organize their trips with ease. Built using React, TypeScript, and Redux Toolkit, it delivers a fast and responsive user interface. The app features smooth animations powered by Framer Motion and a clean design using Material UI components.Firebase is used for user authentication and real-time data storage, ensuring a secure and reliable experience. Forms are managed efficiently with React Hook Form, while Redux Persist maintains state across sessions. Travel Marvel offers an intuitive, modern solution for managing your next adventure—all in one place.",
    live: "https://travel-marvel.vercel.app/",
    github: "https://github.com/Nikolic1992/travel-marvel",
  },
  {
    id: 3,
    title: "Movie App 🎬🍿",
    image: "./movie-app.png",
    mainDescription:
      "Modern and responsive movie search app powered by TMDB API and Appwrite. Search, explore trending movies, and enjoy smooth UX with loading spinners and error handling.",
    description:
      "Movie App is a dynamic and fully responsive movie search web application built with React, Tailwind CSS, and Appwrite. It leverages the TMDB API to fetch real-time movie data and allows users to search for movies, explore trending titles, and view results with debounced search functionality to optimize API calls. The UI features smooth loading states using custom spinners, error handling for failed API requests, and a clean modern interface powered by Tailwind CSS. Appwrite is integrated to manage trending movie data, while React-use ensures efficient debouncing. This project showcases integration with external APIs, modern UI/UX patterns, and frontend architecture best practices.",
    live: "https://movie-app-react-plum.vercel.app/",
    github: "https://github.com/Nikolic1992/movie-app-react",
  },
  {
    id: 4,
    title: "Shopfinity 🛒💳",
    image: "./ecommerce.png",
    mainDescription:
      "Modern and responsive online store that offers a seamless shopping experience. Users can browse products, manage their cart, and simulate the checkout process — all within a clean and intuitive interface.",
    description:
      "Shopfinity is a fully functional shopping web app built with React, JavaScript,TailwindCSS, Redux Toolkit and Clerk. It allows users to explore a product catalog, add and remove items from the cart, and dynamically update quantities with real-time price calculations. The UI is designed with Tailwind CSS for a modern and clean look, and Framer Motion is used to add smooth transitions and animations. The app includes state persistence via Redux Persist and emphasizes performance and usability. Ideal for showcasing eCommerce logic and frontend architecture, this project demonstrates a complete product flow from browsing to checkout.",
    live: "https://e-commerce-react-js-opal-ten.vercel.app/",
    github: "https://github.com/Nikolic1992/eCommerce-react-js",
  },
  {
    id: 5,
    title: "Resume Template 📄✨",
    image: "./portfolio-template.png",
    mainDescription:
      "Modern and customizable resume template built with React. Allows users to easily showcase their professional experience, skills, and projects with a clean and responsive design.",
    description:
      "React Resume Template is a sleek and modern portfolio/resume web application created using React and Tailwind CSS. It provides a highly customizable layout where users can display their profile information, skills, education, and projects in a structured format. The app emphasizes responsiveness, accessibility, and user-friendly design. It includes smooth scrolling navigation, reusable components, and a minimal aesthetic that highlights professionalism. This project is ideal for developers looking to quickly build and deploy a personal resume website that is both elegant and functional.",
    live: "https://react-resume-template-beta.vercel.app/",
    github: "https://github.com/Nikolic1992/react-resume-template",
  },
  {
    id: 6,
    title: "LinkUp 💬🌐",
    image: "./link-up.png",
    mainDescription:
      "Advanced MERN stack video chat application with Stream.io integration, designed for language learners to connect and practice new languages through real-time video communication.",
    description:
      "LinkUp is a comprehensive video chat application built with the MERN stack featuring MongoDB with Mongoose ODM, Express.js with CORS and cookie-parser, React 19 with Vite, and Node.js backend. The frontend leverages modern technologies including Stream.io Video React SDK for real-time video communication, TanStack React Query for efficient data fetching, Zustand for lightweight state management, and React Router for navigation. The UI is crafted with Tailwind CSS and DaisyUI components, enhanced with Lucide React icons and React Hot Toast notifications. The backend implements secure authentication using bcryptjs for password hashing and JWT tokens, integrates Stream Chat SDK for messaging capabilities, and uses nodemon for development. This platform is specifically designed for language learners to practice through interactive video conversations, featuring user authentication, room management, high-quality video/audio streaming, and responsive design across all devices.",
    live: "https://mern-video-chat-app.onrender.com/",
    github: "https://github.com/Nikolic1992/mern-video-chat-app",
  },
];

export default projectsData;
