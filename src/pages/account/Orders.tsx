
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Package, Clock, CheckCircle, AlertCircle, Truck, Eye } from "lucide-react";

// Mock order data
const orders = [
  {
    id: "ORD-123456",
    date: "May 12, 2023",
    status: "Delivered",
    total: "$129.99",
    items: [
      { name: "Modern Desk Lamp", qty: 1, price: "$49.99", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=100&h=100" },
      { name: "Ergonomic Office Chair", qty: 1, price: "$79.99", image: "https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?auto=format&fit=crop&w=100&h=100" }
    ],
    trackingNumber: "TRK7891234",
    estimatedDelivery: "Delivered May 15, 2023"
  },
  {
    id: "ORD-654321",
    date: "April 28, 2023",
    status: "Processing",
    total: "$85.45",
    items: [
      { name: "Wireless Earbuds", qty: 1, price: "$59.99", image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=100&h=100" },
      { name: "Phone Charging Cable", qty: 2, price: "$12.99", image: "https://images.unsplash.com/photo-1612815455665-bbcbd3b2f101?auto=format&fit=crop&w=100&h=100" }
    ],
    trackingNumber: "Pending",
    estimatedDelivery: "Expected May 20, 2023"
  },
  {
    id: "ORD-789123",
    date: "March 15, 2023",
    status: "Cancelled",
    total: "$24.99",
    items: [
      { name: "Coffee Mug", qty: 1, price: "$24.99", image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=100&h=100" }
    ],
    trackingNumber: "N/A",
    estimatedDelivery: "Cancelled"
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Delivered":
      return <CheckCircle className="w-5 h-5 text-green-500" />;
    case "Processing":
      return <Clock className="w-5 h-5 text-blue-500" />;
    case "Cancelled":
      return <AlertCircle className="w-5 h-5 text-red-500" />;
    case "Shipped":
      return <Truck className="w-5 h-5 text-purple-500" />;
    default:
      return <Package className="w-5 h-5 text-gray-500" />;
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300";
    case "Processing":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300";
    case "Cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300";
    case "Shipped":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300";
  }
};

const Orders = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>My Orders</CardTitle>
          <CardDescription>
            View and track your order history
          </CardDescription>
        </CardHeader>
        
        {orders.length === 0 ? (
          <CardContent>
            <div className="text-center py-12">
              <Package className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium">No orders yet</h3>
              <p className="text-gray-500 mt-2">When you place an order, it will appear here.</p>
              <Button className="mt-6">
                Continue Shopping
              </Button>
            </div>
          </CardContent>
        ) : (
          <CardContent className="space-y-6">
            {orders.map((order, index) => (
              <div key={order.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      {getStatusIcon(order.status)}
                      <span className="font-medium">{order.id}</span>
                      <Badge className={getStatusColor(order.status)}>
                        {order.status}
                      </Badge>
                    </div>
                    <div className="text-sm text-gray-500">
                      Ordered on {order.date}
                    </div>
                  </div>
                  <div className="mt-2 sm:mt-0">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>View Details</span>
                    </Button>
                  </div>
                </div>
                
                <Separator className="my-3" />
                
                <div className="space-y-3">
                  {order.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0 h-14 w-14 rounded overflow-hidden border border-gray-200 dark:border-gray-700">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=100&h=100";
                          }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium truncate">{item.name}</h4>
                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                      </div>
                      <div className="text-sm font-medium">
                        {item.price}
                      </div>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-3" />
                
                <div className="flex flex-col sm:flex-row justify-between pt-2">
                  <div className="text-sm mb-2 sm:mb-0">
                    <span className="text-gray-500">Tracking: </span>
                    <span className="font-medium">{order.trackingNumber}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-500">Delivery: </span>
                    <span className="font-medium">{order.estimatedDelivery}</span>
                  </div>
                  <div className="text-sm font-bold mt-2 sm:mt-0">
                    <span>Total: </span>
                    <span>{order.total}</span>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        )}
      </Card>
    </div>
  );
};

export default Orders;
