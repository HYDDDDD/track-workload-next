export interface IActivityRequestDataProps {
  id: string;
  category: string;
  image: string;
  createDate: string;
  createBy: string;
  updateDate: string;
  hours: number;
}

export interface IActivityResponseDataProps {
  userID: string;
  id: string;
  category: string;
  updateDate: string;
  hours: number;
}

export interface IActivityDataProps {
  id: string;
  category: string;
  hours: number;
}
