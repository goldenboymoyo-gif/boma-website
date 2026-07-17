import { useState } from 'react'

const PLACEHOLDER_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect fill='%23D4C5A9' width='400' height='300'/%3E%3Ctext fill='%239B8B6E' font-family='system-ui,sans-serif' font-size='16' text-anchor='middle' x='200' y='140'%3EThe Boma%3C/text%3E%3Ctext fill='%239B8B6E' font-family='system-ui,sans-serif' font-size='11' text-anchor='middle' x='200' y='162'%3EVictoria Falls%3C/text%3E%3C/svg%3E`

export default function FallbackImage({ src, alt, className, width, height, loading = 'lazy', decoding = 'async', ...props }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <img
      src={imgSrc || PLACEHOLDER_SVG}
      alt={alt || ''}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      onError={() => setImgSrc(PLACEHOLDER_SVG)}
      className={className}
      {...props}
    />
  )
}
