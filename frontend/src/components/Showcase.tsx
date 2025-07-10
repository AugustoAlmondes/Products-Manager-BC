// import './nome.module.css';
// import styles from './nome.module.css';

import ViewProduct from "./ViewProduct";

export default function Showcase() {
    return (
        <div className="min-h-screen bg-custom_blue_light text-center py-40 ">
            <h1 className="text-center font-bold text-5xl text-white">MAIS VENDIDOS</h1>
            <p className="mb-20 text-center text-lg text-white">Veja os produtos mais vendidos da loja</p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-3 p-4 ">
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
                <ViewProduct/>
            </div>
            <p className='text-center mt-5 text-amber-600 font-bold cursor-pointer hover:text-amber-700 transition-colors duration-300 underline'>Ver todos os produtos</p>
        </div>
    );
}