'use client';

import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function Footer() {
  return (
    <footer className="bg-[#F5EFE3] border-t border-[#EAE1D1] pt-8 pb-20 sm:pb-8 text-[#4A3E33] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
          <div>
            <h4 className="font-extrabold text-sm text-neutral-900">
              Sri Sabari Swami Hot Chips (हॉट चिप्स)
            </h4>
            <p className="text-neutral-500 mt-0.5">
              Fresh South Indian Chips & Traditional Savouries on Kanke Road, Ranchi
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-semibold text-neutral-700">
            <a href={`tel:${STORE_INFO.phoneRaw}`} className="hover:text-amber-700 flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span>·</span>
            <a href={`https://wa.me/${STORE_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 flex items-center gap-1">
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-neutral-400 text-[11px]">
          <div>
            98Q7+PP7, Kanke Rd, Jawahar Nagar, Hatma, Ranchi, Jharkhand 834008
          </div>
          <div>
            © {new Date().getFullYear()} Sri Sabari Swami Hot Chips. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
