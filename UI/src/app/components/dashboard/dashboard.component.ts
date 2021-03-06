import { Component, OnInit } from '@angular/core';
import {
  GridsterConfig,
  GridsterItem,
} from 'angular-gridster2';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public config: GridsterConfig | any;
  public items: Array<GridsterItem>| any;
  constructor(
    private dashboardGridsterConfigService: DashboardGridsterConfigService
  ) {}

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = [
      { cols: 1, rows: 2 },
    ];
  }

  removeItem(item: GridsterItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  addItem() {
    const item: GridsterItem = { cols: 2, rows: 2, y: 0, x: 2 };
    this.items.push(item);
  }
}
