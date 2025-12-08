"use client";
import { motion } from "framer-motion";

export function FadeIn({ children, delay = 0, scale = false }: { children: React.ReactNode, delay?: number, scale?: boolean }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20, scale: scale ? 0.95 : 1 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.1,
                        delayChildren: delay,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function FadeInItem({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
            }}
        >
            {children}
        </motion.div>
    );
}
