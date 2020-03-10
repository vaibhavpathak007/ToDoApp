import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements OnInit {

  message = "Sorry error occured ! please contact support team...."

  constructor() { }

  ngOnInit() {
  }

}
