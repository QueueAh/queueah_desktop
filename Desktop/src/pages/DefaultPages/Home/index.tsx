import "./Home.css";
import LogoImage from "Logos/Logo3.jpg";
import LogoImageTwo from "Logos/Logo4.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Tired of being a queuer? use Queue Ah!</h1>
      <h3>A Quick QR code scanner for event organizers</h3>
      <div className="site-grid-system">
        <div className="site-col-6">
          <img src={LogoImage} alt="logo" className="site-res-image" />
        </div>
        <div className="site-col-6">
          <img
            src={LogoImageTwo}
            alt="second_logo"
            className="site-res-image"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
