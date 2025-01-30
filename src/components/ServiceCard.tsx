import React from "react";
import { Link } from 'react-router-dom';
import { Card, CardContent, Badge } from '../ui/card';
import { ArrowRight } from 'lucide-react';

interface SubService {
  name: string;
  slug: string;
}

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
  subServices: SubService[];
}


const ServiceCard = ({ title, description, imageUrl, slug,subServices }: ServiceCardProps) => {
  return (
    <Card className="group h-full overflow-hidden bg-white transition-all hover:shadow-xl">
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <CardContent className="p-6">
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-primary">{title}</h3>
          <Badge variant="secondary" className="shrink-0">
            Medical Service
          </Badge>
        </div>

        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        {subServices && subServices.length > 0 && (
          <ul className="mb-6 space-y-1">
            {subServices.slice(0, 3).map((service) => (
              <li key={service.slug} className="text-sm text-muted-foreground">
                • {service.name}
              </li>
            ))}
            {subServices.length > 3 && (
              <li className="text-sm text-primary">
                +{subServices.length - 3} more services...
              </li>
            )}
          </ul>
        )}

        <Link 
          to={`/services/${slug}`}
          className={`inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80`}
        >
          Learn More 
          <ArrowRight className="h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;