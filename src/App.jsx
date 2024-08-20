import { useState } from 'react'
import Card from './componet/Card'
import './App.css'

function App() {
  return (
    <>
      <h1 className=' text-green-400 p-4 rounded-xl mb-20 ml-[700px] mt-20'>All The Cards are Here</h1>
      <div className='flex flex-wrap justify-center gap-20'>
        <Card  img="https://tse1.mm.bing.net/th?id=OIP.YWbujQuYU3emKSjvBsYY7AHaEo&pid=Api&P=0&h=180" card="Card 1"   data= "This is a Tree" />
        <Card  img="https://wallup.net/wp-content/uploads/2016/01/186050-lion-animals.jpg" card="Card 2"   data= "This is a Lion"/>
        <Card img="https://tse4.mm.bing.net/th?id=OIP.YStozDiRWuUlT8T9Tmo45QHaEo&pid=Api&P=0&h=180" card="Card 3"   data= "This is a Tiger" />
        <Card img="https://tse3.mm.bing.net/th?id=OIP.7k8Sb1hjJI97gNBTAt3vFwHaEK&pid=Api&P=0&h=180" card="Card 4"   data= "This is a Dear" />
        <Card img="https://tse4.mm.bing.net/th?id=OIP.Dobsg0nvkiBfu4LiTpfXGgHaE8&pid=Api&P=0&h=180" card="Card 5"   data= "This is a Pink Flower" />
        <Card img="https://tse3.mm.bing.net/th?id=OIP.bk2P7bIgTpU6eFh9ZQjlAwHaE8&pid=Api&P=0&h=180" card="Card 6"   data= "This is a White Flower" />
        <Card img="https://tse3.mm.bing.net/th?id=OIP.sWY44wEQgpmU-Q8R87y-LQHaFj&pid=Api&P=0&h=180" card="Card 7"   data= "This is a Yellow Flower" />
        <Card img="https://tse1.mm.bing.net/th?id=OIP.YAXlTjvtEKchdMVc5laZhwHaE8&pid=Api&P=0&h=180" card="Card 8"   data= "This is a Butterfly" />
        <Card img="https://tse1.mm.bing.net/th?id=OIP.SFL7NZfaC4KB9lPOr17jegHaFj&pid=Api&P=0&h=180" card="Card 9"   data= "This is a Blue Butterfly" />
        <Card img="https://tse4.mm.bing.net/th?id=OIP.eFUUjF3Mu_pibdESZGfd0wHaEo&pid=Api&P=0&h=180" card="Card 10"   data= "This is a Pink Butterfly" />
        <Card img="https://tse2.mm.bing.net/th?id=OIP.jO-rlpPslRXBvwITwUEAkAHaE4&pid=Api&P=0&h=180" card="Card 11"   data= "This is a Waterfall" />
        <Card img="https://tse4.mm.bing.net/th?id=OIP.S4p0wnnIk_4bZkw45Vx0ZQHaE8&pid=Api&P=0&h=180" card="Card 12"   data= "This is a Pink Waterfall" />

      </div>
    </>
  )
}

export default App
