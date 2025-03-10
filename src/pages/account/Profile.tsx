
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";

const Profile = () => {
  const { toast } = useToast();
  
  // Mock user data - in a real app, this would come from your user context or API
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    phone: "(555) 123-4567",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
      zip: "10001",
      country: "United States"
    }
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    toast({
      title: "Profile updated",
      description: "Your profile information has been updated successfully.",
    });
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>
            Update your personal details here.
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input 
                  id="firstName" 
                  value={user.firstName} 
                  onChange={(e) => setUser({...user, firstName: e.target.value})}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input 
                  id="lastName" 
                  value={user.lastName} 
                  onChange={(e) => setUser({...user, lastName: e.target.value})}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={user.email} 
                onChange={(e) => setUser({...user, email: e.target.value})}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input 
                id="phone" 
                value={user.phone} 
                onChange={(e) => setUser({...user, phone: e.target.value})}
              />
            </div>
          </CardContent>
          
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Address Information</CardTitle>
          <CardDescription>
            Update your shipping and billing address.
          </CardDescription>
        </CardHeader>
        
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="street">Street Address</Label>
              <Input 
                id="street" 
                value={user.address.street} 
                onChange={(e) => setUser({
                  ...user, 
                  address: {...user.address, street: e.target.value}
                })}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input 
                  id="city" 
                  value={user.address.city} 
                  onChange={(e) => setUser({
                    ...user, 
                    address: {...user.address, city: e.target.value}
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state">State</Label>
                <Input 
                  id="state" 
                  value={user.address.state} 
                  onChange={(e) => setUser({
                    ...user, 
                    address: {...user.address, state: e.target.value}
                  })}
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zip">ZIP Code</Label>
                <Input 
                  id="zip" 
                  value={user.address.zip} 
                  onChange={(e) => setUser({
                    ...user, 
                    address: {...user.address, zip: e.target.value}
                  })}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input 
                  id="country" 
                  value={user.address.country} 
                  onChange={(e) => setUser({
                    ...user, 
                    address: {...user.address, country: e.target.value}
                  })}
                />
              </div>
            </div>
          </CardContent>
          
          <CardFooter>
            <Button type="submit">Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Profile;
