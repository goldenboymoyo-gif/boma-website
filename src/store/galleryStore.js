import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useGalleryStore = create(
  persist(
    (set, get) => ({
      likedImages: [],

      toggleLike: (imageId) => {
        const { likedImages } = get()
        if (likedImages.includes(imageId)) {
          set({ likedImages: likedImages.filter((id) => id !== imageId) })
        } else {
          set({ likedImages: [...likedImages, imageId] })
        }
      },

      isLiked: (imageId) => {
        return get().likedImages.includes(imageId)
      },
    }),
    {
      name: 'boma-gallery-likes',
    }
  )
)
