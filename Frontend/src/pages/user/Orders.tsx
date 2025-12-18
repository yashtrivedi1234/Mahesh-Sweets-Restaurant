import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dummyOrders } from '@/data/dummyData';
import { cn } from '@/lib/utils';

const UserOrders = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered':
        return 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))] border-[hsl(var(--veg))]/20';
      case 'out-for-delivery':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'preparing':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'pending':
        return 'bg-muted text-muted-foreground border-border';
      case 'cancelled':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]';
      case 'pending':
        return 'bg-secondary/10 text-secondary';
      case 'failed':
        return 'bg-destructive/10 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">My Orders</h1>
        <p className="text-muted-foreground">Track and manage your orders</p>
      </div>

      <div className="space-y-4">
        {dummyOrders.map((order) => (
          <Card key={order.id} className="border-0 card-shadow overflow-hidden">
            <CardContent className="p-0">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-muted/50 border-b border-border">
                <div>
                  <p className="font-semibold text-foreground">{order.id}</p>
                  <p className="text-sm text-muted-foreground">{order.date}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className={cn(getStatusColor(order.status))}>
                    {order.status.replace(/-/g, ' ')}
                  </Badge>
                  <Badge variant="outline" className={cn(getPaymentStatusColor(order.paymentStatus))}>
                    {order.paymentStatus}
                  </Badge>
                </div>
              </div>

              {/* Items */}
              <div className="p-4">
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{item.name}</p>
                        <p className="text-sm text-muted-foreground">
                          ₹{item.price} × {item.quantity}
                        </p>
                      </div>
                      <p className="font-medium text-foreground">₹{item.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Payment: {order.paymentMethod === 'cod' ? 'Cash on Delivery' : 'Razorpay'}
                  </p>
                  <p className="text-lg font-bold text-foreground">Total: ₹{order.total}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserOrders;
