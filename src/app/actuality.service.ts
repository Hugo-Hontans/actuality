import { Injectable } from '@angular/core';
import axios from 'axios';
import { newsCatcherApiKey } from 'src/environments/environment';
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
        'x-rapidapi-key': newsCatcherApiKey,
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
