import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"
import Botton from "../Botton"
import  PieCharts  from "./PieChart"
function CardGraphics (){
    
return(
    <>  
    <div className="cardGraphics-div">
    <h2>Octubre</h2>
    <Botton /> 
    </div>

    <article className="cardGraphics-article">         
    <div className="cardGraphics-article-div" >
    <Graphic/>
    <section  className="cardGraphics-article-div-section">
    <Amount/>   
    <Amount/> 
    <Amount/> 
    </section>
    </div> 
    <List/>  
    </article>
    
    </>
)
}
export default CardGraphics