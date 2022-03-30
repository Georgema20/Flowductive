export default class Flow {
  type = '';
  duration = '';
  color = '';
  id = '';

  constructor(flowType, flowDuration, id) {
    this.type = flowType;
    this.duration = flowDuration;
    this.id = id;
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
