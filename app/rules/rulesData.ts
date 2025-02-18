// Define type interfaces for type safety
type Rule = string;
type Game = {
  name: string;
  rules: Rule[];
};
type Checkpoint = {
  number: number;
  games: Game[];
};

// The actual rules data
export const rulesData: Checkpoint[] = [
  {
    number: 1,
    games: [
      {
        name: "MonkeyType Game",
        rules: [
          "Each team requires 1 laptop",
          "Monkey Type website game will be played on the laptop",
          "Each member of the team will play one by one",
          "1 minute typing speed game will be played",
          "One chance would be given to each member and the average of their WPM will be calculated for the points",
        ],
      },
      {
        name: "Uno Flip Game",
        rules: [
          "The participants of two teams will play in a 1v1 manner",
          "6x6 grid of generic uno cards placed facing downwards",
          "The goal is to find two cards that look the same(same colour and denomination)",
          "The participants cannot repeat until all 4 members have already played",
        ],
      },
    ],
  },
  {
    number: 2,
    games: [
      {
        name: "Pass-it -along game",
        rules: [
          "The ball needs to be balanced on a plate and stick that would be provided by our team",
          "Guide the ball to the finish line or target area without letting it fall off the platform",
          "A person can take steps around him to balance the ball but cannot walk with the ball",
          "Teams need to pass it one by one among their teammates",
        ],
      },
    ],
  },
  {
    number: 3,
    games: [
      {
        name: "Pixelated Photo game",
        rules: [
          "The teams will be provided with a 3x3 Bingo ticket type page   with each slot containing a black and white pixelated photos of random locations around the Ground floor, 1st floor, 2nd floor and around the periphery of AB",
          "The teams need to find these locations and take pictures there along with all the four members of the team",
          "The team needs to get a straight line or a diagonal of the grid photos completed to complete the game",
          "The team may split up but the photos have to be always with all the members",
          "The faster you complete the game and get back to C3, the more points you’ll get",
          "Texting or calling other teams about the locations will result in disqualification",
        ],
      },
    ],
  },
  {
    number: 4,
    games: [
      {
        name: "Tower Defense Game",
        rules: [
          "The 10 teams will make allies and form into 2 groups and these two groups will have a war",
          "The teams need to make cup stacks with the base layer of 13 cups & also need to break the tower on the other side",
          "15 minute timer will start and the teams need to make and break till he last second",
          "The teams will be provided with smiley balls to break the tower on the other side",
          "A table will be set up on which the cups are to be stacked and all the players have to be behind these tables",
        ],
      },
    ],
  },
  {
    number: 5,
    games: [
      {
        name: "Tissue Paper roll game",
        rules: [
          "The team will be provided with a cup filled to the brim with water kept on a tissue paper",
          "The goal is to drag the tissue paper slowly without dropping any water",
          "The farther you drag the tissue paper the more points you’ll get",
        ],
      },
      {
        name: "Standing on a leg + throwing the stones/balls",
        rules: [
          "The goal is that all the members of the team will stand on one leg and are supposed to knock out some stones kept at a distance from them",
          "There would be 4 stones kept in front of each member and unless all 4 stones are knocked out, no member is allowed to get back on two legs",
          "The participants can then opt for Double or nothing, which will double the distance but also double the points",
          "3 chances would be given, if all exhausted then negative points",
        ],
      },
      {
        name: "Penalty Accuracy game",
        rules: [
          "A small cardboard will be kept and the people are supposed to kick tennis balls into the box",
          "Double or nothing applicable",
        ],
      },
    ],
  },
  {
    number: 6,
    games: [
      {
        name: "Battleship",
        rules: ["Standard Battleship game rules can be played online"],
      },
      {
        name: "Buckshot Roulette",
        rules: ["Online game on Laptop similar to Russian roulette rules"],
      },
      {
        name: "Balloon popping game",
        rules: [
          "Each member will be given a blown balloon and also a pen which will be used to burst the balloon",
          "Each person needs to wait for 5 minutes by counting it inside their head and no clocks will be available anywhere.",
          "The goal is to burst the balloon exactly at the 5 minute mark",
          "The closer to the goal you are more points you will gain",
        ],
      },
    ],
  },
  {
    number: 7,
    games: [
      {
        name: "Code relay",
        rules: [
          "The team will inform the volunteers about the language they will use so it can be set up on laptops",
          "The team will come as a whole and select a code pattern randomly from the bowl kept in front of them at the pattern picking station",
          "The teammates will form a line and will have 10 seconds to write as much code as they can",
          "Then the next teammate will follow and they will go serially each taking 10 second till the code is complete",
        ],
      },
      {
        name: "Improv",
        rules: [
          "This will be played in a round robin manner where a topic or a environment will be given to the participants from both team",
          "1 person from each will come and they are only supposed to ask questions",
          "If any participant says anything but a question or fails to say anything in 5 seconds, the next teammate will be called",
          "The first team to exhaust all their teammates will lose",
        ],
      },
    ],
  },
];
