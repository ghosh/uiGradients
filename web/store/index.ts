import create from 'zustand'

interface AppState {
  gradients: [] | UIG.Gradient[],
  setGradients: (gs: UIG.Gradient[]) => void,

  activeIndex: null | number
  setActiveIndex: (i: number) => void,

  activeGradient: null | UIG.Gradient,
  setActiveGradient: (g: UIG.Gradient) => void,

  isDisplayShowing: boolean,
  toggleDisplay: () => void
}


const log = (config: any) => (set: any, get: any, api: any) => config((args: any) => {
  console.log("  applying", args)
  set(args)
  console.log("  new state", get())
}, get, api)

const useStore = create<AppState>(set => ({
  gradients: [],
  setGradients: (gs) => set(state => ({ gradients: gs })),

  activeIndex: null,
  activeGradient: null,
  setActiveGradient: (g) => set(state => ({ activeGradient: g })),
  setActiveIndex: (i) => set(state => ({ activeIndex: i })),

  isDisplayShowing: true,
  toggleDisplay: () => set(state => ({
    isDisplayShowing: !state.isDisplayShowing
  }))
}))

export default useStore