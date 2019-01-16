import { DAFService } from '@lcu/api';
import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoogleTimezoneApiService extends DAFService {
  protected key: string = 'AIzaSyD-oFyuw6CgMr7Ksw24J75nuLJYOFnapuQ';

  constructor(injector: Injector) {
    super(injector);
  }

  public Timezone(location: string, timestamp: string) {
    return this.get(`https://maps.googleapis.com/maps/api/timezone/json?location=${location}&timestamp=${timestamp}&key=${this.key}`);
  }
}
