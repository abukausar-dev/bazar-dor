import type { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    id: string;
    label: string;
}

export default function FormField({ id, label, ...inputProps }: FormFieldProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label htmlFor={id} className="text-sm font-medium leading-5">
                {label}
            </label>
            <input id={id} className="input w-full" {...inputProps} />
        </div>
    );
}