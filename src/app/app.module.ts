import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TrailersPage } from '../pages/trailers/trailers';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http';
import { MovieProvider } from '../providers/provider/provider';
import { FormsModule } from '@angular/forms';
import { IonicStorageModule } from '@ionic/storage';
//import { VideoPlayer } from '@ionic-native/video-player';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrailersPage,
    ],

  //everything you are importing
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    FormsModule,
    IonicStorageModule.forRoot(),
  ],

  //page navigation
  //every page must be listed here
  bootstrap: [IonicApp],
    entryComponents: [
    MyApp,
    HomePage,
    TrailersPage
  ],
  
  //providers list
  providers: [
    StatusBar,
    //SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider
   /* VideoPlayer */   ],
})
export class AppModule {}
