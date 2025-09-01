import type { InputProps } from "../common/interface/common-interface";

export default function Input(props: InputProps) {
  return (
    <div>
      <label htmlFor={props.id} className="sr-only">
        Email address
      </label>
      <input
        id={props.id}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        className={`relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${props.className}`}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
}
