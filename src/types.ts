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

