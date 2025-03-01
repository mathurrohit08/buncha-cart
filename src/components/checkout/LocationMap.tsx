
import { useState, useEffect } from 'react';

interface LocationMapProps {
  address: string;
  zipCode: string;
}

export const LocationMap = ({ address, zipCode }: LocationMapProps) => {
  const [mapUrl, setMapUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      // Create a map URL that works more reliably
      const encodedAddress = encodeURIComponent(`${address} ${zipCode}`);
      const mapboxToken = 'pk.eyJ1IjoibG92YWJsZWRldiIsImEiOiJjbG5hMjBiemgwN2ducG1udTd5dXQydHJzIn0.e6hEshWZpGwrI5aXjNdzuw'; // public token for demo
      
      // Using OpenStreetMap which is more reliable without API key
      const openStreetMapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik&marker=${encodedAddress}`;
      
      setMapUrl(openStreetMapUrl);
      setLoading(false);
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
            We couldn't load the map. Please verify your address or try again later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full relative rounded-lg overflow-hidden">
      {loading ? (
        <div className="flex items-center justify-center h-full bg-gray-100 dark:bg-gray-700">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
};
