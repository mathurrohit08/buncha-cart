
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Check, 
  Bell, 
  Mail, 
  ShieldAlert, 
  ShoppingBag,
  User,
  HelpCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Settings = () => {
  const { toast } = useToast();
  
  const [notifications, setNotifications] = useState({
    email: {
      orderUpdates: true,
      promotions: true,
      newProducts: false,
      newsletter: true
    },
    push: {
      orderUpdates: true,
      promotions: false,
      newProducts: false,
      newsletter: false
    }
  });
  
  const handleEmailToggleChange = (key: string) => {
    setNotifications({
      ...notifications,
      email: {
        ...notifications.email,
        [key]: !notifications.email[key as keyof typeof notifications.email]
      }
    });
  };
  
  const handlePushToggleChange = (key: string) => {
    setNotifications({
      ...notifications,
      push: {
        ...notifications.push,
        [key]: !notifications.push[key as keyof typeof notifications.push]
      }
    });
  };
  
  const handleSaveNotifications = () => {
    // In a real app, this would call your API
    toast({
      title: "Notification preferences updated",
      description: "Your notification settings have been saved successfully.",
    });
  };
  
  const handleSavePassword = () => {
    // In a real app, this would verify the current password and update to the new password
    toast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
    });
  };
  
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-purple-500" />
            <CardTitle>Notification Preferences</CardTitle>
          </div>
          <CardDescription>
            Choose how you'd like to be notified
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-blue-500" />
              Email Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-order-updates" className="font-medium">Order Updates</Label>
                  <p className="text-sm text-gray-500">Receive updates about your order status</p>
                </div>
                <Switch 
                  id="email-order-updates" 
                  checked={notifications.email.orderUpdates}
                  onCheckedChange={() => handleEmailToggleChange('orderUpdates')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-promotions" className="font-medium">Promotions</Label>
                  <p className="text-sm text-gray-500">Get notifications about deals and discounts</p>
                </div>
                <Switch 
                  id="email-promotions" 
                  checked={notifications.email.promotions}
                  onCheckedChange={() => handleEmailToggleChange('promotions')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-new-products" className="font-medium">New Products</Label>
                  <p className="text-sm text-gray-500">Stay updated on new product launches</p>
                </div>
                <Switch 
                  id="email-new-products" 
                  checked={notifications.email.newProducts}
                  onCheckedChange={() => handleEmailToggleChange('newProducts')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-newsletter" className="font-medium">Newsletter</Label>
                  <p className="text-sm text-gray-500">Receive our monthly newsletter</p>
                </div>
                <Switch 
                  id="email-newsletter" 
                  checked={notifications.email.newsletter}
                  onCheckedChange={() => handleEmailToggleChange('newsletter')}
                />
              </div>
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
              <Bell className="h-5 w-5 text-orange-500" />
              Push Notifications
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-order-updates" className="font-medium">Order Updates</Label>
                  <p className="text-sm text-gray-500">Receive updates about your order status</p>
                </div>
                <Switch 
                  id="push-order-updates" 
                  checked={notifications.push.orderUpdates}
                  onCheckedChange={() => handlePushToggleChange('orderUpdates')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-promotions" className="font-medium">Promotions</Label>
                  <p className="text-sm text-gray-500">Get notifications about deals and discounts</p>
                </div>
                <Switch 
                  id="push-promotions" 
                  checked={notifications.push.promotions}
                  onCheckedChange={() => handlePushToggleChange('promotions')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-new-products" className="font-medium">New Products</Label>
                  <p className="text-sm text-gray-500">Stay updated on new product launches</p>
                </div>
                <Switch 
                  id="push-new-products" 
                  checked={notifications.push.newProducts}
                  onCheckedChange={() => handlePushToggleChange('newProducts')}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-newsletter" className="font-medium">Newsletter</Label>
                  <p className="text-sm text-gray-500">Receive our monthly newsletter</p>
                </div>
                <Switch 
                  id="push-newsletter" 
                  checked={notifications.push.newsletter}
                  onCheckedChange={() => handlePushToggleChange('newsletter')}
                />
              </div>
            </div>
          </div>
          
          <div className="pt-4">
            <Button onClick={handleSaveNotifications}>
              Save Notification Preferences
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-purple-500" />
            <CardTitle>Security Settings</CardTitle>
          </div>
          <CardDescription>
            Manage your password and security options
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">Change Password</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm New Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
              
              <Button onClick={handleSavePassword}>
                Update Password
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
