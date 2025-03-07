
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CreditCard, Info } from "lucide-react";

// Payment method options
export const paymentMethods = [
  { id: "credit", name: "Credit Card", icon: "💳" },
  { id: "debit", name: "Debit Card", icon: "💳" },
  { id: "wire", name: "Wire Transfer", icon: "🏦" },
  { id: "googlepay", name: "Google Pay", icon: "🔵" },
  { id: "amazonpay", name: "Amazon Pay", icon: "📦" },
  { id: "netbanking", name: "Net Banking", icon: "🖥️" },
];

interface PaymentSectionProps {
  paymentMethod: string;
  setPaymentMethod: (method: string) => void;
  cardDetails: {
    cardNumber: string;
    cardName: string;
    expiryDate: string;
    cvv: string;
  };
  handleCardDetailsChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isProcessing: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  cartItems: any[];
  selectedShippingTier: any;
}

export const PaymentSection: React.FC<PaymentSectionProps> = ({
  paymentMethod,
  setPaymentMethod,
  cardDetails,
  handleCardDetailsChange,
  isProcessing,
  handleSubmit,
  cartItems,
  selectedShippingTier,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Payment Information</h2>
      
      <div className="mb-6">
        <Label className="text-base mb-3 block">Select Payment Method</Label>
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={setPaymentMethod}
          className="w-full grid grid-cols-2 md:grid-cols-3 gap-3"
        >
          {paymentMethods.map((method) => (
            <div 
              key={method.id}
              className={`flex items-center p-3 border rounded-md cursor-pointer ${
                paymentMethod === method.id 
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                  : "border-gray-200 dark:border-gray-700"
              }`}
              onClick={() => setPaymentMethod(method.id)}
            >
              <RadioGroupItem 
                id={`payment-${method.id}`} 
                value={method.id} 
                className="mr-2"
              />
              <Label htmlFor={`payment-${method.id}`} className="flex items-center cursor-pointer w-full">
                <span className="text-xl mr-2">{method.icon}</span>
                <span className="font-medium text-sm dark:text-white">{method.name}</span>
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Credit/Debit Card Form */}
      {(paymentMethod === "credit" || paymentMethod === "debit") && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardDetails.cardNumber}
              onChange={handleCardDetailsChange}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={cardDetails.cardName}
              onChange={handleCardDetailsChange}
              className="mt-1"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={cardDetails.expiryDate}
                onChange={handleCardDetailsChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="123"
                type="password"
                maxLength={4}
                value={cardDetails.cvv}
                onChange={handleCardDetailsChange}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      )}

      {/* Placeholder for other payment methods */}
      {paymentMethod === "wire" && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <h4 className="font-medium mb-2 dark:text-white">Wire Transfer Instructions</h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Please transfer the amount to the following bank account:
          </p>
          <div className="mt-2 space-y-1 text-sm">
            <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Bank: </span>Global Bank</p>
            <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Account Name: </span>DesignStore Inc.</p>
            <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Account Number: </span>XXXX-XXXX-XXXX-XXXX</p>
            <p className="dark:text-white"><span className="text-gray-500 dark:text-gray-400">Routing Number: </span>XXXXXXXX</p>
          </div>
        </div>
      )}
      
      {(paymentMethod === "googlepay" || paymentMethod === "amazonpay") && (
        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800">
          <p className="text-center dark:text-white">
            You'll be redirected to {paymentMethod === "googlepay" ? "Google Pay" : "Amazon Pay"} to complete your payment after you place your order.
          </p>
        </div>
      )}

      {paymentMethod === "netbanking" && (
        <div className="p-4 space-y-4">
          <Label htmlFor="bankSelect">Select Your Bank</Label>
          <Select>
            <SelectTrigger id="bankSelect" className="w-full">
              <SelectValue placeholder="Select a bank" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bank1">Global Bank</SelectItem>
              <SelectItem value="bank2">City Bank</SelectItem>
              <SelectItem value="bank3">National Bank</SelectItem>
              <SelectItem value="bank4">State Bank</SelectItem>
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="p-4 mt-6 bg-blue-50 dark:bg-blue-900/20 rounded-md mb-6 flex items-start gap-2">
        <Info className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
        <p className="text-sm text-blue-700 dark:text-blue-300">
          This is a demo checkout. No actual payment will be processed.
        </p>
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isProcessing || cartItems.length === 0 || !selectedShippingTier}
        onClick={handleSubmit}
      >
        {isProcessing ? (
          <span className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Processing...
          </span>
        ) : (
          <span className="flex items-center">
            <CreditCard className="mr-2 h-4 w-4" />
            Complete Purchase
          </span>
        )}
      </Button>
    </div>
  );
};
