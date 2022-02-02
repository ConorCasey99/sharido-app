import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import "./FloatingActionButton"
import {add} from 'ionicons/icons'
const FloatingActionButton = () => {
  const history = useHistory();

  function handleOnClick() {
    history.push("CreateCommunity");
  }

  return (
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button>
        <ion-icon 
        icon={add} 
        onClick={handleOnClick}
        ></ion-icon>
      </ion-fab-button>
    </ion-fab>
  );
};

export default FloatingActionButton;
