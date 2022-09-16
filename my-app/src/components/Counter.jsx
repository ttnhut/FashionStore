import {React,useState} from 'react'

function Counter() {
    
  const [productOne,setProductOne] = useState(1)
  const handleAdd = () =>{
    setProductOne(productOne+1 );
  }

  const handleMole =() =>{
    setProductOne(productOne-1)
  }

  return (
    <div >
        <div className="flex justify-center items-center text-2xl">
            Số lượng
            <div className="ml-5 shadow-md flex">
                <div className="bg-[#0891b2] text-white w-8 flex items-center justify-center cursor-pointer rounded-l-md" onClick={handleMole}>
                    -
                </div>
                <div className="w-8 flex items-center justify-center border-[1px]">
                    {productOne}
                </div>
                <div className="bg-[#0891b2] text-white w-8 flex items-center justify-center cursor-pointer rounded-r-md" onClick={handleAdd}>
                    +
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Counter;