export interface Alert {
  message: string;
  status:Status;
  show:boolean;
}

export enum Status {
  Info,
  Warning,
  Danger,
  Success
}
