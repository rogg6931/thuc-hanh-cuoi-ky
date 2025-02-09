import React from "react"
import '../styles/person.css'
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi"
import { useUser } from "../contexts/UserContext"

const Person = () => {
    const { ...person } = useUser();
    
    return (
        <React.Fragment>
            <div className="text-center ">
                {/* avatar */}
                <img src={person.avatar} alt="Avatar" className="object-cover" style={{clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)'}} />

                {/* thong tin */}
                <span className="block my-4">
                    <h1 className="font-semibold"> {person.name} </h1>
                    <h2 className="text-xl"> {person.classRoom} </h2>
                </span>

                {/* desc */}
                <span id="desc-info" className="block bg-white outline outline-slate-200 rounded-xl mx-6 py-2 px-4 desc">
                    <BiSolidQuoteAltLeft className="icon-left-style" />
                    {person.desc}
                    <BiSolidQuoteAltRight className="icon-right-style" />
                </span>
            </div>
        </React.Fragment>
  )
}

export default Person