import { motion as MOTION } from 'motion/react';
export default function ProductsArea() {

    const styleProductsArea = 'text-white p-20 cursor-pointer transition-colors duration-300 text-xl hover:scale-101 hover:transition-all not-hover:transition-all duration-300';

    const motionButton = (delay: number, sideValue: number) => {
        return {
            initial: { opacity: 0, x: sideValue },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: .3, delay: delay },
            viewport: { once: true }
        }
    }

    return (
        <div className="min-h-screen overflow-hidden pt-40">

            <MOTION.h1
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: .5 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center font-bold text-5xl text-yellow-600">CATEGORIAS</MOTION.h1>

            <MOTION.p
                initial={{ opacity: 0 }}
                transition={{ duration: 1, delay: 1 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-20 text-center text-lg">Procure por uma categoria especifica</MOTION.p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 m-2">
                <MOTION.li {...motionButton(.1, -400)}
                    className={`${styleProductsArea} bg-[url(/bg-ferragem.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Ferragem</MOTION.li>
                <MOTION.li {...motionButton(.1, 400)}
                    className={`${styleProductsArea} bg-[url(/bg-encanacao.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Tubulação</MOTION.li>
                <MOTION.li {...motionButton(.1, -400)}
                    className={`${styleProductsArea} bg-[url(/bg-alvenaria.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Alvenaria</MOTION.li>
                <MOTION.li {...motionButton(.1, 400)}
                    className={`${styleProductsArea} bg-[url(/bg-eletrica.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Eletrica</MOTION.li>
                <MOTION.li {...motionButton(.1, -400)}
                    className={`${styleProductsArea} bg-[url(/bg-acabamento.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Acabamento</MOTION.li>
                <MOTION.li {...motionButton(.1, 400)}
                    className={`${styleProductsArea} bg-[url(/bg-ferramentas.png)] bg-cover bg-center bg-no-repeat transition-transform duration-300`}>Ferramentas</MOTION.li>
            </ul>
        </div>
    );
}