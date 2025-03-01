
import { useState, useEffect } from 'react';

interface LocationMapProps {
  address: string;
  zipCode: string;
}

export const LocationMap = ({ address, zipCode }: LocationMapProps) => {
  const [mapUrl, setMapUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create a Google Maps URL with the address
    const encodedAddress = encodeURIComponent(address);
    const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyDFaXNvUSNlqQoClccsJzB_tIsr4hOd1MQ&q=${encodedAddress}&zoom=14`;
    
    setMapUrl(googleMapsUrl);
    setLoading(false);
  }, [address, zipCode]);

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
        ></iframe>
      )}
    </div>
  );
};
