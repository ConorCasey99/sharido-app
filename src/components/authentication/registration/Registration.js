import React, {useState, useRef} from 'react';
import PageHeader from '../../pageHeader/pageHeader';
import "./RegistrationCard.css";
import { useAuthentication } from '../../../contexts/authentication/AuthenticationContext';
import { useLocation, useHistory } from "react-router-dom";
import AlertComponent from '../../alertComponent/alertComponent';
import app from "../../../firebase"

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
  IonList,
  IonAlert,
  alertController
} from "@ionic/react";

import { EmailAuthCredential, auth } from 'firebase/auth';
import { toastController } from '@ionic/core';
import { addDoc, collection } from 'firebase/firestore';
import { db } from "../../../firebase";
import { storage, uuid } from "../../../firebase";


const Registration = () => {

  const {registerUser} = useAuthentication();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const checkPasswordRef = useRef();
  const usernameRef = useRef();
  const [userId, setUserId] = useState();
  const { currentUser } = useAuthentication();
  const [image, setImage] = useState(null);
  const [pictureUrl, setPictureUrl] = useState("");

  //const [warning, setWarning] = useRef();
  const history = useHistory()

  async function handleRegister(e) {
    if (passwordRef.current.value !== checkPasswordRef.current.value) {
      passwordAlert();
    }
    try {
      await registerUser(emailRef.current.value, passwordRef.current.value);
      setUserId(currentUser?.uid)
      addUserDetails(emailRef, usernameRef, userId, pictureUrl);
      history.push("/page/Login");
    } catch {
     console.log(e)
    }
    setLoading(false);
  }

  async function addUserDetails () {
      const usersCollectionRef = collection(db, "users");
     await addDoc(usersCollectionRef, {
        userEmail: emailRef.current.value,
        userName: usernameRef.current.value,
        userId: userId,
        userPicture: pictureUrl,
      });
  }

  async function passwordAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "";
    alert.message = "Passwords do not match!";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

    const handleChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };

     const handleUploadPicture = () => {
       const uploadTask = storage.ref(`images/${image.name}`).put(image);
       uploadTask.on(
         "state change",
         (snapshot) => {},
         (error) => {
           console.log(error);
         },
         () => {
           storage
             .ref("images")
             .child(image.name)
             .getDownloadURL()
             .then((url) => {
               setPictureUrl(url);
             });
         }
       );
     };

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
              <ion-input
                type="text"
                id="username"
                ref={usernameRef}
              ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" id="email" ref={emailRef}></ion-input>
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
              <ion-input type="password" ref={checkPasswordRef}></ion-input>
            </ion-item>
          </div>
        </div>
        Upload Profile Picture<br></br>
        <input type="file" onChange={handleChange}></input>
        <div class="action-button ion-padding">
          <ion-button
            size="large"
            class="register-button"
            onClick={handleUploadPicture}
            disabled={loading}
          >
            Upload Profile Pic
          </ion-button>
          <ion-button
            disabled={loading}
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
