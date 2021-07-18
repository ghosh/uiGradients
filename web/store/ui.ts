import create from 'zustand'

interface UiState {
  isDisplayShowing: boolean,
  toggleDisplay: () => void
}

const useUiStore = create<UiState>(set => ({
  isDisplayShowing: true,
  toggleDisplay: () => set(state => ({
    isDisplayShowing: !state.isDisplayShowing
  }))
}))

export default useUiStore