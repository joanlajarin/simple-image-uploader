import './App.css'
import { SimpleImageUploaderApp } from './components/SimpleImageUploaderApp'
import { DarkModeProvider } from './context/DarkMode'

function App() {

  return (
    <>
    <DarkModeProvider>
      <SimpleImageUploaderApp/>
    </DarkModeProvider>
    </>
  )
}

export default App
