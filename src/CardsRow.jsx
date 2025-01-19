
import './CardsRow.css'; 

function CardsRow() {
  return (
    <div className="container mt-5 cards-container">
      <div className="card">
        <img src="images/searching.png" alt="Find" />
        <div className="card-body">
          <h3 className="card-title">Find</h3>
          <p className="card-text">
            Are you looking to play after work, organize your team, or challenge friends on the court? Explore a wide range of sports facilities and book your next game.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img src="images/calendar.svg" alt="Book" />
        <div className="card-body">
          <h3 className="card-title">Book</h3>
          <p className="card-text">
            Once you have found the perfect sports facility, book your game in just a few clicks. You can also invite friends to join you and share the cost.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>

      <div className="card">
        <img src="images/balls-sports.png" alt="Play" />
        <div className="card-body">
          <h3 className="card-title">Play</h3>
          <p className="card-text">
            You&apos;re the hero - after finding the perfect sport, it&apos;s time to play. Enjoy your game and have fun with your friends. Pain fades, but the memories last forever.
          </p>
          <button className="card-button">Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default CardsRow;
