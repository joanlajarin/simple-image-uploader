import './App.css'
import { SimpleImageUploaderApp } from './components/SimpleImageUploaderApp'
import { DarkModeProvider } from './context/DarkMode'
import { LoadStateProvider } from './context/LoadState'

function App() {

  return (
    <>
    <DarkModeProvider>
      <LoadStateProvider>
        <SimpleImageUploaderApp/>
      </LoadStateProvider>
    </DarkModeProvider>
    </>
  )
}

export default App
