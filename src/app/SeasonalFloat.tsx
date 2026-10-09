"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type SeasonalFloatProps = {
  title: string;
  month: string;
  emoji: string;
  accentEmoji: string;
  image: string | null;
};

const bats = Array.from({ length: 8 }, () => "🦇");

export default function SeasonalFloat({
  title,
  month,
  emoji,
  accentEmoji,
  image,
}: SeasonalFloatProps) {
  const [burstId, setBurstId] = useState(0);
  const [showBurst, setShowBurst] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  }, []);

  function releaseBats() {
    setBurstId((current) => current + 1);
    setShowBurst(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setShowBurst(false), 2600);
  }

  return (
    <button
      aria-label={`Tocar para animar la decoración de ${title}`}
      className="seasonal-float"
      onClick={releaseBats}
      type="button"
    >
      {showBurst && (
        <span aria-hidden="true" className="seasonal-float__burst" key={burstId}>
          {bats.map((bat, index) => (
            <span className="seasonal-float__bat" key={`${burstId}-${index}`}>
              {bat}
            </span>
          ))}
          <span className="seasonal-float__twinkle">✨</span>
        </span>
      )}
      <span className="seasonal-float__spark" aria-hidden="true">{accentEmoji}</span>
      <span className="seasonal-float__art" aria-hidden="true">
        {image ? (
          <Image alt="" height={64} src={image} unoptimized width={64} />
        ) : emoji}
      </span>
      <span className="seasonal-float__title">{title}</span>
      <span className="seasonal-float__month">{month}</span>
    </button>
  );
}
