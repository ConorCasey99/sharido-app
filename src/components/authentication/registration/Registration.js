import React, {useState, useRef} from 'react';
import PageHeader from '../../pageHeader/pageHeader';
import "./RegistrationCard.css";
import { useAuthentication } from '../../../contexts/authentication/AuthenticationContext';

import {
  IonCard,
  IonInput,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonCardContent,
  IonList
 
} from "@ionic/react";
import { EmailAuthCredential } from 'firebase/auth';
import { toastController } from '@ionic/core';

const Registration = () => {

  const {registerUser } = useAuthentication();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleRegister() {
    await registerUser(emailRef.current.value, passwordRef.current.value);
  }
  
  



  













  
  return (
    <IonContent>
      <div className="registration-section ion-padding">
        <div class="heading ion-padding">
          <h1>Sharido</h1>
          <p>Register Your Account!</p>
        </div>
        <div class="register-card ion-padding">
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Username</ion-label>
              <ion-input type="text"></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
                type="email"
                id="email"
                ref={emailRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input
                type="password"
                id="password"
                ref={passwordRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Repeat Password</ion-label>
              <ion-input type="password"></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="action-button ion-padding">
          <ion-button
            size="large"
            class="register-button"
            onClick={handleRegister}
          >
            Register
          </ion-button>
          <p>Already have an account?</p>
          <ion-button
            class="login-button"
            size="large"
            fill="outline"
            routerLink="/page/Login"
            routerDirection="forward"
          >
            Login
          </ion-button>
        </div>
      </div>
    </IonContent>
  );
};

export default Registration;
