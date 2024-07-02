import { useState } from 'react';
import { Heart } from 'lucide-react';

const FilmCard = ({ film, onEdit, onDelete, onInfo }) => {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg my-4 bg-white">
      <img className="w-full" src={film.image} alt={film.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{film.name}</div>
        <p className="text-gray-700 text-base">Tahun {film.year}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={() => onInfo(film)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Info
        </button>
        <button
          onClick={() => onEdit(film)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(film.id)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
        >
          Delete
        </button>
        <button
          onClick={handleLikeClick}
          className={`ml-2 p-2 rounded ${liked ? 'text-red-500' : 'text-gray-500'}`}
        >
          <Heart />
        </button>
      </div>
    </div>
  );
};

export default FilmCard;
