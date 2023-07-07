import { Component } from '@angular/core';
import { generate, presetPalettes } from '@ant-design/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'aaaa';
  colors: string[] = [];
  snippet = `
  import { generate, presetPalettes } from '@ant-design/colors';
  
  // Generate color palettes by a given color
  const colors = generate('#1890ff');
  `;
  constructor() {
    const colors = generate('#1890ff');
    console.log(colors); // ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
    console.log(presetPalettes);
  }

  setColor(event: any) {
    this.colors = generate(event.target.value);
  }
}
