import { motion as MOTION } from "motion/react";
import {IoCart } from "react-icons/io5";

export default function ViewProduct() {
    return (
        <MOTION.div
            initial={{ scale: .9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: .3 }}
            whileTap={{ scale: 0.9, transition: { duration: .1 } }}
            className="bg-white h-80 border-[1px] rounded-md relative mb-4 hover:scale-102 hover:transition-all duration-300 border-none" >
            <img
                className="object-cover h-2/3 w-full rounded-md"
                src="https://nacruzeiro.com.br/wp-content/uploads/2023/02/Design-sem-nome-2023-02-17T141215.671.png" alt="" />

            <p className="text-left text-sm p-2">
                Cimento Votoran 40Kg super resistente
            </p>
            <h3 className=" text-1xl font-bold text-left pl-2 text-amber-600 ">R$ 40,00</h3>

                <button className="absolute bottom-[-15px] left-1/4 -translate-x-1/2  h-8 bg-amber-600 text-white font-bold py-1 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:scale-102 hover:bg-amber-500 hover:transition-all"><IoCart/></button>
                <button className="absolute bottom-[-15px] left-3/5 -translate-x-1/2 h-8 ml-1 bg-amber-600 text-white font-bold py-1 px-4 rounded-md cursor-pointer transition-colors duration-300 hover:scale-102 hover:bg-amber-500 hover:transition-all">Comprar</button>
        </MOTION.div>
    );
}