'use client';

import { MessageCircle, Phone, Star, MapPin, Sparkles } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Hero({ onExploreMenu }) {
  return (
    <section className="pt-4 pb-8 sm:py-12 bg-[#FAF7F0] border-b border-neutral-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Visual Storefront Photo on Mobile */}
          <div className="md:col-span-5 md:order-2">
            <div className="relative rounded-2xl overflow-hidden shadow-md bg-neutral-900 border border-neutral-200/80 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="./images/storefront-night.png"
                alt="Sri Sabari Swami Hot Chips Counter Kanke Road Ranchi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white text-sm leading-tight">
                    Sri Sabari Swami Counter
                  </div>
                  <div className="text-[11px] text-neutral-300">
                    Kanke Road, Hatma, Ranchi
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white font-bold text-[10px]">
                  Fresh Batches Daily
                </span>
              </div>
            </div>
          </div>

          {/* Text Content & Primary Action */}
          <div className="md:col-span-7 md:order-1 space-y-4 text-left">
            
            {/* Rating & Status Bar */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                4.2 (77 Reviews)
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                Open Now · Closes 10:30 PM
              </span>
              <span className="px-2 py-1 rounded-full bg-neutral-100 text-neutral-700 font-medium">
                🌿 Pure Veg
              </span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight">
                Fresh South Indian Hot Chips & Traditional Savouries
              </h1>
              <p className="text-xs sm:text-sm font-semibold text-neutral-500 mt-1">
                श्री शबरी स्वामी हॉट चिप्स · Below Hotel Stay WithInn, Kanke Road
              </p>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Batch-fried fresh daily by South Indian snack masters. Enjoy authentic Kerala banana chips, crispy butter murukku, spicy mixtures, and traditional sweets.
            </p>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <a
                href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to order fresh chips and snacks from Sri Sabari Swami Hot Chips Ranchi.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Order on WhatsApp</span>
              </a>

              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="py-3 px-4 rounded-xl bg-white border border-neutral-300 hover:bg-neutral-50 text-neutral-800 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xs transition active:scale-95"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call 090310 82851</span>
              </a>
            </div>

            {/* Quick feature tags */}
            <div className="pt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-500">
              <span>✓ Fresh Raw Bananas</span>
              <span>✓ Melt-in-mouth Murukku</span>
              <span>✓ ₹1–600 Pocket-Friendly</span>
              <span>✓ Quick Takeaway</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
