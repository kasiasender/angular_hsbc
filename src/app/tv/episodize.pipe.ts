import { Pipe, PipeTransform } from '@angular/core';
import { padStart } from 'lodash';

interface EpisodizeInput {
  season: number;
  number: number;
}

@Pipe({
  name: 'episodize',
  pure: true
})
export class EpisodizePipe implements PipeTransform {

  transform({number, season}: EpisodizeInput, length = 2): string {
    const seasonPart = padStart(season.toString(), 2, '0');
    const episodePart = padStart(number.toString(), length, '0');
    return `S${seasonPart}E${episodePart}`;
  }

}
