import { IonPage, IonHeader } from "@ionic/react";
import React, { useState, useEffect} from "react";
import firestore from "../../../firebase";
import {
  query,
  collection,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { useCollection } from "react-query-firestore";
import { useParams } from "react-router";

const CommunityPage = () => {

  return (
    <h1> hi  </h1>
  )}

export default CommunityPage;

