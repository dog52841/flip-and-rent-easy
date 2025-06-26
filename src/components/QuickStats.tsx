
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

interface StatProps {
  label: string;
  value: string;
  icon: React.ElementType;
  change?: string;
  trend?: "up" | "down";
}

interface QuickStatsProps {
  stats: StatProps[];
}

const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="border-0 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                <stat.icon className="h-5 w-5 text-gray-700" />
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
            <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
            {stat.change && (
              <div className="flex items-center text-xs text-green-600 font-medium">
                <TrendingUp className="h-3 w-3 mr-1" />
                {stat.change}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
