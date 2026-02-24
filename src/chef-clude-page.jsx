import ChefCludeBody from "./components/ChefCludeBody"
import ChefCludeHeader from "./components/ChefCludeHeader"
import './App.css'

function ChefClude(){

    return (
        <div className="chef-clude-page-container">
            <ChefCludeHeader />
            <ChefCludeBody />
        </div>
    )
}

export default ChefClude