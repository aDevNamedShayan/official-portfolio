import { Caveat, Harmattan, Rubik } from 'next/font/google'
import localFont from 'next/font/local'

// EN
export const rubik = Rubik({
    subsets: ['latin']
})

// EN handwriting
export const caveat = Caveat({
    subsets: ['latin']
})

// FA
export const iranYekan = localFont({
    src: '../../public/fonts/IRANYekanXVFaNumVF.ttf'
})

// FA handwriting
export const harmattan = Harmattan({
    weight: ['700'],
    subsets: ['arabic']
})
