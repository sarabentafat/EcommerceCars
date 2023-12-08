 import signup from '../images/signup.png';


export default function SignUP() {
  return (
    
        <div className="  w-full h-full bg-zinc-100 items-center justify-center  flex flex-col p-[20px]  md:flex-row md:items-center md:justify-center  md:p-[70px] ">
          <div className="w-full  h-full flex flex-col  justify-center  items-center md:h-full md:w-2/5  md:flex p-2 space-y-6  ">
          <div className=" text-[45px] md:text-[65px] text-yellow-600 md:hidden ">Sign Up</div> 
            <div className=" w-[290px] h-[500px]  flex flex-col items-center justify-center space-y-[40px]  md:items-center md:justify-center md:space-y-[30px]  md:w-[330px] md:h-[510px] border-[2px] border-neutral-900">
            <div  className='flex flex-col space-y-[15px] items-center justify-center'>
              <input 
              type='text'
              placeholder='Full Name'
              className='w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
            <input 
              type='text'
              placeholder='Phone Number'
              className='w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
              <input 
              type='email'
              placeholder='Email Address'
              className='w-[240px] text-neutral-900 placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
              <input 
              type='text'
              placeholder='Address'
              className='w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
              <input 
              type='password'
              placeholder='Password'
              className='w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
              <input 
              type='password'
              placeholder='Confirm Password'
              className='w-[240px] text-neutral-900  placeholder-neutral-900 py-[10px] bg-transparent  border-b-[2px] border-neutral-900 outline-none focus:outline-none'
              />
              </div>

              <div >
              <button className='bg-neutral-800 text-zinc-100 w-[240px]  h-[40px]'>Sign Up</button>
              <p className="text-neutral-900 text-end  text-[12px] mt-2"> You already have an account? <span className="text-yellow-600">Log in</span></p>
              </div>
          


          </div>
          </div>

          <div className=" w-full  h-full md:w-3/5 md:h-full   flex  flex-col space-y-[20px] md:px-7  items-center justify-center md:space-y-8 md:justify-start md:items-start">
          <div className="text-[65px] text-yellow-600 max-md:hidden">Sign Up</div> 
            <p className='text-left text-neutral-900 opacity-90 text-[25px] md:block hidden'>Ready to embark on your car buying journey?</p>
           <div><img className="w-full h-full md:block hidden" src={signup} alt="Signup" /></div> 
          </div>
        </div>
  
    
  )};

