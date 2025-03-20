

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "meat & baked potaoes", restaurant: "Menya", image: "Meat & baked potatoes.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto", restaurant: "Ramen-ya", image: "naruto.jpg" , rating: 3, comment: "Good, but not great" },
    { id: 4, name: "kojiro", restaurant: "Ramen-ya", image: "kojiro.jpg " , rating:5 , comment:"nice dish"},
    {id: 5, name: "nirvana", restaurant: "Ramen-ya", image:"nirvana.jpg" , rating: 3, comment: "nice, but not great" }
 ];
    
 const ramenMenu = document.querySelector('#ramen-menu');
 function displayRamens(ramens) {
     ramenMenu.innerHTML=""
     ramens.forEach(ramen => {
         const img = document.createElement('img');
         img.src = ramen.image;
         img.alt = ramen.name;
         ramenMenu.appendChild(img);
         img.addEventListener("click", () => handleClick(ramen));
         
     });
 }
 displayRamens(ramens)
 function handleClick(ramen) {
     const detailDiv = document.querySelector("#ramen-detail");
 
     detailDiv.innerHTML = `
         <img src="${ramen.image}" alt="${ramen.name}" >
         <h2>${ramen.name}</h2>
         <h3>Restaurant: ${ramen.restaurant}</h3>
         <p>Rating: ${ramen.rating}</p>
         <p>Comment: ${ramen.comment}</p>
     `;
 }
 function addSubmitListener() {
    console.log(document.querySelector('form'));

    document.querySelector('form').addEventListener('submit', e => {
        e.preventDefault();

        const name = document.getElementById('ramen-name').value;
        const restaurant = document.getElementById('ramen-restaurant').value;
        const image = document.getElementById('ramen-image').value;
        const rating = document.getElementById('ramen-rating').value;
        const comment = document.getElementById('ramen-comment').value;

        if (!name || !restaurant || !image || !rating || !comment) {
            alert("Please fill out all fields!"); 
            return;
        }

        const newRamen = {
            name,
            restaurant,
            image, 
            rating, 
            comment, 
        };
       console.log(newRamen);
        ramens.push(newRamen)
        displayRamens(ramens)
        e.target.reset(); 
        
    });
}
function addItUp() {
    addSubmitListener();
    handleClick(ramens[0]);
}
addItUp();
    
    
    
   
    
    
    
   

    
