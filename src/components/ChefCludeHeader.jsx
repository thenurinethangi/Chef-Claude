import ChefIcon from '../assets/ChefClaudeIcon.png'
import '../App.css'
import { useNavigate } from "react-router-dom";

function ChefCludeHeader(){

    const navigate = useNavigate();

    function handleClickImg(){
        navigate("/landing");
    }

    return(
        <header className='chef-header'>
            <img className='header-img' src={ChefIcon} onClick={handleClickImg}></img>
            <p className='header-title'>Chef Clude</p>
        </header>
    )
}

export default ChefCludeHeader;