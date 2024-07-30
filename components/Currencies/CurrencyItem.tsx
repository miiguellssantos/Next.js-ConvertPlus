import { Currency } from "@/types/currency";
import Link from "next/link";

type CurrencyItemProps = {
  curr: Currency;
};

export default function CurrencyItem({ curr }: CurrencyItemProps) {
  const { symbol, name, code } = curr;
  return (
    <div className="flex flex-row h-fit gap-3 items-center w-full">
      <Link
        href={{
          pathname: `/currencies/${code}`,
        }}
        className="text-xl font-bold text-white-100 bg-primary-700 hover:bg-primary-600 p-2 rounded-lg text-center w-16"
      >
        {symbol}
      </Link>
      <p className="text-lg text-primary-700">{name}</p>
    </div>
  );
}
