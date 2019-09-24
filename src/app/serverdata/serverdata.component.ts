import { Component, OnInit } from '@angular/core';
import { LoginserverService} from '../loginserver.service';

@Component({
  selector: 'app-serverdata',
  templateUrl: './serverdata.component.html',
  styleUrls: ['./serverdata.component.css']
})
export class ServerdataComponent implements OnInit {

  private data: any;

  constructor( private lss: LoginserverService) { }

  showData() {
    this.lss.getData().subscribe(data => this.data);
    return this.data;
  }

  ngOnInit() {}

}
