import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'paises-input-output';
  newName: any;

  getName(data){
    console.log(data)
    this.newName = data;
  }
}
