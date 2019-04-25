import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser'

@IonicPage()
@Component({
  selector: 'page-trailers',
  templateUrl: 'trailers.html',
})

//getting videos 
//I relaced the links with "embed/" to ensure they show and play on the app
export class TrailersPage {
vid = 'https://www.youtube.com/embed/6dSKUoV0SNI'
vid2 = 'https://www.youtube.com/embed/j3JqL4o2P-I'
vid3 = 'https://www.youtube.com/embed/7TavVZMewpY'
vid4 = 'https://www.youtube.com/embed/bILE5BEyhdo'
vid5 = 'https://www.youtube.com/embed/nSbzyEJ8X9E'
vid6 = 'https://www.youtube.com/embed/WDkg3h8PCVU'
vid7 = 'https://www.youtube.com/embed/ek1ePFp-nBI'
vid8 = 'https://www.youtube.com/embed/lcwmDAYt22k'
vid9 = 'https://www.youtube.com/embed/xLCn88bfW1o'
vid10 = 'https://www.youtube.com/embed/MPWMBITCudM'
  
//constructor
constructor(public navCtrl: NavController, public navParams: NavParams, private dom: DomSanitizer) {

}

ionViewDidLoad() {
  console.log('ionViewDidLoad TrailersPage');
}

santinize(vid){
  return this.dom.bypassSecurityTrustResourceUrl(vid);
  }
}
