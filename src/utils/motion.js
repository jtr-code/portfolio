export const headerVariants = {
    hidden: {
        opacity: 0,
        y: -30,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 0.2
        }
    }
};

export const heroVariants = {
    hidden: {
        opacity: 0,
        x: -100,
        transition: {
            type: "tween"
        }
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.75,
            ease: [0.33, 1, 0.68, 1],
            staggeredChildren: 0.1,
            childrenDelay: 0.3,
            delay: 0.25
        }
    }
};

export const staggerContainer = (staggerChildren, delayChildren) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren
        }
    }
});

export const textVariant = (delay) => ({
    hidden: {
        y: 50,
        opacity: 0
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 1.25,
            delay
        }
    }
});

export const textVariant2 = (delay, index) => ({
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "tween",
            ease: "easeIn",
            delay: delay * index
        }
    }
});
