const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

// Original fruit master list.
// const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Chat-GPT generated list with emojis for every item in the original fruit list.
const fruit = [  'Apple 🍎', 'Apricot 🍑', 'Avocado 🥑', 'Banana 🍌', 'Bilberry 🍇', 'Blackberry 🍇',  'Blackcurrant 🍇', 'Blueberry 🍇', 'Boysenberry 🍇', 'Currant 🍇', 'Cherry 🍒',  'Coconut 🥥', 'Cranberry 🍒', 'Cucumber 🥒', 'Custard apple 🍏', 'Damson 🍏',  'Date 🍇', 'Dragonfruit 🐉', 'Durian 🥭', 'Elderberry 🍇', 'Feijoa 🍎', 'Fig 🍇',  'Gooseberry 🍇', 'Grape 🍇', 'Raisin 🍇', 'Grapefruit 🍊', 'Guava 🍈',  'Honeyberry 🍇', 'Huckleberry 🍇', 'Jabuticaba 🍇', 'Jackfruit 🍈', 'Jambul 🍇',  'Juniper berry 🍇', 'Kiwifruit 🥝', 'Kumquat 🍊', 'Lemon 🍋', 'Lime 🍈',  'Loquat 🍎', 'Longan 🍇', 'Lychee 🍒', 'Mango 🥭', 'Mangosteen 🍈', 'Marionberry 🍇',  'Melon 🍈', 'Cantaloupe 🍈', 'Honeydew 🍈', 'Watermelon 🍉', 'Miracle fruit 🍇',  'Mulberry 🍇', 'Nectarine 🍑', 'Nance 🍇', 'Olive 🫒', 'Orange 🍊',  'Clementine 🍊', 'Mandarine 🍊', 'Tangerine 🍊', 'Papaya 🍑', 'Passionfruit 🍇',  'Peach 🍑', 'Pear 🍐', 'Persimmon 🍎', 'Plantain 🍌', 'Plum 🍇', 'Pineapple 🍍',  'Pomegranate 🍎', 'Pomelo 🍊', 'Quince 🍎', 'Raspberry 🍇', 'Salmonberry 🍇',  'Rambutan 🍇', 'Redcurrant 🍇', 'Salak 🍇', 'Satsuma 🍊', 'Soursop 🍈',  'Star fruit 🍈', 'Strawberry 🍓', 'Tamarillo 🍅', 'Tamarind 🍇', 'Yuzu 🍋']

function search(str) {
	// Checks if input string is empty.
	let results = []
	if (input.value !== '') {
		// Compares lower-cased version of fruit item to lower-cased/trimmed version of search string
		results = fruit.filter(item => item.toLowerCase().includes(str.toLowerCase().trim()))
	}
	return results
}

function showSuggestions(results) {
	suggestions.innerHTML = ''
	for (item of results) {
		const newLi = document.createElement('li')
		newLi.innerText = item
		suggestions.appendChild(newLi)
	}

	// Checks if height of suggestions container is smaller than ~30% of viewport height, and disables scroll bar if so.
	if (window.innerHeight / suggestions.clientHeight < 3.5) {
		suggestions.classList.add("scrollbar-needed")
	} else {
		suggestions.classList.remove("scrollbar-needed")
	}
}

function searchHandler(e) {
	showSuggestions(search(input.value))
}

function useSuggestion(e) {
	input.value = e.target.innerText
	// Returns focus to input field so user can press enter to select the item.
	input.focus()
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);