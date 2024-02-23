import { Component,ChangeDetectorRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initializeApp,getApp } from "firebase/app";
// import { getStorage, ref,uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { Storage, getStorage, ref,uploadBytesResumable, getDownloadURL,listAll } from "@angular/fire/storage";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
// const storage = getStorage();
// const storageRef = ref(storage);
const metadata = {
  contentType: 'image/jpeg'
};
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'firebase';
  public file: any = {}
  public uploadPercent: any = null;
  public downloadURL: any = null; 
  public uploadPrecentText:string=''; 
  public testText:string='hi';
  public fileName:string=''; 
  public fileType:any= null;
  uploadPercent$ = new BehaviorSubject<number | null>(null);
  downloadURL$ = new BehaviorSubject<string | null>(null); 
  constructor(
    public storage: Storage,
    private changeDetectorRef: ChangeDetectorRef
  ){}
  chooseFile(event: any){
    console.log(event);
    this.file = event.target.files[0];
    console.log(this.file);
    this.downloadURL$.next(null);
    this.uploadPercent$.next(null);
  }
  
  showUploadedImage(downloadURL:any){
    this.downloadURL$ = downloadURL;
    console.log(downloadURL);
  }
  
  ngOnInit() {
    this.downloadURL$.next(null);
    this.uploadPercent$.next(null);
    this.changeDetectorRef.detectChanges();
  }
  async addData(){
    if (!this.file) {
      return; // Handle no file selected
    }
    if(this.file.size > (1024 * 1024 * 10)){
      alert('File too large: ' + Math.round(this.file.size/(1024 * 1024)) + 'MB,  Maximum size is 10MB');
      return;
    }
    const fileType = this.file.type.split('/')[0];
      if (fileType !== 'image' && fileType !== 'video') {
        alert( 'Please upload image or video file.');
        return;
      }
    this.fileType = fileType;
    const storageRef = ref(this.storage , 'images/'+this.file.name);
    console.log(this.file.name);
    // return true;
    const uploadTask = uploadBytesResumable(storageRef, this.file);
    for (let i = 0; i < 100; i++) {
      window.setTimeout(() => (this.uploadPercent += 1), i * 100);
    }
    for (let i = 0; i < 1000; i++) {
      window.setTimeout(() => (this.downloadURL = ''), i * 100);
    }
    uploadTask.on('state_changed',
        (snapshot) => {
          
          let self = this;
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded 
          let progress = this.uploadPercent = ((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          self.uploadPercent = progress = Math.ceil(progress);
          // while (progress < 100) {  
          //   setTimeout(() => {
          //     //change amount data after 1 second 
          //     this.uploadPercent$.next(progress);          
          //   }, 1000);
          // };
          
          this.uploadPercent$.next(progress); 
          // this.uploadPercent$.next(progress);
          Promise.all([progress]).then(values => {
            console.log("This should not run until both have returned", values);
            this.uploadPercent$.next(progress);
          });
            
          
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break;
            case 'storage/canceled':
              // User canceled the upload
              break;

            // ...

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        }, 
        () => {
          
          let self = this;
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            // this.downloadURL$.next(downloadURL);
            // this.showUploadedImage(downloadURL);
            const imageUrl = downloadURL;
            self.downloadURL = imageUrl;
            Promise.all([imageUrl]).then(values => {
              console.log("This should not run until both have returned", values);
              this.downloadURL$.next(imageUrl);
            });
            // (<HTMLInputElement>document.getElementById("fileInput")).value = '';
            // this.downloadURL = downloadURL;
            console.log('File available at', downloadURL);
          });
        }
      );

  }
}
