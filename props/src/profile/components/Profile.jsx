import React from "react";
import propTypes from "prop-types";
import "./Profile.css";
import Button from "react-bootstrap/Button";
function Profile(props) {
    return (
        <div className="profile">
            <h2>{props.fullName}</h2>
            <h4>{props.bio}</h4>
            <h4>{props.profession}</h4>
            {props.children}
            <br />
            <Button onClick={props.handleAlert}>Click</Button>
        </div>
    );
}
Profile.defaultProps = {
    fullName: "full name",
    bio: "bio",
    profession: "profession",
    handleAlert: "alert",
};

Profile.propTypes = {
    fullName: propTypes.string,
    bio: propTypes.string,
    profession: propTypes.string,
    handleAlert: propTypes.func,
};

export default Profile;
