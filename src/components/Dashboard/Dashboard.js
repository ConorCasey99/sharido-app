
import {
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  IonGrid,
} from "@ionic/react";

const Dashboard = () => {
  
  
    return (
      <IonPage>
        <IonContent id="bg-col">
          <IonGrid>
            <IonRow>
              <IonCol id="navBtnFixtures" size="6">
                <ion-router-link id="navLnk" href="/fixture/list">
                  Fixtures
                </ion-router-link>
              </IonCol>
              <IonCol id="navBtnResults" size="6">
                <ion-router-link id="navLnk" href="/result/list">
                  Results
                </ion-router-link>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol id="navBtnTeamSheets" size="12">
                <ion-router-link id="navLnk" href="/team-sheet/list">
                  Team Sheets
                </ion-router-link>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol id="navBtnTraining" size="6">
                <ion-router-link id="navLnk" href="/trainingschedule/list">
                  Training Schedules
                </ion-router-link>
              </IonCol>
              <IonCol id="navBtnWorkout" size="6">
                <ion-router-link id="navLnk" href="/workout/list">
                  Workout Routines
                </ion-router-link>
              </IonCol>
            </IonRow>

            <IonRow>
              <IonCol id="navBtnFtest" size="12">
                <ion-router-link id="navLnk" href="/fitness/test/list">
                  Fitness Tests
                </ion-router-link>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
};

export default Dashboard;
