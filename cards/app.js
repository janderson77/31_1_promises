$(function() {
	const base_url = 'https://deckofcardsapi.com/api/deck/';

	let deckId;
	let $btn = $('button');
	let $field = $('#mid');

	$.getJSON(`${base_url}new/shuffle/`).then((data) => (deckId = data.deck_id));

	$btn.on('click', function() {
		$.getJSON(`${base_url}${deckId}/draw/`).then((data) => {
			let c_src = data.cards[0].image;

			$field.append(
				$('<img>', {
					src: c_src
				})
			);
			if (data.remaining === 0) $btn.remove();
		});
	});
});
