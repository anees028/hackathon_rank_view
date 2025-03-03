export interface TeamData {
  id: number;
  teamName: string;
  temperatureScore: number;
  healthScore: number;
  calculatedOn: string;
}

export interface RankingSectionProps {
  title: string;
  teams: TeamData[];
  type: "temperature" | "health";
}

export interface RankingCardProps {
  title: string;
  rank: number ;
  name: string;
  score: string;
  icon: string;
}

