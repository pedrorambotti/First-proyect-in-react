import React, { useState, useEffect } from "react";

const initailForm = {
  name: "",
  beach: "",
  id: "null",
};

const CrudForm = () => {
  const [form, setForm] = useState(initailForm);

  const handleChange = (e) => {};

  const handleSubmit = (e) => {};

  const handleReset = (e) => {};

  return (
    <div>
      <h3> Aqui podras encontrar a tu mejor surfista y su playa</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="beach"
          placeholder="Beach"
          onChange={handleChange}
          value={form.beach}
        />
        <input type="submit" value="Enviar" />
        <input type="reset" value="Limpiar" onClick={handleReset} />
      </form>
    </div>
  );
};
export default CrudForm;
