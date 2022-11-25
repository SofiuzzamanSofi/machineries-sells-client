import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div class="flex flex-col mb-16 sm:text-center">
                        <a href="/" class="mb-6 sm:mx-auto">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg class="w-10 h-10 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                                    <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none" points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                                </svg>
                            </div>
                        </a>
                        <div class="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                            <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                                <span class="relative inline-block">
                                    <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                                        <defs>
                                            <pattern id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7" x="0" y="0" width=".135" height=".30"><circle cx="1" cy="1" r=".7"></circle></pattern>
                                        </defs>
                                        <rect fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)" width="52" height="24"></rect>
                                    </svg>
                                    <span class="relative">Some</span>
                                </span>
                                Blogs Questions and answer.
                            </h2>
                        </div>
                    </div>
                    <div class="space-y-4">
                        <div class="border rounded shadow-sm">
                            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
                                <p class="text-lg font-medium">What are the different ways to manage a state in a React application?</p>
                                <div class="flex items-center justify-center w-8 h-8 border rounded-full">

                                    <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200">
                                        <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <div class="p-4 pt-0">
                                <p class="text-gray-700">The Four Kinds of React State to Manage.</p>
                                <ul className='list-disc ml-4'>
                                    <li>Local state</li>
                                    <p> Local state is data we manage in one or another component.</p>
                                    <li>Global state</li>
                                    <p>Global state is data we manage across multiple components.</p>
                                    <li>Server state</li>
                                    <p>Data that comes from an external server that must be integrated with our UI state.</p>
                                    <li>URL state</li>
                                    <p>Data that exists on our URLs, including the pathname and query parameters.</p>
                                </ul>
                                <p class="text-gray-700">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.</p>

                            </div>

                        </div>
                        <div class="border rounded shadow-sm">
                            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
                                <p class="text-lg font-medium">How does prototypical inheritance work?</p>
                                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                                    <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                        <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <div class="p-4 pt-0">
                                <p class="text-gray-700">
                                    The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.
                                </p>
                            </div>

                        </div>
                        <div class="border rounded shadow-sm">
                            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
                                <p class="text-lg font-medium">What is a unit test? Why should we write unit tests?</p>
                                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                                    <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                        <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <div class="p-4 pt-0">
                                <p><strong>Unit Test:</strong></p>
                                <p class="text-gray-700">
                                    The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                </p>
                                <p><strong>Why we use Unit Test:</strong></p>
                                <ul className='list-disc ml-4'>
                                    <li>The earlier a problem is identified, the fewer compound errors occur.</li>
                                    <li>Costs of fixing a problem early can quickly outweigh the cost of fixing it later.</li>
                                    <li>Debugging processes are made easier.</li>
                                    <li>Developers can quickly make changes to the code base.</li>
                                    <li>Developers can also re-use code, migrating it to new projects.</li>
                                </ul>
                            </div>

                        </div>
                        <div class="border rounded shadow-sm">
                            <button type="button" aria-label="Open item" title="Open item" class="flex items-center justify-between w-full p-4 focus:outline-none">
                                <p class="text-lg font-medium">React vs. Angular vs. Vue?</p>
                                <div class="flex items-center justify-center w-8 h-8 border rounded-full">
                                    <svg viewBox="0 0 24 24" class="w-3 text-gray-600 transition-transform duration-200 transform rotate-180">
                                        <polyline fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" points="2,7 12,17 22,7" stroke-linejoin="round"></polyline>
                                    </svg>
                                </div>
                            </button>

                            <div class="p-4 pt-0 grid gap-4">
                                <p>
                                    <strong> React: </strong> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                                </p>
                                <p>
                                    <strong> Angular: </strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                                </p>
                                <p>
                                    <strong> Vue: </strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                                    Further reading: Vue.js Tutorial for Beginner Developers
                                </p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;