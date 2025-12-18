import { Star, Eye, EyeOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { dummyReviews } from '@/data/dummyData';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const AdminReviews = () => {
  const handleToggleVisibility = (id: string, currentVisibility: boolean) => {
    toast.success(currentVisibility ? 'Review hidden' : 'Review visible');
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Reviews Management</h1>
        <p className="text-muted-foreground">Moderate customer reviews and ratings</p>
      </div>

      <Card className="border-0 card-shadow">
        <CardHeader>
          <CardTitle>All Reviews ({dummyReviews.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dummyReviews.map((review) => (
              <div
                key={review.id}
                className={cn(
                  'p-4 rounded-lg border',
                  review.isVisible ? 'bg-card border-border' : 'bg-muted/50 border-border opacity-60'
                )}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="font-medium text-foreground">{review.userName}</p>
                      <span className="text-muted-foreground">→</span>
                      <p className="text-sm text-muted-foreground">{review.foodName}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={cn(
                              'h-4 w-4',
                              review.rating >= star
                                ? 'fill-[hsl(var(--rating))] text-[hsl(var(--rating))]'
                                : 'text-muted-foreground'
                            )}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">• {review.date}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleVisibility(review.id, review.isVisible)}
                    className={cn(
                      !review.isVisible && 'border-primary text-primary hover:bg-primary hover:text-primary-foreground'
                    )}
                  >
                    {review.isVisible ? (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Hide
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Show
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-sm text-foreground">{review.comment}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminReviews;
