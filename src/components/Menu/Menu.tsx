import './Menu.css';

const Menu = () => {

  type Burgers = {
    id: number,
    name: string,
    description: string,
  }

  const burgers: Burgers[] = [
    {
      id: 1,
      name: 'Bacony',
      description: 'Bułka Brioche, Podwójna Wołowina Black Angus, Podwójny Amerykański Ser, Grillowana Cebula, Bekon z Syropem Klonowym, Sałata Lodowa, Domowe Pikle, Specjalny Sos'
    },
    {
      id: 2,
      name: 'Original',
      description: 'Bułka Brioche, Podwójna Wołowina Black Angus, Potrójny Amerykański Ser, Domowe Pikle, Cebula Pokrojona w Kostkę, Ketchup & Musztarda'
    },
    {
      id: 3,
      name: 'Californy',
      description: 'Bułka Brioche, Podwójna Wołowina Black Angus, Podwójny Amerykański Ser, Pomidor, Sałata Lodowa, Cebula Pokrojona w Kostkę, Domowe Pikle, Specjalny Sos'
    },
    {
      id: 4,
      name: 'BBQ',
      description: 'Bułka Brioche, Podwójna Wołowina Black Angus, Podwójny Amerykański Ser, Bekon z Syropem Klonowym, Prażona Cebula, Sałata Lodowa, Pomidor, Sos BBQ & Aioli'
    },

]

  return (
    <div className='menu-container'>
      <div className="menu-burgers">
      <h1>Burgery</h1>
          {burgers.map((burger) => (
          <div key={burger.id} className='menu-burger'>
            <div className="burger-text">
              <h1>{burger.name}</h1>
              <p>{burger.description}</p>
            </div>
          </div>
          ))}
      </div>
    </div> 
  )
}

export default Menu;