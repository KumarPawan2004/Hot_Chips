'use client';

import { Phone, MessageCircle, ShoppingBag, MapPin } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Header({ cartCount = 0, onOpenCart }) {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/80 shadow-xs">
      <div className="max-w-6xl mx-auto px-3.5 sm:px-6">
        <div className="flex items-center justify-between py-2.5 sm:py-3.5 min-h-[60px] sm:min-h-[64px] gap-2">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 min-w-0 group">
            {/* Logo Mark */}
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex flex-col items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <span className="text-[7px] sm:text-[8px] uppercase tracking-wider font-bold text-amber-100 leading-none">HOT</span>
              <span className="text-[10px] sm:text-[11px] font-black tracking-tight leading-tight">CHIPS</span>
            </div>

            {/* Brand Text */}
            <div className="min-w-0 flex-1">
              <h1 className="font-extrabold text-[13px] sm:text-base text-neutral-900 tracking-tight leading-snug truncate">
                Sri Sabari Swami Hot Chips
              </h1>
              <div className="text-[11px] text-neutral-500 flex items-center gap-1.5 leading-none mt-0.5">
                <span className="truncate">Kanke Rd, Ranchi</span>
                <span className="inline-block w-1 h-1 rounded-full bg-neutral-300 shrink-0"></span>
                <span className="text-emerald-700 font-semibold shrink-0 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                  <span className="hidden sm:inline">Open till 10:30 PM</span>
                  <span className="sm:hidden">Open</span>
                </span>
              </div>
            </div>
          </a>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            {/* Direct Phone Call */}
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="w-9 h-9 sm:w-auto sm:h-9 sm:px-3 rounded-xl border border-neutral-200 text-neutral-700 hover:bg-neutral-50 font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 bg-white shadow-2xs"
              title="Call Shop: 090310 82851"
              aria-label="Call Shop"
            >
              <Phone className="w-4 h-4 text-amber-600 shrink-0" />
              <span className="hidden md:inline">090310 82851</span>
              <span className="hidden sm:inline md:hidden">Call</span>
            </a>

            {/* Direct WhatsApp (Visible on larger screens in header) */}
            <a
              href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Sri Sabari Swami Hot Chips Ranchi! I want to order snacks.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 h-9 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-xs transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Order Tray / Cart */}
            <button
              onClick={onOpenCart}
              className="relative w-9 h-9 sm:w-auto sm:h-9 sm:px-3 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-95"
              aria-label="View Order Tray"
              title="Order Tray"
            >
              <ShoppingBag className="w-4 h-4 text-amber-700 shrink-0" />
              <span className="hidden sm:inline">Tray</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 sm:static w-4 h-4 sm:w-5 sm:h-5 bg-red-600 text-white text-[9px] sm:text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
