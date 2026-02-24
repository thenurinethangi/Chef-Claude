import './App.css'
import { useNavigate } from "react-router-dom";

function Landing(){

    const navigate = useNavigate();

    function handleClickText(){
        navigate("/");
    }

    return (
        <div onClick={handleClickText}>
            Landing
        </div>
    )
}

export default Landing