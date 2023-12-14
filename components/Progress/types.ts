export type ProgressColor = "warn" | "danger";

export type ProgressBarProps = {
  percent: number;
  color: ProgressColor;
};

export interface IProgress {
  maxHour: number;
  hour: number;
  type: ProgressColor;
}
