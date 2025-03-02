
import { useState, useEffect } from 'react';
import { AlertTriangle, MapPin } from 'lucide-react';

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
    
    // Clear any previous errors when attempting a new lookup
    setError(null);
    setLoading(true);
    
    try {
      // Create a properly encoded address for the map URL
      const encodedAddress = encodeURIComponent(`${address}, ${zipCode}`);
      
      // Using Nominatim to get coordinates from address (free and doesn't require API key)
      fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodedAddress}&addressdetails=1`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.status}`);
          }
          return response.json();
        })
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
      <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <div className="text-center">
          <div className="mb-4 text-amber-500">
            <AlertTriangle className="h-12 w-12 mx-auto" />
          </div>
          <p className="text-base font-medium text-gray-700 dark:text-gray-300 mb-2">
            {error}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Try entering a different address or check for typos.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col">
      {loading ? (
        <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700 rounded-lg p-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      ) : (
        <>
          <div className="relative rounded-lg overflow-hidden flex-grow min-h-[220px]">
            <iframe
              title="Location Map"
              width="100%"
              height="100%"
              frameBorder="0"
              src={mapUrl}
              allowFullScreen
              className="rounded-lg absolute inset-0"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
          {locationDetails && (
            <div className="mt-3 p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg text-sm border border-indigo-200 dark:border-indigo-800">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-medium mb-1 text-indigo-900 dark:text-indigo-200">Verified Address:</h4>
                  <p className="text-gray-700 dark:text-gray-300">
                    {locationDetails.display_name}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};
