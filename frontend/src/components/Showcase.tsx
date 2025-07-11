import ViewProduct from "./ViewProduct";

export default function Showcase() {
    return (
        <div className="bg-gray-100 min-h-screen text-center py-20 ">
            <h1 className="font-bold text-center text-2xl md:text-start sm:text-3xl md:text-[2rem] pl-4 text-amber-600">NOSSOS PRODUTOS MAIS VENDIDOS</h1>
            <div className="w-3/4 sm:w-full md:w-full mx-auto mt-3 md:text-start">

                <p 
                className="mb-5 text-center md:text-start md:pl-4 text-md text-black">
                    Veja os produtos mais vendidos da loja no momento. Esses produtos foram comprados pelos nossos clientes </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3 p-4 ">
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
                <ViewProduct />
            </div>
            <button className='text-center mt-5 font-bold px-4 py-2 rounded cursor-pointer bg-amber-600 transition-colors duration-300 text-white'>
                Ver todos os produtos
                </button>
        </div>
    );
}