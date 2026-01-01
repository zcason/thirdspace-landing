import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { gradients } from "@/constants/brand";

/**
 * FeatureCard Component
 * Individual feature display card with icon, title, and description
 * 
 * @param {Object} props
 * @param {React.Component} props.icon - Lucide icon component
 * @param {string} props.title - Feature title
 * @param {string} props.desc - Feature description
 * @param {string} props.pill - Badge label
 */
export function FeatureCard({ icon: Icon, title, desc, pill }) {
  return (
    <Card
      className={`bg-white/5 border-white/10 ${gradients.glass} h-full`}
    >
      <CardHeader className="space-y-2">
        <div className="flex items-center gap-2">
          <Badge
            variant="secondary"
            className="bg-white/10 text-white border-white/20"
          >
            {pill}
          </Badge>
        </div>
        <CardTitle className="text-white text-xl flex items-center gap-2">
          <Icon className="w-5 h-5 text-white/80" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-white/80 leading-relaxed">{desc}</p>
      </CardContent>
    </Card>
  );
}

