import { Component } from '@angular/core';


@Component({
  selector: 'redbull-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title= 'Redbulls';
  links= [
    {path:'', icon: 'home', title: 'Home'},
    {path: 'redbulls', icon: 'view_list', title: 'Redbulls'}
  ]
  
}
