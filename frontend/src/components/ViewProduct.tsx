// import './nome.module.css';
// import styles from './nome.module.css';

export default function ViewProduct() {
    return (
        <div className="bg-white h-80 border-[1px] rounded-md relative mb-4">
            <img
                className="object-cover h-2/3 w-full rounded-md hover:scale-102 hover:transition-all duration-300"
                src="https://nacruzeiro.com.br/wp-content/uploads/2023/02/Design-sem-nome-2023-02-17T141215.671.png" alt="" />

            <p className="text-left text-sm p-2">
                Cimento Votoran 40Kg super resistente
            </p>
            <h3 className=" text-1xl font-bold text-left pl-2 text-amber-600 ">R$ 100,00</h3>
            <button className="absolute bottom-[-15px] left-1/2 -translate-x-1/2 bg-amber-600 text-white font-bold py-1 px-4 rounded cursor-pointer transition-colors duration-300 hover:scale-102 hover:transition-all">Comprar</button>
        </div>
    );
}