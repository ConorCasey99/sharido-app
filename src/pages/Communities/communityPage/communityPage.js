import { IonPage, IonHeader } from "@ionic/react";
import React, { useState, useEffect} from "react";
import firestore from "../../../firebase";
import { Link } from "react-router-dom";

import {
   getDocs, deleteDoc, doc,
  query,
  collection,
  where,
  limit,
  QuerySnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../../firebase";
import { useFirestoreQuery } from "@react-query-firebase/firestore";
import { useCollection } from "react-query-firestore";
import { useParams } from "react-router";


const CommunityPage = (id) => {
   const [postList, setPostsList] = useState([]);
   const postsCollectionRef = collection(db, "posts");
   const community = id;

 useEffect(() => {
  const getCommunities = async () => {
    const post = await getDocs(postsCollectionRef);
    setPostsList(
      post.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
  };
  getCommunities();
 }, [])

 console.log(id)

  return (
        <div id="postCards" className="postPage">
          {postList.map((post) => {
            return (
              <h1>{post.postTitle}</h1>

           );
       })}
 </div>
  );
  
};

export default CommunityPage;

