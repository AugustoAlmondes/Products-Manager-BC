import { motion as MOTION } from "motion/react";
const logos = [
    { url: "/slide_brand/apodi.png" },
    { url: "/slide_brand//cascola.png" },
    { url: "/slide_brand//fame.png" },
    { url: "/slide_brand//fn.png" },
    { url: "/slide_brand//gerdau.png" },
    { url: "/slide_brand//ilumi.png" },
    { url: "/slide_brand//krona.png" },
    { url: "/slide_brand//mizu.png" },
    { url: "/slide_brand//mp.png" },
    { url: "/slide_brand//polytubes.png" },
    { url: "/slide_brand//tekbonde.png" },
    { url: "/slide_brand//tigre-logo-2-1.png" },
];



export default function SlideBrands2() {
    return (
        <>
            {/* <h1 className="text-center font-bold text-4xl sm:text-5xl md:text-[3rem] mt-20 text-yellow-600">MARCAS QUE TRABALHAMOS</h1> */}

            <MOTION.div
                initial={{ display: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="slider relative m-auto grid h-[250px] place-items-center overflow-hidden bg-gray-100
            before:absolute before:left-0 before:top-0 before:z-10 
            before:h-full before:w-[15%] before:content-[''] 
            before:bg-gradient-to-r before:from-gray-100 before:to-transparent
            after:absolute after:right-0 after:top-0 after:z-10 
            after:h-full after:w-[15%] after:content-[''] 
            after:bg-gradient-to-l after:from-gray-100 after:to-transparent

            ">

                <div className={`slide-track flex w-[calc(250px*${logos.length})]`}>

                    {
                        logos.map((slide, index) => {
                            return (
                                <div
                                    className="slide h-[200px] w-[130px] gap-5 flex items-center p-15px mx-20"
                                    key={index}>
                                    <img
                                        className="w-full grayscale"
                                        src={slide.url} alt={`Logo ${index + 1}`} />
                                </div>
                            )
                        })
                    }

                    {
                        logos.map((slide, index) => {
                            return (
                                <div
                                    className="slide h-[200px] w-[100px] gap-5 flex items-center p-15px mx-20"
                                    key={index}>
                                    <img
                                        className="w-full grayscale"
                                        src={slide.url} alt={`Logo ${index + 1}`} />
                                </div>
                            )
                        })
                    }

                    {/* Cópia  */}


                </div>

            </MOTION.div>
        </>
    );
}