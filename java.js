

function main(str, arr) {

	if (str === 'shuttle') {
		const isUniqDigits = (arr) => {
			const generatedigit = (Math.random() * 15).toFixed();
			let count =0;
			if (!arr.length) {
				return generatedigit;
			}
			for (let i = 0; i < arr.length; i++) {
				if (generatedigit !== arr[i]) {
					count++;
				}
			}
			if (count === arr.length) {
				return generatedigit
			}
			return isUniqDigits(arr);
		  };
		
		  const ganarateRandomArr = () => {
			let randomArr = [];
		
			for (let i = 0; i < 16; i++) {
				randomArr.push(isUniqDigits(randomArr));
			}
		
			return randomArr;
		  };
	
		  const randomArr = ganarateRandomArr();
	
		  let index = 0;
		
		  const main = document.querySelector('.main');
		
		  for (let i = 0; i < randomArr.length; i++) {
			const div = document.createElement('div');
			div.classList.add('button');
			
			if (+randomArr[i] === 0) {
				index = i;
				div.innerHTML = null;
			} else {
				div.innerHTML = randomArr[i];
			}
			div.addEventListener('click', () => moveDigit(i, index, randomArr));
			main.append(div);
		  }
	} else {

		const buttns = document.querySelectorAll('.button');
		const arrArrArr = Array.from(buttns);
		arrArrArr.forEach(item => {
			item.remove();
		});

		const randomArr = [...arr];
	
		let index = 0;
	  
		const main = document.querySelector('.main');
	  
		for (let i = 0; i < randomArr.length; i++) {
		  const div = document.createElement('div');
		  div.classList.add('button');
		  
		  if (+randomArr[i] === 0) {
			  index = i;
			  div.innerHTML = null;
		  } else {
			  div.innerHTML = randomArr[i];
		  }
		  div.addEventListener('click', () => moveDigit(i, index, randomArr));
		  main.append(div);
		}
	}

	
};

main('shuttle', []);

const  shuttle = () => {
	const buttns = document.querySelectorAll('.button');
	const arr = Array.from(buttns);
	arr.forEach(item => {
		item.remove();
	});
	main('shuttle', []);
};



const moveDigit = (position, index, arr) => {
	if (position === index + 1 || position === index - 1 || position === index - 4 || position === index + 4) {
		arr[index] = arr[position];
		arr[position] = '0';
		main('move', arr);
	}

  }
