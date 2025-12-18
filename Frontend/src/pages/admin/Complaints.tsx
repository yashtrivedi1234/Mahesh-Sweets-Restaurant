import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { dummyComplaints } from '@/data/dummyData';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const AdminComplaints = () => {
  const handleStatusChange = (id: string, status: string) => {
    toast.success(`Complaint status updated to ${status}`);
  };

  const handleReply = (id: string) => {
    toast.success('Reply sent successfully!');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-[hsl(var(--veg))]/10 text-[hsl(var(--veg))] border-[hsl(var(--veg))]/20';
      case 'in-progress':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'open':
        return 'bg-destructive/10 text-destructive border-destructive/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Complaints Management</h1>
        <p className="text-muted-foreground">Handle and resolve customer complaints</p>
      </div>

      <div className="space-y-4">
        {dummyComplaints.map((complaint) => (
          <Card key={complaint.id} className="border-0 card-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-foreground">{complaint.userName}</h3>
                    <Badge variant="outline" className={cn(getStatusColor(complaint.status))}>
                      {complaint.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Order: {complaint.orderId} • {complaint.date}
                  </p>
                </div>
                <Select
                  defaultValue={complaint.status}
                  onValueChange={(value) => handleStatusChange(complaint.id, value)}
                >
                  <SelectTrigger className="w-[150px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="open">Open</SelectItem>
                    <SelectItem value="in-progress">In Progress</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted p-4 rounded-lg mb-4">
                <p className="text-sm text-foreground">{complaint.message}</p>
              </div>

              {complaint.adminReply ? (
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-lg">
                  <p className="text-xs font-medium text-primary mb-1">Admin Reply:</p>
                  <p className="text-sm text-foreground">{complaint.adminReply}</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <Textarea placeholder="Type your reply here..." rows={3} />
                  <Button size="sm" onClick={() => handleReply(complaint.id)}>
                    Send Reply
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminComplaints;
