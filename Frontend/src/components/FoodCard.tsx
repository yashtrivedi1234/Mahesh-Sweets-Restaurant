import { Star, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FoodItem } from '@/data/dummyData';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(item);
    toast.success(`${item.name} added to cart!`);
  };

  return (
    <Card className="group overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300 border-0">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Veg/Non-veg indicator */}
        <div className="absolute top-3 left-3">
          <div
            className={cn(
              'w-5 h-5 border-2 rounded-sm flex items-center justify-center bg-card',
              item.isVeg ? 'border-[hsl(var(--veg))]' : 'border-[hsl(var(--nonveg))]'
            )}
          >
            <div
              className={cn(
                'w-2.5 h-2.5 rounded-full',
                item.isVeg ? 'bg-[hsl(var(--veg))]' : 'bg-[hsl(var(--nonveg))]'
              )}
            />
          </div>
        </div>
        {item.isPopular && (
          <div className="absolute top-3 right-3 bg-secondary text-secondary-foreground text-xs font-semibold px-2 py-1 rounded-full">
            Popular
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-foreground line-clamp-1">{item.name}</h3>
          <div className="flex items-center gap-1 bg-[hsl(var(--veg))] text-[hsl(var(--success-foreground))] px-1.5 py-0.5 rounded text-xs font-medium flex-shrink-0">
            <Star className="h-3 w-3 fill-current" />
            <span>{item.rating}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {item.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-foreground">₹{item.price}</span>
          <Button
            size="sm"
            onClick={handleAddToCart}
            disabled={!item.isAvailable}
            className="gap-1"
          >
            <Plus className="h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
