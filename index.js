const express = require('express');

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"/home/qilma/code_challenge/ramen-rating-app/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "meat & baked potaoes", restaurant: "Menya", image: "/home/qilma/code_challenge/ramen-rating-app/Meat & baked potatoes.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto", restaurant: "Ramen-ya", image: "/home/qilma/code_challenge/ramen-rating-app/naruto.jpg" , rating: 3, comment: "Good, but not great" },
    { id: 4, name: "kojiro", restaurant: "Ramen-ya", image: "/home/qilma/code_challenge/ramen-rating-app/kojiro.jpg " ,rating:5 ,comment:"nice dish"},
    {id: 5, name: "nirvana", restaurant: "Ramen-ya", image:"/home/qilma/code_challenge/ramen-rating-app/nirvana.jpg" ,rating: 3, comment: "nice, but not great" }
 ]
    
   
    
    
    function handleClick(ramen) {
        document.querySelector("#ramen-detail");
    
        document.querySelector("#ramen-detail").innerHTML = `
           img src="${ramen.image}" alt="${ramen.name}" style="width: 300px; border-radius: 5px;">
            <h2>${ramen.name}</h2>
            <h3>Restaurant: ${ramen.restaurant}</h3> <
            <p>Rating: ${ramen.rating}</p>
            <p>Comment: ${ramen.comment}</p>
        `;
    }

    function addItUp() {
        displayRamens();
        addSubmitListener();
    }
    
    function addSubmitListener() {
        console.log( document.querySelector('form'))
            document.querySelector('form').addEventListener('submit', e => {
                e.preventDefault();
    
                const name = document.getElementById('new-name').value; 
                const restaurant = document.getElementById('new-restaurant').value;
                const image = document.getElementById('new-image').value;
                const rating = document.getElementById('new-rating').value;
                const comment = document.getElementById('new-comment').value;
    
                const newRamen = { name, restaurant, image, rating, comment };
    
                const newImg = document.createElement('img');
                newImg.src = newRamen.image;
                newImg.alt = newRamen.name;
                newImg.style.cursor = 'pointer';
                newImg.style.width = '250px';
                newImg.style.borderRadius = '2px';
    
                document.querySelector('#ramen-menu').appendChild(newImg);
                newImg.addEventListener("click", () => handleClick(newRamen));
    
                e.target.reset(); 
            });
        
    }
    function displayRamens() {
        ramens.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.alt = ramen.name;
            img.style.cursor = 'pointer';
            img.style.width = '250px';
            img.style.borderRadius = '2px';
            
            document.querySelector('#ramen-menu').appendChild(img);
            img.addEventListener("click", () => handleClick(ramen));
        });}
    
    
    
