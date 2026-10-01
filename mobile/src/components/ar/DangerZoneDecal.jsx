/**
 * @file DangerZoneDecal.jsx
 * @description Floor level perspective ellipse danger perimeter from Stitch live AR screens.
 * Strict JavaScript only - no TypeScript syntax.
 */

import React from 'react';

export function DangerZoneDecal({ label = '2.5M HAZARD ZONE', color = '#ba1a1a' }) {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 70,
        left: '50%',
        transform: 'translateX(-50%)',
        width: 300,
        height: 160,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 15,
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 320 200" fill="none">
        {/* Outer Perimeter Radius Ring */}
        <ellipse
          cx="160"
          cy="115"
          rx="135"
          ry="60"
          stroke={color}
          strokeWidth="2.5"
          strokeDasharray="6 4"
          className="opacity-80"
          style={{ animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        />
        {/* Intermediate Fill Area */}
        <ellipse cx="160" cy="115" rx="105" ry="46" fill="rgba(239, 68, 68, 0.12)" />
        {/* Inner Line */}
        <ellipse cx="160" cy="115" rx="75" ry="32" stroke="#fea619" strokeWidth="2" />
        {/* Center Tag */}
        <g transform="translate(110, 150)">
          <rect width="100" height="22" rx="4" fill="#0f172a" opacity="0.95" />
          <text
            x="50"
            y="15"
            textAnchor="middle"
            fill="#fdfcff"
            fontSize="10"
            fontWeight="700"
            fontFamily="'Inter', sans-serif"
            letterSpacing="0.05em"
          >
            {label}
          </text>
        </g>
      </svg>
    </div>
  );
}
