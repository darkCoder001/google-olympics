import { Jersey_10 } from "next/font/google";

const jersey10 = Jersey_10({
  weight: "400",
  subsets: ["latin"],
});

type TroadmapCard = {
  title: string;
  src: string;
  content: string;
};

type TroadmapCheckpoint = {
  checkpoint: string;
  cards: TroadmapCard[];
};

export const roadmapCheckpoints: TroadmapCheckpoint[] = [
  {
    checkpoint: "Checkpoint 1",
    cards: [
      {
        title: "MonkeyType Game",
        src: "/images/pokemon.jpg",
        content: `📍Location: Base Camp (Arch 102)
🏆 Teams:  30  
⏳ Approx Time: 5-6 mins  
🙋 Volunteers:  30 volunteers + 5 supervisors + hosts  

🔢 Point System:  
The average of all the four members’ WPM will be added to their score.  

🖥️ Requirements:  
Laptops (by the teams).`,
      },
      { title: "Level 2", src: "/images/pokemon.jpg", content: "Some content for Level 2." },
      { title: "Level 3", src: "/images/pokemon.jpg", content: "Some content for Level 3." },
    ],
  },
  {
    checkpoint: "Checkpoint 2",
    cards: [
      { title: "Level 4", src: "/images/pokemon.jpg", content: "Some content for Level 4." },
      { title: "Level 5", src: "/images/pokemon.jpg", content: "Some content for Level 5." },
      { title: "Level 6", src: "/images/pokemon.jpg", content: "Some content for Level 6." },
    ],
  },
  {
    checkpoint: "Checkpoint 3",
    cards: [
      { title: "Level 7", src: "/images/pokemon.jpg", content: "Some content for Level 7." },
      { title: "Level 8", src: "/images/pokemon.jpg", content: "Some content for Level 8." },
      { title: "Level 9", src: "/images/pokemon.jpg", content: "Some content for Level 9." },
    ],
  },
  {
    checkpoint: "Checkpoint 4",
    cards: [
      { title: "Level 10", src: "/images/pokemon.jpg", content: "Some content for Level 10." },
      { title: "Level 11", src: "/images/pokemon.jpg", content: "Some content for Level 11." },
      { title: "Level 12", src: "/images/pokemon.jpg", content: "Some content for Level 12." },
    ],
  },
  {
    checkpoint: "Checkpoint 5",
    cards: [
      { title: "Level 13", src: "/images/pokemon.jpg", content: "Some content for Level 13." },
      { title: "Level 14", src: "/images/pokemon.jpg", content: "Some content for Level 14." },
      { title: "Level 15", src: "/images/pokemon.jpg", content: "Some content for Level 15." },
    ],
  },
  {
    checkpoint: "Checkpoint 6",
    cards: [
      { title: "Level 16", src: "/images/pokemon.jpg", content: "Some content for Level 16." },
      { title: "Level 17", src: "/images/pokemon.jpg", content: "Some content for Level 17." },
      { title: "Level 18", src: "/images/pokemon.jpg", content: "Some content for Level 18." },
    ],
  },
];
