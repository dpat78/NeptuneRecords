import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'nav-component',
  templateUrl: './nav-component.component.html',
  styleUrls: ['./nav-component.component.css']
})
export class NavComponentComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {
  }


  goToAbout() {
    console.log('go to aboutus....;');
    this.router.navigate(['aboutus']);
  }

goToContact() {
    console.log('go to contactus....;');
    this.router.navigate(['contactus']);
  }

  goToCategory() {
    console.log('go to bookcategory....;');
    this.router.navigate(['bookcategory']);
  }
  goToLogin() {
    console.log('go to login....;');
    this.router.navigate(['login']);
  }
}