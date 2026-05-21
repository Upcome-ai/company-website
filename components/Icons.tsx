import React from "react";

export const ArrowRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4 9 H14 M10 5 L14 9 L10 13"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowRightSm = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 7 H11 M8 4 L11 7 L8 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path
      d="M3 11 L11 3 M5 3 H11 V9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronDown = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 12 12" fill="none" aria-hidden="true">
    <path
      d="M3 4.5 L6 7.5 L9 4.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BrandMark = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 50 50" fill="none" aria-hidden="true">
    <path
      d="M5 6 V20 a20 20 0 0 0 40 0 V6 H32 V20 a7 7 0 0 1 -14 0 V6 Z"
      fill="#F2EDE2"
    />
    <path
      d="M14 30 C 18 36 22 38 25 38 C 28 38 32 36 36 30 C 36 36 30 44 25 44 C 20 44 14 36 14 30 Z"
      fill="#F2EDE2"
    />
  </svg>
);
