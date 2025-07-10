import { motion as MOTION } from "motion/react";

export default function FirstFrame() {


    interface ButtonHome {
        style: string,
        motion: object
    }

    const buttomHome: ButtonHome = {
        style: 'bg-orange-400 w-60 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded m-3 cursor-pointer transition-colors duration-300 hover:scale-102 hover:transition-all duration-300',
        motion: {
            initial: { opacity: 0, scale: .85 },
            animate: { opacity: 1, scale: 1 }
        }
    }

    const stringTitle: string[] = 'BEM VINDO AO BÁSICO DA CONSTRUÇÃO'.split(' ');


    return (
        <>
            <div className="bg-[url(./bg-home.png)] bg-cover bg-center bg-no-repeat min-h-screen flex flex-col items-center justify-center">

                <h1 className="text-custom_blue_light text-4xl sm:text-5xl md:text-[3rem] w-full sm:w-3/4 md:w-2/4 text-center font-bold
">{stringTitle.map((word, index) => (
                    <MOTION.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.5,
                            delay: index / 6
                        }}
                        key={index}
                        className={word === 'CONSTRUÇÃO' ||
                            word === 'DA' || word === 'BÁSICO'
                            ? "text-yellow-600 mr-2" : "mr-2"
                        }
                    >
                        {word}{" "}
                    </MOTION.span>
                ))}
                </h1>

                <MOTION.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 1
                        , delay: 1.5
                    }}
                    className="text-center text-lg m-5 font-medium">
                    Os melhores produtos, da alvenaria ao acabamento e eletrica.
                </MOTION.p>
                <div className="flex flex-wrap items-center justify-center">
                    <MOTION.button
                        {...buttomHome.motion}
                        transition={{
                            duration: .3
                            , delay: 2.5
                        }}
                        className={buttomHome.style}>Ver Produto</MOTION.button>
                    <MOTION.button
                        {...buttomHome.motion}
                        transition={{
                            duration: .3
                            , delay: 2.7
                        }}
                        className={buttomHome.style}>Fazer Orçamento</MOTION.button>
                </div>
            </div >
        </>
    );
}