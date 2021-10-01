export enum states {
  Hidden = 0,
  Initial,
  Modified,
}

export const duration = 0.5

export const defaultAnimations = {
  initial: { opacity: 0 },
  animate: { opacity: 0 },
  transition: { duration },
  exit: { opacity: 0 },
}
