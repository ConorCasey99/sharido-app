import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "../../firebase";
import { useParams } from "react-router";

const PostPageComponent = () => {
  const postsCollectionRef = collection(db, "posts");
  let postIdParam = useParams().id;
  const [post, setPost] = useState([]);

  useEffect(() => {
    const queryPost = async () => {
      const postQuery = query(
        postsCollectionRef,
        where("postId", "==", postIdParam)
      );
      const postsQuerySnap = await getDocs(postQuery);
      setPost(
        postsQuerySnap.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    };
    queryPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="communityCards" className="communitiesPage">
      {post.map((post) => {
        return (
          <ion-card class="postcard" key={post.id}>
            <img key={post.id} src={post?.postPicture} alt="ion"></img>
            <ion-card-header>
              <ion-card-title>{post.postTitle}</ion-card-title>
            </ion-card-header>
            <ion-footer>
              <ion-row>
                <ion-col center text-center></ion-col>
              </ion-row>
            </ion-footer>
          </ion-card>
        );
      })}
    </div>
  );
};

export default PostPageComponent;
