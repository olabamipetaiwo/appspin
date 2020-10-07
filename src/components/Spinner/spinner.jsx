import React,{useState,useRef} from 'react';
import "../main.scss";

const Spinner = (props) => { 

  /*
    Initialising relevant variables
    curr --- current generated random number
    result --- A 5 by 5 matrix initalized with 25 empty slots
    x --- pointer to keep track of the row value
    y --- pointer to keep travk of the column value
    count --- variable to keep track of thr nmber of times  spin is clicked
    chosenCells --- Cells position to perform multiplier check
  */
  const [curr,setCurr] = useState('')
  const [result,setResult] = useState(new Array(5).fill('').map(() => new Array(5).fill('')));
  const [resultMultiplier,setResultMultiplier] = useState([]);
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);
  const [count,setCount] = useState(0);
  const btn = useRef();
  const circle = useRef();

  const chosenCells = ['11','22','33','44','55'];
  
  /*
    @Generate Random Number and update the corresponding poition in the mtrix
    Handle Spin Button click 
    Generate random number betwen 1 and 5 and convert it from String to Integer
    When the column value exceeds 5, set Y to Zero and increment X by 1 else increment y by 1
  */
  const genRandNum = () => {
      //Prevent a button from been clicked when computation is stil in progress
    btn.current.setAttribute('disabled','disabled')
    circle.current.style.animation = "rotate ease-in-out 2s forwards alternate-reverse";
    setTimeout(() => {
        setCount(count + 1);
        let randomA  = String(Math.floor(Math.random() * 5) + 1);
        let randomB  = String(Math.floor(Math.random() * 5) + 1);
        let random = parseInt(randomA + randomB);
        setCurr(random);

        if((y+1) > 4) {
            setResult((prevState) => {
                const newVal = [...prevState];
                newVal[x][y] = random;
                return newVal;
            });
            setX(x + 1);
            setY(0);
        }else{
            setResult((prevState) => {
                const newVal = [...prevState];
                newVal[x][y] = random;
                return newVal;
            });
            setY(y + 1);
        }

        //Checking if values from the wheel (random) corresponds to certain cell(chosen cells)
        // if yes , multply by 1.5 and add update resultMultplier state
        //Converting to String because array elements are of typr string
        if (chosenCells.includes(String(random))) {
            setResultMultiplier([...resultMultiplier,random*1.5]);
        }


        circle.current.style.animation ='';
        if((count + 1) > 24)  {
            btn.current.setAttribute('disabled','disabled')
        }else {
            btn.current.removeAttribute('disabled');
        }
    },2000);
  };

    return ( 
        <div className="content">
            <h1>Welcome {  localStorage.getItem("currentUser")}</h1>
            <div ref={circle} className="spin">
               {count > 24 ? 
               <button ref={btn} disabled='disabled' className="btn" onClick={genRandNum}>Spin</button>:
               <button ref={btn} className="btn" onClick={genRandNum}>Spin</button>}
            </div>
            <div className="result">
                <h1>{curr}</h1>
                <div className="result__grid">
                    <ul>
                        {
                            result.length > 0 && result.map((val) => {
                                return val.map((v,index) => {
                                    return <li key={index} className="li">{v}</li>
                                })
                            })
                        }
                    </ul>
                </div>
            </div>
            
            <div className="result">
                <div className="result__grid">
                    <ul>
                        {
                            resultMultiplier.length > 0 && resultMultiplier.map((val,index) => {
                               return <li key={index} className="li">{val}</li>                                
                             })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Spinner;

  
