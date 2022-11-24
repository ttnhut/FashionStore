import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import Base from "../components/Base"
import { loadClothes } from "../services/clothes-service"
import {toast} from "react-toastify"
import "../css/postpage.css"
const PostPage = ()=>{
    const {id} = useParams()

    const [clothes,setClothes] = useState(null)
     useEffect(()=>{
        loadClothes(id).then(res=>{
            console.log(res)
            setClothes(res)
            
        }).catch(error=>{
            console.log(error)
            toast.error("Error in loading post")
        })
     },[])

     const check = ()=>{
        let obj = document.querySelectorAll(".img-wrap")
            obj.forEach(i=>{
                i.setAttribute("background-image","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEPl5IY18q9sr-spjollQKw-ELewasrnKUXQ&usqp=CAU")
            })
     }

    return (
        <Base>
        {
     	    (clothes) && (
              
                <div class="section-fluid-main">
                     
		<div class="section">
	      	<div class="info-wrap mob-margin">
	      		<p class="title-up">{clothes.name}</p>
	      		<h2>{clothes.category.name}</h2>
	      		<h4>{clothes.price} VNĐ</h4>	
	      		<div class="section-fluid">
	      			<input class="desc-btn" type="radio" id="desc-1" name="desc-btn" checked/>
	      			
	      			<input class="desc-btn" type="radio" id="desc-2" name="desc-btn"/>
	      			<label for="desc-2">Details</label> 
		      		<div class="section-fluid desc-sec accor-1">
		      			<p>{clothes.description}</p>
		      		</div>	
		      		<div class="section-fluid desc-sec accor-2">
			      		<div class="section-inline">
			      			<p><span>76</span>cm<br/>Lenght</p>
			      		</div>	
			      		<div class="section-inline">
			      			<p><span>68</span>cm<br/>Width</p>
			      		</div>
			      		<div class="section-inline">
			      			<p><span>87</span>cm<br/>Height</p>
			      		</div>
			      		<div class="section-inline">
			      			<p><span>10</span>kg<br/>Weight</p>
			      		</div>
		      		</div>	
	      		</div>	
	      		<h5>Choose upholstery:</h5>
	      	</div>
	      	<div class="clearfix"></div>
	      	<input class="color-btn for-color-1" type="radio" id="color-1" name="color-btn" checked/>
	      	<label class="first-color" for="color-1"></label> 
	      	<input class="color-btn for-color-2" type="radio" id="color-2" name="color-btn"/>
	      	<label class="color-2" for="color-2"></label> 
	      	<input class="color-btn for-color-3" type="radio" id="color-3" name="color-btn"/>
	      	<label class="color-3" for="color-3"></label> 
	      	<input class="color-btn for-color-4" type="radio" id="color-4" name="color-btn"/>
	      	<label class="color-4" for="color-4"></label> 
	      	<input class="color-btn for-color-5" type="radio" id="color-5" name="color-btn"/>
	      	<label class="color-5" for="color-5"></label> 
	      	<input class="color-btn for-color-6" type="radio" id="color-6" name="color-btn"/>
	      	<label class="color-6" for="color-6"></label> 
	      	<div class="clearfix"></div>
	      	<div class="info-wrap">
				<a href="#" class="btn"><i class="uil uil-shopping-cart icon"></i> Add To Cart</a>
	      	</div>
	      	<div class="img-wrap chair-1"></div>
	      	<div class="img-wrap chair-2"></div>	
	      	<div class="img-wrap chair-3"></div>
	      	<div class="img-wrap chair-4"></div>
	      	<div class="img-wrap chair-5"></div>
	      	<div class="img-wrap chair-6"></div>		
	      	<div class="back-color"></div>	
	      	<div class="back-color chair-2"></div>	
	      	<div class="back-color chair-3"></div>	
	      	<div class="back-color chair-4"></div>	
	      	<div class="back-color chair-5"></div>	
	      	<div class="back-color chair-6"></div>	

			
				<img src={clothes.image} alt="" />
		
		</div>
        {check()}
	</div>
            )
            }
        </Base>
    )
}

export default PostPage