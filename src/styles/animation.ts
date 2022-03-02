import {motion,useMotionValue,useTransform} from 'framer-motion'
import {Image, FlexProps} from '@chakra-ui/react'

export const AnimationImage={
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
        delayChildren: 1.5,
        staggerChildren: 0.8
        }
  }
}
export const MotionImage = motion(Image)

export const AnimationDown ={
    hidden: { y: 500, opacity:0},
    visible: { y: 0, opacity:1}
}
export const AnimationUp ={
    hidden: { y: -500, opacity:0},
    visible: { y: 0, opacity:1}
}