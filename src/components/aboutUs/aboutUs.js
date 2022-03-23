import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AboutUs.module.scss";

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonRow,
  IonText,
} from "@ionic/react";

import {
  bookmarkOutline,
  imageOutline,
} from "ionicons/icons";

const AboutUs = () => {

 





















  return (
      <IonContent>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol
              size="12"
              className="ion-justify-content-center ion-align-items-center ion-text-center"
            >
              <IonCard className={styles.appHeader}>
                <IonCardContent>
                  <IonRow>
                    <IonCol size="4">
                      <img
                        src="/assets/images/logo.png"
                        alt="avatar"
                        className={styles.appIcon}
                      />
                    </IonCol>
                    <IonCol size="8">
                      <IonRow className={styles.appInfo}>
                        <IonCol size="12">
                          <IonText color="dark" className={styles.appName}>
                            <h1>Sharido</h1>
                          </IonText>
                          <IonText color="medium">
                            <h2>About Us</h2>
                          </IonText>
                        </IonCol>
                      </IonRow>
                      <IonRow className={styles.appStats}>
                      </IonRow>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="6">
              <IonCard className={styles.appCard}>
                <IonCardContent>
                  <IonIcon icon={imageOutline} />
                  <IonCardTitle>23</IonCardTitle>
                  <IonCardSubtitle>Users</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6">
              <IonCard className={styles.appCard}>
                <IonCardContent>
                  <IonIcon icon={bookmarkOutline} />
                  <IonCardTitle>2</IonCardTitle>
                  <IonCardSubtitle>Communities</IonCardSubtitle>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
  );
};

export default AboutUs;
