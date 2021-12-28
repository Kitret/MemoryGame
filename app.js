document.addEventListener('DOMContentLoaded',() => {
	// card options
	const cardArray = [
	{
		name: 'BlueCar',
		image: 'Images/BlueCar.png.jpg'
	},
	{
		name: 'BlueCar',
		image: 'Images/BlueCar.png.jpg'
	},
	{
		name: 'Donuts',
		image: 'Images/Donuts.png.png'
	},
	{
		name: 'Donuts',
		image: 'Images/Donuts.png.png'
	},
	{
		name: 'IceCream',
		image: 'Images/IceCream.png.png'
	},
	{
		name: 'IceCream',
		image: 'Images/IceCream.png.png'
	},
	{
		name: 'Lunch',
		image: 'Images/Lunch.png.png'
	},
	{
		name: 'Lunch',
		image: 'Images/Lunch.png.png'
	},
	{
		name: 'pizza',
		image: 'Images/pizza.png.png'
	},
	{
		name: 'pizza',
		image: 'Images/pizza.png.png'
	},
	{
		name: 'RedCar',
		image: 'Images/RedCar.png.jfif'
	},
	{
		name: 'RedCar',
		image: 'Images/RedCar.png.jfif'
	}
	]
	
	const grid = document.querySelector(".grid")

	function CreateBoard(){
		for (int i=0; i<cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('src', 'Images/Logo.png.png')
			card.setAttribute('data-id',i)
			// card.addEventListener('click', flipcard)
			grid.appendChild(card)
		}
	}

	createBoard()
})