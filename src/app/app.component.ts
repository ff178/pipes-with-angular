import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  x = 'Hello World';
  name = 'ladY jainA proudmorE';
  array = [1,2,3,4,5,6,7,8,9,10];
  pi = Math.PI;
  money = 9876.55;
  heroe = {
    name: 'Logan',
    code : 'Wolverine',
    age: 500,
    address: {
      street: 'First',
      house: 19
    }
  }
  valueOfPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('The data is here!'), 3500);
  })
  date = new Date();
  video = 'tFmEzTeXdcM';
  url = 'https://www.youtube.com/embed/';
  activate = true;
}
