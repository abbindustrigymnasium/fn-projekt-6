<template>
<div class ="bg-gray-800">
<link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />

<section class="pt-20 lg:pt-[80px] pb-12 lg:pb-[90px]">
   <div class="container">
      <div class="flex flex-wrap -mx-4">
         <div class="w-full px-4">
            <div class="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]">
               <span class="font-semibold text-lg text-primary mb-2 block">
               
               </span>
               <h2
                  class="
                  font-bold
                  text-3xl
                  sm:text-4xl
                  md:text-[40px]
                  text-body-color
                  mb-4
                  "
                  >
                  Our partners
               </h2>
               <p class="text-base text-body-color">
                  Here are all of FN's global objectives. Select up to three different targets to support.   
               </p>
            </div>
         </div>
      </div>
      <div class="flex flex-wrap -mx-4">
 <div class="w-full md:w-1/2 lg:w-1/3 px-4">
    <div
        class="
        p-8
        md:px-7
        xl:px-10
        rounded-[20px]
        bg-white
        shadow-md
        hover:shadow-lg
        mb-8
        "
        >
            <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" @click="ckChange('progress1')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
            <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-01.png"> 
        
        <h4 class="font-semibold text-xl text-dark mb-2">
        Goal 1: No Poverty
        </h4>
            <p class="text-body-color mb-2">
                End poverty, everywhere in all it's forms. Together we can help people live productive and rich lives
            </p>
        </div>
    </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress2" value="1" tabIndex="1" @click="ckChange('progress2')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>                 
                     <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-02.png">     
               
               <h4 class="font-semibold text-xl text-dark mb-2">
                  Goal 2: Zero Hunger
               </h4>
               <p class="text-body-color mb-2">
                End hunger, achieve food security and improved nutrition and promote sustainable agriculture.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress3" value="1" tabIndex="1" @click="ckChange('progress3')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
                     <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/04/E_SDG-goals_icons-individual-rgb-03.png">
               
               <h4 class="font-semibold text-xl text-dark mb-2">
                  Goal 3: Good Health and Well-being
               </h4>
               <p class="text-body-color mb-2">
                Ensure healthy lives and promote well-being for all at all ages.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress4" value="1" tabIndex="1" @click="ckChange('progress4')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/04/E_SDG-goals_icons-individual-rgb-04.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 4: Quality Education
               </h4>
               <p class="text-body-color mb-2">
                Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress5" value="1" tabIndex="1" @click="ckChange('progress5')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-05.png">
               <h4 class="font-semibold text-xl text-dark mb-3">
                Goal 5: Gender Equality
               </h4>
               <p class="text-body-color">
                Achieve gender equality and empower all women and girls.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress6" value="1" tabIndex="1" @click="ckChange('progress6')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-06.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 6: Clean Water and Sanitaion
               </h4>
               <p class="text-body-color mb-2">
                Ensure availability and sustainable management of water and sanitation for all.
               </p>
            </div>
            
         
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress7" value="1" tabIndex="1" @click="ckChange('progress7')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-07.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 7: Affordable and Clean Energy
               </h4>
               <p class="text-body-color mb-2">
                Our current reliance on fossil fuels is 
                unsustainable and harmful to the planet, 
                which is why we have to change the way we 
                produce and consume energy.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress8" value="1" tabIndex="1" @click="ckChange('progress8')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-08.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 8: Decent Work and Economic Growth
               </h4>
               <p class="text-body-color mb-2">
               By putting a stop to modern slavery and child labor 
               we can make sure that everybody gets the benefits of 
               entrepreneurship and innovation.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress9" value="1" tabIndex="1" @click="ckChange('progress9')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-09.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 9: Industry, Innovation and Infrastructure
               </h4>
               <p class="text-body-color mb-2">
                Build resilent infrastructure, promote inclusive 
                and sustainable industrialization and foster innovation.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress10" value="1" tabIndex="1" @click="ckChange('progress10')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-10.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 10: Reduced Inequalities
               </h4>
               <p class="text-body-color mb-2">
               Equality and prosperity must be available to everyone – 
               regardless of gender, race, religious beliefs or economic 
               status.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress11" value="1" tabIndex="1" @click="ckChange('progress11')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-11.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 11: Sustainable Cities and Communities
               </h4>
               <p class="text-body-color mb-2">
                We need new and intellegent urban planning 
                to create safe and resilient cities with 
                culturally inspiring conditions.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress12" value="1" tabIndex="1" @click="ckChange('progress12')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-12.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 12: Responsible Consumption and Production
               </h4>
               <p class="text-body-color mb-2">
                We consume far more than our planet can provide. 
                We need to use and produce sustainably to 
                reverse the harm we caused.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress13" value="1" tabIndex="1" @click="ckChange('progress13')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-13.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 13: Climate Action
               </h4>
               <p class="text-body-color mb-2">
                Climate change is a real threat to 
                our civilization. The effects are already 
                visible and will be catastrophic unless we act now.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress14" value="1" tabIndex="1" @click="ckChange('progress14')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-14.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 14: Life Below Water
               </h4>
               <p class="text-body-color mb-2">
                Oceans cover 70% of our planet and we 
                rely on them for food, energy and water. 
                Yet, we have managed to do tremendous damage 
                to these precious resources.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress15" value="1" tabIndex="1" @click="ckChange('progress15')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-15.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 15: Life on Land
               </h4>
               <p class="text-body-color mb-2">
                We are all part of the planet's 
                ecosystem. Promoting a sustainable 
                use of our ecosystems and preserving 
                biodiversity is not a cause. It is 
                the key to our survival.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress16" value="1" tabIndex="1" @click="ckChange('progress16')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
                </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-16.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 16: Peace, Justice and Strong Institutions
               </h4>
               <p class="text-body-color mb-2">
                Persecution, injustice and abuse
                runs rampant. It is tearing the 
                very fabric of civilization. 
                We need to have strong 
                institutions, global standards 
                of justice, and commitment 
                to peace everywhere.
               </p>
            </div>
         </div>
         <div class="w-full md:w-1/2 lg:w-1/3 px-4">
            <div
               class="
               p-8
               md:px-7
               xl:px-10
               rounded-[20px]
               bg-white
               shadow-md
               hover:shadow-lg
               mb-8
               "
               >
               <div id="CheckmarkPosition">
                
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div class="center">
                <label class="label">
                <input  class="label__checkbox" type="checkbox" name="progress" id="progress17" value="1" tabIndex="1" @click="ckChange('progress17')"/>
                <span class="label__text">
                <span class="label__check">
                    <i class="fa fa-check icon"></i>
                </span>
                </span>
                </label>
               </div>

            </div>
               <img class="object-fill h-55 w-96 mt-2 mb-2 rounded-lg" src="https://smartcitysweden.com/wp-content/uploads/2017/10/E_SDG_goals_icons-individual-rgb-17.png">
               <h4 class="font-semibold text-xl text-dark mb-2">
                Goal 17: Partnerships for the Goals
               </h4>
               <p class="text-body-color mb-2">
                The global goals can only be 
                met if we work together.
                To build a better world, 
                we need to be supportive, empathetic, 
                inventive, passionate, and cooperative.
               </p>
            </div>
         </div>
         
      </div>
      <div class="mt-6">
                                  <button
                                      @click="this.$router.push('/')" class="flex w-1/3 justify-center px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-500 rounded-md hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400 focus:ring focus:ring-indigo-300 focus:ring-opacity-50">
                                      Continue
                                  </button>
                              </div>
   </div>
</section>
<!-- ====== Services Section End -->

</div>
</template>

<script setup>

var Checked = 0;
function ckChange(ckType){
   //  var ckName = document.getElementsByName(ckType.name);
    var checked = document.getElementById(ckType);
    console.log(checked);
    console.log(Checked);
    
   if(checked.checked){
      if(Checked == 3){
         checked.checked = false;
      }
      else{
         Checked++;
      }
   }
   else if(checked.checked == false){
      Checked--;
   }
   
}

</script>
<style scoped>

#CheckmarkPosition {
   position: absolute;
   transform: translate(-50%, -35%);
}

.label__checkbox {
	 display: none;
}
 .label__check {
	 display: inline-block;
	 border-radius: 50%;
	 border: 5px solid rgba(0,0,0,0.1);
	 background: white;
	 vertical-align: middle;
	 width: 4em;
	 height: 4em;
	 cursor: pointer;
	 display: flex;
	 align-items: center;
	 justify-content: center;
	 transition: border .3s ease;
}
 .label__check i.icon {
	 opacity: 0.2;
	 font-size: calc(1rem + 1vw);
	 color: transparent;
	 transition: opacity .3s .1s ease;
	 -webkit-text-stroke: 3px rgba(0,0,0,0.5);
}
 .label__check:hover {
	 border: 5px solid rgba(0,0,0,0.2);
}
 .label__checkbox:checked + .label__text .label__check {
	 animation: check .5s cubic-bezier(0.895,0.030,0.685,0.220) forwards;
}
 .label__checkbox:checked + .label__text .label__check .icon {
	 opacity: 1;
	 transform: scale(0);
	 color: white;
	 -webkit-text-stroke: 0;
	 animation: icon .3s cubic-bezier(1.000,0.008,0.565,1.650) .1s 1 forwards;
}
 @keyframes icon {
	 from {
		 opacity: 0;
		 transform: scale(0.3);
	}
	 to {
		 opacity: 1;
		 transform: scale(1);
	}
}
 @keyframes check {
	 0% {
		 width: 3em;
		 height: 3em;
		 border-width: 5px;
	}
	 10% {
		 width: 3em;
		 height: 3em;
		 opacity: 0.1;
		 background: rgba(0,0,0,0.2);
		 border-width: 15px;
	}
	 12% {
		 width: 3em;
		 height: 3em;
		 opacity: 0.4;
		 background: rgba(0,0,0,0.1);
		 border-width: 0;
	}
	 50% {
		 width: 4em;
		 height: 4em;
		 background: #00d478;
		 border: 0;
		 opacity: 0.6;
	}
	 100% {
		 width: 4em;
		 height: 4em;
		 background: #00d478;
		 border: 0;
		 opacity: 1;
	}
}
</style>