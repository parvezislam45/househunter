import React from "react";
import {Link} from "react-router-dom"
const Product = () => {
  return (
    <div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-16 mt-14 gap-y-10">
        <a href="#/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full rounded-md object-cover"
          />

          <div class="mt-2">
            <dl>
              <div>
                <dt class="sr-only">Price</dt>

                <dd class="text-sm text-gray-500">$240,000</dd>
              </div>

              <div>
                <dt class="sr-only">Address</dt>

                <dd class="font-medium">123 Wallaby Avenue, Park Road</dd>
              </div>
            </dl>

            <div class="mt-6 flex items-center gap-8 text-xs">
              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Parking</p>

                  <p class="font-medium">2 spaces</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bathroom</p>

                  <p class="font-medium">2 rooms</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bedroom</p>

                  <p class="font-medium">4 rooms</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full rounded-md object-cover"
          />

          <div class="mt-2">
            <dl>
              <div>
                <dt class="sr-only">Price</dt>

                <dd class="text-sm text-gray-500">$240,000</dd>
              </div>

              <div>
                <dt class="sr-only">Address</dt>

                <dd class="font-medium">123 Wallaby Avenue, Park Road</dd>
              </div>
            </dl>

            <div class="mt-6 flex items-center gap-8 text-xs">
              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Parking</p>

                  <p class="font-medium">2 spaces</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bathroom</p>

                  <p class="font-medium">2 rooms</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bedroom</p>

                  <p class="font-medium">4 rooms</p>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#/" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
          <img
            alt="Home"
            src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            class="h-56 w-full rounded-md object-cover"
          />

          <div class="mt-2">
            <dl>
              <div>
                <dt class="sr-only">Price</dt>

                <dd class="text-sm text-gray-500">$240,000</dd>
              </div>

              <div>
                <dt class="sr-only">Address</dt>

                <dd class="font-medium">123 Wallaby Avenue, Park Road</dd>
              </div>
            </dl>

            <div class="mt-6 flex items-center gap-8 text-xs">
              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Parking</p>

                  <p class="font-medium">2 spaces</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bathroom</p>

                  <p class="font-medium">2 rooms</p>
                </div>
              </div>

              <div class="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                <svg
                  class="h-4 w-4 text-indigo-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>

                <div class="mt-1.5 sm:mt-0">
                  <p class="text-gray-500">Bedroom</p>

                  <p class="font-medium">4 rooms</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="text-center mt-10">
        <Link  to="/allProduct">
        <button
          class="group text-center mt-10 relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          href="/download"
        >
          <span class="absolute -end-full transition-all group-hover:end-4">
            <svg
              class="h-5 w-5 rtl:rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </span>

          <span class="text-sm font-medium transition-all group-hover:me-4">
            View All
          </span>
        </button>
        </Link>
        
      </div>
    </div>
  );
};

export default Product;
