'use client';

import { Flame, ShieldCheck, HeartHandshake, PackageCheck } from 'lucide-react';

export default function BadgeBar() {
  const highlights = [
    { icon: Flame, text: 'Fried Fresh Daily' },
    { icon: HeartHandshake, text: 'South Indian Recipe' },
    { icon: ShieldCheck, text: '100% Pure Veg' },
    { icon: PackageCheck, text: 'Sealed for Crispness' },
  ];

  return (
    <div className="bg-white border-b border-neutral-200/60 py-3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 text-center">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center justify-center gap-2 py-1.5 px-2 rounded-lg bg-neutral-50 border border-neutral-100 text-xs font-semibold text-neutral-700">
                <Icon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="truncate">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
