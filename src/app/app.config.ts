import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ "projectId": "password-manager-77211", "appId": "1:857917236283:web:14d0b533c63219d2fba81e", "storageBucket": "password-manager-77211.firebasestorage.app", "apiKey": "AIzaSyBLDKj2SDcKbCOEhxaHesjVgOvcFBRgbsE", "authDomain": "password-manager-77211.firebaseapp.com", "messagingSenderId": "857917236283" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),]
};