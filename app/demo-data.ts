export type Team = {
  id: string;
  name: string;
  shortName: string;
  accent: string;
};

export type Batter = {
  name: string;
  detail: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: string;
  status: string;
  onStrike?: boolean;
};

export type Bowler = {
  name: string;
  detail: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: string;
};

export type Delivery = {
  ball: string;
  result: string;
  kind: "run" | "boundary" | "wicket" | "dot";
};

export type DemoMatch = {
  id: string;
  competition: string;
  matchNumber: string;
  venue: string;
  teams: [Team, Team];
  innings: [
    { runs: number; wickets: number; overs: string },
    { runs: number; wickets: number; overs: string },
  ];
  target: number;
  runsNeeded: number;
  ballsRemaining: number;
  currentRunRate: string;
  requiredRunRate: string;
  partnership: string;
  partnershipBalls: number;
  extras: string;
  recentSummary: string;
  batters: Batter[];
  bowlers: Bowler[];
  recentBalls: Delivery[];
};

export const demoMatches: DemoMatch[] = [
  {
    id: "mi-csk",
    competition: "Indian Premier League",
    matchNumber: "Match 18 · T20",
    venue: "Wankhede Stadium, Mumbai",
    teams: [
      { id: "mi", name: "Mumbai Indians", shortName: "MI", accent: "#2674d9" },
      { id: "csk", name: "Chennai Super Kings", shortName: "CSK", accent: "#e4ad27" },
    ],
    innings: [
      { runs: 186, wickets: 4, overs: "20.0" },
      { runs: 133, wickets: 7, overs: "14.5" },
    ],
    target: 187,
    runsNeeded: 54,
    ballsRemaining: 31,
    currentRunRate: "9.17",
    requiredRunRate: "10.45",
    partnership: "18 runs",
    partnershipBalls: 14,
    extras: "8 (lb 5, w 3)",
    recentSummary: "7 RUNS · 1 WICKET",
    batters: [
      { name: "Ruturaj Gaikwad", detail: "Right-hand bat · captain", runs: 48, balls: 31, fours: 4, sixes: 2, strikeRate: "154.84", status: "not out", onStrike: true },
      { name: "Ravindra Jadeja", detail: "Left-hand bat · all-rounder", runs: 12, balls: 9, fours: 1, sixes: 0, strikeRate: "133.33", status: "not out" },
    ],
    bowlers: [
      { name: "Jasprit Bumrah", detail: "Right-arm fast", overs: "3.5", maidens: 0, runs: 24, wickets: 2, economy: "6.26" },
      { name: "Gerald Coetzee", detail: "Right-arm fast", overs: "3.0", maidens: 0, runs: 32, wickets: 1, economy: "10.67" },
      { name: "Piyush Chawla", detail: "Right-arm leg break", overs: "3.0", maidens: 0, runs: 26, wickets: 1, economy: "8.67" },
      { name: "Hardik Pandya", detail: "Right-arm medium", overs: "2.0", maidens: 0, runs: 18, wickets: 1, economy: "9.00" },
      { name: "Akash Madhwal", detail: "Right-arm fast", overs: "3.0", maidens: 0, runs: 25, wickets: 2, economy: "8.33" },
    ],
    recentBalls: [
      { ball: "14.1", result: "1", kind: "run" },
      { ball: "14.2", result: "4", kind: "boundary" },
      { ball: "14.3", result: "W", kind: "wicket" },
      { ball: "14.4", result: "0", kind: "dot" },
      { ball: "14.5", result: "2", kind: "run" },
    ],
  },
  {
    id: "kkr-rcb",
    competition: "Indian Premier League",
    matchNumber: "Match 22 · T20",
    venue: "Eden Gardens, Kolkata",
    teams: [
      { id: "kkr", name: "Kolkata Knight Riders", shortName: "KKR", accent: "#7651a8" },
      { id: "rcb", name: "Royal Challengers Bengaluru", shortName: "RCB", accent: "#d64c43" },
    ],
    innings: [
      { runs: 178, wickets: 6, overs: "20.0" },
      { runs: 115, wickets: 3, overs: "12.2" },
    ],
    target: 179,
    runsNeeded: 64,
    ballsRemaining: 46,
    currentRunRate: "9.32",
    requiredRunRate: "8.35",
    partnership: "42 runs",
    partnershipBalls: 27,
    extras: "11 (b 2, lb 4, w 5)",
    recentSummary: "14 RUNS",
    batters: [
      { name: "Virat Kohli", detail: "Right-hand bat · opener", runs: 51, balls: 34, fours: 6, sixes: 2, strikeRate: "150.00", status: "not out", onStrike: true },
      { name: "Devdutt Padikkal", detail: "Left-hand bat · top order", runs: 25, balls: 18, fours: 3, sixes: 1, strikeRate: "138.89", status: "not out" },
    ],
    bowlers: [
      { name: "Sunil Narine", detail: "Right-arm off break", overs: "3.0", maidens: 0, runs: 20, wickets: 1, economy: "6.67" },
      { name: "Harshit Rana", detail: "Right-arm fast", overs: "2.2", maidens: 0, runs: 18, wickets: 1, economy: "7.71" },
      { name: "Varun Chakravarthy", detail: "Right-arm leg break", overs: "3.0", maidens: 0, runs: 30, wickets: 0, economy: "10.00" },
      { name: "Andre Russell", detail: "Right-arm fast", overs: "2.0", maidens: 0, runs: 14, wickets: 1, economy: "7.00" },
      { name: "Mitchell Starc", detail: "Left-arm fast", overs: "2.0", maidens: 0, runs: 22, wickets: 0, economy: "11.00" },
    ],
    recentBalls: [
      { ball: "12.1", result: "2", kind: "run" },
      { ball: "12.2", result: "4", kind: "boundary" },
      { ball: "12.3", result: "1", kind: "run" },
      { ball: "12.4", result: "0", kind: "dot" },
      { ball: "12.5", result: "6", kind: "boundary" },
      { ball: "12.6", result: "1", kind: "run" },
    ],
  },
];