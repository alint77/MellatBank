        
        
        
        currentSliderMenuActive = 7;

        
        window.onload = function loadPics(){
            
            var sliderMenuPicsDivs = document.getElementsByClassName("sliderMenuItemsPics");
            for(i=1;i<7;i++){
                sliderMenuPicsDivs[i-1].style.background= "url(images/sliderMenuItem"+i+".png)"+" no-repeat 90%";
                sliderMenuPicsDivs[6+i-1].style.background= "url(images/sliderMenuItem"+i+".png)"+" no-repeat 90%";
            }
            sliderMenuPicsDivs[currentSliderMenuActive-1].style.background= "url(images/sliderMenuItemRed"+(currentSliderMenuActive-6)+".png)"+" no-repeat 90%";
            
            
            var sliderPics= document.getElementsByClassName("picsImg");
            for(i=1;i<sliderPics.length+1;i++){
                sliderPics[i-1].src="images/slider-"+i+".jpg"
            }
        }
        


        function SliderMenuActivate(i){
            if(currentSliderMenuActive>i){
                distance=currentSliderMenuActive-i;
                for(j=0;j<distance;j++){
                    sliderMenuMakeActive(-1);
                }
            }else if(i>currentSliderMenuActive){
                distance=i-currentSliderMenuActive;
                for(j=0;j<distance;j++){
                    sliderMenuMakeActive(+1);
                }
            }
        }


        posLeftSliderMenu = -80;
        posLeftSliderSubMenu = -600;

        


        function sliderMenuMakeActive (i) {
            if(currentSliderMenuActive==10 && i==1){
                return
            }

            if(currentSliderMenuActive==3 && i==-1){
                return
            }


            var sliderMenuPicsDivs = document.getElementsByClassName("sliderMenuItemsPics");
            var sliderMenu = document.getElementsByClassName("sliderMenuItems");

            for(j=1;j<13;j++){
                sliderMenu[j-1].className="sliderMenuItems";
            }

            nextActive=currentSliderMenuActive+i;
            sliderMenu[nextActive-1].className+=" active";
            
            for(j=1;j<7;j++){
                sliderMenuPicsDivs[j-1].style.background= "url(images/sliderMenuItem"+j+".png)"+" no-repeat 90%";
                sliderMenuPicsDivs[6+j-1].style.background= "url(images/sliderMenuItem"+j+".png)"+" no-repeat 90%";
            }
            if(nextActive<7){
                sliderMenuPicsDivs[nextActive-1].style.background= "url(images/sliderMenuItemRed"+nextActive+".png)"+" no-repeat 90%";
            }else if (nextActive>6){
                sliderMenuPicsDivs[nextActive-1].style.background= "url(images/sliderMenuItemRed"+(nextActive-6)+".png)"+" no-repeat 90%";
            }
            
            currentSliderMenuActive=nextActive;

            if (posLeftSliderSubMenu != -900 && i==1) {
                posLeftSliderMenu = posLeftSliderMenu - 20;
                posLeftSliderSubMenu = posLeftSliderSubMenu - 100;
                sliderMenuItemsHolder.style.left = posLeftSliderMenu + "%";
                sliderMenuSubMenu.style.left = posLeftSliderSubMenu + "%";
            }
            else if (posLeftSliderMenu != 0 && i== -1) {
                posLeftSliderMenu = posLeftSliderMenu + 20;
                posLeftSliderSubMenu = posLeftSliderSubMenu + 100;
                sliderMenuItemsHolder.style.left = posLeftSliderMenu + "%";
                sliderMenuSubMenu.style.left = posLeftSliderSubMenu + "%";
            }

        }

        
        var currentPic = 1;

        function rightSliderClick() {
            if(currentPic<6){
                dotSlider(currentPic+1);
            }else if(currentPic==6){
                dotSlider(1);
            }
        }


        function leftSliderClick() {
            if(currentPic>1){
                dotSlider(currentPic-1);
            }else if(currentPic==1){
                dotSlider(6);
            }
        }


        posBottom = -100; 
        
        function rightBottomSliderClick () {
            if(posBottom > -200){
                posBottom = posBottom - 25 ; 
                bottomSlider.style.left = posBottom + "%" ; 
            }
            else if(posBottom==-200){
                    posBottom = 0 ; 
                    bottomSlider.style.left = posBottom + "%" ; 
                    
                }
        }
        
        function leftBottomSliderClick () {
            
            if(posBottom != 0 ){ 
                posBottom = posBottom + 25 ; 
                bottomSlider.style.left = posBottom + "%" ; 
            }
                 
        }        
        
        
        
        function dotSlider(i){
            
            distance=i-currentPic;
            
            

            if(distance>1 && distance<5){
                x=currentPic+1;
                
                for( j=(distance-1) , k=0 ; j>0 ; j-- , k++ ){
                    //alert("k="+k+"  j="+j+"  i="+i+" curr="+currentPic);
                    
                    delay=j*300;
                    
                    setTimeout(dotSliderMakeActive,delay,i-k);
                }
                
                dotSliderMakeActive(x);
                

                
            }else if(distance<-1 && distance>-5){
                x=currentPic-1;
                distance= -distance;
                
                for( j=(distance-1) , k=0 ; j>0 ; j-- , k++ ){
                    //alert("k="+k+"  j="+j+"  i="+i+" curr="+currentPic);
                    
                    delay=j*300;
                    
                    setTimeout(dotSliderMakeActive,delay,i+k);
                }
                
                dotSliderMakeActive(x);


            }else{
                dotSliderMakeActive(i)
            }
            
  
        }

        function dotSliderMakeActive(i){
            var sliderElements = document.getElementsByClassName("pics");
            var dotsElements = document.getElementsByClassName("dots");

            for(j=0;j<dotsElements.length;j++){
                dotsElements[j].className="dots";
                sliderElements[j].className="pics";
            }

            dotsElements[i-1].className+=" active";
            sliderElements[i-1].className+=" front";

            if(1<i && i<6){
                sliderElements[i].className+=" right";
                sliderElements[i-2].className+=" left";
            }else if(i==1){
                sliderElements[1].className+=" right";
                sliderElements[5].className+=" left";
            }
            else if(i==6){
                sliderElements[0].className+=" right";
                sliderElements[4].className+=" left";
            }
            currentPic=i;
        }
        
        
