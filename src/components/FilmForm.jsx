import { useState } from 'react';

const FilmForm = ({ initialFilm, onSave, onClose }) => {
  const [film, setFilm] = useState(initialFilm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(film);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Nama Film
        </label>
        <input
          name="name"
          value={film.name}
          onChange={handleChange}
          placeholder="Nama Film"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="year">
          Tahun
        </label>
        <input
          name="year"
          value={film.year}
          onChange={handleChange}
          placeholder="Tahun"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
          URL Gambar
        </label>
        <input
          name="image"
          value={film.image}
          onChange={handleChange}
          placeholder="URL Gambar Film"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="durasi">
          Durasi
        </label>
        <input
          name="durasi"
          value={film.durasi}
          onChange={handleChange}
          placeholder="Durasi"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="genre">
          Genre
        </label>
        <select
          name="genre"
          value={film.genre}
          onChange={handleChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Pilih Genre</option>
          <option value="Romance">Romance</option>
          <option value="Fighting">Fighting</option>
          <option value="School">School</option>
          <option value="Step Family">Step Family</option>
          <option value="Love">Love</option>
          <option value="Science Fiction">Science Fiction</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sinopsis">
          Sinopsis
        </label>
        <textarea
          name="sinopsis"
          value={film.sinopsis}
          onChange={handleChange}
          placeholder="Sinopsis"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          rows="4"
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Simpan
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >
          Batal
        </button>
      </div>
    </form>
  );
};

export default FilmForm;
