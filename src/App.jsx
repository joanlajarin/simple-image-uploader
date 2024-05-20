import './App.css'
import { SimpleImageUploaderApp } from './components/SimpleImageUploaderApp'
import { DarkModeProvider } from './context/DarkMode'
import { LoadStateProvider } from './context/LoadState'
import { PhotoProvider } from './context/Photo'

function App() {

  return (
    <>
    <DarkModeProvider>
      <LoadStateProvider>
        <PhotoProvider>
          <SimpleImageUploaderApp/>
        </PhotoProvider>
      </LoadStateProvider>
    </DarkModeProvider>
    </>
  )
}

export default App
