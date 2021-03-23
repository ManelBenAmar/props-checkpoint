import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./profile/components/Profile";
import myWonderfulImage from "./profile/components/Smile.jpg";

function App() {
    const handleAlert = () => {
        alert("Manel Ben Amar React Props Checkpoint");
    };
    return (
        <div className="App">
            <header> </header>
            <br />
            <Profile
                fullName="Manel Ben Amar"
                bio=" Dental Medicine, IoT"
                profession="Web developer"
                handleAlert={handleAlert}
            >
                <img src={myWonderfulImage} alt="myImage" />
            </Profile>
            <br />
            <footer> </footer>
        </div>
    );
}

export default App;
