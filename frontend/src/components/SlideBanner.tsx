"use client"

import { useEffect } from "react"
import {
    animate,
    motion,
    MotionValue,
    useMotionValue,
    useMotionValueEvent,
    useScroll,
} from "motion/react"
import { useRef } from "react"

interface ScrollLinkedProps {
    images: string[] // Array of image URLs
}

export default function SlideBanner({ images }: ScrollLinkedProps) {

    const ref = useRef<HTMLUListElement | null>(null)
    const { scrollXProgress } = useScroll({ container: ref })
    const maskImage = useScrollOverflowMask(scrollXProgress)


    // Dentro do componente ScrollLinked
    useEffect(() => {
        const container = ref.current
        if (!container) return

        let animationFrameId: number
        let speed = 0.5 // pixels por frame
        let direction = 1

        const animateScroll = () => {
            if (!container) return

            container.scrollLeft += speed * direction

            // Inverte a direção se chegar no fim ou início
            if (
                container.scrollLeft + container.clientWidth >= container.scrollWidth ||
                container.scrollLeft <= 0
            ) {
                direction *= -1
            }

            animationFrameId = requestAnimationFrame(animateScroll)
        }

        animationFrameId = requestAnimationFrame(animateScroll)

        return () => cancelAnimationFrame(animationFrameId)
    }, [])


    return (
        <div className="relative w-full bg-gray-100 mx-auto">
            <svg
                className="absolute -top-16 -left-4 rotate-[-90deg]"
                width="80"
                height="80"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="stroke-neutral-800"
                    fill="none"
                    strokeWidth="10%"
                />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    className="stroke-accent"
                    fill="none"
                    strokeWidth="10%"
                    style={{ pathLength: scrollXProgress }}
                />
            </svg>

            <motion.ul
                ref={ref}
                className="flex gap-5 w-full overflow-x-scroll h-xl list-none px-0 py-5 scrollbar-none"
                style={{ maskImage }}
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

// Gradient logic
const left = `0%`
const right = `100%`
const leftInset = `20%`
const rightInset = `80%`
const transparent = `#0000`
const opaque = `#000`

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
    const maskImage = useMotionValue(
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
    )

    useMotionValueEvent(scrollXProgress, "change", (value) => {
        if (value === 0) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
            )
        } else if (value === 1) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
            )
        } else if (
            scrollXProgress.getPrevious() === 0 ||
            scrollXProgress.getPrevious() === 1
        ) {
            animate(
                maskImage,
                `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
            )
        }
    })

    return maskImage
}
