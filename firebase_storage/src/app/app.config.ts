import { NgModule, ApplicationConfig, importProvidersFrom } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth} from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
const firebaseConfig = {
  apiKey: "AIzaSyAzlb9ryx4bmUb8Zkds4KGbIFvaUfiRQlY",
  authDomain: "anand-test-af836.firebaseapp.com",
  projectId: "anand-test-af836",
  storageBucket: "anand-test-af836.appspot.com",
  messagingSenderId: "50841252077",
  appId: "1:50841252077:web:b5f8dbca97cfabe9185ce4",
  measurementId: "G-KH90GWNH5F"
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    importProvidersFrom([
      provideFirebaseApp(() => initializeApp(firebaseConfig)),
      provideStorage(() => getStorage()),
    ])
  ]
};
