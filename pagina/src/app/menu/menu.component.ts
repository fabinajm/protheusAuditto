import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  titleCab = 'Audit.& Prot - ';
  mainMenuItems;

  constructor(private route: ActivatedRoute, private router: Router, private titleService: Title) {
      this.mainMenuItems = this.getMenuItems(this.titleService.getTitle(),"")
  }

getMenuItems(title: string, opc: string): MenuItem[] {

  if( title.search("-") > 0 ) {
    opc = title.substring(title.search("-") + 2).trim();
  }

  return this.router.config
      .filter(route => route.data && route.data.title && route.path.search(opc) >= 0  && route.path.search("#") >= 0 ) //only add a menu item for routes with a title set.
      .map(route => {
        return {
          path: route.path,
          title: route.data.title
         };
      } );
}

  setDocTitle(title: string) {
     this.titleService.setTitle(this.titleCab + title);
  }

  ngOnInit() {

    this.router.events.subscribe(() => {
      this.mainMenuItems = this.getMenuItems(this.titleService.getTitle(),"");
    });

  }

}

export class MenuItem {
  path: string;
  title: string;
}
