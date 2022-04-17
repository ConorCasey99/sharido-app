import { Link } from "react-router-dom";
import styles from "./CommunityCategoriesList.module.scss"

import {
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
              src="assets\images\carCategory.png"
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
              src="assets\images\musicCategory.png"
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
              src="assets\images\cookingCategory.png"
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
              src="assets\images\mobileTechnologyCategory.png"
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
              src="assets\images\gamingCategory.png"
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
              src="assets\images\outdoorsCategory.png"
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
              src="assets\images\healthAndFitnessCategory.png"
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
              src="assets\images\artsAndCraftsCategory.png"
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