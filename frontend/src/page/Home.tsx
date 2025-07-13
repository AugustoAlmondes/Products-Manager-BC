// import FirstFrame from "../components/FirstFrame";
import ProductsArea from "../components/ProductsArea";
import Showcase from "../components/Showcase";
import SlideBanner from "../components/SlideBanner";
// import SlideBrands from "../components/SlideBrands";
import SlideBrands2 from "../components/SlideBrands2";

export default function Home() {

    return (
        <>
            {/* https://motion.dev/docs/react-scroll-animations */}
            <SlideBanner images={[
                "slide_banner/banner-1.png",
                "slide_banner/banner-2.png",
                "slide_banner/banner-3.png"
            ]}
                />
            <Showcase />
            <SlideBrands2 />
            <ProductsArea />
        </>
    );
}