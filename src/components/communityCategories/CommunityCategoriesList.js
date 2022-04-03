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
  <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Automotive`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fassoluto%2Fimages%2F1%2F13%2FMazda_Efini_RX-7.png%2Frevision%2Flatest%3Fcb%3D20170316143802&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Automotive</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Automotive Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Music`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmegamusic.blob.core.windows.net%2Fimages%2F0027238_ibanez-sr370e-nnb-bass-guitar-natural-browned-burst.png&f=1&nofb=1"
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
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Cooking`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd2ily9edavk8z4.cloudfront.net%2Fuploads%2Fproducts%2Fchimichurri-steak%2Fchimi%2520steak%2520stagedo5%2520copy.png&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Cooking</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Cooking Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/MobileTechnology`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.teamandroid.com%2Fwp-content%2Fuploads%2F2019%2F05%2FOnePlus-7-TA-1.png&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Mobile Technology</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Mobile Technology!
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Gaming`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0505%2F4414%2F8654%2Fproducts%2FCopyofCopyofCopyofBlueandPinkControllerGamingIn-StreamAd.png%3Fv%3D1609025920&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Gaming</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Gaming Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Outdoors`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fa9%2F03%2F02%2Fa903020f1e253b1bbe4dece21f642c06.png&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Outdoors</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find and learn about communities devoted to outdoor Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/HealthandFitness`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffreepngimg.com%2Fthumb%2Fgym_equipments%2F49535-1-barbell-picture-free-transparent-image-hd.png&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Health and Fitness</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Health Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/ArtsandCrafts`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-9dyf5%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F5774%2F24504%2F_DSC9843__91300.1603351712.PNG%3Fc%3D2&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Arts and Crafts</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Artistic Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/Music`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fshop3383.hstatic.dk%2Fupload_dir%2Fshop%2FPJ-175TheViennaPhilharmonicRecordplayer_BrightViolin_CutOut-1.png&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Music</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Music Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
      <ion-col>
        <ion-card>
          <Link to={`/page/CommunityCategories/ArtsandCrafts`}>
            <IonImg
              className={styles.communityCategoryPic}
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-9dyf5%2Fimages%2Fstencil%2F1280x1280%2Fproducts%2F5774%2F24504%2F_DSC9843__91300.1603351712.PNG%3Fc%3D2&f=1&nofb=1"
            ></IonImg>
          </Link>
          <ion-card-header>
            <ion-card-title>Arts and Crafts</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            Find communities devoted to Artistic Interests!
          </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
);
};
export default CommunityCategoriesList;