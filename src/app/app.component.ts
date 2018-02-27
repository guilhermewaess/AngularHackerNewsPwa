import { Component } from '@angular/core';
import { routerTransition } from './route-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]
})
export class AppComponent {
  public getRouterOutletState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
