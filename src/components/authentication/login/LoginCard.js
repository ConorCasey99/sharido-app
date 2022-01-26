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
} from "@ionic/react";
import { useAuthentication } from "../../../contexts/authentication/AuthenticationContext";

const LoginCard = () => {

  const {login} = useAuthentication();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();

  async function handleLogin(e) {
    setLoading(true);

    if (passwordRef.current.value) {
      //passwordAlert();
    }
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      this.props.history.push("/page/Home");
    } catch {
      // setWarning("error");
    }
    setLoading(false);
  }













  return (
    <IonContent>
      <div className="registration-section ion-padding">
        <div class="heading ion-padding">
          <h1>Sharido</h1>
          <p>Welcome back!</p>
        </div>
        <div class="register-card ion-padding">
          <div class="form-input">
            <icon-icon name="md-mail"></icon-icon>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input
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
          <ion-button size="large" class="register-button" onClick = {handleLogin}>
            Login
          </ion-button>
          <p>Forgot your password?</p>
          <p>Dont have an account?</p>
          <ion-button
            class="login-button"
            size="large"
            fill="outline"
            routerLink="/page/Login"
            routerDirection="forward"
          >
            Register
          </ion-button>
        </div>
      </div>
    </IonContent>
  );
};

export default LoginCard;
