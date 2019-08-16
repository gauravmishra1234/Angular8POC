import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Component({
  templateUrl: './registration.component.html'
})
export class RegistrationComponent implements OnInit {
  title = 'registration-forms';
  massage = null;
  dataSaved = false;
  registrationForm: any;
  constructor(private fb: FormBuilder, private userService: UserService, private authenticationService: AuthenticationService) {
  }
  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      password: ['', Validators.required],
      roleId: ['', Validators.required]
    });
}

  onSubmit() {
    const user = this.registrationForm.value;
    this.CreateRegistration(user);
  }
  CreateRegistration(user: User) {
    this.userService.InsertRegistration(user).subscribe(
      () => {
        this.dataSaved = true;
        this.massage = 'Record Saved Successfully';
        this.registrationForm.reset();
      }
    );
  }
  resetForm() {
    this.registrationForm.reset();
    this.massage = null;
    this.dataSaved = false;
  }
}
