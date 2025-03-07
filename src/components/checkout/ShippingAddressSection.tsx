
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PlusCircle, Check, Truck } from "lucide-react";
import { LocationMap } from "@/components/checkout/LocationMap";
import { countries, estimateDistanceByZipCode, calculateShippingCost, STORE_ZIP_CODE, ShippingTier, shippingTiers, getLocationFromZipCode } from "@/utils/shippingCalculator";

// Types
export interface Address {
  id: number;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  default: boolean;
}

interface ShippingAddressSectionProps {
  addressMode: string;
  setAddressMode: (mode: string) => void;
  savedAddresses: Address[];
  selectedAddressId: number;
  setSelectedAddressId: (id: number) => void;
  formData: {
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  }>>;
  showMap: boolean;
  setShowMap: (show: boolean) => void;
  availableStates: { name: string; code: string }[];
  availableCities: { name: string; zipCodes: string[] }[];
  shippingTier: ShippingTier | null;
  setShippingTier: React.Dispatch<React.SetStateAction<ShippingTier | null>>;
  selectedShippingTier: ShippingTier | null;
  setSelectedShippingTier: React.Dispatch<React.SetStateAction<ShippingTier | null>>;
  showShippingOptions: boolean;
  setShowShippingOptions: React.Dispatch<React.SetStateAction<boolean>>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCountryChange: (value: string) => void;
  handleStateChange: (value: string) => void;
  handleCityChange: (value: string) => void;
  resetNewAddressForm: () => void;
  selectAddress: (id: number) => void;
}

export const ShippingAddressSection: React.FC<ShippingAddressSectionProps> = ({
  addressMode,
  setAddressMode,
  savedAddresses,
  selectedAddressId,
  setSelectedAddressId,
  formData,
  setFormData,
  showMap,
  setShowMap,
  availableStates,
  availableCities,
  shippingTier,
  setShippingTier,
  selectedShippingTier,
  setSelectedShippingTier,
  showShippingOptions,
  setShowShippingOptions,
  handleInputChange,
  handleCountryChange,
  handleStateChange,
  handleCityChange,
  resetNewAddressForm,
  selectAddress,
}) => {
  // Find the selected address for the map
  const selectedAddress = savedAddresses.find(addr => addr.id === selectedAddressId);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Shipping Information</h2>
      
      {/* Address Tabs */}
      <Tabs 
        value={addressMode} 
        onValueChange={(value) => {
          setAddressMode(value);
          if (value === "new") {
            resetNewAddressForm();
          }
        }}
        className="mb-6"
      >
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="saved">Saved Addresses</TabsTrigger>
          <TabsTrigger value="new">New Address</TabsTrigger>
        </TabsList>
        
        <TabsContent value="saved">
          <div className="space-y-4">
            {savedAddresses.map((address) => (
              <div 
                key={address.id}
                className={`p-4 border rounded-md cursor-pointer transition-colors ${
                  selectedAddressId === address.id 
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                    : "border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => selectAddress(address.id)}
              >
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <RadioGroup value={String(selectedAddressId)} onValueChange={(value) => selectAddress(Number(value))}>
                      <RadioGroupItem 
                        id={`address-${address.id}`} 
                        value={String(address.id)}
                        className="data-[state=checked]:border-primary"
                      />
                    </RadioGroup>
                    <h3 className="font-medium dark:text-white">
                      {address.name}
                      {address.default && (
                        <span className="ml-2 text-xs bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded">
                          Default
                        </span>
                      )}
                    </h3>
                  </div>
                  {selectedAddressId === address.id && (
                    <Check className="h-5 w-5 text-blue-500" />
                  )}
                </div>
                <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <p>{address.firstName} {address.lastName}</p>
                  <p>{address.address}</p>
                  <p>{address.city}, {address.state} {address.zipCode}</p>
                  <p>{address.country}</p>
                </div>
              </div>
            ))}
            
            <Button 
              variant="outline" 
              className="w-full mt-2 border-dashed"
              onClick={() => {
                setAddressMode("new");
                resetNewAddressForm();
              }}
            >
              <PlusCircle className="mr-2 h-4 w-4" />
              Add New Address
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="new">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select 
                value={formData.country} 
                onValueChange={handleCountryChange}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map(country => (
                      <SelectItem key={country.code} value={country.name}>
                        {country.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="state">State/Province</Label>
              <Select 
                value={formData.state} 
                onValueChange={handleStateChange}
                disabled={availableStates.length === 0}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {availableStates.map(state => (
                      <SelectItem key={state.code} value={state.name}>
                        {state.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <Select 
                value={formData.city} 
                onValueChange={handleCityChange}
                disabled={availableCities.length === 0}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {availableCities.map(city => (
                      <SelectItem key={city.name} value={city.name}>
                        {city.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="zipCode">ZIP/Postal Code</Label>
              <Input
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="mt-1"
              />
            </div>
          </form>
        </TabsContent>
      </Tabs>

      {/* Location Map */}
      {showMap && selectedAddress && (
        <div className="mt-4 mb-6">
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Delivery Location</h3>
          <div className="h-60 rounded-lg overflow-hidden">
            <LocationMap 
              address={`${selectedAddress.address}, ${selectedAddress.city}, ${selectedAddress.state} ${selectedAddress.zipCode}`} 
              zipCode={selectedAddress.zipCode}
            />
          </div>
        </div>
      )}

      {/* Show shipping options only after a valid zip code is provided */}
      {showShippingOptions && (
        <>
          <h3 className="text-lg font-semibold mb-3 dark:text-white">Shipping Method</h3>
          
          {shippingTier && (
            <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md border border-blue-200 dark:border-blue-800">
              <p className="flex items-center text-blue-700 dark:text-blue-300">
                <Truck className="h-5 w-5 mr-2" />
                Based on your location, we recommend: <span className="font-medium ml-1">{shippingTier.description}</span>
              </p>
            </div>
          )}
          
          <RadioGroup 
            value={selectedShippingTier?.description || ""} 
            onValueChange={(value) => {
              const tier = shippingTiers.find(t => t.description === value);
              if (tier) setSelectedShippingTier(tier);
            }}
            className="space-y-3 mb-6"
          >
            {shippingTiers.map((tier) => (
              <div
                key={tier.description}
                className={`flex items-center justify-between p-3 border rounded-md cursor-pointer ${
                  selectedShippingTier?.description === tier.description
                    ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400"
                    : "border-gray-200 dark:border-gray-700"
                }`}
                onClick={() => setSelectedShippingTier(tier)}
              >
                <div className="flex items-center">
                  <RadioGroupItem 
                    value={tier.description} 
                    id={`shipping-${tier.minMiles}-${tier.maxMiles}`} 
                    className="mr-3"
                  />
                  <div>
                    <p className="font-medium dark:text-white">{tier.description}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {tier.minMiles}-{tier.maxMiles === Infinity ? '∞' : tier.maxMiles} miles away
                    </p>
                  </div>
                </div>
                <p className="font-medium dark:text-white">
                  {tier.cost === 0 ? 'FREE' : `$${tier.cost.toFixed(2)}`}
                </p>
              </div>
            ))}
          </RadioGroup>
        </>
      )}
    </div>
  );
};
