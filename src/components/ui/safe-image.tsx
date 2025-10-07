import Image from 'next/image'
import { urlFor } from '@/lib/sanity'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

interface SafeImageProps {
  image: SanityImageSource | null | undefined
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
  priority?: boolean
}

export default function SafeImage({ 
  image, 
  alt, 
  width, 
  height, 
  fill, 
  className = '',
  priority = false 
}: SafeImageProps) {
  // Return null if no image
  if (!image) return null

  try {
    const imageUrl = urlFor(image).url()
    
    if (fill) {
      return (
        <Image
          src={imageUrl}
          alt={alt}
          fill
          className={className}
          priority={priority}
        />
      )
    }

    return (
      <Image
        src={imageUrl}
        alt={alt}
        width={width || 400}
        height={height || 300}
        className={className}
        priority={priority}
      />
    )
  } catch (error) {
    return null
  }
}