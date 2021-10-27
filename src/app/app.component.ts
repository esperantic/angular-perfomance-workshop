import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public users: any;
  constructor(private userService: UserService) {
  }

  public doSomething() {
    console.log('doSomething(🔥)');
  }

  public mouseMove() {
    console.log('mouseMove');
  }

  public async ngOnInit() {
    this.users = await this.userService.getAll();
  }

  // {"name": {"title": "Mr", "first": "Bianor", "last": "Gonçalves"}
  public formatName(user: any) {
    console.log('AppComponent: formatName(🔥)');
    return `${user.title} ${user.first} ${user.last}`;
  }
}
