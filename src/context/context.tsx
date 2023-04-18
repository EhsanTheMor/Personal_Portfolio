import {
     Dispatch,
     ReactNode,
     SetStateAction,
     createContext,
     useContext,
     useState,
} from 'react';

interface scrollContextInterface {
     scroll: number;
     active: string;
     setActive: Dispatch<SetStateAction<string>>;
}

const scrollContext = createContext({} as scrollContextInterface);

export const useScrollContext = () => {
     return useContext(scrollContext);
};

interface Props {
     children: ReactNode;
}

export const ScrollContextProvider = ({ children }: Props) => {
     const [active, setActive] = useState<string>('');
     const [scroll, setScroll] = useState<number>(0);

     return (
          <scrollContext.Provider value={{ active, scroll, setActive }}>
               {children}
          </scrollContext.Provider>
     );
};
