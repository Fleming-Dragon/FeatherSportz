import './App.css';

function Cards() {
  return (
    <div className="cards_container">
      <div className="cards">
        <div className="p1">
          <div className="imgp imgp1"></div>
          <h1 className='inHeading'>Kabbadi</h1>
          <div className='btmborder'></div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate dolor unde expedita obcaecati officiis atque minima doloribus repellendus aperiam.</p>
          <button className='btn'>Find Sports Facilities</button>
        </div>
        <div className="p2">
          <div className="imgp imgp2"></div>
          <h1 className='inHeading'>Cricket</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate dolor unde expedita obcaecati officiis atque minima doloribus repellendus aperiam.</p>
          <button className='btn'>Find Sports Facilities</button>
        </div>
        <div className="p3">
          <div className="imgp imgp3"></div>
          <h1 className='inHeading'>Basketball</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cupiditate dolor unde expedita obcaecati officiis atque minima doloribus repellendus aperiam.</p>
          <button className='btn'>Find Sports Facilities</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
