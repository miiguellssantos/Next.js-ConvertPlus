import Link from "next/link";
import currencies from "@/data/currencies.json";
import CurrencyItem from "@/components/Currencies/CurrencyItem";
import { Currency } from "@/types/currency";

const currencyArray = Object.values(currencies) as Currency[];

export default function Currencies() {
  return (
    <main className="flex min-h-screen flex-col items-start">
      <div className="flex flex-1 flex-col items-start justify-start pt-3 pl-3 w-full">
        <h1 className="text-lg font-bold text-primary-700 mb-3 w-full">
          Currencies
        </h1>
        <div className="flex flex-col gap-3">
          {currencyArray.map((curr) => (
            <CurrencyItem key={curr.code} curr={curr} />
          ))}
        </div>
      </div>
      <footer className="p-4 text-primary-700 w-full text-center">
        <p>© 2024 ConvertPlus. All rights reserved.</p>
      </footer>
    </main>
  );
}
