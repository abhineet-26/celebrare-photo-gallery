import React from 'react';
import { Photo } from '../types';
import { Heart } from 'lucide-react';

interface PhotoCardProps {
  photo: Photo;
  isFavourite: boolean;
  onToggleFavourite: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ photo, isFavourite, onToggleFavourite }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all hover:shadow-md hover:-translate-y-1">
      <div className="relative aspect-[4/3] w-full bg-gray-100">
        <img
          src={photo.download_url}
          alt={`Photo by ${photo.author}`}
          className="w-full h-full object-cover"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <button
          onClick={onToggleFavourite}
          className="absolute top-3 right-3 p-2.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white transition-all hover:scale-110 active:scale-95"
          aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isFavourite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
          />
        </button>
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900 truncate" title={photo.author}>{photo.author}</h3>
      </div>
    </div>
  );
};

export default PhotoCard;
