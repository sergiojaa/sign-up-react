import { useState } from 'react';
import backImage from './assets/Group 5.png';
const users = [
  {
    firstInput:  false
  },
  {
    secondInput:  false
  },
  {
    thirdInput:  false
  },
  {
    fourthInput:  false
  },

]
function App() {
  const [input, setInput] = useState(users)
  return (
    <div
      className="bg-cover bg-center h-screen bg-red-400"
      style={{ backgroundImage: `url(${backImage})` }} // Corrected here
    >
      <div className="flex">
        <div className="mt-[290px]  mb-[379px] ml-[165px]">
          <h1 className="w-96 text-5xl text-slate-100">
            Learn to code by watching others
          </h1>
          <p className="w-[500px] h-[78px] text-base text-slate-100 mt-[30px]">
            See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable.
          </p>
        </div>
        <div className='flex flex-col items-center	'>
        <button className='w-[540px] h-[60px] mb-[24px] ml-[45px] p-[17px_112px] rounded-[10px] bg-[#5e54a4]'>Try it free 7 days then $20/mo.thereafter</button>
        <div className='ml-[45px ] bg-white w-[540px] h-[478px] ' >
          
          <form action="" className='flex flex-col items-center	' >
            <input className='w-[460px] h-[56px] mb-[20px] mt-[40px] p-[15px_351px_15px_32px] rounded-[5px] border border-[#5e54a4] bg-white' type="text" placeholder="First Name" />
            <input  className='w-[460px] h-[56px] mb-[20px] p-[15px_351px_15px_32px] rounded-[5px] border border-[#5e54a4] bg-white'  type="text" placeholder="Last Name" />
            <input  className='w-[460px] h-[56px] mb-[20px] p-[15px_351px_15px_32px] rounded-[5px] border border-[#5e54a4] bg-white'  type="text" placeholder="Email Address" />
            <input  className='w-[460px] h-[56px] mb-[20px] p-[15px_351px_15px_32px] rounded-[5px] border border-[#5e54a4] bg-white'  type="text" placeholder="Password" />
            <button className="bg-[#38cc8b] text-slate-50 text-lg w-[460px] h-[56px] rounded-[10px]" >CLAIM YOUR FREE TRIAL</button>
          </form>
        </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
