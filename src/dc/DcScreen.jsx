import { useEffect, useState } from "react"
import HeroScreen from "../components/HeroScreen";

const DcScreen = () => {
  
  const [heros, setHeros] = useState([]);
  const [countDeleted, setCountDeletes] = useState(0);
  let url = "http://localhost:5000/heros";

  useEffect(() => {
    async function obtenerData() {
      url += `?publisher_like=DC Comics`;
      let api = await fetch(url);
      let data = await api.json();
      setHeros(data);
    }

    obtenerData();
  }, [countDeleted]);

  const deleteHero = async (id) => {
    let res = window.confirm('¿Estas seguro de elimiar este héroe?');
    if(!res) return;
    url += `/${id}`;
    let api = await fetch(url,{
      method:'DELETE',
      headers:{
        'content-type':'application/json'
      }
    });
    let data = await api.json();
    setCountDeletes(countDeleted + 1);

  }
  

  return (
    <>
      <h1>DC Comics</h1>
      {heros.length > 0 ? (
        <div className="row">
          {heros.map((hero) => (
            <div className="col-6" key={hero.id}>
              <HeroScreen hero={hero} tipo="1" deleteHero={deleteHero} />
            </div>
          ))}
        </div>
      ) : (
        <p>No existen Heroes en DC Comics</p>
      )}
    </>
  );
}

export default DcScreen
