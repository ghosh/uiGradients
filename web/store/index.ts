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

// const demoGradient = { "name": "Dark Ocean", "colors": ["#373B44", "#4286f4"], "slug": "dark-ocean", "hues": ["grays", "blues"] }

const useStore = create<AppState>(set => ({
  gradients: [],
  setGradients: (gs) => set(() => ({ gradients: gs })),

  activeIndex: null,
  activeGradient: null,
  setActiveGradient: (g) => set(() => ({ activeGradient: g })),
  setActiveIndex: (i) => set(() => ({ activeIndex: i })),

  isDisplayShowing: true,
  toggleDisplay: () => set(state => ({
    isDisplayShowing: !state.isDisplayShowing
  }))
}))

export default useStore