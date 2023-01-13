import React , { useState , useEffect } from 'react'
import { 
motion,
useAnimationControls
} from 'framer-motion'


const TextSpan = ({ children }) => {

    const [isPlaying,setisPlaying] = useState(false);
    const controls = useAnimationControls();

    useEffect(() => {
        rubberBand()
    },[])

    const rubberBand = () => {
        controls.start({
            transform : [
                "scale3d(1, 1, 1)",
                "scale3d(1.4, .55, 1)",
                "scale3d(0.75, 1.25, 1)",
                "scale3d(1.25, .85, 1)",
                "scale3d(.9, 1.05, 1)",
                "scale3d(1, 1, 1)"
            ],
            transitions: [0, .6, .4, .8, .2, 0.4]
        })
        setisPlaying(true);
    }

    return (
        <motion.span
            className='text1'
            animate={controls}
            onMouseOver={() => {
                if(!isPlaying)
                    rubberBand()
            }}
            onAnimationComplete={() => setisPlaying(false)}
        >
            {children}
        </motion.span>
    )
}

export default TextSpan