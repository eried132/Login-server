import { Component, OnInit } from '@angular/core';
import { LoginserverService} from '../loginserver.service';
import { AuthenticateService} from '../authenticate.service';
import {Router} from '@angular/router';
import { Person } from '../person';

@Component({
  selector: 'app-serverdata',
  templateUrl: './serverdata.component.html',
  styleUrls: ['./serverdata.component.css']
})
export class ServerdataComponent implements OnInit {

  person$: Person;

  constructor(private lss: LoginserverService,
              private authService: AuthenticateService,
              private router: Router) { }

  ngOnInit() {}

  showData() {
    this.lss.getData().subscribe(data => this.person$ = data);
    return JSON.stringify(this.person$);
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
