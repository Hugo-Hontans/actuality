import { Injectable } from '@angular/core';
import axios from 'axios';
import { Actuality } from './actuality';

@Injectable({
  providedIn: 'root'
})
export class ActualityService {

  constructor() { }

  /**
   * Fetch the last 5 actualities
   */
  public async getActualities(): Promise<Actuality[]> {
    const options = {
      method: 'GET',
      url: 'https://newscatcher.p.rapidapi.com/v1/latest_headlines',
      params: {lang: 'en', country: 'fr', media: 'True'},
      headers: {
        'x-rapidapi-key': '025bfa9baamshb49158451dda52ap1d43cbjsnaba7c9afa508',
        'x-rapidapi-host': 'newscatcher.p.rapidapi.com'
      }
    } as any;

    try {
      const response = await axios.request(options);
      return response.data.articles;
    } catch (err) {
      console.error(err);
      return [];
    }
  }
}
