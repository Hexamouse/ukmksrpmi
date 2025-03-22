// components/Clock.tsx
"use client";

import * as React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function Clock() {
  const [timeInfo, setTimeInfo] = React.useState<{
    date: string;
    wibTime: string;
    utcTime: string;
  } | null>(null);
  const [isTimeVisible, setIsTimeVisible] = React.useState(false);

  React.useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const date = now.toLocaleString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Jakarta',
      }).toUpperCase();

      const wibTime = now.toLocaleString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'Asia/Jakarta',
      }).replace(/\./g, ' : ');

      const utcTime = now.toLocaleString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: 'UTC',
      }).replace(/\./g, ' : ');

      setTimeInfo({ date, wibTime, utcTime });
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleTimeVisibility = () => {
    setIsTimeVisible(!isTimeVisible);
  };

  return (
    <div className="w-full text-xs sm:text-sm">
      <div className="sm:hidden flex flex-col items-center gap-2">
        <div className="text-gray-800 text-center">
          {timeInfo ? timeInfo.date : "Memuat tanggal..."}
        </div>
        <button
          onClick={toggleTimeVisibility}
          className="flex items-center gap-1 text-gray-600 focus:outline-none"
        >
          {isTimeVisible ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
        {isTimeVisible && (
          <div className="text-gray-600 text-center">
            STANDAR WAKTU INDONESIA{" "}
            {timeInfo ? (
              <>
                <span className="text-green-600">{timeInfo.wibTime} WIB</span>
                {" / "}
                <span className="text-green-600">{timeInfo.utcTime} UTC</span>
              </>
            ) : (
              "... WIB / ... UTC"
            )}
          </div>
        )}
      </div>

      <div className="hidden sm:flex flex-row justify-between items-center gap-0">
        <div className="text-gray-600 text-left">
          STANDAR WAKTU INDONESIA{" "}
          {timeInfo ? (
            <>
              <span className="text-green-600">{timeInfo.wibTime} WIB</span>
              {" / "}
              <span className="text-green-600">{timeInfo.utcTime} UTC</span>
            </>
          ) : (
            "... WIB / ... UTC"
          )}
        </div>
        <div className="text-gray-800 text-right">
          {timeInfo ? timeInfo.date : "Memuat tanggal..."}
        </div>
      </div>
    </div>
  );
}