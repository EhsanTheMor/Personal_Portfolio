import { ScrollContextProvider } from './../context/context';
import React, { ReactNode } from 'react';
import Head from 'next/head';

interface Props {
     children: ReactNode;
}
const Layout = ({ children }: Props) => {
     return (
          <div>
               <Head>
                    <title>Portfolio</title>
                    <meta
                         name='viewport'
                         content='width=device-width, initial-scale=1.0'
                    ></meta>
               </Head>
               <ScrollContextProvider>{children}</ScrollContextProvider>
          </div>
     );
};

export default Layout;
