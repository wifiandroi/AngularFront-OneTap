import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgOneTapService } from 'ng-google-one-tap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private onetap: NgOneTapService
  ) { }

  ngOnInit(): void {
    this.loadLogin();
  }
  loadLogin(): void{
    this.onetap.tapInitialize(); //Initialize OneTap, At intial time you can pass config  like this.onetap.tapInitialize(conif) here config is optional.
        this.onetap.promtMoment.subscribe(res => {  // Subscribe the Tap Moment. following response options all have self explanatory. If you want more info pls refer official document below attached link.
           res.getDismissedReason(); 
           res.getMomentType();
           res.getNotDisplayedReason();
           res.getSkippedReason();
           res.isDismissedMoment();
           res.isDisplayed();
           res.isNotDisplayed();
           res.isSkippedMoment();
        });
        this.onetap.oneTapCredentialResponse.subscribe(res => { // After continue with one tap JWT credentials response.
          // console.log(res);
           console.log(res.credential);
          this.router.navigate(['/hello']);
      });
  }

}
