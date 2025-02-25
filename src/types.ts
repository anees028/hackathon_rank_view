export type Item = {
    id?: number; // Ensure id is always a number
    name: string;
    score: string;
  };
  
  export type Category = {
    title: string,
    fontColor: string;
    items: Item[];
  };


  export type RankingCardProps = {
    title: string;
    rank: number | string | any;
    name: string;
    score: number | string;
    icon: string;
  }