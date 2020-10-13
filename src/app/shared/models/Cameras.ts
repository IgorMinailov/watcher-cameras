export interface Cameras {
  count: number;
  cameras: Camera[];
}

export interface Camera {
  url: string;
  indicator: boolean;
}
