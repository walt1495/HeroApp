import { useParams } from "react-router-dom"
import {useState,useEffect} from 'react'
import HeroScreen from "./HeroScreen";

const SearchScreen = () => {
  console.log('inicia componente');
  const {hero=''} = useParams();
  const [initsearch, setInitSearch] = useState(false);
  const [search, setSearch] = useState('');
  const [herosSearch, setHerosSearch] = useState([]);

  const searchHero = async () => {
    let url = `http://localhost:5000/heros?superhero_like=${search}`;
    let api = await fetch(url);
    let data = await api.json();
    console.log(data);
    setHerosSearch(data);
  }

  useEffect(() => {
    if(hero!=''){
      setSearch(hero);
      setInitSearch(true);
    }
  }, [])
  

  useEffect(() => {
    if (initsearch){
      searchHero();
    }
  }, [initsearch]);
  

  const handleChange = (e) => {
    setInitSearch(false);
    setSearch(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(search!=''){
      setInitSearch(true);
    }
  }

  return (
    <>
      <h1>Search Hero</h1>
      <div className="row">
        <div className="col-4">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={handleChange}
            />
            <input type="submit" value="Search" />
          </form>
        </div>
        <div className="col-8">
          <h3>Resultado Busqueda</h3>
          {herosSearch.length>0 ? (
            herosSearch.map((hero) => {
              console.log('herosearch');
              return <HeroScreen key={hero.id} hero={hero} />

            })
          ) : (
            initsearch && <p>No se encontro la información</p>
          )}
        </div>
      </div>
    </>
  );
}

export default SearchScreen
