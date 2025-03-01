
import { useState, useEffect } from 'react';

interface LocationMapProps {
  address: string;
  zipCode: string;
}

export const LocationMap = ({ address, zipCode }: LocationMapProps) => {
  const [mapUrl, setMapUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locationDetails, setLocationDetails] = useState<any>(null);

  useEffect(() => {
    if (!address || !zipCode) {
      setError("Please provide both address and zip code");
      setLoading(false);
      return;
    }
    
    try {
      // Create a properly encoded address for the map URL
      const encodedAddress = encodeURIComponent(`${address}, ${zipCode}`);
      
      // Using Nominatim to get coordinates from address (free and doesn't require API key)
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&addressdetails=1`)
        .then(response => response.json())
        .then(data => {
          if (data && data.length > 0) {
            const lat = data[0].lat;
            const lon = data[0].lon;
            
            // Store location details for display
            setLocationDetails(data[0]);
            
            // Generate OpenStreetMap URL with the correct coordinates and marker
            const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(lon)-0.01}%2C${parseFloat(lat)-0.01}%2C${parseFloat(lon)+0.01}%2C${parseFloat(lat)+0.01}&layer=mapnik&marker=${lat}%2C${lon}`;
            
            setMapUrl(openStreetMapUrl);
            setLoading(false);
            setError(null);
          } else {
            throw new Error("Location not found");
          }
        })
        .catch(err => {
          console.error("Error fetching location data:", err);
          setError("We couldn't find this location. Please verify your address.");
          setLoading(false);
        });
    } catch (err) {
      console.error("Error setting up map:", err);
      setError("We couldn't load the map. Please verify your address.");
      setLoading(false);
    }
  }, [address, zipCode]);

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="mb-2 text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {error}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
        <>
          <div className="relative rounded-lg overflow-hidden flex-grow">
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              allowFullScreen
              className="rounded-lg"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          {locationDetails && (
            <div className="mt-2 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-medium mb-1 dark:text-white">Verified Address:</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {locationDetails.display_name}
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
};
