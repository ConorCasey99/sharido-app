import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CommunityCategoriesList.module.scss"

import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonAvatar,
  IonPage,
  IonRouterLink,
  useIonActionSheet,
  IonButton,
  IonActionSheet,
  IonImg
} from "@ionic/react";


const CommunityCategoriesList = () => {








return (
  <ion-content>
    <ion-grid>
      <ion-row>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityCategories/Automotive`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Automotive</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Automotive Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityCategories/Music`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FMTAyNFgxMDI0%2Fz%2FgJ4AAOSwypNfj2m9%2F%24_86.JPG&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Music</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Music Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityCategories/Outdoors`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.familyvacationcritic.com%2Fuploads%2Fsites%2F19%2F2019%2F07%2Fcamping-tent-father-son.jpg%3Ffit%3D2560%252C1920%26ssl%3D1&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Outdoors</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Automotive Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityCategories/MobileTechnology`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F3.bp.blogspot.com%2F-k-0wTctixJI%2FXNsQyW7dvAI%2FAAAAAAAANbE%2FmXBSDDmZHXIyJDT1q6fa2tnfbB0ncPk7ACLcBGAs%2Fs1600%2FOnePlus-7-Pro-price.jpeg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Mobile Technology</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Mobile Technology!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityPage/`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwwwassets.rand.org%2Fcontent%2Frand%2Frandeurope%2Fresearch%2Fhealth%2Fmental-health-and-well-being%2Fjcr%3Acontent%2Fpar%2Fteaser.aspectfit.0x1200.jpg%2F1475759368747.jpg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Health and Fitness</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Health and Fitness
              Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityPage/`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.saynal.com%2Fwp-content%2Fuploads%2F2017%2F05%2Farts-and-crafts-table.jpg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title> Arts and Crafts</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Arts and Crafts
              Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityPage/`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.firstoption.group%2Fimages%2FLPRODMAIN_8175_Untitled_design.jpg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title> Film and Tv</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Film and Tv Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityPage/`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-image.myrecipes.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1486672645%2FGettyImages-75376542.jpg%3Fitok%3DqELJjGRW&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Cooking</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Cooking Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col>
          <ion-card>
            <Link to={`/page/CommunityPage/`}>
              <IonImg
                className={styles.communityCategoryPic}
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic2.srcdn.com%2Fwordpress%2Fwp-content%2Fuploads%2F2020%2F07%2F71Tllel5dDL.-AC-SL1500-.jpg&f=1&nofb=1"
              ></IonImg>
            </Link>
            <ion-card-header>
              <ion-card-title>Gaming</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              Find and learn about communities devoted to Gaming Interests!
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-content>
);
};
export default CommunityCategoriesList;