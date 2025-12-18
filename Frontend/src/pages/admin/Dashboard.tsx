import { ShoppingBag, IndianRupee, Users, MessageSquare, Clock, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { dummyOrders, dummyComplaints, dummyUsers } from '@/data/dummyData';

const AdminDashboard = () => {
  const stats = [
    {
      label: 'Total Orders',
      value: '156',
      icon: ShoppingBag,
      change: '+12%',
      color: 'bg-primary/10 text-primary',
    },
    {
      label: 'Pending Orders',
      value: '8',
      icon: Clock,
      change: '-3',
      color: 'bg-secondary/10 text-secondary',
    },
    {
      label: 'Total Revenue',
      value: '₹45,230',
      icon: IndianRupee,
      change: '+18%',
      color: 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]',
    },
    {
      label: 'Total Users',
      value: dummyUsers.length.toString(),
      icon: Users,
      change: '+5',
      color: 'bg-accent/10 text-accent',
    },
    {
      label: 'Open Complaints',
      value: dummyComplaints.filter((c) => c.status !== 'resolved').length.toString(),
      icon: MessageSquare,
      change: '2 new',
      color: 'bg-destructive/10 text-destructive',
    },
    {
      label: 'Avg. Order Value',
      value: '₹290',
      icon: TrendingUp,
      change: '+8%',
      color: 'bg-primary/10 text-primary',
    },
  ];

  const recentOrders = dummyOrders.slice(0, 5);

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="border-0 card-shadow">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <div className="mt-3">
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Amount</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Payment</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border last:border-0">
                    <td className="py-3 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-3 text-sm text-muted-foreground">{order.userName}</td>
                    <td className="py-3 text-sm text-foreground">₹{order.total}</td>
                    <td className="py-3">
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
                    <td className="py-3">
                      <span
                        className={`text-xs px-2 py-1 rounded-full capitalize ${
                          order.status === 'delivered'
                            ? 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]'
                            : order.status === 'preparing'
                            ? 'bg-primary/10 text-primary'
                            : 'bg-secondary/10 text-secondary'
                        }`}
                      >
                        {order.status.replace(/-/g, ' ')}
                      </span>
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

export default AdminDashboard;
