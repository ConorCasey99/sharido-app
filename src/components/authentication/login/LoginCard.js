import React ,{useState, useRef} from "react";
import PageHeader from "../../pageHeader/pageHeader";
import "./LoginCard.css";

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
  IonRouterLink,
} from "@ionic/react";
import { useAuthentication } from "../../../contexts/authentication/AuthenticationContext";
import { useHistory } from "react-router";

const LoginCard = () => {

  const {login} = useAuthentication();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const history = useHistory();

  async function handleLogin(e) {
        e.preventDefault();
  try {
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/page/Home");
    } catch {
      loginAlert();
    }
    setLoading(false);
  }

  async function loginAlert() {
    const alert = document.createElement("ion-alert");
    alert.cssClass = "my-custom-class";
    alert.header = "Alert";
    alert.subHeader = "Incorrect email or password";
    alert.buttons = ["OK"];

    document.body.appendChild(alert);
    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log("onDidDismiss resolved with role", role);
  }

  return (
    <IonContent>
      <div className="registration-section ion-padding">
        <div class="heading ion-padding">
          <h1>Log In</h1>
          <p>Welcome back!</p>
        </div>
        <div class="register-card ion-padding">
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
               id="email"
               ref = {emailRef}
               type="email"
               ></ion-input>
            </ion-item>
          </div>
          <div class="form-input">
            <icon-icon name="md-eye-off"></icon-icon>
            <ion-item>
              <ion-label position="floating">Password</ion-label>
              <ion-input
               ref = {passwordRef}
               type="password"
               ></ion-input>
            </ion-item>
          </div>
        </div>
        <div class="action-button ion-padding">
          <ion-button
           size="large"
           class="register-button"
           onClick = {handleLogin}
           disabled={loading}>
            Login
          </ion-button>
          <p>Forgot your password?</p>
          <div>Dont have an account?</div>
        </div>
      </div>
    </IonContent>
  );
};

export default LoginCard;
