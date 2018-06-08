 
    <style scoped>

        
    

      /* width */
::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
    background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #888; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #555; 
}

        .container{
            height:100%;
             background:none;
          }
        .topLayer{
            height:200px;
            padding:10px;
            position: relative;
        }
        .mainTitle{
             height:50px;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            font-family: 'Roboto', sans-serif;  
        }
        .logoContainer{
             position: relative;
            left:-4px;
        }
        .logoContainer .logoImg{
            height: 90px;
            transform: rotate(20deg);
            position: relative;
            top:7px;
            cursor:pointer;
        }
        .subTittle{
             text-align: center;
             color:grey;
        }
        .subTittle .subTitleText{
            position: relative;
            left:100px;
            margin: 0px;
        }
        .accountIcon{
            position: absolute;
            right:20px;
            cursor: pointer;
        }
        .accountIcon .accountImage{
            width:25px;
            height: 25px;
            cursor: pointer;
            
        }
        .accountIconText{
            position: absolute;
            left:-18px;
            font-size: 10px;
            font-family: 'Roboto', sans-serif;
            color:grey;
            margin-top:2px;
        }
        .main_content{
            min-height: 300px;
        }
        .main_content .search_container{
             height:60px;
        }
        .search_container{
            display: flex;
            
         }
        .search_container .searchIcon{
            width:30%;
         }
        .searchIcon{
            display: flex;
            justify-content: flex-end;
            align-items: center;
        }
        .searchIconImg{
            height:50px;
            width:50px;
            position: relative;
            left:-40px;
            top:3px;
         }
         .searchBox{
              width:70%;
              color:white;
           }

           @keyframes searchBox {
    0%   {top:0px;}
    25%  {top:-50px;}
    50%  {top:-50px;}
    100% {top:0px;}
}

         .searchBox input[type="text"]{
             width:70%;
             height: 100%;
             outline:none;
             border:none;
             font-size: 20px;
             color:grey;
             padding: 10px;
             background:#F2F2F2;
             position: relative;
            /* animation-name: searchBox;
            animation-duration:3s ; 
            transition: all .5s; */
          }
          @keyframes postStatusRotate {
    0%   {transform: rotate(90deg);opacity: 0;}
    25%   {transform: rotate(180deg);opacity: 0.25;}
    75%   {transform: rotate(240deg); transform: scale(1.2);opacity: 0.50;}
    100%   {transform: rotate(360deg);opacity: 1;}
   
    }
          .postStatusContainer{
              height:100px;
              padding:10px;
              display: flex;
              justify-content: center;
              align-items: center;
              font-size:30px;
              font-family: 'Roboto', sans-serif;
                color:grey;
                position: relative;
                top:70px;
                  animation-duration: 5s ;
             flex-flow: column;
             margin-top: 10px;
  
          }
          .title{
            color:grey;
            padding: 10px;
            font-family: 'Roboto', sans-serif;
            font-weight: bold;
          }
          .postStatusIcon{
              width:35px;
              width:35px;
              position:relative;
              left:-16px;
          }
          .joinContainer{
              height:100px;
              display: flex;
              align-items: center;
              justify-items: center;
              text-align: center;
               width:100%;
          }
          .joinContainerButton{
              position: relative;
              display: flex;
              align-items: center;
              justify-content: center;
               left:380px;
            color:white;
            top:70px;
            cursor:pointer;
           }

           .promo_container{
               min-height:400px;
               background: #C62D2D;
               width: 100%;
               display: flex;
               color: white;
           }
           .promo_container div h1{
               font-family: 'Roboto', sans-serif;

           }
           .promo_container div{
               width:33.33%;
               border-left:1px solid white;
            font-family: 'Roboto', sans-serif;
                padding: 10px;
            }
           .promo_container div:nth-child(1){
               border:none;
           }
           
           .additionalLinks{
               min-height:300px;
               background: #F2F2F2;
               padding: 10px;
               text-align: center;
               position: relative;
           }
           .additionalLinks{
               display: flex;
           }
        .additionalLinks .linker{
            width:20%;
         }
        .linkerTitle{
            width:100%;
            display: flex;
            justify-content: center;
            color:#616161;
            font-size: 25px;
            font-family: 'Roboto', sans-serif;
            text-align: center;

        }
        .links a:hover{
            background: grey;
            padding: 5px;
            color:white;
        }
    .links a{
        color:#616161;
        text-decoration: none;
        font-size: 17px;
        font-family: 'Roboto', sans-serif;
        margin-top:4px;
        transition: all .2s;
    }
        .links{
            height: 100%;
            display: flex;
            padding: 20px;
            flex-flow: column;
            align-items: center;
         }
         .childWebsitesContainer{
              min-height: 200px;
             margin-top: 10px;
         }
         .childWebsitesContainer h2{
             color:grey;
             padding: 10px;
            font-family: 'Roboto', sans-serif;
         }
         .additionalLinksTip{
             position: absolute;
             top:-15px;
             color: grey;
             padding: 2px;
            font-family: 'Roboto', sans-serif;
            background: #F2F2F2;
            color:black;
            border-radius: 5px;
            padding: 2px;
         }
         .explanation{
    color:grey;
    font-family: 'Roboto', sans-serif;
    padding: 10px;
    font-size: 20px;
}

        

          

        .whatCanYouDoItem{
            
            height: 10px;
            display: flex;
            margin-top: 10px;
            border-radius: 5px;
            opacity: 0;    
            transition: all .5s;   
        }
        .whatCanYouDoItem_reveal{
            opacity: 1;
            height: 100px;
        }
        .whatCanYouDoItem:nth-child(odd){
            background: lightgrey;
        }

        .whatIcon{
            width: 100px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
        }
        .whatText{
            min-width: 300px;
            text-align: center;

            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100px;
        }
        
        .quickAddComp{
            height:100px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Roboto', sans-serif;

        }

        .documentaionContainer{
            display: flex;
            position: fixed;
            background:#C62D2D;
            top: 0px;
            left:0px;
            width:100%;
            height:100%;
        }

        .documationleft{
            width:400px;
            min-height:200px;
            overflow-y: scroll;
        }
        .documentationMainContent{
            background:white;
            width:1200px;
        }
    .documentaionlogo{
        height:300px;
        display:flex;
        align-items: center;
        justify-content: center;
    }
    .documentaionlogo img{
        height:300px;
    }
    .title{
        color:white;
        padding: 0px;
        margin:0px;
        text-align: center;
        position: relative;
        top:-80px;
        font-family: 'Roboto', sans-serif;

    }
    .searchDocsContainer{
        height:50px;
        padding: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .searchDocsContainer input[type="text"]{
        background:white;
        width:80%;
        height:100%;
        outline:none;
        padding: 10px;
        border:none;
        outline:none;
        box-shadow: 5px 5px 5px 2px #888888;
        transition: all .2s;
    }
        .searchDocsContainer input[type="text"]:focus{
            width:100%;
        }
    .docsItemContainer{
        min-height:500px;
        margin-top:10px;
        padding: 10px;
    }
    .docItem{
        background:white;
        padding: 15px;
        font-family: 'Roboto', sans-serif;
        border-radius: 5px;
        color:grey;
        margin-top:10px;
    }
    .docItem:hover{
        background:lightgrey;
        cursor: pointer;
    }
    .docItem:nth-child(even){
        background:lightgrey;
    }
    .description{
        color:white;
        text-align: center;
        position: relative;
        top:-60px;
        font-family: 'Roboto', sans-serif;
    }
      /*responsive code here if screen smaller then 900px*/
         @media only screen and (max-width: 1300px) {
              .documentaionContainer{
                  flex-flow: column;
                  position: relative;
                  min-width:80%;

               }
              .docsItemContainer{
                  overflow-y: hidden;
               }
              .documationleft{
                  width:100%;
              }
         }
    
    </style>

 
<!--
    TODO ADD CORRECT STYLES
-->
<template>
    
 <div class="documentaionContainer">

     <div class="documationleft">
             <b-alert show style="background:white;color:black;font-family: 'Roboto', sans-serif;">Check out our ico  &nbsp; <router-link to="/ico">here</router-link></b-alert>

         <div class="documentaionlogo">
             <img src="https://firebasestorage.googleapis.com/v0/b/social-station-69cfc.appspot.com/o/web%2Fimages%2FlogoOfficial.png?alt=media&token=79dadc52-28fd-417d-aae1-61c251934ad5"/>
         </div>
         <div class="title">
             SocialStation documentation
         </div>
         <div class="description">
             Social station is a modular open source social media product
         </div>
         <div class="searchDocsContainer">
             <input type="text" placeholder="search"/>
         </div>

         <div class="docsItemContainer">
             <router-link to="/intro">
             <div class="docItem">Introduction</div>
             </router-link>
            <router-link to="/feeds">
             <div class="docItem">Feeds</div>
            </router-link>
            <router-link to="/metric">
             <div class="docItem">Metric, score system</div>
            </router-link>
            <router-link to="/modules">
             <div class="docItem">Modules</div>
            </router-link>
            <router-link to="/tos">
             <div class="docItem">Terms of use</div>
            </router-link>
             <router-link to="/privacy">
             <div class="docItem">Privacy Statement</div>
             </router-link>
            <router-link to="/licence">
             <div class="docItem">Licence</div>
            </router-link>
            <router-link to="/ico">
             <div class="docItem">ICO</div>
            </router-link>
          </div>
     </div>
     <div class="documentationMainContent">
         <router-view></router-view>
     </div>
     

 </div>

         
        
 
</template>

<script>

import VueCircle from 'vue2-circle-progress';
//imported the circle progress needed for the beief profile page

export default{
    data:function(){
        return {
            handleSearchState:{
                isSearchBoxOpen:false
            },

            whatCanDoShow:false,
            whatCanYouDo:[
                {
                    text:"Create Blogs, polls articles and share knowledge",
                },
                {
                    text:"Unique Interaction engine i.e meaninful like feature"
                },
                {
                    text:"Pin useful reads for yourself and others"
                },
                {
                    text:"Use 3rd party modules which add more functionality."
                },
                {
                    text:"Share knowledge, ideas, thoughts and dreams with others"
                },
                {
                    text:"Read news sources, tweets, viral infomation, and content all from SS using the  most powerful feeds in the world."
                }
            ],
            fill : { gradient: ["#D35B5B", "grey", "grey"] }
        }
    },components:{
        VueCircle
    },methods:{
        handleSearch(){
            //method will be called when search box is in focus
            console.log("search box is in focus");
        },
        handleHomePageScroll(){
            const home= this;
           if(window.scrollY>600){
               //if user scrolls y 700 make the what can do value 100%
            home.whatCanDoShow=true;
            console.log("make value 100");
           }else{
               console.log("dont make");
           }
        }
    },created(){
        window.addEventListener('scroll',this.handleHomePageScroll);
        //add a window event listener which calls homage page scroll method when user scrolls
    }
}

</script>