import React, { useState } from "react";
import { IonAlert} from "@ionic/react";

const AlertComponent = () => {

  const [showAlert, setShowAlert] = useState(false);

    return (
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass="my-custom-class"
        header={"Alert"}
        subHeader={"Subtitle"}
        message={"Passwords do not match"}
        buttons={["OK"]}
      />
    );
};

export default AlertComponent;
