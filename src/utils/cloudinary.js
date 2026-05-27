const CLOUD = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME || 'dibcdoxdq'

const url = (transforms, id) =>
  `https://res.cloudinary.com/${CLOUD}/image/upload/${transforms}/${id}`

export const imgCard = (id) => url('w_800,h_512,c_fill,g_center,f_auto,q_auto', id)
export const imgGallery = (id) => url('w_1200,f_auto,q_auto', id)
export const imgHero = (id) => url('w_1400,f_auto,q_auto', id)
