import { UtcToLocaleTimePipe } from './utc-to-locale-time.pipe';

describe('UtcToLocaleTimePipe', () => {
  it('create an instance', () => {
    const pipe = new UtcToLocaleTimePipe();
    expect(pipe).toBeTruthy();
  });
});
