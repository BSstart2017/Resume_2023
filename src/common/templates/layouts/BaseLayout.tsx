import { FC } from "react";
import {Navbar} from "@/modules/navbar";

type PropsType = {
  children: React.ReactNode
}

const BaseLayout: FC<PropsType> = ({ children }) => {
  return (
    <body className="h-full w-full p-0 m-0 bg-blue-950 text-white text-base">
      <Navbar />
        {children}
      {/*<Footer />*/}
    </body>
  );
};

export default BaseLayout