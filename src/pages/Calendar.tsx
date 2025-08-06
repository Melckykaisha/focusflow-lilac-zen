
import { Layout } from '@/components/Layout';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Calendar() {
  const currentMonth = 'December 2024';
  
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  const tasksOnDays = {
    15: ['Client meeting', 'Code review'],
    18: ['Project deadline'],
    22: ['Team standup'],
    25: ['Holiday break starts']
  };

  return (
    <Layout currentPage="calendar">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
            <CalendarIcon className="text-primary" />
            Calendar
          </h1>
          <p className="text-muted-foreground text-lg">
            View your tasks and deadlines in a calendar format.
          </p>
        </div>
        
        <div className="form-container rounded-xl p-6 animate-slide-in-right">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">{currentMonth}</h2>
            <div className="flex gap-2">
              <Button variant="outline" size="icon">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-4 mb-4">
            {weekDays.map(day => (
              <div key={day} className="text-center font-medium text-muted-foreground p-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-2">
            {/* Empty cells for days before month starts */}
            {Array.from({ length: 6 }, (_, i) => (
              <div key={`empty-${i}`} className="h-24"></div>
            ))}
            
            {calendarDays.map(day => (
              <div
                key={day}
                className="h-24 p-2 border rounded-lg hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="font-medium text-sm mb-1">{day}</div>
                {tasksOnDays[day] && (
                  <div className="space-y-1">
                    {tasksOnDays[day].map((task, index) => (
                      <div
                        key={index}
                        className="text-xs bg-primary/10 text-primary px-2 py-1 rounded truncate"
                      >
                        {task}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
