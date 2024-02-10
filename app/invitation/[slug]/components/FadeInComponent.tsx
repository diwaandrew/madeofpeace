import React from 'react';
import { useInView } from 'react-intersection-observer';

// Define an interface for the component's props
interface FadeInComponentProps {
    children: React.ReactNode;
    className?: string;
    fadeDirection?: 'left' | 'right' | 'top' | 'bottom' | 'down' | 'up';
    delay?: number; // Delay in seconds
  }
  

  const FadeInComponent: React.FC<FadeInComponentProps> = ({
    children,
    className = '',
    fadeDirection = 'left',
    delay = 0, // Default delay is 0
  }) => {
    const { ref, inView } = useInView({
      triggerOnce: false,
      threshold: 0.1,
    });
  
    const animationClasses: Record<string, string> = {
      left: 'fade-left',
      right: 'fade-right',
      top: 'fade-top',
      bottom: 'fade-bottom',
      down: 'fadeInDown',
      up: 'fadeInUp',
    };
  
    const animationClass = animationClasses[fadeDirection] || '';
  
    // Create a style object that includes the animation delay
    const style: React.CSSProperties = {
      animationDelay: `${delay}s`,
    };
  
    return (
      <div
        ref={ref}
        className={`${className} ${inView ? animationClass : ''}`}
        style={style} // Apply the style object here
      >
        {children}
      </div>
    );
  };
  
export default FadeInComponent;
