import React from "react";
import { AlertCircleIcon } from "lucide-react";

interface FieldProps {
  id: string;
  label: string;
  required?: boolean;
  requiredLabel: string;
  error?: string;
  children: React.ReactNode;
}

export function fieldInputClass(hasError: boolean): string {
  return `w-full rounded-lg border bg-ivory px-4 py-3 text-base text-ink placeholder:text-muted/60 transition-[border-color,box-shadow] duration-150 focus:outline-none focus:ring-2 focus:ring-gold/40 ${
  hasError ? "border-eth-red" : "border-sand focus:border-gold"}`;

}

export function Field({ id, label, required, requiredLabel, error, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required &&
        <>
            <span aria-hidden="true" className="ml-0.5 text-eth-red">
              *
            </span>
            <span className="sr-only"> ({requiredLabel})</span>
          </>
        }
      </label>
      {children}
      {error &&
      <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-sm text-eth-red">
          <AlertCircleIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          {error}
        </p>
      }
    </div>);

}