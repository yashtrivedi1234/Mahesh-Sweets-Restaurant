import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { dummyUsers } from '@/data/dummyData';
import { cn } from '@/lib/utils';

const AdminUsers = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Users Management</h1>
        <p className="text-muted-foreground">View and manage registered users</p>
      </div>

      <Card className="border-0 card-shadow">
        <CardHeader>
          <CardTitle>All Users ({dummyUsers.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">User</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Contact</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Orders</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Joined</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {dummyUsers.map((user) => (
                  <tr key={user.id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-foreground font-medium">
                            {user.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <p className="text-sm text-foreground">{user.email}</p>
                      <p className="text-sm text-muted-foreground">{user.phone}</p>
                    </td>
                    <td className="py-4">
                      <span className="font-medium text-foreground">{user.orderCount}</span>
                    </td>
                    <td className="py-4 text-sm text-muted-foreground">{user.joinedDate}</td>
                    <td className="py-4">
                      <Badge
                        variant="outline"
                        className={cn(
                          user.status === 'active'
                            ? 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))] border-[hsl(var(--veg))]/20'
                            : 'bg-muted text-muted-foreground border-border'
                        )}
                      >
                        {user.status}
                      </Badge>
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

export default AdminUsers;
