import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'twn-app1';

  private greater(a: number, b: number): number {
    if (a > b) return a;
    else return b;
  }
}
