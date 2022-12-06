import { useState } from "react"
import { useEffect } from "react"
import { loadAllCategories } from "../services/category-service"
import { getClothesByCategory } from "../services/clothes-service"
import { countClothesByCategory } from "../services/statistics-service"
import Chart from "react-apexcharts"
const StatsComponent = ()=>{
 
    const [stats,setStats] = useState([])
    const [categories,setCategories] = useState([])
    useEffect(()=>{
        countClothesByCategory().then(res=>{
            console.log(res)
            setStats(res)
        })
        loadAllCategories().then(res=>{
            setCategories(res)
        })
    },[])
   

    return (
        <>
        <label
                htmlFor=""
                className="block mt-3 text-lg  text-center font-bold"
              >
                Thống kê sản phẩm theo danh mục
              </label>
            <Chart
                type="pie"
                width={650}
                height={550}
                series={stats}
                options={
                    {
                        labels:categories.map(item=>item.name)
                    }
                }
            />
       </>
       
    )
}

export default StatsComponent