import './MainContainer.css';

const MainContainer = () => {
  return (
    <>
      <div className="main-container">
        <div className="main-texts">
          <h1>
            Twoje ulubione <br /> Smash <br /> Burgery
          </h1>
          <h3>Zrobione ręcznie, z przyjemnością.</h3>
        </div>
        <div className="main-images">
          <img src='/src/components/images/burger.webp' alt="burger" />
          <img src='/src/components/images/burger1.jpg' alt="burger" />
        </div>
      </div>

      <div className="about-container">
        <h1>O NAS</h1>
        <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi optio minus quibusdam laudantium nemo 
        suscipit rem provident ut reiciendis a. Cum, magni nostrum mollitia id exercitationem culpa enim 
        cupiditate repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Placeat, id. Dolor, ipsa? Praesentium aut quasi fugiat? Quia, optio impedit obcaecati minima 
        nam consequuntur expedita praesentium dignissimos doloremque eos minus doloribus!
        </h3>
      </div>

      <div className="menu-image">
        <h2>TO ROBIMY NAJLEPIEJ</h2>
        <img src="/src/components/images/menu.webp" alt="menu-image" />
      </div>

      <div className="ingredients-section">
        <h1>Bez kompromisów <br /> w kwestii jakości</h1>
        
        <div className="ingredient">
          <img src="/src/components/images/meat.webp" alt="mięso" />
          <div className="ingredient-text">
            <h2>MIĘSO</h2>
            <p>Używamy mieszanki wołowiny Black Angus, która ma odpowiednią równowagę chudego mięsa i tłuszczu...</p>
          </div>
        </div>

        <div className="ingredient">
          <img src="/src/components/images/bakery.webp" alt="pieczywo" />
          <div className="ingredient-text">
            <h2>PIECZYWO</h2>
            <p>Nasze świeże bułki brioche są dostarczane z lokalnej piekarni każdego ranka...</p>
          </div>
        </div>

        <div className="ingredient">
          <img src="/src/components/images/cucumbers.webp" alt="ogórki" />
          <div className="ingredient-text">
            <h2>OGÓRKI</h2>
            <p>Nasze kiszone ogórki przygotowujemy według tradycyjnej receptury...</p>
          </div>
        </div>

        <div className="ingredient">
          <img src="/src/components/images/sauce.webp" alt="sos" />
          <div className="ingredient-text">
            <h2>SOS</h2>
            <p>Wszystkie sosy przygotowujemy sami, bez sztucznych dodatków...</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContainer;
