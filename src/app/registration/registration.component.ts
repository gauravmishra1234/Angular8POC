import { Component } from '@angular/core';
//import {FormGroup, FormControl} from '@angular/forms';
import {FormBuilder} from '@angular/forms';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';

@Component({
  templateUrl: './registration.component.html'
})
export class RegistrationComponent {
  title = 'registration-forms';
  massage = null;
  constructor(private fb:FormBuilder,private userService: UserService){}
  // registrationForm=new FormGroup({
  //   userName:new FormControl('gaurav'),
  //   password:new FormControl(''),
  //   confirmPassword:new FormControl(''),
  //   address:new FormGroup({
  //     city:new FormControl(''),
  //     state:new FormControl(''),
  //     postalCode:new FormControl(''),
  //   })
  // });

  // through form builder
  registrationForm=this.fb.group({
    userName:[''],
      password:[''],
      confirmPassword:[''],
      address:this.fb.group({
        city:[''],
        state:[''],
        postalCode:['']
      })

  });
  CreateRegistration(user:User){
    debugger;
    return this.userService.InsertRegistration(user).subscribe(
      ()=>{
        this.massage = 'Record saved Successfully';
      }
    );
  }
}
