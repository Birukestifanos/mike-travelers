import React from "react";

interface CategoryOption<T extends string> {
  value: T;
  label: string;
}

interface CategoryFilterProps<T extends string> {
  options: CategoryOption<T>[];
  value: T;
  onChange: (value: T) => void;
  label: string;
}

export function CategoryFilter<T extends string>({ options, value, onChange, label }: CategoryFilterProps<T>) {
  return (
    <div
      role="group"
      aria-label={label}
      className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:mx-0 lg:flex-wrap lg:px-0">
      
      {options.map((option) => {
        const active = option.value === value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.value)}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-[background-color,color,border-color] duration-150 ease-out ${
            active ?
            "border-forest bg-forest text-ivory" :
            "border-sand bg-ivory text-ink hover:border-forest/50"}`
            }>
            
            {option.label}
          </button>);

      })}
    </div>);

}