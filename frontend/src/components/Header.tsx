import {
    FaBars,
    FaStar,
    FaUser,
} from "react-icons/fa";
import { useState } from "react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import { IoCart } from "react-icons/io5";
import { BsFillBoxSeamFill } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useLogin } from "../contexts/useLogin";
import { FaHouse } from "react-icons/fa6";

export default function Header() {
    const { login } = useLogin();
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    const liStyle =
        "text-white text-center py-2 px-4 hover:text-orange-200 transition-colors duration-300 flex gap-2 items-center cursor-pointer";

    return (
        <header className="fixed top-0 left-0 right-0 z-[999]">
            <div
                className={`${isScrolled
                    ? "bg-custom_blue_light/70 h-10"
                    : "bg-custom_blue_light backdrop-blur-[5px] h-20"
                    } transition-all duration-200 px-4 text-white grid grid-cols-3 place-items-center gap-20 items-center justify-between `}
            >
                <h1 className="font-bold text-2xl">BC</h1>

                <FaBars
                    className={'text-2xl text-white text-center hover:text-amber-500 cursor-pointer transition-colors duration-300'}
                    onClick={() => { setIsOpen(!isOpen) }} />

                {login ?
                    <FaUser className="text-xl text-white hover:custom_orange_dark cursor-pointer" />
                    : <button className=
                        "text-sm text-white py-1 px-3 border-white border-[1px] hover:bg-amber-500 hover:text-white rounded-sm transition-colors duration-300 cursor-pointer"
                    >LOGIN</button>
                }
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="bg-custom_blue_light/80 backdrop-blur-[3px] overflow-hidden flex flex-wrap justify-around items-center gap-1.5 text-white"
                    >
                        <li className={liStyle}><FaHouse /> Home</li>
                        <li className={liStyle}><BsFillBoxSeamFill /> Produtos</li>
                        <li className={liStyle}><RiMoneyDollarCircleFill /> Orçamentos</li>
                        <li className={liStyle}><IoCart /> Carrinho</li>
                        <li className={liStyle}><FaStar /> Favoritos</li>
                    </motion.ul>
                )}
            </AnimatePresence>
        </header>
    );
}
