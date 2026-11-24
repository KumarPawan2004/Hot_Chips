'use client';

import { Star, ExternalLink } from 'lucide-react';
import { REVIEWS_DATA } from '../data/reviews';
import { STORE_INFO } from '../data/storeInfo';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-8 sm:py-12 bg-[#FAF7F0] border-t border-[#EAE1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1 text-amber-500 text-sm mb-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight">
            4.2 ★ Rated on Google Maps
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500 mt-1">
            Trusted by 77+ local snack lovers across Ranchi.
          </p>
        </div>

        {/* 3 Clean Customer Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
          {REVIEWS_DATA.reviews.slice(0, 3).map((rev) => (
            <div
              key={rev.id}
              className="p-4 rounded-2xl bg-white border border-neutral-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex text-amber-400 text-xs">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-neutral-400 font-medium">Google Review</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed italic mb-3">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div className="pt-2 border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-xs text-neutral-900">{rev.author}</h4>
                  <p className="text-[10px] text-neutral-400">{rev.role.split('·')[0]}</p>
                </div>
                <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google link */}
        <div className="mt-5 text-center">
          <a
            href={STORE_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 hover:underline"
          >
            <span>Read all 77 reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
