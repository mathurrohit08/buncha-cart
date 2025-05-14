
import { useState } from "react";
import { Check, X, Tag, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export interface Coupon {
  id: string;
  code: string;
  discount: number; // percentage 
  description: string;
  expiryDate: string;
}

const sampleCoupons: Coupon[] = [
  {
    id: "1",
    code: "WELCOME10",
    discount: 10,
    description: "10% off your first order",
    expiryDate: "2025-12-31"
  },
  {
    id: "2",
    code: "SUMMER15",
    discount: 15,
    description: "15% off summer collection",
    expiryDate: "2025-09-30"
  },
  {
    id: "3",
    code: "FREESHIP",
    discount: 100,
    description: "Free shipping on your order",
    expiryDate: "2025-08-15"
  },
  {
    id: "4",
    code: "SALE20",
    discount: 20,
    description: "20% off sale items",
    expiryDate: "2025-07-31"
  },
  {
    id: "5",
    code: "THANKFUL25",
    discount: 25,
    description: "25% off thanksgiving special",
    expiryDate: "2025-11-30"
  }
];

interface ApplyCouponSectionProps {
  appliedCoupon: Coupon | null;
  setAppliedCoupon: (coupon: Coupon | null) => void;
}

export function ApplyCouponSection({
  appliedCoupon,
  setAppliedCoupon
}: ApplyCouponSectionProps) {
  const { toast } = useToast();
  const [couponCode, setCouponCode] = useState("");
  const [showCoupons, setShowCoupons] = useState(false);
  
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      toast({
        title: "Please enter a coupon code",
        variant: "destructive",
      });
      return;
    }
    
    const foundCoupon = sampleCoupons.find(c => 
      c.code.toLowerCase() === couponCode.toLowerCase()
    );
    
    if (foundCoupon) {
      setAppliedCoupon(foundCoupon);
      toast({
        title: "Coupon applied successfully",
        description: foundCoupon.description,
        variant: "default",
      });
    } else {
      toast({
        title: "Invalid coupon code",
        description: "Please check the code and try again",
        variant: "destructive",
      });
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    toast({
      title: "Coupon removed",
      variant: "default",
    });
  };

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCouponCode(code);
    toast({
      title: "Coupon code copied",
      description: "Paste in the coupon field to apply",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700 mb-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-lg flex items-center">
          <Tag className="w-5 h-5 mr-2 text-purple-500" />
          Apply Coupon
        </h3>
        <Button 
          variant="ghost" 
          onClick={() => setShowCoupons(!showCoupons)}
          size="sm"
        >
          {showCoupons ? "Hide Coupons" : "Show Available Coupons"}
        </Button>
      </div>
      
      {showCoupons && (
        <div className="mb-4 space-y-3 bg-gray-50 dark:bg-gray-900 p-3 rounded-lg">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Click on a coupon to apply:</p>
          {sampleCoupons.map((coupon) => (
            <div 
              key={coupon.id}
              className="flex items-center justify-between bg-white dark:bg-gray-800 p-2 rounded border dark:border-gray-700 shadow-sm"
            >
              <div>
                <div className="flex items-center">
                  <span className="font-bold text-purple-600 dark:text-purple-400">{coupon.code}</span>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 w-6 p-0 ml-1"
                    onClick={() => handleCopyCoupon(coupon.code)}
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                </div>
                <p className="text-xs text-gray-600 dark:text-gray-400">{coupon.description}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">Expires: {coupon.expiryDate}</p>
              </div>
              <Button 
                size="sm" 
                onClick={() => {
                  setCouponCode(coupon.code);
                  setAppliedCoupon(coupon);
                  toast({
                    title: "Coupon applied",
                    description: coupon.description,
                  });
                }}
                disabled={appliedCoupon?.id === coupon.id}
              >
                {appliedCoupon?.id === coupon.id ? 'Applied' : 'Apply'}
              </Button>
            </div>
          ))}
        </div>
      )}
      
      <div className="flex gap-2">
        <div className="flex-grow">
          <Label htmlFor="coupon-code" className="sr-only">Coupon code</Label>
          <Input
            id="coupon-code"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
            disabled={!!appliedCoupon}
          />
        </div>
        {appliedCoupon ? (
          <Button 
            variant="destructive"
            onClick={handleRemoveCoupon}
          >
            <X className="w-4 h-4 mr-1" />
            Remove
          </Button>
        ) : (
          <Button 
            onClick={handleApplyCoupon}
          >
            Apply
          </Button>
        )}
      </div>
      
      {appliedCoupon && (
        <div className="mt-3 flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-2 rounded border border-green-100 dark:border-green-900">
          <div className="flex items-center">
            <Check className="w-4 h-4 text-green-500 mr-2" />
            <div>
              <p className="text-green-700 dark:text-green-400 text-sm font-medium">{appliedCoupon.code} applied</p>
              <p className="text-xs text-green-600 dark:text-green-500">{appliedCoupon.description}</p>
            </div>
          </div>
          <span className="font-bold text-green-600 dark:text-green-400">-{appliedCoupon.discount}%</span>
        </div>
      )}
    </div>
  );
}
