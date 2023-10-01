import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myfirstwebapp';
  public url1: string = "";
  constructor(private router: Router){
    window.localStorage.setItem('token','111');
    window.localStorage.setItem('userId','1');
    window.localStorage.setItem('role','admin');
   
  }
}
