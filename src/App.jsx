import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";
import Todo from "./Todo";
import About from "./About";
import TodoList from "./TodoList";

export default function  App(){
   
    const credit= {
        amount:20000,
        type:"ISTEHLAK",
        debt:12
    }

    return(
    <> 
        <Header />
        <Routes>
            <Route  path="/todos"  element={<Todo credit={credit} />} />
            <Route  path="/about"  element={<About />} />
        </Routes>
       
        <Footer />      
    </>
)
}