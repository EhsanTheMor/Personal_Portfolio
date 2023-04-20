import {
     Dispatch,
     ReactNode,
     SetStateAction,
     createContext,
     useContext,
     useState,
} from 'react';

interface scrollContextInterface {
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

     return (
          <scrollContext.Provider value={{ active, setActive }}>
               {children}
          </scrollContext.Provider>
     );
};
