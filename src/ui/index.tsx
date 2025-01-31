import React, { ReactNode, ButtonHTMLAttributes } from 'react';

// Card Components
interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'glass' | 'gradient';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const baseStyles = "relative rounded-2xl transition-all duration-300 hover:shadow-lg";
  
  const variants = {
    default: "bg-white shadow-md",
    glass: "backdrop-blur-md bg-white/30 border border-white/20",
    gradient: "bg-gradient-to-br from-white via-white/95 to-white/90 shadow-md"
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-100/20 via-transparent to-purple-100/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  );
};

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export const CardContent = ({ children, className = '' }: CardContentProps) => {
  return (
    <div className={`p-6 relative z-10 ${className}`}>
      {children}
    </div>
  );
};

// Button Component
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-md hover:shadow-lg focus:ring-blue-500",
    secondary: "bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white shadow-md hover:shadow-lg focus:ring-amber-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500"
  };

  const sizes = {
    sm: "text-sm px-4 py-2",
    md: "text-base px-6 py-3",
    lg: "text-lg px-8 py-4"
  };

  const disabledStyles = disabled || isLoading
    ? "opacity-60 cursor-not-allowed"
    : "transform hover:-translate-y-0.5 active:translate-y-0";

  return (
    <button
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${disabledStyles}
        ${className}
      `}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <span className="absolute inset-0 flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 text-current" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      )}
      <span className={`flex items-center gap-2 ${isLoading ? 'opacity-0' : ''}`}>
        {leftIcon && <span className="inline-flex">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="inline-flex">{rightIcon}</span>}
      </span>
    </button>
  );
};
