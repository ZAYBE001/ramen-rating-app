const express = require('express');

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"/home/qilma/code_challenge/ramen-rating-app/shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "meat & baked potaoes", restaurant: "Menya", image: "/home/qilma/code_challenge/ramen-rating-app/Meat & baked potatoes.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto", restaurant: "Ramen-ya", image: "/home/qilma/code_challenge/ramen-rating-app/naruto.jpg" }]
    
    let selectedRamenId = null;
    
    function displayRamens() {
        const menu = document.getElementById('ramen-menu');
        menu.innerHTML = '';
        ramens.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.className = 'ramen-img';
            img.alt = ramen.name;
            img.addEventListener('click', () => handleClick(ramen));
            menu.appendChild(img);
        });
    }
    
    function handleClick(ramen) {
        const detail = document.getElementById('ramen-detail');
        detail.querySelector('.detail-image').src = ramen.image;
        detail.querySelector('.name').textContent = ramen.name;
        detail.querySelector('.restaurant').textContent = ramen.restaurant;
        detail.querySelector('.rating').textContent = ramen.rating ? `Rating: ${ramen.rating}` : '';
        detail.querySelector('.comment').textContent = ramen.comment || '';
        
        // Show edit and delete buttons
        document.getElementById('edit-btn').style.display = 'block';
        document.getElementById('delete-btn').style.display = 'block';
        document.getElementById('edit-ramen').style.display = 'none';
        selectedRamenId = ramen.id;
    }
    
    function addSubmitListener() {
        const form = document.getElementById('new-ramen');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newRamen = {
                id: ramens.length + 1,
                name: form.name.value,
                restaurant: form.restaurant.value,
                image: form.image.value,
                rating: parseInt(form.rating.value) || undefined,
                comment: form.comment.value || undefined
            };
            ramens.push(newRamen);
            displayRamens();
            form.reset();
        });
    }
    
    function addEditListener() {
        const editBtn = document.getElementById('edit-btn');
        const editForm = document.getElementById('edit-ramen');
        
        editBtn.addEventListener('click', () => {
            editForm.style.display = 'block';
            editBtn.style.display = 'none';
            document.getElementById('delete-btn').style.display = 'none';
        });
    
        editForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const ramen = ramens.find(r => r.id === selectedRamenId);
            if (ramen) {
                ramen.rating = parseInt(editForm.rating.value) || ramen.rating;
                ramen.comment = editForm.comment.value || ramen.comment;
                handleClick(ramen);
                displayRamens();
            }
            editForm.reset();
        });
    }
    
    function addDeleteListener() {
        const deleteBtn = document.getElementById('delete-btn');
        deleteBtn.addEventListener('click', () => {
            const index = ramens.findIndex(r => r.id === selectedRamenId);
            if (index !== -1) {
                ramens.splice(index, 1);
                displayRamens();
                const detail = document.getElementById('ramen-detail');
                detail.querySelector('.detail-image').src = '';
                detail.querySelector('.name').textContent = '';
                detail.querySelector('.restaurant').textContent = '';
                detail.querySelector('.rating').textContent = '';
                detail.querySelector('.comment').textContent = '';
                deleteBtn.style.display = 'none';
                document.getElementById('edit-btn').style.display = 'none';
            }
        });
    }
    
    function main() {
        displayRamens();
        addSubmitListener();
        addEditListener();
        addDeleteListener();
        if (ramens.length > 0) {
            handleClick(ramens[0]); // Auto-display first ramen
        }
    }
    
    document.addEventListener('DOMContentLoaded', main); 
    

    
    
    
   
    
    
    
   

    
