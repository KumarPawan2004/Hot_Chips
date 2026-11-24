'use client';

import { useState } from 'react';
import { X, MessageCircle, Phone, Check, Flame, ShieldAlert, Sparkles, Plus, Minus } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function QuickOrderModal({ product, onClose, onAddToCart }) {
  if (!product) return null;

  const [selectedVariantIdx, setSelectedVariantIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const variant = product.variants[selectedVariantIdx] || product.variants[0];
  const totalPrice = variant.price * quantity;

  const handleAdd = () => {
    onAddToCart({
      id: `${product.id}-${variant.weight}`,
      productId: product.id,
      name: product.name,
      vernacular: product.vernacular,
      weight: variant.weight,
      price: variant.price,
      quantity: quantity,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 900);
  };

  const handleWhatsAppOrder = () => {
    const text = `Hello Sri Sabari Swami Hot Chips Ranchi! 🍿\nI would like to order:\n- *${quantity}x ${product.name}* (${variant.weight})\n- Total Estimated: ₹${totalPrice}\n\nPlease confirm availability for pickup at Kanke Road counter.`;
    window.open(`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-[#EDE2D4] animate-in zoom-in-95 duration-200 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border-b border-[#ECE2D2] pr-14">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-600 text-white">
              {product.badge}
            </span>
            <span className="text-xs text-neutral-500 font-semibold">
              Category: {product.category.toUpperCase()}
            </span>
          </div>
          <h3 className="text-2xl font-black text-neutral-900 leading-tight">
            {product.name}
          </h3>
          <div className="text-sm font-bold text-amber-800 font-mono mt-0.5">
            {product.vernacular}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* Detailed description */}
          <div>
            <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-1">
              About This Snack
            </h4>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Highlights & Tags */}
          <div className="flex flex-wrap gap-1.5">
            {product.tags.map((t, idx) => (
              <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-amber-50 text-amber-900 rounded-lg border border-amber-200/80">
                ✓ {t}
              </span>
            ))}
          </div>

          {/* Spice level & Preparation */}
          <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 text-xs">
            <div>
              <span className="text-neutral-500 block mb-0.5">Spice Rating</span>
              <div className="font-bold text-neutral-900 flex items-center gap-1">
                {product.spiceLevel === 0 ? 'Mild / Salted Only' : `${product.spiceLevel} / 3 Spice`}
                <span>{product.spiceLevel > 0 ? '🌶️'.repeat(product.spiceLevel) : '🧂'}</span>
              </div>
            </div>
            <div>
              <span className="text-neutral-500 block mb-0.5">Frying Quality</span>
              <div className="font-bold text-emerald-700 flex items-center gap-1">
                100% Pure Veg · Daily Batch
              </div>
            </div>
          </div>

          {/* Select Pack Size */}
          <div>
            <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
              Select Pack Weight:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {product.variants.map((v, idx) => {
                const isSelected = selectedVariantIdx === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedVariantIdx(idx)}
                    className={`p-2.5 rounded-xl text-center border font-bold transition ${
                      isSelected
                        ? 'border-amber-600 bg-amber-500 text-white shadow-md'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    <div className="text-sm">{v.weight}</div>
                    <div className={`text-xs ${isSelected ? 'text-amber-100' : 'text-neutral-500'}`}>
                      ₹{v.price}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Quantity selector */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs font-bold text-neutral-700 uppercase tracking-wider">
              Quantity Packs:
            </span>
            <div className="flex items-center border border-neutral-200 rounded-xl overflow-hidden bg-neutral-50">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 flex items-center justify-center hover:bg-neutral-200 text-neutral-700 transition"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-sm text-neutral-900">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 flex items-center justify-center hover:bg-neutral-200 text-neutral-700 transition"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Total calculation banner */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 flex items-center justify-between">
            <span className="text-xs font-semibold text-neutral-600">Total Calculation:</span>
            <span className="text-lg font-black text-amber-900">
              ₹{totalPrice} <span className="text-xs font-normal text-neutral-500">({quantity} × ₹{variant.price})</span>
            </span>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-5 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row gap-2.5">
          <button
            type="button"
            onClick={handleAdd}
            className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition ${
              added ? 'bg-emerald-600 text-white' : 'bg-white border-2 border-amber-500 text-amber-900 hover:bg-amber-50'
            }`}
          >
            {added ? (
              <>
                <Check className="w-4 h-4" />
                <span>Added to Order Tray!</span>
              </>
            ) : (
              <span>+ Add to Order Tray</span>
            )}
          </button>

          <button
            type="button"
            onClick={handleWhatsAppOrder}
            className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Order on WhatsApp Now</span>
          </button>
        </div>

      </div>
    </div>
  );
}
