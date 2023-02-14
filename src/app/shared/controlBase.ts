export class ControlBase<T> {
  value: T | undefined;
  label: string;
  required: boolean;
  type: string;
  options: { value: string }[];

  constructor(
    options: {
      value?: T;
      label?: string;
      required?: boolean;
      type?: string;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.label = options.label || '';
    this.required = !!options.required;
    this.type = options.type || '';
    this.options = options.options || [];
  }
}
