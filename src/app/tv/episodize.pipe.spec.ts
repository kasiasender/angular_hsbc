import { EpisodizePipe } from './episodize.pipe';

fdescribe('EpisodizePipe', () => {
  let pipe: Function;

  beforeEach(() => {
    pipe = new EpisodizePipe().transform;
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('changes season 1, episode 2 to S01E02', () => {
    expect(pipe({season: 1, number: 2})).toBe('S01E02');
  });

  it('changes season 12, episode 23 to S12E23', () => {
    expect(pipe({season: 12, number: 23})).toBe('S12E23');
  });

  it('if given 3 as parameter changes season 1, episode 2 to S01E002', () => {
    expect(pipe({season: 1, number: 2}, 3)).toBe('S01E002');
  });
});
