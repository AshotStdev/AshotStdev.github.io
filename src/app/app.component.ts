import { Component } from '@angular/core';
import { generate, presetPalettes } from '@ant-design/colors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Ant Design Colors';
  colors: string[] = [];
  value = '#1890ff';
  snippet = `
  import { generate, presetPalettes } from '@ant-design/colors';
  
  // Generate color palettes by a given color
  const colors = generate('#1890ff');
  `;
  constructor() {
    this.colors = generate('#1890ff', {
      theme: 'default',
      backgroundColor: '#ffffffff',
    });
  }

  setColor(event: any) {
    console.log(event);

    this.colors = generate(event.target.value, {
      theme: 'dark',
      backgroundColor: '#0000000000',
    });
  }
}
