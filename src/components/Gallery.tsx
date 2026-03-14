import React, { useState, useMemo, useCallback } from 'react';
import { useFetchPhotos } from '../hooks/useFetchPhotos';
import { useFavourites } from '../hooks/useFavourites';
import PhotoCard from './PhotoCard';
import { Search, AlertCircle, Loader2 } from 'lucide-react';

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const { favourites, toggleFavourite } = useFavourites();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const filteredPhotos = useMemo(() => {
    if (!searchTerm.trim()) return photos;
    const lowercasedTerm = searchTerm.toLowerCase();
    return photos.filter(photo => photo.author.toLowerCase().includes(lowercasedTerm));
  }, [photos, searchTerm]);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh] text-gray-500">
        <Loader2 className="w-10 h-10 animate-spin mb-4 text-indigo-600" />
        <p className="text-lg font-medium">Loading amazing photos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-[50vh] text-red-500">
        <AlertCircle className="w-12 h-12 mb-4" />
        <p className="text-lg font-medium">{error}</p>
        <p className="text-sm mt-2 text-gray-500">Please try refreshing the page.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 max-w-md mx-auto md:mx-0 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search by author..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-shadow shadow-sm"
        />
      </div>
      
      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map(photo => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              isFavourite={favourites.includes(photo.id)}
              onToggleFavourite={() => toggleFavourite(photo.id)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <Search className="mx-auto h-12 w-12 text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-900">No photos found</h3>
          <p className="mt-1 text-gray-500">We couldn't find any photos by "{searchTerm}".</p>
        </div>
      )}
    </div>
  );
}
