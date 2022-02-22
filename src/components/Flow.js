export default class Flow {
  type = '';
  duration = '';
  color = '';

  constructor(flowType, flowDuration) {
    this.type = flowType;
    this.duration = flowDuration;
    switch (flowType) {
      case 'Grind':
        this.color = '#0F7BE8';
        break;
      case 'Growth':
        this.color = '#31D64C';
        break;
      case 'Work':
        this.color = '#FF4539';
        break;
      default:
        break;
    }
  }
}
