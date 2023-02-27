import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { CoffeeItem } from './components/coffee-item/CoffeeItem.component'
import {CoffeeInterface} from "./models/coffee/Coffee.interface";
import {CoffeeListComponent} from "./components/CoffeeList.component";
// import type { Coffee } from './components/coffee-item/CoffeeItem.component'

// const coffee: CoffeeInterface[] = [
//
// ];

function App() {
  // const [count, setCount] = useState(0)

  const [coffees, setCoffee] = useState<CoffeeInterface[]>([
    {
      id: 1,
      name: "Mocha Vanilla Express",
      price: 4.75,
      description: "This is a coffee description",
      imageUrl:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      favourite: true
    },
    {
      id: 2,
      name: "Italian Roast",
      price: 4.75,
      description: "This is a coffee description",
      imageUrl:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      favourite: false
    },{
      id: 3,
      name: "Chocolate Mocha",
      price: 4.75,
      description: "This is a coffee description",
      imageUrl:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      favourite: true
    },{
      id: 4,
      name: "Italian Roast",
      price: 4.75,
      description: "This is a coffee description",
      imageUrl:
          "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZSUyMGRyaW5rfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
      favourite: false
    },
  ])

  const onCoffeeSelect = (coffee: CoffeeInterface) => {
    const coffeeUpdateItem = [...coffees]
    const coffeeLocated: CoffeeInterface | undefined = coffeeUpdateItem.find((coffeeItem: CoffeeInterface) => {
      return coffeeItem.id === coffee.id
    })
    // @ts-ignore
    coffeeLocated.favourite = !coffee.favourite
    setCoffee(coffeeUpdateItem)
    // @ts-ignore
    console.log("Selected coffees that are considered favorite: ", coffeeLocated.id, coffeeUpdateItem)
  }
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <CoffeeListComponent coffee={coffees} onCoffeeSelect={onCoffeeSelect}/>
    </div>
  )
}

export default App
