
import { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tag, Copy, CheckSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Coupon } from "@/components/checkout/ApplyCouponSection";

export const PromotionsSection = () => {
  const { toast } = useToast();
  
  const [coupons, setCoupons] = useState<Coupon[]>([]);
  const [copiedCodes, setCopiedCodes] = useState<Record<string, boolean>>({});
  
  useEffect(() => {
    // Get coupons from localStorage
    const savedCoupons = localStorage.getItem('user_coupons');
    if (savedCoupons) {
      setCoupons(JSON.parse(savedCoupons));
    } else {
      // Add some sample coupons if no saved coupons exist
      const sampleCoupons: Coupon[] = [
        {
          id: "welcome",
          code: "WELCOME10",
          discount: 10,
          description: "10% off your first order",
          expiryDate: "2025-12-31"
        }
      ];
      localStorage.setItem('user_coupons', JSON.stringify(sampleCoupons));
      setCoupons(sampleCoupons);
    }
  }, []);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodes(prev => ({ ...prev, [code]: true }));
    
    toast({
      title: "Coupon code copied",
      description: "Paste the code at checkout to use",
    });
    
    // Reset the "copied" state after a delay
    setTimeout(() => {
      setCopiedCodes(prev => ({ ...prev, [code]: false }));
    }, 3000);
  };
  
  // Check if a code has been copied
  const isCopied = (code: string) => copiedCodes[code] || false;
  
  // Format the expiry date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Tag className="h-5 w-5 text-purple-500" />
          <CardTitle>Promotions & Offers</CardTitle>
        </div>
        <CardDescription>
          Your available coupons and special offers
        </CardDescription>
      </CardHeader>
      <CardContent>
        {coupons.length > 0 ? (
          <div className="space-y-4">
            {coupons.map((coupon) => (
              <div 
                key={coupon.id}
                className="border dark:border-gray-700 rounded-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3">
                  <h3 className="font-bold text-white text-lg">{coupon.discount}% OFF</h3>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <p className="font-medium">{coupon.description}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Expires: {formatDate(coupon.expiryDate)}
                      </p>
                    </div>
                    <Button
                      variant={isCopied(coupon.code) ? "outline" : "secondary"}
                      size="sm"
                      className={isCopied(coupon.code) ? "border-green-500 text-green-600" : ""}
                      onClick={() => handleCopyCoupon(coupon.code)}
                    >
                      {isCopied(coupon.code) ? (
                        <>
                          <CheckSquare className="h-4 w-4 mr-1" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4 mr-1" />
                          Copy Code
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded flex justify-center">
                    <code className="font-mono text-lg font-medium">{coupon.code}</code>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <Tag className="h-10 w-10 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
            <p className="text-gray-500 dark:text-gray-400 mb-2">No promotions available</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Complete a purchase to receive special offers and discounts
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
