import React from 'react';

const AyahCard = ({ ayah, number }) => {
  return (
    <div className="card card-hover">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 flex-shrink-0 rounded-full bg-gold/20 flex items-center justify-center text-gold text-sm font-bold">
          {number}
        </div>
        <div className="flex-1">
          <p className="font-arabic text-xl md:text-2xl text-right text-white leading-loose">
            {ayah.text || `🕋 ${number}`}
          </p>
          {ayah.translation && (
            <div className="mt-3 border-t border-surface-light/50 pt-3">
              <p className="text-text-secondary text-sm md:text-base leading-relaxed">
                {ayah.translation}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AyahCard;