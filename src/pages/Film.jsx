import { useState, useEffect } from 'react';
import FilmCard from '../components/FilmCard';
import FilmForm from '../components/FilmForm';

const initialFilms = [
  {
    id: '1',
    name: 'Inception',
    year: '2010',
    image: 'https://image-url-inception.com',
    durasi: '148 minutes',
    genre: 'Science Fiction',
    sinopsis: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
  },
  {
    id: '2',
    name: 'The Dark Knight',
    year: '2008',
    image: 'https://image-url-dark-knight.com',
    durasi: '152 minutes',
    genre: 'Action',
    sinopsis: 'When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.'
  },
  {
    id: '3',
    name: 'Interstellar',
    year: '2014',
    image: 'https://image-url-interstellar.com',
    durasi: '169 minutes',
    genre: 'Adventure',
    sinopsis: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
  },
  {
    id: '4',
    name: 'The Matrix',
    year: '1999',
    image: 'https://image-url-matrix.com',
    durasi: '136 minutes',
    genre: 'Science Fiction',
    sinopsis: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
  }
];

const Film = () => {
  const [films, setFilm] = useState([]);
  const [selectedFilm, setSelectedFilm] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [filterGenre, setFilterGenre] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const storedFilms = JSON.parse(localStorage.getItem('films')) || initialFilms;
    setFilm(storedFilms);
  }, []);

  const handleSaveFilm = (film) => {
    let updatedFilm;
    if (film.id) {
      updatedFilm = films.map((p) => (p.id === film.id ? film : p));
    } else {
      film.id = Date.now().toString();
      updatedFilm = [...films, film];
    }
    setFilm(updatedFilm);
    localStorage.setItem('films', JSON.stringify(updatedFilm));
    setIsFormVisible(false);
  };

  const handleDeleteFilm = (id) => {
    if (confirm("Apakah Anda yakin ingin menghapus Film ini?")) {
      const updatedFilm = films.filter((p) => p.id !== id);
      setFilm(updatedFilm);
      localStorage.setItem('films', JSON.stringify(updatedFilm));
    }
  };

  const handleEditFilm = (film) => {
    setSelectedFilm(film);
    setIsFormVisible(true);
  };

  const handleInfoFilm = (film) => {
    alert(`Judul: ${film.name}\nGenre: ${film.genre}\nDurasi: ${film.durasi}\nSinopsis: ${film.sinopsis}`);
  };

  const handleFilterChange = (e) => {
    setFilterGenre(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredFilm = films.filter((film) => {
    return (filterGenre === 'All' || film.genre === filterGenre) &&
           film.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold my-6 text-center">Daftar Film</h1>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <button
          onClick={() => {
            setSelectedFilm(null);
            setIsFormVisible(true);
          }}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
        >
          Tambah Film
        </button>
        <input
          type="text"
          placeholder="Cari Film..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        />
        <select
          onChange={handleFilterChange}
          value={filterGenre}
          className="bg-white border border-gray-300 rounded py-2 px-4 text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
        >
          <option value="All">Semua Genre</option>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {filteredFilm.map((film) => (
          <FilmCard
            key={film.id}
            film={film}
            onEdit={handleEditFilm}
            onDelete={() => handleDeleteFilm(film.id)}
            onInfo={handleInfoFilm}
          />
        ))}
      </div>
      {isFormVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <FilmForm
              initialFilm={selectedFilm || { name: '', year: '', image: '', durasi: '', genre: '', sinopsis: '' }}
              onSave={handleSaveFilm}
              onClose={() => setIsFormVisible(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Film;
