import react from "react";
import './communityCard.css'
import {
  IonCardContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent
} from "@ionic/react";

const CommunityCard = ({community}) => {
 return (
   <IonContent>
     <IonCard>
       <IonCardHeader>
         <IonCardSubtitle>{community.communityDescription}</IonCardSubtitle>
         <IonCardTitle>{community.communityTitle}</IonCardTitle>
       </IonCardHeader>
       <IonCardContent>
         Keep close to Nature's heart... and break clear away, once in awhile,
         and climb a mountain or spend a week in the woods. Wash your spirit
         clean.
       </IonCardContent>
     </IonCard>
   </IonContent>
 );
};

export default CommunityCard;