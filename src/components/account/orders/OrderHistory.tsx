
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Package, 
  ChevronDown, 
  ChevronUp,
  ExternalLink,
  ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/components/header/CartMenu";

export interface Order {
  id: string;
  date: string;
  total: number;
  status: "processing" | "shipped" | "delivered" | "cancelled";
  items: CartItem[];
  trackingNumber?: string;
  paymentMethod: string;
}

// Sample data for order history
export const sampleOrders: Order[] = [
  {
    id: "ORD-2023-1001",
    date: "2023-11-15",
    total: 599.98,
    status: "delivered",
    items: [
      {
        id: 101,
        name: "Premium Headphones",
        price: 299.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      },
      {
        id: 102,
        name: "Wireless Speaker",
        price: 299.99,
        quantity: 1,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      },
    ],
    trackingNumber: "TRK-1234567890",
    paymentMethod: "Credit Card"
  }
];

export const OrderHistory = () => {
  const [orders, setOrders] = useState<Order[]>(() => {
    // Get orders from local storage or use sample data
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : sampleOrders;
  });
  
  const [expandedOrderId, setExpandedOrderId] = useState<string | null>(null);
  
  const toggleOrderDetails = (orderId: string) => {
    setExpandedOrderId(expandedOrderId === orderId ? null : orderId);
  };
  
  // Function to format date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  
  // Function to get status badge color
  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case "processing":
        return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
      case "shipped":
        return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
      case "delivered":
        return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";
      case "cancelled":
        return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
      default:
        return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
    }
  };

  if (orders.length === 0) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-purple-500" />
            <CardTitle>Order History</CardTitle>
          </div>
          <CardDescription>
            View and track your orders
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
          <p className="text-gray-500 dark:text-gray-400 text-center">
            You haven't placed any orders yet
          </p>
          <Button className="mt-4" asChild>
            <a href="/products">Start Shopping</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Package className="h-5 w-5 text-purple-500" />
          <CardTitle>Order History</CardTitle>
        </div>
        <CardDescription>
          View and track your recent orders
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <>
                <TableRow key={order.id} className="cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50">
                  <TableCell className="font-medium">{order.id}</TableCell>
                  <TableCell>{formatDate(order.date)}</TableCell>
                  <TableCell>${order.total.toFixed(2)}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleOrderDetails(order.id)}
                    >
                      {expandedOrderId === order.id ? (
                        <ChevronUp className="h-4 w-4 mr-1" />
                      ) : (
                        <ChevronDown className="h-4 w-4 mr-1" />
                      )}
                      Details
                    </Button>
                  </TableCell>
                </TableRow>
                {expandedOrderId === order.id && (
                  <TableRow>
                    <TableCell colSpan={5} className="p-0 border-t-0">
                      <div className="bg-gray-50 dark:bg-gray-800/50 p-4">
                        <h4 className="text-sm font-medium mb-2">Order Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-xs text-gray-500 dark:text-gray-400">Payment Method</p>
                            <p className="text-sm">{order.paymentMethod}</p>
                          </div>
                          {order.trackingNumber && (
                            <div>
                              <p className="text-xs text-gray-500 dark:text-gray-400">Tracking Number</p>
                              <div className="flex items-center">
                                <p className="text-sm">{order.trackingNumber}</p>
                                <Button variant="link" size="sm" className="h-auto p-0 ml-2">
                                  <ExternalLink className="h-3 w-3" />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        <h4 className="text-sm font-medium mb-2">Items</h4>
                        <div className="space-y-3">
                          {order.items.map((item) => (
                            <div key={item.id} className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded-md"
                              />
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium truncate">{item.name}</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                  ${item.price.toFixed(2)} x {item.quantity}
                                </p>
                              </div>
                              <div className="text-sm font-medium">
                                ${(item.price * item.quantity).toFixed(2)}
                              </div>
                            </div>
                          ))}
                        </div>
                        
                        <div className="flex justify-between items-center mt-4 pt-3 border-t dark:border-gray-700">
                          <span className="font-medium">Order Total:</span>
                          <span className="font-semibold">${order.total.toFixed(2)}</span>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
