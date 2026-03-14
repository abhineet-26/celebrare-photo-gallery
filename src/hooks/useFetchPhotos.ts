import { useState, useEffect } from 'react';
import { Photo } from '../types';

export function useFetchPhotos() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('https://picsum.photos/v2/list?limit=30');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPhotos(data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch photos');
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return { photos, loading, error };
}
