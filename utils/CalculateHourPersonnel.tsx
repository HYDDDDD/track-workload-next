import { IActivityRequestDataProps } from "@/types/activity/activity.types";

interface IHandleCalHourPersonnelProps {
  userActivites: IActivityRequestDataProps[];
  setHourCulture: (value: React.SetStateAction<number>) => void;
  setHourHealth: (value: React.SetStateAction<number>) => void;
  setHour?: (value: React.SetStateAction<number>) => void;
}

export const handleCalHourPersonnel = ({
  userActivites,
  setHourCulture,
  setHourHealth,
  setHour,
}: IHandleCalHourPersonnelProps) => {
  let countCulture = 0;
  let countHealth = 0;

  userActivites.forEach((activity) => {
    if (activity.status === "P") {
      if (activity.category === "C") {
        countCulture = countCulture + activity.hour;
      } else {
        countHealth = countHealth + activity.hour;
      }
    }
  });

  if (setHour) {
    setHour(countCulture + countHealth);
  }

  setHourCulture(countCulture);
  setHourHealth(countHealth);
};
