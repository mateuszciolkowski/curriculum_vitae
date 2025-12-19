import { useState } from 'react'
import reactLogo from './assets/images/icons/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 flex items-center justify-center">
      <div className="bg-white rounded-3xl shadow-2xl p-12 max-w-2xl">
        <div className="flex gap-8 justify-center mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="h-24 w-24 hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="h-24 w-24 hover:rotate-180 transition-transform duration-1000" alt="React logo" />
          </a>
        </div>
        <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 text-center mb-8">
          Vite + React
        </h1>
        <div className="text-center space-y-6">
          <button 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform hover:scale-105 transition-all" 
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-gray-700 text-lg">
            Edit <code className="bg-gray-200 px-2 py-1 rounded">src/App.tsx</code> and save to test HMR
          </p>
          <p className="text-gray-500 mt-4">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
