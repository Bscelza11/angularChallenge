export interface ControlBaseModel {
  name: string;
  label: string;
  value: string;
  type: string;
  options: string[];
}

export interface ControlsModel {
  controls: ControlBaseModel[];
}
