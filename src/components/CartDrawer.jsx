'use client';

import { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, Phone, ShoppingBag, ArrowRight } from 'lucide-react';
import { STORE_INFO } from '../data/storeInfo';

export default function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onClearCart }) {
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const generateWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    let message = `🍿 *NEW ORDER: Sri Sabari Swami Hot Chips, Ranchi*\n`;
    message += `📍 *Store:* Kanke Rd, Hatma, Ranchi\n`;
    message += `----------------------------------------\n`;
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n   Size: ${item.weight} | Qty: ${item.quantity} | ₹${item.price * item.quantity}\n`;
    });

    message += `----------------------------------------\n`;
    message += `*Total Estimate:* ₹${subtotal} (${totalItemsCount} items)\n`;

    if (customerNote.trim()) {
      message += `📝 *Customer Note:* ${customerNote.trim()}\n`;
    }

    message += `\nPlease confirm availability and pickup preparation time at the Kanke Road counter. Thank you!`;

    const url = `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#EBE3D7] bg-[#FAF5EB] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-amber-600 text-white flex items-center justify-center shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-neutral-900 leading-tight">
                Your Order Tray
              </h3>
              <p className="text-xs text-neutral-500 font-medium">
                {totalItemsCount} {totalItemsCount === 1 ? 'pack' : 'packs'} selected for WhatsApp order
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 flex items-center justify-center transition"
            aria-label="Close tray"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center mx-auto text-2xl">
                🍿
              </div>
              <h4 className="text-base font-bold text-neutral-800">Your Tray is Empty</h4>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Explore our hot chips, murukku and mixtures on the menu and tap &ldquo;+ Add to Tray&rdquo; to build your order.
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-sm transition"
              >
                Browse Snacks Menu
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-bold text-neutral-500 uppercase tracking-wider pb-1 border-b border-neutral-100">
                <span>Selected Items</span>
                <button
                  onClick={onClearCart}
                  className="text-red-600 hover:text-red-700 normal-case font-semibold"
                >
                  Clear All
                </button>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-[#FFFDF9] border border-[#EBE3D7] flex items-center justify-between gap-3 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-sm text-neutral-900 truncate">
                      {item.name}
                    </h5>
                    <div className="flex items-center gap-2 text-xs text-neutral-500 mt-0.5">
                      <span className="font-semibold text-amber-800">{item.weight}</span>
                      <span>·</span>
                      <span>₹{item.price} each</span>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-neutral-200 rounded-lg bg-white overflow-hidden shadow-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 flex items-center justify-center hover:bg-neutral-100 text-neutral-700"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-7 text-center font-bold text-xs text-neutral-900">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-neutral-100 text-neutral-700"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-right min-w-[50px]">
                      <div className="font-black text-sm text-neutral-900">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-neutral-400 hover:text-red-600 p-1 transition"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}

              {/* Customer Note */}
              <div className="pt-2">
                <label className="block text-xs font-bold text-neutral-700 mb-1">
                  Optional Note for Shop (e.g. Pickup time, packing preference):
                </label>
                <input
                  type="text"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  placeholder="e.g. Please pack extra spicy / Pickup at 5:30 PM"
                  className="w-full px-3 py-2 text-xs rounded-xl border border-neutral-200 bg-neutral-50 focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
              </div>

              {/* Price range & budget reminder */}
              <div className="p-3 bg-neutral-50 rounded-xl text-xs text-neutral-600 border border-neutral-200 flex items-center justify-between">
                <span>Shop Price Range:</span>
                <span className="font-bold text-neutral-800">₹1 – 600 per person</span>
              </div>
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-[#EBE3D7] bg-[#FAF5EB] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-neutral-600">Estimated Total:</span>
              <div className="text-right">
                <span className="text-2xl font-black text-neutral-900">₹{subtotal}</span>
                <div className="text-[10px] text-neutral-500">Pay at counter upon pickup</div>
              </div>
            </div>

            {/* Direct WhatsApp Order Button */}
            <button
              onClick={generateWhatsAppOrder}
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-700/20 hover:shadow-emerald-700/30 transition active:scale-[0.98]"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Send Order to WhatsApp ({totalItemsCount} items)</span>
            </button>

            {/* Quick Call */}
            <a
              href={`tel:${STORE_INFO.phoneRaw}`}
              className="w-full py-2.5 px-4 rounded-xl bg-white border border-neutral-300 text-neutral-800 hover:bg-neutral-50 font-bold text-xs flex items-center justify-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-700" />
              <span>Or Call Shop to Order: {STORE_INFO.phone}</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
