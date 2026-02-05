import React from 'react';

// Replicating the "Yonsei 365" logo style with text/svg combination
export const Logo: React.FC<{ className?: string, animated?: boolean }> = ({ className = "h-10", animated = false }) => {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
        {/* Pink Text '연세' */}
        <span className="font-bold text-[#D65492] text-3xl tracking-tighter leading-none" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            연세
        </span>
        
        {/* Purple/Gold Numbers '365' */}
        <div className="flex items-center text-4xl font-bold tracking-tight leading-none" style={{ fontFamily: 'Pretendard, sans-serif' }}>
            <span className="text-[#9C27B0]">3</span>
            <span className="text-[#AB47BC]">6</span>
            <span className="text-[#D4A373]">5</span>
        </div>

        {/* Vertical Separator and Subtext (only show if large enough space, but here we keep it simple for the logo component) */}
    </div>
  );
};
