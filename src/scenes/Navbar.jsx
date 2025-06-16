import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";
import { HiMenu, HiX } from "react-icons/hi";

const Link = ({ page, selectedPage, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className={`${selectedPage === lowerCasePage ? "text-yellow" : "text-white"
                } hover:text-yellow transition duration-300 relative px-3 py-2 rounded-lg hover:bg-white/10`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    // Glass effect background - more pronounced when not at top
    const navbarBackground = isTopOfPage
        ? ""
        : "bg-white/10 backdrop-blur-md border-b border-white/20 shadow-lg";

    return (
        <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-4 transition-all duration-300`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="font-playfair text-3xl font-bold text-white drop-shadow-lg">DS</h4>

                {/* DESKTOP NAV */}
                {isDesktop ? (
                    <div className="flex justify-between gap-8 font-opensans text-sm font-semibold">
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="About"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="workflow"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="services"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                ) : (
                    <button
                        className="rounded-full bg-white/20 backdrop-blur-sm p-3 hover:bg-white/30 transition duration-300 border border-white/30"
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <HiMenu className="w-5 h-5 text-white" />
                    </button>
                )}

                {/* MOBILE MENU POPUP */}
                {!isDesktop && isMenuToggled && (
                    <>
                        {/* Backdrop overlay */}
                        <div
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={() => setIsMenuToggled(false)}
                        />

                        {/* Menu panel */}
                        <div className="fixed right-0 top-0 h-full bg-white/10 backdrop-blur-xl w-[300px] z-50 border-l border-white/20 shadow-2xl">
                            {/* CLOSE ICON */}
                            <div className="flex justify-end p-6">
                                <button
                                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                                    className="rounded-full bg-white/20 p-2 hover:bg-white/30 transition duration-300"
                                >
                                    <HiX className="w-5 h-5 text-white" />
                                </button>
                            </div>

                            {/* MENU ITEMS */}
                            <div className="flex flex-col gap-6 px-8 pt-8">
                                <Link
                                    page="Home"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="About"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="workflows"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="services"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Projects"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                                <Link
                                    page="Contact"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;