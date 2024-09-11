import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";
export default function Image({ Image, width, height, ImageAlt }) {
  return (
    <>
      {width && height ?
        <LazyLoadImage src={Image}
          width={width} height={height}
          alt={ImageAlt}
        />
        :
        <LazyLoadImage src={Image}
          width={width} height={height}
          alt={ImageAlt}
        />
      }
    </>
  )
}
