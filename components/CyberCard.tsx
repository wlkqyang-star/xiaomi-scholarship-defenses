import React, { useState } from 'react';

interface CyberCardProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  highlight?: boolean;
  className?: string;
}

const CyberCard: React.FC<CyberCardProps> = ({ title, subtitle, children, highlight = false, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`glass-panel relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_55px_rgba(157,179,229,0.24)] ${
        highlight ? 'border-[#f0c35b]/60 bg-[#f0c35b]/10' : 'border-white/15'
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {(title || subtitle) && (
        <div className={`flex items-start justify-between gap-4 border-b border-white/10 px-5 py-4 ${highlight ? 'bg-[#f0c35b]/10' : 'bg-[#10245a]/35'}`}>
          <div>
            {title && <h3 className={`text-sm font-black tracking-wide ${highlight ? 'text-[#f0c35b]' : 'text-[#fee6cc]'}`}>{title}</h3>}
            {subtitle && <p className="mt-1 text-xs font-mono text-[#9db3e5]">{subtitle}</p>}
          </div>
          <span className="mt-1 h-2 w-2 flex-none rounded-full bg-[#f0c35b] shadow-[0_0_16px_rgba(240,195,91,0.9)]" />
        </div>
      )}
      <div className="relative z-10 p-5">{children}</div>
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#9db3e5]/10 via-transparent to-[#f0c35b]/10 transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </article>
  );
};

export default CyberCard;
