import React from "react";
import { useParams } from "react-router-dom";

function SingleProfile() {
  const { profileId } = useParams();
  return (
    <div>
      <h1>My Profile</h1>
      {profileId ? (
        <p>
          userName: <span className="font-weight-bold">{profileId}</span>
        </p>
      ) : null}
    </div>
  );
}

export default SingleProfile;
