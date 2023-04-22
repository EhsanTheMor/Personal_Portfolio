import { Dispatch, SetStateAction } from 'react';

export default function (fn: Dispatch<SetStateAction<string>>, state: string) {
     const observer = new IntersectionObserver(entries => {
          entries.forEach(
               entry => {
                    if (entry.isIntersecting) {
                         fn(state);
                    }
               },
               { threshold: 1 },
          );
     });

     return function (state: string) {
          const tag = document.querySelector(`#${state}`);
          if (!tag) return console.log('Something went wrong');
          observer.observe(tag);
     };
}
