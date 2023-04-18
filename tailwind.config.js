/** @type {import('tailwindcss').Config} */
module.exports = {
     content: [
          './src/pages/**/*.{js,ts,jsx,tsx}',
          './src/components/**/*.{js,ts,jsx,tsx}',
          './src/app/**/*.{js,ts,jsx,tsx}',
     ],
     theme: {
          screens: {
               sm: '640px',
               // => @media (min-width: 640px) { ... }

               md: '768px',
               // => @media (min-width: 768px) { ... }

               lg: '1200px',
               // => @media (min-width: 1024px) { ... }

               xl: '1280px',
               // => @media (min-width: 1280px) { ... }

               xl: '1536px',
               // => @media (min-width: 1536px) { ... }
          },
          extend: {
               backgroundImage: {
                    'gradient-radial':
                         'radial-gradient(var(--tw-gradient-stops))',
                    'gradient-conic':
                         'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
               },
               colors: {
                    'selected-primary': '#28e98c',
                    'selected-dark': '#1f1f1f',
                    'selected-border': '#565656',
                    'selected-paragraph': '#999999',
                    'selected-white': '#fff',
               },
          },
     },
     plugins: [],
};
