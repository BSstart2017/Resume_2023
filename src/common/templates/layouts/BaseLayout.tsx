import { FC } from "react";
import {Navbar} from "@/modules/navbar";
import {Footer} from "@/common/components/footer";

type PropsType = {
  children: React.ReactNode
}

const BaseLayout: FC<PropsType> = ({ children }) => {
  return (
    <body className="flex flex-col items-center min-h-screen w-full p-0 m-0 bg-fuchsia-700 text-white text-base">
      <Navbar/>
      <main className="flex-1 flex w-8/12 min-h-0 mt-[120px]">
        {children}
      </main>
      <Footer />
    </body>
  );
};

export default BaseLayout