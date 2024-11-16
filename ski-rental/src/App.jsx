import './App.css'
import TopBar from "./components/TopBar"; 
import MyCarousel from "./components/MyCarousel";

function App() {
  return (
    <div className="App">
      {/* Top Navigation Bar */}
      <TopBar />

      <MyCarousel />

    </div>
  )
}

export default App
