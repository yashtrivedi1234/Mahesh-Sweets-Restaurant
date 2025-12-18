import { ShoppingBag, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dummyOrders } from '@/data/dummyData';

const UserDashboard = () => {
  const recentOrders = dummyOrders.slice(0, 3);

  const stats = [
    { label: 'Total Orders', value: 15, icon: ShoppingBag, color: 'bg-primary/10 text-primary' },
    { label: 'Pending', value: 2, icon: Clock, color: 'bg-secondary/10 text-secondary' },
    { label: 'Delivered', value: 12, icon: CheckCircle, color: 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]' },
    { label: 'Cancelled', value: 1, icon: XCircle, color: 'bg-destructive/10 text-destructive' },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Welcome back, Rahul!</h1>
        <p className="text-muted-foreground">Here's what's happening with your orders</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 card-shadow">
            <CardContent className="p-4">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                <stat.icon className="h-5 w-5" />
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Orders */}
      <Card className="border-0 card-shadow">
        <CardHeader>
          <CardTitle>Recent Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentOrders.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-4 bg-muted rounded-lg"
              >
                <div>
                  <p className="font-medium text-foreground">{order.id}</p>
                  <p className="text-sm text-muted-foreground">
                    {order.items.length} items • {order.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-foreground">₹{order.total}</p>
                  <span
                    className={cn(
                      'text-xs px-2 py-1 rounded-full',
                      order.status === 'delivered' && 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]',
                      order.status === 'out-for-delivery' && 'bg-secondary/10 text-secondary',
                      order.status === 'preparing' && 'bg-primary/10 text-primary',
                      order.status === 'pending' && 'bg-muted text-muted-foreground'
                    )}
                  >
                    {order.status.replace('-', ' ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Helper function for classnames
const cn = (...classes: (string | boolean | undefined)[]) =>
  classes.filter(Boolean).join(' ');

export default UserDashboard;
