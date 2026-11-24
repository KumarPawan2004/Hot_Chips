'use client';

import { MapPin, CheckCircle2 } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function AboutSection() {
  return (
    <section id="about" className="py-8 sm:py-12 bg-white border-t border-[#EAE1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center">
          
          {/* Landmark Photo */}
          <div className="md:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xs border border-neutral-200 aspect-[4/3]">
              <img
                src="./images/kanke-road-store.png"
                alt="Hotel Stay WithInn building ground floor Hot Chips store Kanke Road Ranchi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                <span className="font-bold text-white block">
                  Ground Floor, Below Hotel Stay WithInn
                </span>
                <span className="text-[11px] text-neutral-300">
                  Kanke Road, Hatma, Ranchi
                </span>
              </div>
            </div>
          </div>

          {/* Clean Description */}
          <div className="md:col-span-7 space-y-3 text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
              Authentic South Indian Snack Counter in Ranchi
            </h2>

            <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
              At <strong>Sri Sabari Swami Hot Chips</strong>, our snacks are made using authentic South Indian culinary methods. Fresh unripe bananas and potatoes are sliced and fried throughout the day so customers always receive warm, crispy chips with an authentic aroma.
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1 text-xs text-neutral-700 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Unripe Kerala Nendran Bananas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Pure Vegetarian</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Fresh Daily Batches</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Airtight Sealed Packaging</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-neutral-500">
              💡 <em>Tip: Parking right in front can be tight during peak hours. You can call ahead at <strong>090310 82851</strong> for instant roadside handover.</em>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
