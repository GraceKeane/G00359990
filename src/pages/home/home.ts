import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {MovieProvider} from '../../providers/provider/provider';
import { TrailersPage } from '../trailers/trailers';
//import { VideoOptions} from '@ionic-native/video-player';
import { Storage } from '@ionic/storage';
//import { VideoPlayer } from '@ionic-native/video-player';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //variables
  movies:any = [];
  name : string;
  //videoUrl: string;
  //videoOptions: VideoOptions;
  myVariable;
  inputText: string;
  key:string = 'feedback';

  //constructors
  constructor(/*private videoPlayer: VideoPlayer,*/ public navCtrl: NavController,
  private movieProvider:MovieProvider,
  private storage: Storage) {
  }

  //searching for a movie
  search(){
    this.movieProvider.getFilmInfo(this.name).subscribe((data)=>{
      this.movies = data.Search;
  });
  }

  //method for enabling home page to go onto trailer page
  //using navCtrl
  openTrailersPage(){
    console.log("Trailer page");
    this.navCtrl.push(TrailersPage);
  }

  //used with data storage
  //when submit feedback button is clicked the data is then stores in local storage
  submitFeedback(){
    this.storage.set(this.key, this.inputText);
  }

  //used with data storage
   //when load feedback button is clicked the data is then loaded in web console
  loadFeedback(){
    // Or to get a key/value pair
    this.storage.get(this.key).then((val) => {
    console.log('Your feedback is', val);
    });
  }

  //video player plugin attempt
/*
  stopVideo(){

      this.videoPlayer.close()
      console.log("The video was paused")
  }
  async playVideo(){
   
    try{
        this.videoOptions = { 
        volume: 0.7
      }

      this.videoUrl = "https://www.youtube.com/watch?v=PcL24s-S6ns"
     
        setTimeout(() =>{
        this.stopVideo()
     }, 3000);
      
      await this.videoPlayer.play(this.videoUrl, this.videoOptions)
      console.log("Video has completed.")
    }
    catch(e){
      console.error(e);
    }
  }*/
}
