
import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export const TaskForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="form-container rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
          <Plus className="w-4 h-4 text-primary-foreground" />
        </div>
        <h2 className="text-xl font-semibold">Add New Task</h2>
      </div>
      
      <div className="space-y-4">
        <Input
          placeholder="What needs to be done?"
          className="text-lg"
          onFocus={() => setIsExpanded(true)}
        />
        
        {isExpanded && (
          <div className="space-y-4 animate-fade-in-up">
            <Textarea
              placeholder="Add description (optional)"
              className="resize-none"
            />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high">🔴 High</SelectItem>
                  <SelectItem value="medium">🟡 Medium</SelectItem>
                  <SelectItem value="low">🟢 Low</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="work">Work</SelectItem>
                  <SelectItem value="side-project">Side Project</SelectItem>
                </SelectContent>
              </Select>
              
              <Input type="date" />
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsExpanded(false)}>
                Cancel
              </Button>
              <Button className="btn-hero">Add Task</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
