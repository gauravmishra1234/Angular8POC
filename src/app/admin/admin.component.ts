import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Observable } from 'rxjs';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
    constructor() { }
    ngOnInit() {
    }
}