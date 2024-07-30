"use client";
import { useState } from "react";
import { Currency } from "@/types/currency";
import currencies from "@/data/currencies.json";

const currencyArray = Object.values(currencies) as Currency[];

async function fetchExchangeRate(from: string, to: string): Promise<number> {
  const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
  if (!response.ok) {
    throw new Error('Failed to fetch exchange rate');
  }
  const data = await response.json();
  return data.rates[to];
}

export default function ExchangePage() {
  const [amount, setAmount] = useState<number>(0);
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleExchange = async () => {
    if (amount && from && to) {
      try {
        const rate = await fetchExchangeRate(from, to);
        const result = amount * rate;
        setResult(`${amount} ${from} = ${result.toFixed(2)} ${to}`);
      } catch (error: any) {
        console.error(`[exchange]: Error ${error.message}`);
        setResult("Failed to fetch exchange rate.");
      }
    } else {
      setResult("Please fill in all fields.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="flex flex-1 flex-col items-center justify-center w-full">
        <h1 className="text-primary-700 text-2xl font-bold">Exchange</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="amount" className="text-primary-700">Amount</label>
            <input
              id="amount"
              type="number"
              placeholder="0"
              className="p-2 border border-gray-300 rounded-md text-primary-700"
              onChange={(e) => setAmount(Number(e.target.value))}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="from" className="text-primary-700">From</label>
            <select
              id="from"
              name="from"
              className="p-2 border border-gray-300 rounded-md text-primary-700"
              onChange={(e) => setFrom(e.target.value)}
            >
              <option value="">Select a currency</option>
              {currencyArray.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="to" className="text-primary-700">To</label>
            <select
              id="to"
              name="to"
              className="p-2 border border-gray-300 rounded-md text-primary-700"
              onChange={(e) => setTo(e.target.value)}
            >
              <option value="">Select a currency</option>
              {currencyArray.map((curr) => (
                <option key={curr.code} value={curr.code}>
                  {curr.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="p-2 bg-primary-700 text-white rounded-md"
            onClick={handleExchange}
          >
            Convert
          </button>
          <div>
            <p className="text-primary-700">Result</p>
            <p className="text-primary-700">{result}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
