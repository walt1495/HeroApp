import { useState } from "react";

const CreateScreen = () => {
  const initialForm = {
    id: "",
    superhero: "",
    publisher: "",
    alter_ego: "",
    first_appearance: "",
    characters: "",
  };
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let conf = window.confirm('¿Seguro de agregar un nuevo super héroe?');
    if(!conf) return;
    let url = `http://localhost:5000/heros`;
    let api = await fetch(url, {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await api.json();
    console.log(data);
    setForm(initialForm);
  }
  
  return (
    <>
      <h2 className="mt-5">Crear Super Héroe</h2>
      <form className="row my-3 mx-auto " onSubmit={handleSubmit}>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">Id:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="id"
              value={form.id}
              onChange={handleChange}
              className="form-control"
              autoFocus
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">SuperHero:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="superhero"
              value={form.superhero}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">Publisher:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="publisher"
              value={form.publisher}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">Alter Ego:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="alter_ego"
              value={form.alter_ego}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">First Appearance:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="first_appearance"
              value={form.first_appearance}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>
        <div className="mb-3 row">
          <label className="form-label col-sm-4">Characters:</label>
          <div className="col-sm-8">
            <input
              type="text"
              name="characters"
              value={form.characters}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-12">
            <input
              type="submit"
              className="btn btn-primary"
            />
          </div>
        </div>
      </form>
    </>
  );
}

export default CreateScreen
