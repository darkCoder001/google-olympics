import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

type RoadmapCard = {
  title: string;
  content: string;
  src: string;
};

type RoadmapCheckpoint = {
  checkpoint: string;
  cards: RoadmapCard[];
};

export const roadmapCheckpoints: RoadmapCheckpoint[] = [
  {
    checkpoint: "Checkpoint 1",
    cards: [
      {
        title: "Monkey Typing",
        src: "/images/monkey.webp",
        content: `📍 Location: Base Camp (Arch 102)
        
⏳ Approx Time: 5-6 mins    
🖥️ Requirements: Laptops (by the teams).`,
      },
      {
        title: "Card Memory Game",
        src: "/images/uno.jpg",
        content: `📍 Location: Base Camp (AR)
        
⏳ Approx Time: Around 15 minutes    
        `,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 2",
    cards: [
      {
        title: "Pass-it-along Game",
        src: "/images/pass.webp",
        content: `📍 Location: Outside Arch Building in two separate locations (C2 [road in front of AR] and C2' [Road in front of LC])
        
⏳ Approx Time: Around 20 minutes    
`,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 3",
    cards: [
      {
        title: "Pixelated Bingo",
        src: "/images/pixel.webp",
        content: `📍 Location: Cycle parking area of AB  
        
⏳ Approx Time: 30 minutes   
📝 Point System:
  - Score = (30 - minutes taken) * 60
        `,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 4",
    cards: [
      {
        title: "Tower Defense",
        src: "/images/tower.jpg",
        content: `📍 Location: Guest House  
        
⏳ Approx Time: 15 minutes  
  
📝 Point System:
  - Each cup in a successful stack = 100 points
  - Total points divided by 5 for teams in the winning ally
      `,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 5",
    cards: [
      {
        title: "??",
        src: "/images/lock-img.png",
        content: ``,
      },
      {
        title: "??",
        src: "/images/lock-img.png",
        content: ``,
      },
      {
        title: "??",
        src: "/images/lock-img.png",
        content: ``,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 6",
    cards: [
      {
        title: "Code Relay",
        src: "/images/coderelay.jpg",
        content: `📍 Location: AR Base Camp  
        
⏳ Approx Time: As long as possible   
📝 Point System:
  - Successful code run = 1000 points`,
      },
      {
        title: "Improv: Questions Only",
        src: "/images/improv.jpeg",
        content: `📍 Location: AR Base Camp  
        
⏳ Approx Time: As much as it can be dragged for  `,
      },
      {
        title: "Tech Mythbuster Game",
        src: "/images/TechMyth.jpeg",
        content: `📍 Location: AR Base Camp  
        
⏳ Approx Time: 10-15 minutes  `,
      },
    ],
  },
];
