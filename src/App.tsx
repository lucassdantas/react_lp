import { categoriesType } from "./@types/categoriesType"
import { Row } from "./components/Row"
import { categories } from "./lib/api"
import './App.css'

function App() {

  return (
    <>
    {categories.map((category:categoriesType) => {
        return <Row 
          key={category.name}
          title={category.title}
          path={category.path}
          isLarge={category.isLarge}
        />
    })}
    </>
  )
}

export default App
