import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  createUser(){
    this.usersService.create({
      name: 'Fredy',
      email: 'fredy@mail.com',
      password: '1204'
    })
    .subscribe(rta =>{
      console.log(rta);
    })
  }

  login(){
    this.authService.login('fredy@mail.com', '1204')
    .subscribe(rta =>{
      console.log(rta.access_token);
    })
  }
}
