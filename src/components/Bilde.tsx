import type { ImgHTMLAttributes } from 'react'
import bilder from '../data/bilder.json'

type Info = { bredde: number; hoyde: number; varianter: number[] }
const manifest: Record<string, Info> = bilder

interface Props extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'srcSet'> {
  /** Stien til originalbildet i public/, for eksempel /revy/bilde.jpg */
  src: string
  alt: string
  /** Hvor bredt bildet vises, for eksempel "(min-width: 768px) 360px, 100vw". */
  sizes: string
  /** Toppbilder som skal lastes med en gang. Ellers lastes bildet når man scroller nær det. */
  prioritet?: boolean
}

// Viser et bilde fra public/ som WebP i en bredde som passer skjermen.
// Variantene lages av scripts/optimaliser-bilder.mjs. Finnes ikke bildet i
// manifestet (for eksempel et nytt bilde før skriptet er kjørt), vises originalen.
export default function Bilde({ src, alt, sizes, prioritet = false, ...rest }: Props) {
  const info = manifest[src]
  const lasting = {
    loading: prioritet ? ('eager' as const) : ('lazy' as const),
    decoding: 'async' as const,
    fetchPriority: prioritet ? ('high' as const) : undefined,
  }

  if (!info) return <img src={src} alt={alt} {...lasting} {...rest} />

  const utenFiltype = src.replace(/\.[^.]+$/, '')
  const variant = (b: number) => `/optimert${utenFiltype}-${b}.webp`
  const størst = info.varianter.at(-1)!

  return (
    <img
      src={variant(størst)}
      srcSet={info.varianter.map((b) => `${variant(b)} ${b}w`).join(', ')}
      sizes={sizes}
      width={info.bredde}
      height={info.hoyde}
      alt={alt}
      {...lasting}
      {...rest}
    />
  )
}
