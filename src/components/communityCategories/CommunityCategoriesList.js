import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ebayimg.com%2F00%2Fs%2FMTAyNFgxMDI0%2Fz%2FgJ4AAOSwypNfj2m9%2F%24_86.JPG&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fwww.familyvacationcritic.com%2Fuploads%2Fsites%2F19%2F2019%2F07%2Fcamping-tent-father-son.jpg%3Ffit%3D2560%252C1920%26ssl%3D1&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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
              <IonImg src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.conceptcarcredit.co.uk%2Fwp-content%2Fuploads%2F2021%2F04%2FCheapest-cars-uk-world.jpg&f=1&nofb=1"></IonImg>
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