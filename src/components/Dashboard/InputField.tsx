import { ChangeEvent } from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  error?: string;
  valid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  name: string;
  width?: string;
  widthError?: string;
  additionalClass?: string;
}

export const InputField = ({
  label,
  type,
  value,
  error,
  valid,
  onChange,
  placeholder,
  name,
  width = '',
  widthError = '',
  additionalClass = '',
}: InputFieldProps) => {
  return (
    <div className={`${additionalClass}`}>
      <p className="text-[14px] mb-2">{label}</p>
      <input
        className={`border ${width} h-[49px] focus:outline-none rounded-[8px] pl-4 ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : valid
              ? 'bg-green-100 border-green-500 focus:ring-green-500'
              : 'focus:ring-green-500'
        }`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
      {error && (
        <div className={`text-red-500 mt-1 text-[14px] ${widthError}`}>
          {error}
        </div>
      )}
    </div>
  );
};
