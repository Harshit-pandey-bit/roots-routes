import React from 'react';

interface TagBadgeProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'success';
}

export const TagBadge: React.FC<TagBadgeProps> = ({ 
  text, 
  variant = 'primary' 
}) => {
  const variantClasses = {
    primary: 'bg-green-100 text-green-800',
    secondary: 'bg-amber-100 text-amber-800',
    success: 'bg-emerald-100 text-emerald-800',
  };

  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variantClasses[variant]}`}
    >
      {text}
    </span>
  );
};
