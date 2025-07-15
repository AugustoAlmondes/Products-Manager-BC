"use client"
import {motion
} from "motion/react"

interface ScrollLinkedProps {
    images: string[] // Array of image URLs
}

export default function SlideBanner({ images }: ScrollLinkedProps) {



    return (
        <div className="relative w-full bg-gray-100">
            <motion.ul
                className="flex gap-5 w-full overflow-hidden h-xl list-none px-0 pb-5 scrollbar-none"
            >
                {images.map((src, index) => (
                    <li key={index} className="flex-none w-full h-full overflow-hidden shadow-lg">
                        <img
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="object-cover w-full h-full"
                        />
                    </li>
                ))}
            </motion.ul>
        </div>
    )
}
