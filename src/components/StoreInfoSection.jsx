'use client';

import { MapPin, Phone, MessageCircle, Clock, Navigation } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function StoreInfoSection() {
  return (
    <section id="store-info" className="py-8 sm:py-12 bg-white border-t border-[#EAE1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Store Info Card */}
          <div className="md:col-span-5 p-5 rounded-2xl bg-white border border-neutral-200 shadow-xs space-y-4 text-left">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
                <span className="text-xs font-bold text-emerald-800">
                  Open Today · Closes 10:30 PM
                </span>
              </div>
              <h3 className="text-lg font-bold text-neutral-900">
                Store Location & Timings
              </h3>
            </div>

            <div className="text-xs sm:text-sm text-neutral-700 space-y-1">
              <p className="font-semibold text-neutral-900">
                {STORE_INFO.address}
              </p>
              <p className="text-neutral-500 text-xs">
                Landmark: {STORE_INFO.landmark}
              </p>
            </div>

            <div className="pt-2 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-600">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-700" />
                <span>9:00 AM – 10:30 PM</span>
              </span>
              <span className="font-semibold text-neutral-800">Open All 7 Days</span>
            </div>

            {/* Direct Contact Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${STORE_INFO.phoneRaw}`}
                className="py-2.5 px-3 rounded-xl border border-neutral-300 hover:bg-neutral-50 text-neutral-800 text-xs font-bold flex items-center justify-center gap-1.5 transition"
              >
                <Phone className="w-3.5 h-3.5 text-amber-700" />
                <span>Call Shop</span>
              </a>

              <a
                href={STORE_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-xs transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="md:col-span-7 rounded-2xl overflow-hidden border border-neutral-200 shadow-xs h-64 sm:h-72 bg-neutral-100">
            <iframe
              title="Sri Sabari Swami Hot Chips Ranchi Google Map"
              src="https://maps.google.com/maps?q=23.3892872,85.3142875&hl=en&z=16&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>
    </section>
  );
}
