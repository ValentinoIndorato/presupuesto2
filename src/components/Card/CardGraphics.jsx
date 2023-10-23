import List from "./List"
import Graphic from "./Graphic"
import Amount from "./Amounts"
import Button from "../button"
import PieCharts from "./PieChart"
import { useState } from "react"

function CardGraphics() {
    
    const montos = [
        {
            id: 1,
            name: "valentino",
            income:[
                {salary: 150000  },
                {bonus: 20000  }
            ],
            egress:[
                {spend: 100000}

            ]
        }
    ]
    const [amount, setAmount] = useState(montos[0].income)
    function income(){
        setAmount(montos[0].income)
    }

    function egress(){
        setAmount(montos[0].egress)
        
    }
    
    return (
        <>
        {amount.map((p)=>{return(<div>{p.spend || p.salary}</div>)})}
        {montos.map((p)=>{return(<div>{p.name}</div>)})}
      
            <div className="cardGraphics-div">
                <h2>Octubre</h2>
                <Button />
            </div>

            <article className="cardGraphics-article">
                <div className="cardGraphics-article-div" >
                    <div className="tabs"  >
                        <button onClick={()=>{income()}} >ingreso</button>
                        <button onClick={()=>{egress()}}>egreso</button>
                    </div>


                    <Graphic />
                    <section className="cardGraphics-article-div-section">
                        <Amount datas={amount}/>
                        <Amount />
                        <Amount />
                    </section>
                </div>
                <List />
            </article>

        </>
    )
}
export default CardGraphics