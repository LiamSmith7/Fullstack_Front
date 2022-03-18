import { useState } from "react";
import Settings from "./settings";
import PhotoContainer from "./photo";

const Home = ({ logout }) => {
    const [photos, setPhotos] = useState([]);
    const [viewSettings, setSettings] = useState(false);

    const fetchPhotos = async () => {
        try {
            const response = await fetch("https://picsum.photos/v2/list");
            const data = await response.json();
            setPhotos(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        viewSettings ? <Settings backFunction={setSettings} logoutFunction={logout}/> :
        <div>
            <button onClick={fetchPhotos}>Grab photos</button>
            <button onClick={() => setSettings(true)}>Settings</button>
            <button onClick={logout}>Logout</button>
            <div>
                {photos.map((item, index) => (
                    <PhotoContainer photo={item} key={"img" + index}/>
                ))}
            </div>
        </div>
        
    );
};

export default Home;