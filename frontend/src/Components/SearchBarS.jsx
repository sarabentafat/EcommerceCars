import { GoSearch } from "react-icons/go";
export default function SearchBarS() {
  return (
    <div className=" md:flex  relative hidden flex-row h-[40px]  border-neutral-900 border-[1.4px] overflow-hidden">
      <input 
        type="text"
        className="w-full p-2 outline-none" 
      />
      <GoSearch size={24} className="m-2  text-neutral-900" />      
    </div>
  )
}

