export interface Card {
  cardID: string;
  question: string;
  answer: string;
  source: string;
  repetition: number;
  stage: number;
  createdDate: Date;
  modifiedDate: Date;
}
