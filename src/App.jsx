import { useEffect, useState,useMemo } from 'react';
import './app.css'
import Trivia from './components/Trivia';
import Timer from './components/Timer';
import Start from './components/Start';
function App() {
  const [userName,setUserName]=useState(null)
  const [questionNumber,setQuestionNumber]=useState(1)
  const [stop,setStop]=useState(false)
  const [earned,setEarned]=useState("$ 0")
  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "The language of Lakshadweep. a Union Territory of India, is",
      answers: [
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telugu",
          correct: false,
        },
      ],
    },

    {
      id: 5,
      question: "The International Literacy Day is observed on",
      answers: [
        {
          text: "Sep 8",
          correct: true,
        },
        {
          text: "Nov 28",
          correct: false,
        },
        {
          text: "May 2",
          correct: false,
        },
        {
          text: "Sep 22",
          correct: false,
        },
      ],
    },

    {
      id: 6,
      question: "In which group of places the Kumbha Mela is held every twelve years?",
      answers: [
        {
          text: "Ujjain. Purl; Prayag. Haridwar",
          correct: false,
        },
        {
          text: "Prayag. Haridwar, Ujjain,. Nasik",
          correct: true,
        },
        {
          text: "Rameshwaram. Purl, Badrinath. Dwarika",
          correct: false,
        },
        {
          text: "Chittakoot, Ujjain, Prayag,'Haridwar",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "Writers Building is the headquarters of",
      answers: [
        {
          text: "The times of India group",
          correct: false,
        },
        {
          text: "All India Writers Association",
          correct: false,
        },
        {
          text: "West Bengal Government",
          correct: false,
        },
        {
          text: "Press Trust of India",
          correct: true,
        },
      ],
    },

    {
      id: 8,
      question: "The dates of National Calendar Permanently correspond with the",
      answers: [
        {
          text: "Vikrami Calendar",
          correct: false,
        },
        {
          text: "Mohammadan Calendar",
          correct: false,
        },
        {
          text: "Georgian Calendar",
          correct: true,
        },
        {
          text: "None of these",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "Central Salt and Marine Chemicals Research Institute is located at",
      answers: [
        {
          text: "Ahmedabad",
          correct: false,
        },
        {
          text: "Bhavnagar.",
          correct: false,
        },
        {
          text: "Gandhinagar",
          correct: false,
        },
        {
          text: "Panaji",
          correct: true,
        },
      ],
    },

    {
      id: 10,
      question: "The Krithi system was perfected and Carnatic music was given by",
      answers: [
        {
          text: "Arunagirinathan",
          correct: false,
        },
        {
          text: "Purandaradasa",
          correct: false,
        },
        {
          text: "Shyama Shastri",
          correct: false,
        },
        {
          text: "Swati Tirunal",
          correct: true,
        },
      ],
    },

    
    {
      id: 11,
      question: "Ghototkach in Mahabharat was the son of",
      answers: [
        {
          text: "Duryodhana",
          correct: false,
        },
        {
          text: "Arjuna",
          correct: false,
        },
        {
          text: "Yudhishthir",
          correct: false,
        },
        {
          text: "Bhima",
          correct: true,
        },
      ],
    },

    {
      id: 12,
      question: "The first month of the Indian national calendar is",
      answers: [
        {
          text: "Magha",
          correct: false,
        },
        {
          text: "Chaitra",
          correct: true,
        },
        {
          text: "Ashadha",
          correct: false,
        },
        {
          text: "Vaishakha",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "Which of the following is not a dance from Kerala?",
      answers: [
        {
          text: "Kathakali",
          correct: false,
        },
        {
          text: "Mohiniattam",
          correct: false,
        },
        {
          text: "Ottan Thullal",
          correct: false,
        },
        {
          text: "Yaksha Gana",
          correct: true,
        },
      ],
    },

    {
      id: 14,
      question: "The 227 year old 'Nawab Saheb Ki Haveli' is Iocated at",
      answers: [
        {
          text: "Hyderabad",
          correct: false,
        },
        {
          text: "Jaipur",
          correct: true,
        },
        {
          text: "New Delhi",
          correct: false,
        },
        {
          text: "Agra",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "Which of the following years was celebrated as the World Communication Year?",
      answers: [
        {
          text: "1981",
          correct: false,
        },
        {
          text: "1983",
          correct: true,
        },
        {
          text: "1985",
          correct: false,
        },
        {
          text: "1987",
          correct: false,
        },
      ],
    },

    {
      id: 15,
      question: "The BVO (Brominated Vegetable Oil) was banned in soft drinks by which of the following organisations",
      answers: [
        {
          label: "I.S.I.",
          correct: false,
        },
        {
          text: "AGMARK",
          correct: false,
        },
        {
          text: "MRTPC",
          correct: true,
        },
        {
          text: "None of These",
          correct: false,
        },
      ],
    },


  ];
  const moneyPyramid=useMemo(()=>
    [
      {id:1, amount:"$ 100"},
      {id:2, amount:"$ 200"},
      {id:3, amount:"$ 300"},
      {id:4, amount:"$ 500"},
      {id:5, amount:"$ 1000"},
      {id:6, amount:"$ 2000"},
      {id:7, amount:"$ 4000"},
      {id:8, amount:"$ 8000"},
      {id:9, amount:"$ 16000"},
      {id:10, amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),
  [])

  useEffect(()=>{
questionNumber >1 && setEarned(moneyPyramid.find((m)=>m.id===questionNumber-1).amount)
  },[moneyPyramid ,questionNumber])

  return (
    <div className="app">
       {!userName ? (
        <Start setUserName={setUserName} />
      ) : (
        <>
      <div className="main">
        {stop ? <h1 className='endText'>You Earned: {earned}</h1>:(
          <>
          <div className='top'>
          <div className='timer'>
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className='bottom'>
          <Trivia data={data} setStop={setStop} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
          </div>
          </>
     
  )}
         </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyPyramid.map((m)=>(
            <li className={questionNumber===m.id?'moneyListItem active':'moneyListItem'}>
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span></li>
))}
          
            
           
        </ul>
      </div>
   </>
      )}
    </div>
  );
}

export default App;
