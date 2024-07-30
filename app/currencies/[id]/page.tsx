"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import useExchange from "@/hooks/useExchange";
import currencies from "@/data/currencies.json";
import { Currency } from "@/types/currency";

type CurrencyKeys = keyof typeof currencies;

interface ApiResponse {
  result?: string;
  documentation?: string;
  terms_of_use?: string;
  time_last_update_unix?: number;
  time_last_update_utc?: string;
  time_next_update_unix?: number;
  time_next_update_utc?: string;
  base_code?: string;
  conversion_rates?: ConversionRates;
}

interface ConversionRates {
  [key: string]: number;
}

export default function CurrencyPage({ params }: { params: { id: string } }) {
  const currency = currencies[params.id as CurrencyKeys];
  const [currencyData, setCurrencyData] = useState<ApiResponse>({});

  useEffect(() => {
    const fetchCurrencyData = async () => {
      const data = await useExchange(currency.code);
      setCurrencyData(data);
    };

    fetchCurrencyData();
  }, [currency.code]);

  return (
    <main className="flex min-h-screen flex-1 flex-col items-center justify-between">
      <div className="flex flex-1 flex-col items-start justify-start pt-3 pl-3 w-full">
        <h1 className="text-lg font-bold text-primary-700 mb-3 w-full">
          {currency.name}
        </h1>
        <div className="flex flex-col gap-3">
          <p className="text-primary-700">Symbol: {currency.symbol}</p>
          <p className="text-primary-700">Code: {currency.code}</p>
          <p className="text-primary-700">
            Exchange Rate (FROM USD): {currency.symbol}{" "}
            {currencyData.conversion_rates?.USD?.toFixed(3)}
          </p>
        </div>
      </div>
      <footer className="p-4 text-primary-700 w-full text-center">
        <p>© 2024 ConvertPlus. All rights reserved.</p>
      </footer>
    </main>
  );
}
