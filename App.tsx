import { useState } from 'react';
import backImage from './assets/Group 5.png';
// import warningImage from './assets/react.svg'
const initialState = {
  firstInput: '',
  secondInput: '',
  thirdInput: '',
  fourthInput: '',
};

function App() {
  const [input, setInput] = useState(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, key: keyof typeof initialState) => {
    setInput(prevState => ({
      ...prevState,
      [key]: e.target.value
    }));
  };

  return (
    <div
      className="bg-cover bg-center h-screen bg-red-400"
      style={{ backgroundImage: `url(${backImage})` }} 
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
        <div className='flex flex-col items-center'>
          <button className='w-[540px] h-[60px] mb-[24px] ml-[45px] p-[17px_112px] rounded-[10px] bg-[#5e54a4]'>Try it free 7 days then $20/mo.thereafter</button>
          <div className='ml-[45px] bg-white w-[540px] h-[578px]'>
            <form action="" className='flex flex-col items-center'>
              <input
                className={`w-[460px] h-[56px] mb-[6px] mt-[40px] p-[15px_351px_15px_32px] rounded-[5px] border-2 ${
                  input.firstInput ? 'border-white' : 'border-[#ff7979]'
                } bg-white  `}
                type="text"
                placeholder="First Name"
                onChange={(e) => handleInputChange(e, 'firstInput')}
              />
              {!input.firstInput && (
                  <p className="mb-[20px] ml-[302px] text-[11px] font-medium italic text-right text-[#ff7979]">
                  First name cannot be empty
                </p>
              )}
              <input
                className={`w-[460px] h-[56px] mb-[6px] mt-[10px] p-[15px_351px_15px_32px] rounded-[5px] border-2 ${
                  input.secondInput ? 'border-white' : 'border-[#ff7979]'
                } bg-white`}
                type="text"
                placeholder="Last Name"
                onChange={(e) => handleInputChange(e, 'secondInput')}
              />
              {!input.secondInput && (
                <p className="mb-[20px] ml-[302px] text-[11px] font-medium italic text-right text-[#ff7979]">
                  Last name cannot be empty
                </p>
              )}
              <input
                className={`w-[460px] h-[56px] mb-[6px] mt-[10px] p-[15px_351px_15px_32px] rounded-[5px] border-2 ${
                  input.thirdInput ? 'border-white' : 'border-[#ff7979]'
                } bg-white`}
                type="text"
                placeholder="Email Address"
                onChange={(e) => handleInputChange(e, 'thirdInput')}
              />
              {!input.thirdInput && (
                <p className="mb-[20px] ml-[302px] text-[11px] font-medium italic text-right text-[#ff7979]">
                  Looks like this is not an email
                </p>
              )}
              <input
                className={`w-[460px] h-[56px] mb-[6px] mt-[10px] p-[15px_351px_15px_32px] rounded-[5px] border-2 ${
                  input.fourthInput ? 'border-black' : 'border-[#ff7979]'
                } bg-white`}
                type="text"
                placeholder="Password"
                onChange={(e) => handleInputChange(e, 'fourthInput')}
              />
              {!input.fourthInput && (
                <p className="mb-[20px] ml-[302px] text-[11px] font-medium italic text-right text-[#ff7979]">
                  Password cannot be empty
                </p>
              )}
              <button className="bg-[#38cc8b] text-slate-50 text-lg w-[460px] h-[56px] rounded-[10px]">
                CLAIM YOUR FREE TRIAL
              </button>
            </form>
            <p className='w-[467px] text-[14px] text-[#ada3a3] mt-[18px] mb-[40px] ml-[66px] mr-[86px]'>
              By clicking the button you are agreeing to our <span className='text-[#ff7979]'>Terms and Services</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
