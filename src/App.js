import React, {useState, useEffect} from "react";
import axios from "axios";

import List from "./components/List";


const App = () => {
    
    const [value, setValue] = useState("");
    const [result, setResult] = useState([]);
    
    useEffect(()=>{
        let timer = null;
        if(value){
            timer = setTimeout(async()=>{
                const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                    params:{
                        action: "query",
                        list: "search",
                        origin: "*",
                        format: "json",
                        srsearch: value
                    }
                });
                setResult(data.query.search);
            }, 1000);
        }
        return () => {
            clearInterval(timer);
        } 
    }, [value]);

    return(
        <>
            <nav className="navbar navbar-dark bg-secondary">
                <span className="navbar-brand mb-0 ml-3 h1">Navbar</span>
            </nav>
            <div className="container">
                <div className="row justify-content-center pt-4">
                    <div className="col-3" id="side">
                        <div className="text-center">
                            <select name="country" id="country">
                                <option value="">Country</option>
                                <option value="country1">country1</option>
                                <option value="country2">country2</option>
                                <option value="country3">country3</option>
                                <option value="country4">country4</option>
                                <option value="country5">country5</option>
                            </select><br/>
                            <select name="age" id="age">
                                <option value="">Age</option>
                                <option value="age1">age1</option>
                                <option value="age2">age2</option>
                                <option value="age3">age3</option>
                                <option value="age4">age4</option>
                                <option value="age5">age5</option>
                            </select><br/>
                            <select name="gender" id="gender">
                                <option value="">Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="others">Others</option>
                            </select><br/>
                            <select name="profession" id="profession">
                                <option value="">Profession</option>
                                <option value="profession1">profession1</option>
                                <option value="profession2">profession2</option>
                                <option value="profession3">profession3</option>
                                <option value="profession4">profession4</option>
                                <option value="profession5">profession5</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-9 text-center" id="right">
                        <div className="py-2">
                            <input placeholder="Search"
                            type="text"
                            value = {value}
                            onChange={(event) => setValue(event.target.value)}></input>
                        </div>
                        <div className="py-2">
                            <button className="btn mx-2">Images</button>
                            <button className="btn mx-2">Text</button>
                            <button className="btn mx-2">Videos</button>
                        </div>
                        <div className="col-12 py-4">
                            <List results={result} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
