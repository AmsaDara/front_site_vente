import { Component, Input, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.css']
})
export class UserBadgeComponent implements OnInit {
  @Input() userInfo:any;
  constructor(private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }
  logout(){
    this.authenticateService.logout();
  }
}
