"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface DiaTextProps extends React.HTMLAttributes<HTMLSpanElement> {
    words: string[];
    duration?: number;
    className?: string;
}

export default function TextDia({
    words,
    duration = 3000,
    className = "",
    ...props
}: DiaTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, duration);

        return () => clearInterval(interval);
    }, [words, duration]);

    return (
        <span
            className={`relative inline-flex overflow-hidden align-bottom min-w-[2ch] ${className}`}
            style={{ verticalAlign: "bottom" }}
            {...props}
        >
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                    transition={{
                        y: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                        filter: { duration: 0.2 },
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                >
                    <motion.span
                        className="inline-block bg-clip-text pb-1 text-transparent bg-gradient-to-r from-blue-600 to-indigo-600"
                    >
                        {words[index]}
                    </motion.span>
                </motion.span>
            </AnimatePresence>

            {/* Spacer for layout stability - renders invisibly to hold the width of the longest word */}
            <span className="invisible pointer-events-none pb-1" aria-hidden="true">
                {/* We find the longest word to keep the container width stable */}
                {words.reduce((a, b) => a.length > b.length ? a : b)}
            </span>
        </span>
    );
}
