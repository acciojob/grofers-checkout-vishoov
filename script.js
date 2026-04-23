const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {

	const prices = document.querySelectorAll('.price');

	let total = 0;

	prices.forEach(function(el){
		total+= parseInt(el.textContent);
	})

	// create a new row, then a new cell and then set the price
	const newRow = document.createElement('tr');

	const totalCell = document.createElement('td');
	totalCell.textContent=`Total = `+total;

	newRow.appendChild(totalCell)
	document.querySelector('table').appendChild(newRow);

	
};

getSumBtn.addEventListener("click", getSum);

