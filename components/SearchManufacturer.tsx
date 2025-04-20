"use client";
import { SearchManufacturerProps } from '@/types';
import Image from 'next/image';
import { Combobox, ComboboxOption, ComboboxOptions, ComboboxInput, ComboboxButton, Transition } from '@headlessui/react';
import React, { useState, Fragment } from 'react';
import { manufacturers } from '@/constants';

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState('');

  const filteredManufacturers =
    query === ''
      ? manufacturers
      : manufacturers.filter((item) =>
        item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g, ''))
      );

  return (
    <div className="flex-1 max-sm:w-full flex justify-start items-center">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          {/* Button for the Combobox */}
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car logo"
            />
          </ComboboxButton>
          <ComboboxInput
            className="w-full h-[48px] pl-12 p-4 rounded-l-full max-sm:rounded-full bg-light-white outline-none cursor-pointer text-sm"
            placeholder="Volkswagen"
            onChange={(e) => setQuery(e.target.value)}
          />
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions className="relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;;">
                {filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    // className='relative cursor-default select-none py-2 pl-10 pr-4 bg-blue-500 text-white'
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-blue-600 text-white' : ' text-black'
                      }`
                    }
                  >
                  </ComboboxOption>
                ))
              }
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;