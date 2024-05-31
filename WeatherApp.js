import React ,{useState}from "react";


const WeatherApp=()=>{

    const [city,setCity]=useState("");
    const [result,setResult]=useState("");
    const changeHandler=e=>{
        setCity(e.target.value);
    }
    const submitHandler=e=>{
        e.preventDefault();
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`).then(
            response=>response.json()
        ).then(data=>{
            const kelvin=data.main.temp;
            const celcius=kelvin-273.15;
            setResult("Temperature at "+city+"\n"+"\n"+Math.round(celcius)+"°C");

        }).catch(error=>console.log(error))
        setCity("");
    }

    return (
        <div className="main" >
            <center>
            <div className="Card">
                <div className="Card-body">
                    <h1 className="Card-title">WeatherApp</h1><br/>
                    <form onSubmit={submitHandler}> 
                        <input type="text" name="city" value={city} onChange={changeHandler}/><br/><br/>
                        <input type="submit" value="Get Temapture"/><br/><br/>
                    </form>
                    <h1>{result}</h1>
                </div>
            </div>
            </center>
        </div>
    )
}
export default WeatherApp ;