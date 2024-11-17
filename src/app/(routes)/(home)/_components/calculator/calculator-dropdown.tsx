import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

interface CalculatorDropdownProps<T extends string | number> {
  label: string;
  options: { value: T; text: string }[];
  selected: T;
  onSelect: (value: T) => void;
}

export function CalculatorDropdown<T extends string | number>({
  label,
  options,
  selected,
  onSelect,
}: CalculatorDropdownProps<T>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left w-full">
      <button
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        className="inline-flex w-full justify-between rounded-md border bg-person-primary border-gray-700 px-4 py-2 text-person- font-semibold text-sm shadow-sm hover:border-ton-300 focus:outline-none focus:ring-2 focus:ring-ton-300"
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {selected || selected === 0
          ? options.find((option) => option.value === selected)?.text
          : label}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <div
          className="z-10 absolute right-0 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="z-1" role="none">
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onSelect(option.value);
                  setIsOpen(false);
                }}
                className={`first:rounded-t-md last:rounded-b-md text-gray-700 block w-full text-left px-4 py-2 text-sm font-semibold hover:bg-ton-200 focus:bg-ton-200 ${
                  selected === option.value ? 'bg-ton-100' : ''
                }`}
                role="menuitem"
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
