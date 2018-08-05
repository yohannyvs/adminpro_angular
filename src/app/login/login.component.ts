import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare function init_plugis();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router ) { }

  ngOnInit() {
    init_plugis();
  }

  ingresar() {
    this.router.navigate([ '/dashboard' ]);
  }

}
