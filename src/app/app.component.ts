import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthenticateService } from './shared/user/authenticate.service';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'siteVtNgClone';
  currentUser?:any;
  subscription?:any;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map((result:any) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authenticationService: AuthenticateService) {}
    
    ngOnInit(): void {
      this.subscription = this.authenticationService.currentUser$.subscribe({
        next:(user)=>{
          this.currentUser=user
        }
      })
    }
    
    ngOnDestroy(): void {
      this.subscription.unsubscribe()
    }
    
    slides = [
      {'image': 'https://m.media-amazon.com/images/I/81ixL7Zgl7L._AC_SL1500_.jpg'},
      {'image': 'https://m.media-amazon.com/images/I/61dKY4wUqoL._AC_SL1000_.jpg'},
      {'image': 'https://m.media-amazon.com/images/I/81ixL7Zgl7L._AC_SL1500_.jpg'},
      {'image':  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeYj3Ine1RpuIYGf5bvhHZh8XE--FJkBkjtw&usqp=CAU'},
      {'image': 'https://m.media-amazon.com/images/I/81ixL7Zgl7L._AC_SL1500_.jpg'},
    ];
}
