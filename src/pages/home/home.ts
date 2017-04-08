import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';

import { Photo } from "../photo";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(private camera: Camera) { }

  photos: Photo[] = [new Photo("http://placehold.it/350x150", 5), new Photo("http://placehold.it/350x151", 6)];

  takePhoto() {
    this.camera.getPicture({
      destinationType: this.camera.DestinationType.DATA_URL,
      targetHeight: 500,
      targetWidth: 500,
      correctOrientation: true
    }).then((imageData) => {
      this.photos.push(new Photo("data:image/jpeg;base64," + imageData, 0));
    }, (err) => {
      console.log(err);
    });
  }

  deletePhoto(photo) {
    this.photos.splice(this.photos.indexOf(photo), 1);
  }

  likePhoto(photo) {
    photo.likes++;
  }
}
