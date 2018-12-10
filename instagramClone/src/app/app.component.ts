import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  ngOnInit(): void {
    const config = {
      apiKey: 'AIzaSyCMRacFVsMJArAmFSW2YV51rIuS6HiSPWw',
      authDomain: 'jta-instagram-clone-461f6.firebaseapp.com',
      databaseURL: 'https://jta-instagram-clone-461f6.firebaseio.com',
      projectId: 'jta-instagram-clone-461f6',
      storageBucket: 'jta-instagram-clone-461f6.appspot.com',
      messagingSenderId: '477505203392'
    };
    firebase.initializeApp(config);
  }

}
