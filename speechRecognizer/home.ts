import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

declare var SpeechRecognition: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  recognizedText: string;
  recognition: any;

  constructor(public navCtrl: NavController, public platform: Platform) {

  }

  startSpeechRecognition() {
    this.platform.ready().then(() => {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.onnomatch = (event => {
        console.log('No match found.');
      });
      this.recognition.onerror = (event => {
        console.log('Error happens.');
      });
      this.recognition.onresult = (event => {
        if (event.results.length > 0) {
          console.log('Output STT: ', event.results[0][0].transcript);
        }
      });
      this.recognition.start();
    });
  }

}
