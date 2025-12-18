import { Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { dummyOrders } from '@/data/dummyData';
import { toast } from 'sonner';

const AdminOrders = () => {
  const handleStatusChange = (orderId: string, status: string) => {
    toast.success(`Order ${orderId} status updated to ${status}`);
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Orders Management</h1>
        <p className="text-muted-foreground">View and manage all customer orders</p>
      </div>

      <Card className="border-0 card-shadow">
        <CardHeader>
          <CardTitle>All Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Payment</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {dummyOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-4 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-4 text-sm text-foreground">{order.userName}</td>
                    <td className="py-4 text-sm text-muted-foreground">{order.date}</td>
                    <td className="py-4 text-sm font-medium text-foreground">₹{order.total}</td>
                    <td className="py-4">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          order.paymentStatus === 'paid'
                            ? 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {order.paymentStatus}
                      </span>
                    </td>
                    <td className="py-4">
                      <Select
                        defaultValue={order.status}
                        onValueChange={(value) => handleStatusChange(order.id, value)}
                      >
                        <SelectTrigger className="w-[150px] h-8 text-xs">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="pending">Pending</SelectItem>
                          <SelectItem value="confirmed">Confirmed</SelectItem>
                          <SelectItem value="preparing">Preparing</SelectItem>
                          <SelectItem value="out-for-delivery">Out for Delivery</SelectItem>
                          <SelectItem value="delivered">Delivered</SelectItem>
                          <SelectItem value="cancelled">Cancelled</SelectItem>
                        </SelectContent>
                      </Select>
                    </td>
                    <td className="py-4">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                        View
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminOrders;
