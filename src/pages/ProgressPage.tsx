import Layout from "@/components/Layout";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Clock, Target, Trophy } from "lucide-react";

const stats = [
  {
    title: "Courses Completed",
    value: "1",
    total: "6",
    icon: BookOpen,
    color: "text-primary",
  },
  {
    title: "Study Time",
    value: "12.5",
    unit: "hours",
    icon: Clock,
    color: "text-blue-500",
  },
  {
    title: "Cards Reviewed",
    value: "234",
    icon: Target,
    color: "text-emerald-500",
  },
  {
    title: "Current Streak",
    value: "7",
    unit: "days",
    icon: Trophy,
    color: "text-amber-500",
  },
];

const recentActivity = [
  { course: "Building Neural Networks", action: "Completed Module 5", time: "2 hours ago" },
  { course: "Foundations of GenAI", action: "Reviewed 15 flashcards", time: "Yesterday" },
  { course: "RAG Architectures", action: "Started course", time: "3 days ago" },
];

const ProgressPage = () => {
  return (
    <Layout
      title="Your Progress"
      subtitle="Track your learning journey and see how far you've come."
      tag="ANALYTICS"
    >
      <div className="space-y-8 animate-fade-in">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Card key={stat.title} className="bg-card border-border">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <stat.icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-display font-bold text-foreground">
                    {stat.value}
                  </span>
                  {stat.total && (
                    <span className="text-lg text-muted-foreground">/{stat.total}</span>
                  )}
                  {stat.unit && (
                    <span className="text-sm text-muted-foreground">{stat.unit}</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Progress */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display">Overall Course Progress</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Total Completion</span>
                <span className="font-display text-primary">24%</span>
              </div>
              <Progress value={24} className="h-3" />
            </div>

            <div className="grid gap-4">
              {[
                { name: "Foundations of GenAI", progress: 100 },
                { name: "Building Neural Networks", progress: 45 },
                { name: "RAG Architectures", progress: 10 },
                { name: "Building a Brain", progress: 0 },
              ].map((course) => (
                <div key={course.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-foreground">{course.name}</span>
                    <span
                      className={`font-display ${
                        course.progress === 100
                          ? "text-success"
                          : course.progress > 0
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {course.progress}%
                    </span>
                  </div>
                  <Progress
                    value={course.progress}
                    className={`h-1.5 ${course.progress === 100 ? "[&>div]:bg-success" : ""}`}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="font-display">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 pb-4 border-b border-border last:border-0 last:pb-0"
                >
                  <div className="w-2 h-2 mt-2 rounded-full bg-primary shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">
                      {activity.course} • {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ProgressPage;
