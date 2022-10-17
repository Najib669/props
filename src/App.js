import "./App.css";
import Fullname from "./profile/Fullname";
import Bio from "./profile/Bio.js";
import Profession from "./profile/Profession";
import sample from "./video/Drilluk.mp4";

function App() {
  return (
    <div className="App">
            <div className="vdo">
         <video className="videoTag" autoPlay loop muted>
        <source src={sample} type="video/mp4"/>
        </video>
      </div>

      <div className="perso">   
       <Bio pro="Najib (born October 24, 1994), is an Tunisian record producer, record executive, and DJ."></Bio>
       <br></br>
      <Fullname name="Najib Bohli"></Fullname>
      <br></br>
      <Profession job="Record producer, record executive, DJ"></Profession>
</div>
    </div>
  );
}

export default App;
