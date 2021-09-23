import React,{useState,useEffect} from 'react'
import { Header } from './Header';
import img1 from './download.png'


export const Tutor = () =>{
    const [math, setMath] = useState(2)
    const [inputStr , setInputStr] = useState('')
    var  [select , setSelect] = useState('Select')
    var english = [
        {
            0:'a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses a set of words that is complete in itself, typically containing a subject and predicate, conveying a statement, question, exclamation, or command, and consisting of a main clause and sometimes one or more subordinate clauses',
        },
        {
            1:'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            2:'Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated. It may be used to display a sample of fonts, generate text for testing, or to spoof an e-mail spam filter Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            3:'Dummy text refers to the bits of content that are used to fill a website mock-up. This text helps web designers better envision how the website will look as a finished product. ... Dummy text is also known as filler text or placeholder text, and it has been used for a long time in the various fields of online publishing'
        }
    ]

    
    
    
    var myArray = english[math][math].split(' ');
    var [falseLength, setFalseLength] = useState('')
    var [trueLength, setTrueLength] = useState('')
    var [ iArr, setIArr] = useState([])
    var trueArr = []
    var falseArr = []
    var [seconds, setSeconds] = useState('00')
    var [minutes, setMinuts] = useState('00')
    var [done ,  setDone] = useState(true)

    

    var hours = 0;
    var mints = 0;
    var sec = 0;
    var mSecs = 0;
    var interval ;

    function timer(){
        mSecs++
       
        if(mSecs >= 100){
            sec++;
            setSeconds(sec)
            mSecs=0;
        }
        else if(sec >= 60){
            mints++;
            setMinuts(mints)
            sec=0;
            clearInterval(interval)
            setSeconds('00')
            setDone(false)
        }
    }

    function start(){
        interval=setInterval(timer,10)
    }
    

  
    const onChange1 = (e) =>{
      
      setInputStr(e.target.value)
      var inputArray = inputStr.split(' ')
      setIArr(inputArray);
      var i;
    
  
      for(i=0; i<myArray.length; i++){
        if(inputArray[i]==myArray[i]){
          trueArr.push(inputArray[i])
        }
        else{
          falseArr.push(inputArray[i])
        }
      }
      setTrueLength(trueArr.length)
      setFalseLength(falseArr.length)

  
    // for (var i = 0; i < trueArr.length; i++) {
    // trueString+=trueArr[i]+" ";
    // }
  
    // for (var i = 0; i < falseArr.length; i++) {
    //   falseString+=falseArr[i]+" ";
    //   }
      
  
    }

    useEffect(() => {
        var num =  Math.floor(Math.random()*4)
        setMath(num)
        console.log(math)
    }, [])
  
  const reset = () =>{
      setDone(true)
     mints = 0;
     sec = 0;
    mSecs = 0;
    setSeconds('00')
    setMinuts('00')
    setInputStr('')
  }
  
    return(
      <>
        <Header language=""/>
        <div style={{backgroundColor:'#141414', backgroundImage:`url(${img1})`,height:'600px',color:'white'}}>
        <div style={{display:'flex',flexDirection:'row', justifyContent:'space-around'}}>
        <div>
        <label> Select Type</label> <select >
                
                <option value='Hard'>Hard</option>
                <option value="Easy">Easy</option>
            </select>
        </div>
        <div>
        <h1 style={{textAlign:'center'}}>{minutes+" : "+seconds}</h1>
       
        </div>
        <div> 
        <label> Select Language</label> <select>
                 <option value="english">English</option>
                <option value="sindhi">Sindhi</option>
                <option value='urdu'>Urdu</option>
            </select>
        </div>
        </div>
      <div style={{height:'200px',width:'70%',fontFamily:'Sens-Serif',fontSize:'25px', textAlign:'center',margin:'0 auto',
    border:'none', }}>
      
      <p>{myArray.map((v,i)=>{
        return  <span key={i}  style={{color: iArr[i]===myArray[i] ? '#0bb83f' : '#c2c2c2', }}>{v+' '}</span>
      })}</p>
      </div>
     
      <div style={{textAlign:'center',margin:'10px'}}>
        {
            done ? <input type='text' value={inputStr} onChange={(e)=>{
                        onChange1(e)
            }} 
            onFocus={start}
            placeholder="Type Here To Start"
            style={{height:'100px',width:'70%',fontFamily:'Sens-Serif',fontSize:'20px', textAlign:'center',
            border:'none',outline:'none'}}
            />
             :
             <div>
             <h1>
                 {trueLength} WORDS PER MINUTE
             </h1> 
             <button onClick={reset} style={{width:'150px',fontSize:"17px",cursor:'pointer'}}>Reset</button>
             </div>
             
        }

        <p style={{color:'#c20000',width:'70%',margin:'0 auto'}}>Note: Your Goal is to make all gray Words Green. Gray Words Will be considered as Wrong Word and do not Press 2 Time Space after writing word. when you press on input Test Will Become Start.</p>
      </div>

      
      </div>
      </>
    )
}