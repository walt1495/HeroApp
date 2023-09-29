import {Link} from 'react-router-dom'

const HeroScreen = ({ hero, tipo, deleteHero }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-sm-4">
          <img
            src={`../../public/images/${hero.id}.jpg`}
            className="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div className="col-sm-8">
          <div className="card-body">
            <h5 className="card-title">{hero.superhero}</h5>
            <p className="card-text">
              <b>Nombre:</b>
              {hero.characters}
            </p>
            <p className="card-text">
              <b>Alter Ego:</b>
              {hero.alter_ego}
            </p>
            <p className="card-text">
              <b>Primera Aparición:</b>
              {hero.first_appearance}
            </p>
            <p className="card-text">
              <small className="text-body-secondary">{hero.publisher}</small>
            </p>
            {tipo == 1 && (
              <p className="card-text">
                <Link to={`/hero/update/${hero.id}`} className="btn btn-primary me-3">
                  Editar
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteHero(hero.id)}
                >
                  Eliminar
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroScreen
