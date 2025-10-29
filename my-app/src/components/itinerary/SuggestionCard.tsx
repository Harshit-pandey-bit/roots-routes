import React from 'react';
import { Card } from '../common/Card';

interface SuggestionCardProps {
  title: string;
  description: string;
}

export const SuggestionCard: React.FC<SuggestionCardProps> = ({
  title,
  description,
}) => {
  return (
    <Card>
      <h4 className="font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </Card>
  );
};
