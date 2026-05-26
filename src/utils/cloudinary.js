// Set VITE_CLOUDINARY_CLOUD_NAME in .env.local to enable Cloudinary CDN.
// Without it, all helpers return the local fallback path transparently.
const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME

const url = (transforms, id) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/${transforms}/${id}`

// Card thumbnails: 800x512, auto crop, auto format (WebP/AVIF), auto quality
export const imgCard = (id, fallback) =>
  CLOUD ? url('w_800,h_512,c_fill,g_center,f_auto,q_auto', id) : fallback

// Gallery / modal images: max 1200px wide, auto format, auto quality
export const imgGallery = (id, fallback) =>
  CLOUD ? url('w_1200,f_auto,q_auto', id) : fallback

// Hero image: max 1400px wide, auto format, auto quality
export const imgHero = (id, fallback) =>
  CLOUD ? url('w_1400,f_auto,q_auto', id) : fallback
