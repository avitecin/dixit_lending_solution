"use client";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg safe-area-pb">
      <div className="grid grid-cols-3 divide-x divide-gray-200">
        <a
          href="tel:+919096979328"
          className="flex flex-col items-center justify-center py-3 gap-1 text-brand-green hover:bg-bg-light-green transition-colors"
        >
          <Phone size={20} />
          <span className="text-xs font-medium">Call</span>
        </a>
        <a
          href="https://wa.me/919096979328"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-brand-green hover:bg-bg-light-green transition-colors"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          href="/#enquiry"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-brand-green text-white hover:bg-brand-green-dark transition-colors"
        >
          <span className="text-sm font-bold">Apply</span>
          <span className="text-xs opacity-80">Now</span>
        </Link>
      </div>
    </div>
  );
}
