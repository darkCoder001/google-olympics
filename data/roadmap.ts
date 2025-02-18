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
        title: "MonkeyType Game",
        src: "/images/monkey.webp",
        content: `📍 Location: Base Camp (Arch 102)
        
⏳ Approx Time: 5-6 mins  
🙋 Volunteers: 30 volunteers + 5 supervisors + hosts  
🖥️ Requirements: Laptops (by the teams).`,
      },
      {
        title: "Uno Flip Game",
        src: "/images/uno.jpg",
        content: `📍 Location: Base Camp (AR)
        
⏳ Approx Time: Around 15 minutes  
🙋 Volunteers: Continuing from previous (2 volunteers per game keeping score, 35 volunteers total, supervisors, and hosts)  
        
🖥️ Requirements:
  - 3 games can be set up from one generic packet of UNO (108 cards)
  - Need 15 games, so 5- 6 packets of UNO cards.`,
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
🙋 Volunteers: 10 volunteers per location + 5 supervisors per location (Total 30)  
🖥️ Requirements:
  - Stick and plate prop being made (20)
  - Smiley balls (20).`,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 3",
    cards: [
      {
        title: "Pixelated Photo Game",
        src: "/images/pixel.webp",
        content: `📍 Location: Cycle parking area of AB  
        
⏳ Approx Time: 30 minutes  
🙋 Volunteers: 1 volunteer per team + additional support at the location (Total 20)  
📝 Point System:
  - Score = (30 - minutes taken) * 60
        
🖥️ Requirements:
  - 14 papers with grids pasted on cardboard.`,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 4",
    cards: [
      {
        title: "Tower Defense Game",
        src: "/images/tower.jpg",
        content: `📍 Location: Guest House  
        
⏳ Approx Time: 15 minutes  
🙋 Volunteers: 15 volunteers + 5 supervisors (Total 20)  
📝 Point System:
  - Each cup in a successful stack = 100 points
  - Total points divided by 5 for teams in the winning ally
        
🖥️ Requirements:
  - Cups
  - Benches
  - Smiley Balls.`,
      },
    ],
  },
  {
    checkpoint: "Checkpoint 5",
    cards: [
      {
        title: "Tissue Paper Roll Game",
        src: "/images/roll.jpeg",
        content: `📍 Location: In front of Mayuri  
        
⏳ Approx Time: 5 minutes  
🙋 Volunteers: Around 10 members available  
📝 Point System:
  - Every 15 cm the cup is dragged = 100 points
  - If less than 20 cm = -100 points
        
🖥️ Requirements:
  - Tissue paper roll/toilet paper roll.`,
      },
      {
        title: "Standing on a Leg + Throwing the Stones/Balls",
        src: "/images/onelegstand.jpg",
        content: `📍 Location: In front of Mayuri  
        
⏳ Approx Time: 5 minutes  
🙋 Volunteers: Around 10 members available  
📝 Point System:
  - Successfully knocking out all stones = 500 points, else -100
  - Double or nothing increases only positive points
        
🖥️ Requirements:
  - Stones to throw.`,
      },
      {
        title: "Penalty Accuracy Game",
        src: "/images/penalty.jpg",
        content: `📍 Location: In front of Mayuri  
        
⏳ Approx Time: 5 minutes  
🙋 Volunteers: Around 10 members available  
📝 Point System:
  - Successful penalty within 2 tries = 500 points, else -100
  - Double or nothing applies only to positive points
        
🖥️ Requirements:
  - Small cardboard box (shoe box)
  - Tennis balls.`,
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
🙋 Volunteers: Final games, all volunteers available  
📝 Point System:
  - Successful code run = 1000 points
        
🖥️ Requirements:
  - Laptops of the managing team (not participants)
  - Bowl with code patterns.`,
      },
      {
        title: "Improv",
        src: "/images/improv.webp",
        content: `📍 Location: AR Base Camp  
        
⏳ Approx Time: As much as it can be dragged for  
🙋 Volunteers: All volunteers available, a few will be used  
        
🖥️ Requirements:
  - Nothing.`,
      },
      {
        title: "Tech Mythbuster Game",
        src: "/images/TechMyth.jpeg",
        content: `📍 Location: AR Base Camp  
        
⏳ Approx Time: 10-15 minutes  
🙋 Volunteers: All volunteers available, a few will be used  
        
🖥️ Requirements:
  - Paper.`,
      },
    ],
  },
];
