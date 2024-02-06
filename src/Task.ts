class Task {
  id: number;
  name: string;
  steps: Array<string>;
  currentStep: number;
  notes: Array<string>;

  constructor(
    id: number,
    name: string,
    steps: Array<string>,
    currentStep: number,
    notes: Array<string>,
  ) {
    this.id = id;
    this.name = name;
    this.steps = steps;
    this.currentStep = currentStep;
    this.notes = notes;
  }
}

export default Task;
