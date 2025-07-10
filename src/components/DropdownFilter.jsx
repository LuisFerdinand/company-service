import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import clsx from "clsx";

const DropdownFilter = ({ label, options, value, onChange }) => {
  return (
    <div className="w-[180px] text-sm font-semibold">
      <Listbox value={value} onChange={onChange}>
        <div className="relative">
          <ListboxButton
            className={clsx(
              "relative w-full cursor-pointer rounded-md bg-[#253575] px-4 py-2 pr-10 text-left text-white truncate",
              "border border-[#334679] hover:border-[#4B6FD1] focus:outline-none focus:ring-1 focus:ring-[#4B6FD1]"
            )}
          >
            <span>
              {value || `All ${label === "Featured" ? "Projects" : label}`}
            </span>
            <span className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <ChevronDown className="h-4 w-4 text-white" />
            </span>
          </ListboxButton>

          <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-[#253575] py-1 text-white shadow-lg ring-1 ring-black/20 focus:outline-none">
            <ListboxOption value="">
              <div className="cursor-pointer px-4 py-2 ui-active:bg-[#334679] ui-active:text-white text-white">
                All {label === "Featured" ? "Projects" : label}
              </div>
            </ListboxOption>
            {options.map((option) => (
              <ListboxOption key={option} value={option}>
                {({ selected }) => (
                  <div className="flex justify-between items-center px-4 py-2 cursor-pointer ui-active:bg-[#334679] ui-active:text-white text-white">
                    {option}
                    {selected && <Check className="w-4 h-4 text-white" />}
                  </div>
                )}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
};

export default DropdownFilter;
