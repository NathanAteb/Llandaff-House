"use client";

import { InputHTMLAttributes, ReactNode, SelectHTMLAttributes, TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";

interface BaseProps {
  label?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

type FieldInputProps = BaseProps & { as?: "input" } & InputHTMLAttributes<HTMLInputElement>;
type FieldTextareaProps = BaseProps & { as: "textarea" } & TextareaHTMLAttributes<HTMLTextAreaElement>;
type FieldSelectProps = BaseProps & { as: "select"; children: ReactNode } & SelectHTMLAttributes<HTMLSelectElement>;

export type FieldProps = FieldInputProps | FieldTextareaProps | FieldSelectProps;

const inputClasses =
  "font-sans text-[17px] text-ink-900 bg-white border border-border-strong rounded-[8px] px-3.5 py-3 w-full transition-all duration-150 focus:outline-none focus:border-teal-600 focus:ring-[3px] focus:ring-teal-100 placeholder:text-ink-300";

export function Field(props: FieldProps) {
  const { label, required, error, className, id } = props;

  const renderInput = () => {
    // Manually omit non-HTML props to avoid warnings and spreading into DOM
    const elementProps = { ...props } as Record<string, unknown>;
    delete elementProps.as;
    delete elementProps.label;
    delete elementProps.required;
    delete elementProps.error;
    delete elementProps.className;
    delete elementProps.id;

    if (props.as === "textarea") {
      return (
        <textarea
          id={id}
          className={clsx(inputClasses, "min-h-[120px] resize-y leading-[1.55]", className)}
          {...(elementProps as TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      );
    }

    if (props.as === "select") {
      const { children } = props;
      delete elementProps.children;
      return (
        <div className="relative">
          <select
            id={id}
            className={clsx(inputClasses, "pr-9 appearance-none", className)}
            {...(elementProps as SelectHTMLAttributes<HTMLSelectElement>)}
          >
            {children}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-ink-500">
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      );
    }

    // Default to input
    return (
      <input
        id={id}
        className={clsx(inputClasses, className)}
        {...(elementProps as InputHTMLAttributes<HTMLInputElement>)}
      />
    );
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="font-sans text-[15px] font-semibold text-ink-900">
          {label} {required && <span className="text-danger ml-0.5">*</span>}
        </label>
      )}
      {renderInput()}
      {error && <span className="text-[14px] text-danger">{error}</span>}
    </div>
  );
}
