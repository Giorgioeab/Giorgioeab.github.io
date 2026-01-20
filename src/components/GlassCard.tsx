import React, { type ReactNode } from 'react';
import { motion as Motion } from 'framer-motion';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <Motion.div
            whileHover={hoverEffect ? { scale: 1.02, y: -5 } : {}}
            className={`
        backdrop-blur-md bg-white/10 dark:bg-black/30
        border border-white/20 dark:border-white/10
        shadow-xl rounded-2xl p-6
        ${className}
      `}
        >
            {children}
        </Motion.div>
    );
};

export default GlassCard;
