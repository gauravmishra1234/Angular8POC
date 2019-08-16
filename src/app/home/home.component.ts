import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { Observable } from 'rxjs';
import { Role } from '../_models/role';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    currentUser: User;
    userFromApi: User;
    allUser: User[];
    massage = null;
    dataSaved = false;
    constructor(
        private userService: UserService,
        private authenticationService: AuthenticationService
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.UserGetById();
        this.loadAllUser();
    }
    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }
    UserGetById() {
        console.log('test');
        this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
            this.userFromApi = user;
        });
    }

    loadAllUser() {
        if (this.isAdmin == true) {
            this.userService.getAll().subscribe(user => {
                this.allUser = user;
            });
        }
    }
    UserToEdit(user: User) {
        this.userService.updateUser(user).subscribe(
            () => {
                this.dataSaved = true;
                this.massage = "Record Update Successfully";
            }
        );
    }
    deleteUser(id: number, username: string) {
        if (confirm("Are you sure you want to delete " + username)) {
            this.userService.deleteUserById(id).subscribe(() => {
                this.dataSaved = true;
                this.massage = 'Record Deleted Succefully';
                this.loadAllUser();
            });
        }
    }
}