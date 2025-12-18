import { useState } from 'react';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Badge } from '@/components/ui/badge';
import { foodItems } from '@/data/dummyData';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const AdminMenuManagement = () => {
  const [items, setItems] = useState(foodItems);

  const toggleAvailability = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isAvailable: !item.isAvailable } : item
      )
    );
    toast.success('Item availability updated');
  };

  const handleDelete = (id: string) => {
    toast.success('Item deleted successfully');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'sweets':
        return 'bg-pink-100 text-pink-700';
      case 'main-course':
        return 'bg-orange-100 text-orange-700';
      case 'snacks':
        return 'bg-yellow-100 text-yellow-700';
      case 'beverages':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Menu Management</h1>
          <p className="text-muted-foreground">Add, edit, and manage food items</p>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          Add New Item
        </Button>
      </div>

      <Card className="border-0 card-shadow">
        <CardHeader>
          <CardTitle>All Menu Items ({items.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-border">
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Item</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Category</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Price</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Rating</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Available</th>
                  <th className="pb-3 text-sm font-medium text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b border-border last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-muted overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{item.name}</p>
                          <div className="flex items-center gap-2">
                            <div
                              className={cn(
                                'w-3 h-3 border rounded-sm flex items-center justify-center',
                                item.isVeg ? 'border-[hsl(var(--veg))]' : 'border-[hsl(var(--nonveg))]'
                              )}
                            >
                              <div
                                className={cn(
                                  'w-1.5 h-1.5 rounded-full',
                                  item.isVeg ? 'bg-[hsl(var(--veg))]' : 'bg-[hsl(var(--nonveg))]'
                                )}
                              />
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {item.isVeg ? 'Veg' : 'Non-Veg'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge variant="outline" className={cn(getCategoryColor(item.category))}>
                        {item.category}
                      </Badge>
                    </td>
                    <td className="py-4 font-medium text-foreground">₹{item.price}</td>
                    <td className="py-4">
                      <span className="text-sm">⭐ {item.rating}</span>
                    </td>
                    <td className="py-4">
                      <Switch
                        checked={item.isAvailable}
                        onCheckedChange={() => toggleAvailability(item.id)}
                      />
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-destructive hover:text-destructive"
                          onClick={() => handleDelete(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
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

export default AdminMenuManagement;
