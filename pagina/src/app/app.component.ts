import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'Audit.& Prot - Home';

  constructor(private titleService: Title, private router: Router) {};

  ngOnInit() {

    this.titleService.setTitle(this.title); 
    this.router.navigate(["home"]);

  }

}
