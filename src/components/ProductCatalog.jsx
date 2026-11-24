'use client';

import { useState, useMemo } from 'react';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { STORE_INFO } from '../data/storeInfo';
import { Search, MessageCircle, Plus, Check, ShoppingBag, Sparkles } from 'lucide-react';

export default function ProductCatalog({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVariants, setSelectedVariants] = useState({}); // { [productId]: variantIndex }
  const [addedAnimation, setAddedAnimation] = useState({}); // { [productId]: boolean }

  const getSelectedVariant = (product) => {
    const idx = selectedVariants[product.id] ?? 0;
    return product.variants[idx] || product.variants[0];
  };

  const handleVariantChange = (productId, variantIdx) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variantIdx
    }));
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(item => {
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesVernacular = item.vernacular.toLowerCase().includes(q);
        const matchesTags = item.tags.some(t => t.toLowerCase().includes(q));
        if (!matchesName && !matchesVernacular && !matchesTags) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const handleAddToCartClick = (product) => {
    const variant = getSelectedVariant(product);
    onAddToCart({
      id: `${product.id}-${variant.weight}`,
      productId: product.id,
      name: product.name,
      vernacular: product.vernacular,
      weight: variant.weight,
      price: variant.price,
      quantity: 1,
    });

    setAddedAnimation(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedAnimation(prev => ({ ...prev, [product.id]: false }));
    }, 1000);
  };

  const generateWhatsAppUrl = (product) => {
    const variant = getSelectedVariant(product);
    const text = `Hello Sri Sabari Swami Hot Chips Ranchi! 🍿\nI would like to order:\n- *${product.name}* (${variant.weight}) - ₹${variant.price}\n\nPlease confirm availability for pickup at Kanke Road counter.`;
    return `https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="menu" className="py-8 sm:py-12 bg-[#FAF7F0] border-t border-[#EAE1D1]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              Our Fresh Snacks Menu
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-0.5">
              Select pack weight and order directly on WhatsApp or add to your Tray.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search banana chips, murukku..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm rounded-xl bg-neutral-50 border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-amber-500 text-neutral-800"
            />
          </div>
        </div>

        {/* Category Pills (Horizontal scroll on mobile) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-amber-600 text-white shadow-xs'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {filteredProducts.map((product) => {
            const currentVariant = getSelectedVariant(product);
            const isAdded = addedAnimation[product.id];

            return (
              <div
                key={product.id}
                className="snack-card p-4 sm:p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Top line: Name & Badge */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-neutral-900 leading-snug">
                        {product.name}
                      </h3>
                      <span className="text-[11px] text-amber-800/80 font-medium">
                        {product.vernacular}
                      </span>
                    </div>

                    {product.isSignature && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 shrink-0">
                        Popular
                      </span>
                    )}
                  </div>

                  {/* Short description */}
                  <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Pack Weight Selector */}
                  <div className="mt-3 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-neutral-500">
                      Pack Size:
                    </span>
                    <div className="flex items-center gap-1.5">
                      {product.variants.map((v, vIdx) => {
                        const isSelected = (selectedVariants[product.id] ?? 0) === vIdx;
                        return (
                          <button
                            key={vIdx}
                            onClick={() => handleVariantChange(product.id, vIdx)}
                            className={`px-2 py-1 rounded-lg text-xs font-bold border transition ${
                              isSelected
                                ? 'bg-amber-600 text-white border-amber-600'
                                : 'bg-neutral-50 text-neutral-700 border-neutral-200 hover:bg-neutral-100'
                            }`}
                          >
                            {v.weight}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-lg font-black text-neutral-900 leading-none">
                      ₹{currentVariant.price}
                    </span>
                    <span className="text-[11px] text-neutral-500 block">
                      for {currentVariant.weight}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5">
                    {/* Add to Tray Button */}
                    <button
                      onClick={() => handleAddToCartClick(product)}
                      className={`p-2 rounded-xl border text-xs font-bold transition flex items-center gap-1 ${
                        isAdded
                          ? 'bg-emerald-600 text-white border-emerald-600'
                          : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-700 border-neutral-200'
                      }`}
                      title="Add to Tray"
                    >
                      {isAdded ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4 text-amber-700" />}
                      <span className="hidden sm:inline">{isAdded ? 'Added' : 'Tray'}</span>
                    </button>

                    {/* Direct WhatsApp Order */}
                    <a
                      href={generateWhatsAppUrl(product)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs transition active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-white" />
                      <span>Order</span>
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Clean Bulk Order Banner */}
        <div className="mt-8 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-sm text-neutral-900">
              Need Bulk or Festive Orders?
            </h4>
            <p className="text-xs text-neutral-600 mt-0.5">
              Freshly packed party packs for family events, Diwali, and get-togethers.
            </p>
          </div>
          <a
            href={`https://wa.me/${STORE_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Sri Sabari Swami Hot Chips, I want to inquire about a bulk snacks order.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shrink-0 flex items-center gap-1.5 shadow-xs"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Chat for Bulk Order</span>
          </a>
        </div>

      </div>
    </section>
  );
}
