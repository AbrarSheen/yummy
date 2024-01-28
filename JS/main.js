

    $("#close").hide()
    $("#nav2").css('left','-270px')
    $(".typo").css('left',0)
    $("#search").hide()
    $("#letter").hide()
    $("#content").hide()


    $(document).ready(function () {
      $('.layer').fadeOut(3000);
    });
    categoryapi("categories")
   

   let dataArray=[]
   let allusers=[]

  


    $('#icon').on('click', function () {

         $("#nav2").css('left','-270px')
    });

    $('#open').on('click', function () {

        $("#nav2").css('left',0)

        $("#close").show()
        $("#open").hide()
   });

  //clos event
   $('#close').on('click', function () {

    $("#nav2").css('left','-270px')
    $(".typo").css('left',0)


    $("#open").show()
    $("#close").hide()
});


//open event
$('#open').on('click', function () {

    $("#nav2").css('left',0)
    $(".typo").css('left','271px')


    $("#close").show()
    $("#open").hide()
});

//search
$('#sear').on('click', function () {

    $("#search").show()
    $("#letter").show()
    
});
//searchevent




   let Categories =document.getElementById("Categories")
   let row=document.getElementById("row")
   let area1=document.getElementById("area1")
   let ingred =document.getElementById("ingred")
   let searchinput =document.getElementById("search")
  
//searchbyname

async function searchbyname(mealname){

    let response= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${mealname}`)
    let data=await response.json();
    dataArray=  data.meals;
    if(!data.error){
      displaysearchname()
    }
     }
    
    
    
    
    function displaysearchname() {

        var divs = '';
        for (var i = 0; i < dataArray.length; i++) {
          divs += `<div class="col-md-3">
                <div class="text-center">
                <img src='${dataArray[i].strMealThumb}'  class='w-100'>
                  <h3 class="text-center text-white">${dataArray[i].strMeal}.</h3>
                  
                  <p>${dataArray[i].strYoutube}</p>
                 
                 
                  </div>
              </div>`
        }
      
        row.innerHTML = divs;
      
      }


//category
  async function categoryapi(categories){

    let response= await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let data=await response.json();
    dataArray=  data.categories;
    
    displayData()
    }
    
    
    function displayData() {

        var divs = '';
        for (var i = 0; i < dataArray.length; i++) {
          divs += `<div class="col-md-3">
                <div class="text-center">
                <img src='${dataArray[i].strCategoryThumb}'  class='w-100 position-relative  '>
                <div class="transpar top-0 bottom-0 left-0 bg-white position-absolute"></div>
                  <h3 class="text-center text-white ">${dataArray[i].strCategory}.</h3>
                  
                 
                 
                 
                  </div>
              </div>`
        }
      
        row.innerHTML = divs;
      
      }

    //area
     async function apiarea(area){
       let response= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
       let data=await response.json()
       dataArray=data.meals
       displayarea()
      }

      

     function displayarea(){
        var divs = '';
        for (var i = 0; i < dataArray.length; i++) {
          divs += `<div class="col-lg-3">
                <div class=" p-3 text-center">
               
                  <h3 class="text-white fs-1">${dataArray[i].strArea}</h3>
                  <i class="fa-solid fa-house-laptop fs-1 text-white "></i>
                  
                
                 
                 
                  </div>
              </div>`
        }
      
        row.innerHTML = divs;
     }


    //ingrediants
     async function ingredyapi(meal){

        let response= await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        let data=await response.json();
        dataArray=  data.meals;
       
        displayingredData()
        }
        
        
        function displayingredData() {
    
            var divs = '';
            for (var i = 0; i <=23; i++) {
              divs += `<div class="col-lg-3">
                    <div class="text-center p-3">
                    <i class="fa-solid fa-drumstick-bite text-white fs-1"></i>
                      <h3 class="text-white fs-1">${dataArray[i].strIngredient}</h3>
                      
                     
                     
                     
                      </div>
                  </div>`
            }
          
            row.innerHTML = divs;
          
          }

$('#Categories').on('click',function(){
    categoryapi("categories")
    $("#search").hide()
    $("#letter").hide()
    $("#content").hide()
    $("#row").show()
});

$('#area1').on('click',function(){
    apiarea("meals")
    $("#search").hide()
    $("#letter").hide()
    $("#content").hide()
    $("#row").show()
});

$('#ingred').on('click',function(){
    ingredyapi("meals")

    $("#search").hide()
    $("#letter").hide()
    $("#content").hide()
    $("#row").show()
});
$('#contact').on('click',function(){
    

    $("#search").show()
    $("#letter").show()
    $("#content").show()
    $("#row").hide()
    
});



searchinput.addEventListener('input',function(){
    searchbyname(this.value)
})



//VALIDATION


let nameinput=document.getElementById("nameinput")
    let emailinput=document.getElementById("emailinput")
    let phoneinput=document.getElementById("phoneinput")
    let ageinput=document.getElementById("ageinput")
   let passwordinput=document.getElementById("passwordinput")
   let Repasswordinput=document.getElementById("Repasswordinput")
   let submitt=document.getElementById("submitt")
   let messg1=document.getElementById(" messg1")
   let messg2=document.getElementById(" messg2")
   let messg3=document.getElementById(" messg3")
   let messg4=document.getElementById(" messg4")
   let messg5=document.getElementById(" messg5")
   let messg6=document.getElementById(" messg6")
   let alert1=document.getElementById("alert1")

  

   let nameRegex=/[a-zA-Z]/;
   let mailRegex=/^[a-z]{3,}(@gmail)\.(com)$/;
   let phoneRegex=/^(010|011|012|015|)[0-9]{11}/;
   let ageRegex=/[0-9]{2}/;
   let passwordRegex=/[a-zA-Z]{3,}[0-9]{3,}/
   let repasswordRegex=/[a-zA-Z]{3,}[0-9]{3,}/

if(localStorage.getItem("users")!=null){
  allusers=JSON.parse(localStorage.getItem("users"))
}else{
  allusers=[];  
}

submitt.addEventListener("click",function(){
  if(nameinput.value !==""&&emailinput.value!==""&&phoneinput.value!==""&&ageinput.value!=="" &&passwordinput.value!=="" &&Repasswordinput.value!=="" ){
    if(nameinput.classList.contains("is-valid")&&emailinput.classList.contains("is-valid")&&phoneinput.classList.contains("is-avlid")
    &&ageinput.classList.contains("is-valid")&&passwordinput.classList.contains("is-valid")&&Repasswordinput.classList.contains("is-valid")){
      var user={
        name:nameinput.value,
        email:emailinput.value,
        phone:phoneinput.value,
        age:ageinput.value,
        password:passwordinput.value,
        repassword:Repasswordinput.value
        
    }
    allusers.push(user);
    localStorage.setItem("users",JSON.stringify(allusers ));
   
    console.log(allusers)
    messg1.classList.replace("d-block","d-none")
    messg2.classList.replace("d-block","d-none")
    messg3.classList.replace("d-block","d-none")
    messg4.classList.replace("d-block","d-none")
    messg5.classList.replace("d-block","d-none")
    messg6.classList.replace("d-block","d-none")
    
}
    


    else{
      messg1.classList.replace("d-none","d-block")
      messg2.classList.replace("d-none","d-block")
      messg3.classList.replace("d-none","d-block")
      messg4.classList.replace("d-none","d-block")
      messg5.classList.replace("d-none","d-block")
      messg6.classList.replace("d-none","d-block")
    }

  
    }  
          
    else{
      alert1.classList.replace("d-none","d-block")
    }


})


nameinput.addEventListener('input',function(){
  validate(nameinput,nameRegex)

})

emailinput.addEventListener('input',function(){
  validate(emailinput,mailRegex)

})

phoneinput.addEventListener('input',function(){
  validate(phoneinput,phoneRegex)

})

ageinput.addEventListener('input',function(){
  validate(ageinput,ageRegex)

})

passwordinput.addEventListener('input',function(){
  validate(passwordinput,passwordRegex)

})

Repasswordinput.addEventListener('input',function(){
  validate(Repasswordinput,repasswordRegex)

})

function validate(ele,regex){
  let testregex=regex
  if(testregex.test(ele.value)){
    ele.cLasslist.add("is-valid")
    ele.cLasslist.remove("is-inalid")

  }
  else{
    ele.cLasslist.remove("is-valid")
    ele.cLasslist.add("is-inalid")
  }



}