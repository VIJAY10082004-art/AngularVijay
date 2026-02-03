import { Task } from './task';

describe('Task', () => {
  it('should create an instance', () => {
    const directive = new Task();
    expect(directive).toBeTruthy();
  });
});
