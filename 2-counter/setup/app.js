// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector ('#value'); //grabs the span element in html "#value".
const btns = document.querySelectorAll('.btn'); //querySelectorAll grabs all elements with ".btn" value.

btns.forEach(function(btn) { //for each element contained in the ".btn class",
	btn.addEventListener('click', function(e) { //add event listener and run function.
	const styles = e.currentTarget.classList; //declares 'styles' and assigns currentTarget. (in this case, the entire class list containing .btn)
	if(styles.contains('decrease')) { // says if class contains 'decrease' 
		count--; //decrement the value by 1.
	}
	else if(styles.contains('increase')){
		count++;
	} else {
		count = 0; //assumes that the reset button is chosen as there are no other options.
	}
	if(count > 0) {
		value.style.color = 'green';
	}
	if (count < 0) {
		value.style.color = 'red';
	}
	if (count === 0) {
		value.style.color = '#222';
	}
	value.textContent = count;
	});
});