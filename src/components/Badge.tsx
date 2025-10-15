import React from 'react';

type BadgeVariant = 'error' | 'warning' | 'success' | 'primary' | 'accent';
type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  text: string;
  type?: BadgeVariant;
  size?: BadgeSize;
  uppercase?: boolean;
  bold?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ 
  text, 
  type = 'primary', 
  size = 'sm',
  uppercase = false,
  bold = false
}) => {
  const variantStyles: Record<BadgeVariant, string> = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-orange-100 text-orange-800',
    error: 'bg-red-100 text-red-800',
    primary: 'bg-blue-100 text-blue-800',
    accent: 'bg-gray-100 text-gray-800',
  };

  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-3 py-1.5',
  };

  const fontWeight = bold ? 'font-bold' : 'font-semibold';
  const textTransform = uppercase ? 'uppercase tracking-wider' : '';

  return (
    <span
      className={`
        ${sizeStyles[size]}
        ${fontWeight}
        ${textTransform}
        rounded-full
        ${variantStyles[type]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {text}
    </span>
  );
};

export default Badge;
