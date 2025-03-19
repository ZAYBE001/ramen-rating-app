

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image:"shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "meat & baked potaoes", restaurant: "Menya", image: "/home/qilma/code_challenge/ramen-rating-app/Meat & baked potatoes.jpeg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "naruto", restaurant: "Ramen-ya", image: "/home/qilma/code_challenge/ramen-rating-app/naruto.jpg" , rating: 3, comment: "Good, but not great" },
    { id: 4, name: "kojiro", restaurant: "Ramen-ya", image: "/home/qilma/code_challenge/ramen-rating-app/kojiro.jpg " ,rating:5 ,comment:"nice dish"},
    {id: 5, name: "nirvana", restaurant: "Ramen-ya", image:"./home/qilma/code_challenge/-rating-app/nirvana.jpg" ,rating: 3, comment: "nice, but not great" }
 ]
    
    let selectedRamenId = null;
    
    function displayRamens() {
        const menu = document.getElementById('ramen-menu');
        console.log(menu)
        
        ramens.forEach(ramen => {
            const img = document.createElement('img');
            img.src = ramen.image;
            img.className = 'ramen-img';
            img.alt = ramen.name;
            img.addEventListener('click', () => handleClick(ramen));
            menu.appendChild(img);
        })
    }
    
    function handleClick(ramen) {
        const detailDiv = document.querySelector("#ramen-detail");
    
    detailDiv.innerHTML = `
        <img src="${ramen.image}" alt="${ramen.name}" style="width: 300px; border-radius: 5px;">
        <h2>${ramen.name}</h2>
        <h3>Restaurant: ${ramen.restaurant}</h3>
        <p>Rating: ${ramen.rating}</p>
        <p>Comment: ${ramen.comment}</p>
    `;
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
    

    
    
    
   
    
    
    
   

    
