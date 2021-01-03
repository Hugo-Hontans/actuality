import { Component, OnInit } from '@angular/core';
import { Actuality } from '../actuality';
import { ActualityService } from '../actuality.service';

@Component({
  selector: 'app-actuality-item',
  templateUrl: './actuality-item.component.html',
  styleUrls: ['./actuality-item.component.css']
})
export class ActualityItemComponent implements OnInit {
  public actuality: Actuality | undefined;

  constructor (private actualityService: ActualityService) {
  }

  async ngOnInit() {
    const actualities = await this.actualityService.getActualities();
    this.actuality = actualities[0];
  }

}
