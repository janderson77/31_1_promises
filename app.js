let fact = axios.get('http://numbersapi.com/42?json');

let factAll = [];

const $factUl = $('#facts');

const favNum = 42;

// for (let i = 1; i < 5; i++) {
// 	factAll.push(axios.get(`http://numbersapi.com/${i}?json`));
// }

// Promise.all(factAll)
// 	.then((factArr) => factArr.forEach((f) => $factUl.append(`<li>${f.data.text}</li>`)))
// 	.catch((err) => console.log(err));

for (let i = 1; i < 5; i++) {
	factAll.push(axios.get(`http://numbersapi.com/${favNum}?json`));
}

Promise.all(factAll)
	.then((factArr) => factArr.forEach((f) => $factUl.append(`<li>${f.data.text}</li>`)))
	.catch((err) => console.log(err));

$(
	axios
		.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
		.then((card) => {
			console.log(card.data.cards[0].suit);
			return axios.get(`https://deckofcardsapi.com/api/deck/${card.data.deck_id}/draw/?count=1`);
		})
		.then((card) => console.log(card.data.cards[0].suit))
);

//
