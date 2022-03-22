import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { FilesService } from './services/files.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
    private filesService: FilesService
  ) { }

  token = '';
  imgRta = '';

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
      this.token = rta.access_token;
    })
  }

  getProfile(){
    this.authService.profile()
    .subscribe(profile =>{
      console.log(profile);
    })
  }

  downloadPdf(){
    this.filesService.getFile('my.pdf', 'https://young-sands-07814.herokuapp.com/api/files/dummy.pdf', 'application/pdf')
    .subscribe()
  }

  onUpload(event: Event){
    console.log('onUpload');
    const element = event.target as HTMLInputElement;
    const file = element.files?.item(0);
    console.log(file)
    if(file){
      this.filesService.uploadFile(file)
    .subscribe(rta =>{
      console.log(rta);
      this.imgRta = rta.location;
    })
    }

  }
}
