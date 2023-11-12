import { ProjectModel } from "../models/projectModel";

export const webProjects: ProjectModel[] = [
    {   
        id: 1,
        title: "Netcompany Social Suggestion",
        teamSize: 4,
        role: "Frontend developer",
        demo: "https://net-social.netlify.app/",
        githubLink: "https://github.com/b1amage/netcompany-social-sugesstion-web",
        description: ["Contributing to the Frontend website that helps employees find their nearby interesting places supported by more than 1000 people in Netcompany.", 'Develop responsive UIs of components including “HomeScreen", “Search Location”, “Register and Update location”, “Itineraries”, etc.', "Architected and implemented robust state management using Redux Toolkit, enhancing app performance and user experience by streamlining state updates and minimizing re-renders", "Using Pusher service and Google Maps API to develop the “Real-time notifications” and “Get current location” features"],
        techStacks: ["MongoDB", "NestJs", "ReactJs", "NodeJs", "TailwindCSS"]
    },
    {
        id: 2,
        title: "RMITinder",
        teamSize: 6,
        role: "Frontend developer",
        demo: "https://rmit-tinder.netlify.app/",
        githubLink: "https://github.com/b1amage/further-web-front-end",
        description: [
            "Implement a mobile-first front-end website dating platform tailored specifically for RMIT University students.", 
            'Utilizing grid systems for optimal visual organization and user experience for “Chatbox”, “Ideal match”, etc.', 
            'Identified and resolved UI bugs in “Chat box” including “Load more message”, length of “Chat content card”, and unchanged position in chat after clicking the “Load more previous” button in chat.'],
        techStacks: ["MongoDB", "ReactJs", "NodeJs", "TailwindCSS"]
    },
    {
        id: 3,
        title: "Bluelist18",
        role: "Individual",
        demo: "https://bluelist18.netlify.app",
        githubLink: "https://github.com/quangan186/MyPlayList",
        description: [
            "Implement the music player will run the song or audio of any videos on YouTube by copying and pasting the video's URL. Also, users can add or delete songs to the playlist and make the playlist loop one or many songs.",
            "Experience NextJS framework and TypeScript through the project as well as understand how to use YouTube API to get audio links and play music on the website."
        ],
        techStacks: ["NextJs", "TailwindCSS", "Typescript"]
    },
    {   
        id: 4,
        title: "RADIOLOGICAL COLLABORATION TOOL",
        teamSize: 4,
        role: "Frontend developer",
        githubLink: "https://github.com/kaisergrimlock/SEPM-Project/tree/minh-dev",
        description: [
            "The project was developed for supporting doctors to contact each other through video calls",
            'Experience with socket.io to make real-time call, developing the functions in "Meeting room" such as audio, recording, drawing canvas, etc.'
        ],
        techStacks: ["MongoDB", "ExpressJs", "ReactJs", "TailwindCSS", "NodeJs"]
    },
    {
        id: 5,
        title: "RBlog",
        teamSize: 4,
        role: "Frontend developer",
        demo: "https://rmit-blog.netlify.app/",
        githubLink: "https://github.com/b1amage/bits-front-end",
        description: [
            "This is a MERN project that my teammates and I have developed to help users create, edit, and share their own blogs about technology and it was developed by using MongoDB, ExpressJs, ReactJs, and NodeJs.",
        ],
        techStacks: ["MongoDB", "ExpressJs", "ReactJs", "TailwindCSS", "NodeJs"]
    },
    {
        id: 6,
        title: "VF Corporation",
        role: "Individual",
        demo: "https://vfgcorporation.netlify.app/",
        githubLink: "https://github.com/quangan186/MindX-project",
        description: ["This is my first project that I have done since I started to learn about developing websites and it is a game-selling website"],
        techStacks: ["HTML", "CSS", "Javascript"]
    },
]

export const mobileProjects: ProjectModel[] = [
    {   
        id: 1,
        title: "My Dictionary",
        teamSize: 4,
        role: "Frontend developer",
        githubLink: "https://github.com/TuanDao2002/My-Dictionary",
        description: [
            "The project is an iOS English-English dictionary app",
            'Experience with dictionary API and using Swift and SwiftUI to develop the app'
        ],
        techStacks: ["Swift", "SwiftUI"]
    },

    {
        id: 2,
        title: "RMIT Grocery app",
        teamSize: 4,
        role: "Frontend developer",
        githubLink: "https://github.com/b1amage/grocery-app",
        description: ["The project is an Android app that is about selling products from the user side while being able to create, add, and delete store items from the admin side."],
        techStacks: ["Java"]
    },

    {   
        id: 3,
        title: "Tic tac toe",
        demo: "https://youtu.be/hyL4v1PeSRY",
        role: "Individual",
        githubLink: "https://github.com/quangan186/COSC2659_Assignment2_s3877482",
        description: [
            "The project is an iOS app built based on the Tic tac toe game",
        ],
        techStacks: ["Swift", "SwiftUI"]
    },
    
    {   
        id: 4,
        title: "MemeLand",
        role: "Individual",
        demo: "https://youtu.be/4X4Qj6iKltM",
        githubLink: "https://github.com/quangan186/COSC2659-A1",
        description: ["This is the first iOS app and it is about collecting meme templates from social media applications"],
        techStacks: ["Swift", "SwiftUI"]
    }, 
    {
        id: 5,
        title: "UniCheck",
        role: "Individual",
        demo: "https://youtu.be/n-R9jJz6xHs",
        githubLink: "https://github.com/quangan186/S3877482-COSC2657-A1",
        description: ["This is my first Android app developed using Java language, and it is about collecting popular universities in Ho Chi Minh city with their information"],
        techStacks: ["Java"]
    },
    
]