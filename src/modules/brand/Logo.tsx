import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon' | 'badge' | 'monochrome-white' | 'dark-nav';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  showSubtitle?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  size = 'md',
  showSubtitle = true,
  className = '',
}) => {
  // Dimensions scaling
  const iconSizes = {
    sm: { w: 34, h: 34, text: 'text-lg', subText: 'text-[9px]' },
    md: { w: 46, h: 46, text: 'text-2xl', subText: 'text-[11px]' },
    lg: { w: 60, h: 60, text: 'text-3xl', subText: 'text-xs' },
    xl: { w: 80, h: 80, text: 'text-4xl', subText: 'text-sm' },
    '2xl': { w: 110, h: 110, text: 'text-5xl', subText: 'text-base' },
  };

  const currentSize = iconSizes[size];

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`} id="lumani-brand-logo">
      {/* Exact Vector SVG Emblem of Lumani:
          - Sunburst radiance rays atop
          - Navy graduation cap + orange tassel & 5-point star
          - Three connected people figures (Green, Orange, Blue)
          - Open digital 3D book with hidden 'L' spine partition
          - Wi-Fi wave broadcast arcs on base
          - Cyan/Blue circuit tech lines on left
          - Green circuit tech lines on right
      */}
      <div 
        className="relative flex items-center justify-center flex-shrink-0"
        style={{ width: currentSize.w, height: currentSize.h }}
      >
        <svg
          viewBox="0 0 400 320"
          className="w-full h-full drop-shadow-sm transition-transform duration-300 hover:scale-105 overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Page Gradient */}
            <linearGradient id="leftPageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <linearGradient id="rightPageGrad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            {/* Page Borders */}
            <linearGradient id="bookBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1E88E5" />
              <stop offset="50%" stopColor="#0D1B3D" />
              <stop offset="100%" stopColor="#43A047" />
            </linearGradient>

            {/* Sunrise Warm Gradient */}
            <linearGradient id="sunRayGrad" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#FF9800" />
              <stop offset="100%" stopColor="#FFA726" />
            </linearGradient>

            {/* Subtle drop shadow */}
            <filter id="logoShadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="3" stdDeviation="3" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* ========================================================
              1. SUNBURST RAYS (Sunrise of Hope & Opportunity)
             ======================================================== */}
          <g id="sunburst-rays" fill="url(#sunRayGrad)">
            {/* Far Left Ray */}
            <polygon points="160,78 152,70 178,86" />
            {/* Mid-Left Ray */}
            <polygon points="174,60 168,50 188,78" />
            {/* Near-Left Ray */}
            <polygon points="190,48 186,36 198,72" />
            {/* Central Top Ray (Tallest) */}
            <polygon points="200,30 196,68 204,68" />
            {/* Near-Right Ray */}
            <polygon points="210,48 214,36 202,72" />
            {/* Mid-Right Ray */}
            <polygon points="226,60 232,50 212,78" />
            {/* Far Right Ray */}
            <polygon points="240,78 248,70 222,86" />
          </g>

          {/* ========================================================
              2. STAR OF EXCELLENCE (Achievement)
             ======================================================== */}
          <g id="excellence-star" transform="translate(258, 68) rotate(12)">
            <polygon
              points="0,-13 4,-4 13,-3 6,4 8,13 0,8 -8,13 -6,4 -13,-3 -4,-4"
              fill="#FF9800"
            />
          </g>

          {/* ========================================================
              3. GRADUATION CAP (Academic Mastery & Excellence)
             ======================================================== */}
          <g id="graduation-cap">
            {/* Diamond Mortarboard Top */}
            <polygon
              points="200,64 238,81 200,98 162,81"
              fill="#0D1B3D"
              stroke="#152A5E"
              strokeWidth="1.5"
            />
            {/* Skull Cap base under mortarboard */}
            <path
              d="M178,88 Q200,105 222,88 L222,96 Q200,112 178,96 Z"
              fill="#081126"
            />
            {/* Orange Cap Tassel */}
            <path
              d="M200,81 L230,88 L229,106"
              stroke="#FF9800"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Tassel Bobble / Fringe */}
            <circle cx="200" cy="81" r="2.5" fill="#FF9800" />
            <polygon points="226,106 232,106 230,113" fill="#FF9800" />
          </g>

          {/* ========================================================
              4. THREE CONNECTED PEOPLE (Learner, Teacher, Parent)
             ======================================================== */}
          <g id="community-figures">
            {/* Left Figure (Growth Green #43A047) */}
            <circle cx="152" cy="115" r="10.5" fill="#43A047" />
            <path
              d="M133,136 C134,124 150,124 168,130 C154,136 142,136 133,136 Z"
              fill="#43A047"
            />

            {/* Center Figure (Achievement Orange #FF9800) */}
            <circle cx="200" cy="115" r="12" fill="#FF9800" />
            <path
              d="M168,127 C182,128 190,135 200,158 C210,135 218,128 232,127 C220,138 212,154 200,166 C188,154 180,138 168,127 Z"
              fill="#FF9800"
            />

            {/* Right Figure (Technology Blue #1E88E5) */}
            <circle cx="248" cy="115" r="10.5" fill="#1E88E5" />
            <path
              d="M267,136 C266,124 250,124 232,130 C246,136 258,136 267,136 Z"
              fill="#1E88E5"
            />
          </g>

          {/* ========================================================
              5. OPEN DIGITAL BOOK WITH EMBEDDED 'L' & 3D PAGES
             ======================================================== */}
          <g id="open-digital-book">
            {/* Outer Navy Book Base & Spine Background */}
            <path
              d="M112,152 L198,185 L200,248 L114,212 Z"
              fill="#0D1B3D"
            />
            <path
              d="M288,152 L202,185 L200,248 L286,212 Z"
              fill="#0D1B3D"
            />

            {/* Left Page (White / Crisp Light Gray 3D Surface) */}
            <path
              d="M120,143 L193,164 L193,218 L122,196 Z"
              fill="url(#leftPageGrad)"
              stroke="#0D1B3D"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Left Page Subtle Inner Horizon Fold Lines */}
            <path
              d="M128,152 L185,169 M128,162 L185,178 M128,172 L185,188 M128,182 L185,198"
              stroke="#CBD5E1"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />

            {/* Right Page (White / Crisp Light Gray 3D Surface) */}
            <path
              d="M280,143 L207,164 L207,218 L278,196 Z"
              fill="url(#rightPageGrad)"
              stroke="#0D1B3D"
              strokeWidth="4"
              strokeLinejoin="round"
            />
            {/* Right Page Subtle Inner Horizon Fold Lines */}
            <path
              d="M272,152 L215,169 M272,162 L215,178 M272,172 L215,188 M272,182 L215,198"
              stroke="#CBD5E1"
              strokeWidth="1.2"
              strokeOpacity="0.4"
            />

            {/* THE HIDDEN / PROMINENT 'L' SHAPE IN THE CENTRAL SPINE */}
            {/* Vertical stem of 'L' on left spine */}
            <path
              d="M176,160 L192,164 L192,234 L176,230 Z"
              fill="#0D1B3D"
            />
            {/* Horizontal foot of 'L' extending right */}
            <path
              d="M176,224 L224,224 L224,236 L176,236 Z"
              fill="#0D1B3D"
            />
            {/* Inner highlight defining the 'L' */}
            <path
              d="M182,166 L182,228 L220,228"
              stroke="#FFFFFF"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Book Bottom Ribbons / Layered Base */}
            <path
              d="M116,212 Q156,220 200,248 Q244,220 284,212 L278,220 Q240,228 200,256 Q160,228 122,220 Z"
              fill="#0D1B3D"
            />

            {/* Wi-Fi Broadcast Waves at Bottom Spine */}
            <path
              d="M188,230 Q200,223 212,230"
              stroke="#FFFFFF"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M192,238 Q200,233 208,238"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* ========================================================
              6. CIRCUIT LINES & TECH NODES (Technology & Sync)
             ======================================================== */}
          {/* Left Tech Circuit Traces (Blue #1E88E5) */}
          <g id="left-circuits" stroke="#1E88E5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Upper Trace */}
            <path d="M112,176 L86,176 L76,166 L64,166" fill="none" />
            <circle cx="62" cy="166" r="4.5" fill="#1E88E5" stroke="#FFFFFF" strokeWidth="1" />

            {/* Middle Trace */}
            <path d="M114,190 L76,190 L64,198 L50,198" fill="none" />
            <circle cx="48" cy="198" r="4.5" fill="#1E88E5" stroke="#FFFFFF" strokeWidth="1" />

            {/* Lower Trace */}
            <path d="M116,204 L84,204 L74,214 L60,214" fill="none" />
            <circle cx="58" cy="214" r="4.5" fill="#1E88E5" stroke="#FFFFFF" strokeWidth="1" />
          </g>

          {/* Right Tech Circuit Traces (Green #43A047) */}
          <g id="right-circuits" stroke="#43A047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            {/* Upper Trace */}
            <path d="M288,176 L314,176 L324,166 L336,166" fill="none" />
            <circle cx="338" cy="166" r="4.5" fill="#43A047" stroke="#FFFFFF" strokeWidth="1" />

            {/* Middle Trace */}
            <path d="M286,190 L324,190 L336,198 L350,198" fill="none" />
            <circle cx="352" cy="198" r="4.5" fill="#43A047" stroke="#FFFFFF" strokeWidth="1" />

            {/* Lower Trace */}
            <path d="M284,204 L316,204 L326,214 L340,214" fill="none" />
            <circle cx="342" cy="214" r="4.5" fill="#43A047" stroke="#FFFFFF" strokeWidth="1" />
          </g>
        </svg>
      </div>

      {/* Brand Text Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col leading-tight">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-['Poppins',sans-serif] font-bold tracking-tight ${
                variant === 'monochrome-white'
                  ? 'text-white'
                  : 'text-[#0D1B3D]'
              } ${currentSize.text}`}
            >
              Lumani
            </span>
            <span className="inline-block w-2 h-2 rounded-full bg-[#1E88E5] animate-pulse" />
          </div>

          {showSubtitle && (
            <span
              className={`font-['Inter',sans-serif] font-medium tracking-wide uppercase ${
                variant === 'monochrome-white'
                  ? 'text-slate-300'
                  : 'text-slate-500'
              } ${currentSize.subText}`}
            >
              by Erica Innovations
            </span>
          )}
        </div>
      )}
    </div>
  );
};
