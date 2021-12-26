import { useMediaQuery } from 'react-responsive'

export const useMediaXs = () => useMediaQuery({ minWidth: 576})
export const useMediaSm = () => useMediaQuery({ minWidth: 576})
export const useMediaMd = () => useMediaQuery({ minWidth: 768})
export const useMediaLg = () => useMediaQuery({ minWidth: 992})
export const useMediaXl = () => useMediaQuery({ minWidth: 1200})
export const useMediaXxl = () => useMediaQuery({ minWidth: 1400})