import { NoWhitespacePipe } from './no-whitespace.pipe';

describe('NoWhitespacePipe', () => {
  it('create an instance', () => {
    const pipe = new NoWhitespacePipe();
    expect(pipe).toBeTruthy();
  });
});
