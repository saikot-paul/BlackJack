# BlackJack
In order to learn JavaScript I decided to build the game of BlackJack. 

# BUGS 
* Can press START button multiple times without following game context/rules

  * Before:
    
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188226-bc28f2dd-5de7-40dc-a8b4-c88b3d3d5161.png">
    
   
  * After: 
    
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188247-e82076eb-abbf-4d1d-a441-536661262015.png">
    
  * Solution: 
    * Added boolean condition for start button, such that when game starts the button text is changed to DISABLED and also function is disabled
    * Only when the game is over and after the RESTART button is pressed should the START GAME button be enabled again 
  
    
* Can press NEW CARD button multiple times without following game context/rules 

  * Before: 
   
    <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188503-9e90ecee-9ee8-4b24-9a4d-e562abb0e063.png">
    
   * After: 

     <img width="280" alt="image" src="https://user-images.githubusercontent.com/79386282/210188517-f3a21198-ff67-4109-9bb4-369c5e91ed0d.png">
     
   * Solution: 
     * Added boolean condition such that when the game is over, the button is also diabled
     * Only when a new game is started should the button be enabled again 

# ENHANCEMENTS 

* Code:
  ** Create a player and dealer class 
  ** Allow player to play against automated dealer 
 
* Interface: 
  ** Make a better looking interface 
  
* Deployment:
  ** Figure out how to deploy on AWS/GCP 






