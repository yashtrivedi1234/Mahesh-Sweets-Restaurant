import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { dummyOrders, dummyComplaints } from '@/data/dummyData';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const UserComplaints = () => {
  const [selectedOrder, setSelectedOrder] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedOrder || !message) {
      toast.error('Please select an order and enter your complaint');
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success('Complaint submitted successfully!');
    setSelectedOrder('');
    setMessage('');
    setIsSubmitting(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))]';
      case 'in-progress':
        return 'bg-secondary/10 text-secondary';
      case 'open':
        return 'bg-primary/10 text-primary';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Complaints</h1>
        <p className="text-muted-foreground">Submit and track your complaints</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Submit Form */}
        <Card className="border-0 card-shadow h-fit">
          <CardHeader>
            <CardTitle>Submit a Complaint</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label>Select Order</Label>
                <Select value={selectedOrder} onValueChange={setSelectedOrder}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an order" />
                  </SelectTrigger>
                  <SelectContent>
                    {dummyOrders.map((order) => (
                      <SelectItem key={order.id} value={order.id}>
                        {order.id} - ₹{order.total} ({order.date})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label>Complaint Message</Label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your issue..."
                  rows={4}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit Complaint'}
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Previous Complaints */}
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-4">Previous Complaints</h2>
          <div className="space-y-4">
            {dummyComplaints.map((complaint) => (
              <Card key={complaint.id} className="border-0 card-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <p className="font-medium text-foreground">Order: {complaint.orderId}</p>
                      <p className="text-sm text-muted-foreground">{complaint.date}</p>
                    </div>
                    <Badge variant="outline" className={cn(getStatusColor(complaint.status))}>
                      {complaint.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-foreground mb-3">{complaint.message}</p>
                  {complaint.adminReply && (
                    <div className="bg-muted p-3 rounded-lg">
                      <p className="text-xs text-muted-foreground mb-1">Admin Reply:</p>
                      <p className="text-sm text-foreground">{complaint.adminReply}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserComplaints;
