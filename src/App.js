import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <div className="card">
        <img className="hero-img" src="images/illustration-hero.svg" />
        <div class="contain">
          <h1>Order Summary</h1>
          <p className="des">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="row">
            <div class="title">
              <img src="images/icon-music.svg" />
              <div class="price">
                <h2>Annual Plan</h2>
                <p>$59.99/year</p>
              </div>
            </div>

            <a href="#">Change</a>
          </div>

          <div className="footer">
            <button>Proceed to Payment</button>
            <a href="">Cancel Order</a>
          </div>
        </div>
      </div>
    </div>
  );
}
