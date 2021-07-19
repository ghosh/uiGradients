import create from 'zustand'

interface UiState {
  isDisplayShowing: boolean,
  showDisplay: () => void,
  hideDisplay: () => void,
  toggleDisplay: () => void
}

const useUiStore = create<UiState>(set => ({
  isDisplayShowing: true,
  showDisplay: () => set(s => ({ isDisplayShowing: true })),
  hideDisplay: () => set(s => ({ isDisplayShowing: false })),
  toggleDisplay: () => set(state => ({
    isDisplayShowing: !state.isDisplayShowing
  }))
}))

export default useUiStore