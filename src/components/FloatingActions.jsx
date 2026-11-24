'use client';

import { Phone, MessageCircle, ShoppingBag } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function FloatingActions({ cartCount = 0, onOpenCart }) {
  const directWhatsAppUrl = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to order fresh chips from Sri Sabari Swami Hot Chips Ranchi.')}`;

  return (
    <>
      {/* Floating Tray Button if Cart has items (All screens) */}
      {cartCount > 0 && (
        <div className="fixed bottom-18 sm:bottom-6 right-4 sm:right-6 z-40">
          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-lg transition active:scale-95 border-2 border-white"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Order Tray ({cartCount})</span>
          </button>
        </div>
      )}

      {/* Desktop Floating WhatsApp Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-30">
        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg transition active:scale-95 border-2 border-white text-xs font-bold"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span>Order on WhatsApp</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (Super clean, native app feel) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-2.5 px-3 flex items-center gap-2">
        <a
          href={`tel:${STORE_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 rounded-xl border border-neutral-300 text-neutral-800 font-bold text-xs flex items-center justify-center gap-1.5 active:bg-neutral-100 transition"
        >
          <Phone className="w-3.5 h-3.5 text-amber-700" />
          <span>Call Shop</span>
        </a>

        <a
          href={directWhatsAppUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.4] py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition"
        >
          <MessageCircle className="w-4 h-4 fill-white" />
          <span>WhatsApp Order</span>
        </a>
      </div>
    </>
  );
}
