import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { AuthService } from 'src/app/services/auth.service';
import {User} from '../../models/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeSideMenu: boolean = false;
  counter = 0;
  token = '';
  profile: User | null = null;

  constructor(
    private storeService: StoreService,
    private authService: AuthService

    ) { }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeSideMenu = !this.activeSideMenu;
  }

  login(){
    //switchApp pending
    this.authService.login('fredy@mail.com', '1204')
    .subscribe(rta =>{
      console.log(rta)
      this.token = rta.access_token;
      this.getProfile();
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(user =>{
      this.profile = user;
    });
  }

}
