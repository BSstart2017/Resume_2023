import {LanguageButton, Logo, SocialButton, WriteMeButton} from "@/common/components/elements";
import {DrawerMenu, Navigation} from "@/modules/navbar/components";

const Navbar = () => {
    return (
        <header className="absolute flex w-full md:justify-around justify-between md:px-0 px-3 md:py-5 py-3 bg-gray-800 text-white">
            <div className="flex items-center space-x-3">
                <Logo/>
                <div className="font-semibold text-xl">
                    <h1>Aliaksandr</h1>
                    <h1>Andreyeu</h1>
                </div>
                <LanguageButton/>
            </div>
            <Navigation/>
            <div className="md:flex hidden space-x-5">
                <WriteMeButton/>
                <SocialButton/>
            </div>
            <DrawerMenu />
        </header>
    );
};

export default Navbar