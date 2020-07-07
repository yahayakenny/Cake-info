const cakeImage = document.getElementById("cakeImage");
const name = document.getElementById("name");
const summary = document.getElementById("summary");
const arrowLeft= document.getElementById("left");
const arrowRight = document.getElementById("right");
const resetBtn= document.getElementById("reset");


const info = [
     {
        id: 1,
        name: "Rasperry Icebox Cake",
        source : "https://preppykitchen.com/wp-content/uploads/2018/03/Mocha-Cake-beauty-e1534560496694.jpg", 
        summary: "A delicious breakfast coffee cake that tastes like your favorite blueberry muffins."
     },

     {
         id: 2,
         name: "Blueberry Muffin Cake",
         source : "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2F1542062283%2Fchocolate-and-cream-layer-cake-1812-cover.jpg%3Fitok%3DrEWL7AIN",
         summary: "Peaches caramelize with brown sugar in the bottom of your slow cooker for a warm, gooey upside-down cake"
     }
    ,
    {
        id: 3,
        name: "Nutella® Cheese Cake",
        source: "https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/09/cake-problems-1.jpg",
        summary: "Not your traditional pound cake, but dense and creamy just like the original. This uses cream cheese and yogurt instead of butter for a bit of tang."
    }, 
    {
        id: 4,
        name: "Extreme Chocolate Cake",
        source: "https://cakewhiz.com/wp-content/uploads/2020/02/Kids-Chocolate-Birthday-Cake-Recipe.jpg",
        summary : "A rich moist chocolate cake with a chocolate buttercream icing. This is the best cake in the world!"
    }

]


let imageCount = 0

//Universal Function
const showImage = (image) => {
    const item = info[image];
    cakeImage.src = item.source;
    name.innerHTML = item.name;
    summary.innerHTML = item.summary; 
}


//On initial page load
const displayImage = () => {
 showImage(imageCount)
  
}

//Show next item
const showNext = () => {
   showImage(imageCount++)
   if (imageCount > info.length - 1 ){
       imageCount = 0
   }
   
}

//show previous item
const showPrev = () => {
    showImage(imageCount--)
    if (imageCount < 0 ){
        imageCount = imageCount + info.length
    }

}

//show first image
const displayFirstImage = () => {
    showImage(0)
}


window.addEventListener("DOMContentLoaded", displayImage);
arrowRight.addEventListener("click", showNext);
arrowLeft.addEventListener("click", showPrev);
resetBtn.addEventListener("click", displayFirstImage )





