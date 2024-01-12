export const isDev = import.meta.env.NODE_ENV === 'development'

export const isOnServerSide = typeof window === 'undefined'
