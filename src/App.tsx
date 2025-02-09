import React from "react";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/About";
import Home from "./layouts/Home";
import Contact from "./pages/Contact";
import Experience from "./components/Experience";
import SkillList from "./components/SkillLists";
import { AnimatePresence } from "framer-motion";
import WrapperMotion from "./utils/WrapperMotion";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NavAuth from "./layouts/NavAuth";
import NotFound from "./pages/NotFound";

function App() {
    const locate = useLocation();

    return (
        <React.Fragment>
            <AnimatePresence mode="wait">
                <Routes location={locate} key={locate.pathname}>
                    <Route path="/" element={<WrapperMotion><Home /></WrapperMotion> } />

                    <Route path="/about" element={<About />} >
                        <Route path="experience" element={<Experience />} />
                        <Route path="skills" element={<SkillList />} />
                    </Route>
                    
                    <Route path="/contact" element={<WrapperMotion><Contact /></WrapperMotion>} />

                    <Route path="/auth" element={<NavAuth />} >
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                    </Route>

                    <Route path='/404' element={<NotFound/>} />
                </Routes>
            </AnimatePresence>
        </React.Fragment>
    );
}

export default App;
