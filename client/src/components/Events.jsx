import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';

const events = [
  {
    name: 'Birthday Party',
    description: 'Celebrate the perfect birthday party with exquisite food and service. Mayuri Caterers is the best for Birthday Parties.',
  },
  {
    name: 'Wedding',
    description: 'Make your big day even more special with delicious catering. Mayuri Caterers is the best in Wedding Catering.',
  },
  {
    name: 'Anniversary Party',
    description: 'Relive your cherished memories with a splendid celebration. Safal Caterers is the best for Anniversary Parties.',
  },
  {
    name: 'Corporate Party',
    description: 'Impress your guests with top-notch corporate catering. Mayuri Caterers is the best for Corporate Parties.',
  },
  {
    name: 'Farewell Party',
    description: 'Bid adieu with a grand celebration. Safal Caterers is the best for Farewell Parties.',
  },
  {
    name: 'Retirement Party',
    description: 'Celebrate the milestone of a lifetime. CRCL Caterers is the best for Retirement Parties.',
  },
  {
    name: 'Engagement Party',
    description: 'Celebrate your love story with exquisite catering. CRCL Caterers is the best for Engagement Parties.',
  },
];

const EventDropdown = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h1 className="text-center text-4xl font-bold text-textColor mb-12">Events Catered by Exotica Bites</h1>
        <div className="max-w-3xl mx-auto">
          {events.map((event, index) => (
            <Disclosure key={index}>
              {({ open }) => (
                <div className="mb-4 bg-secondary rounded-lg shadow-lg">
                  <Disclosure.Button className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-medium text-textColor bg-secondary">
                    <span>{event.name}</span>
                    <span
                      className={`transform transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    >
                      ▼
                    </span>
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Disclosure.Panel className="px-6 py-4 text-gray-400">
                      {event.description}
                    </Disclosure.Panel>
                  </Transition>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventDropdown;
