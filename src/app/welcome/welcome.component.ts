import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  user : string;

  constructor(private route : ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.user = this.route.snapshot.params['name'];
  }

  callService(){
    console.log(this.http.get('http://localhost:8080/hello-world'));
    this.http.get('http://localhost:8080/hello-world').subscribe();
  }

}
