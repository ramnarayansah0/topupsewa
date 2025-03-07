"use client";

import { Diamond, Star } from "lucide-react";

interface TopUpCardProps {
  amount: string;
  type: string;
  special?: boolean;
}

export const TopUpCard = ({ amount, type, special }: TopUpCardProps) => {
  return (
    <div className={`p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer ${special ? 'bg-gradient-to-r from-blue-500 to-teal-400 text-white' : 'bg-white hover:shadow-xl'}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">(Indonesia)</span>
          {special ? <Star className="w-5 h-5" /> : <Diamond className="w-5 h-5" />}
        </div>
        <span className="text-lg font-bold">{amount}</span>
      </div>
      <div className="mt-2 text-sm opacity-80">{type}</div>
    </div>
  );
};