import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
//  slideOpts: any = {};
//  slideImages : any[] = [];
  constructor() { }

  ngOnInit() {
    // this.slideImages = [
    //   'assets/images/beautiful-countryside.jpg',
    //   'assets/images/winter.jpg',
    //   'assets/images/world.jpg',
    // ]
  }

}
