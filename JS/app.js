const table = document.querySelector(".table")
var COLOR = "black"//"red"//white"

function createTable (w, h) {
	console.log('cT', w, h)
	var tableInnerHtmlList = []
	console.log('cL')
	for (let height = 0; height <= h; height++) {
		console.log("for")
		tableInnerHtmlList.push(`<tr class="row">${"<td class='column'></td>".repeat(w)}</tr>`)//("<tr class="row"></tr>")
		console.log(tableInnerHtmlList, "cl")
		// for (let width; width <= w; width++) {
		// }
	}

	return tableInnerHtmlList.join("\n")
}

const tableInner = createTable(30, 30)

console.log(tableInner, "table")

table.innerHTML = tableInner

const columnList = document.querySelectorAll(".column")

columnList.forEach(item => {
	item.addEventListener("click", e => {
		item.style.background = COLOR//"red"
	})

	item.addEventListener("dblclick", e => {
		item.style.background = "white"
	})
	// item.addEventListener("mousedown", e => {
	// 	console.log("click")
	// 	if (e.which == 1) {
	// 		item.style.background = "red"
	// 	} else if (e.which == 3) {
	// 		item.style.background = "white"
	// 	}
	// })
})

console.dir(table)

const colors = document.querySelector(".color_input")
const colorsSelect = document.querySelector(".used_colors")

var colorsList = []

colors.addEventListener("focusout", e => {//("input", e => {
	//console.log("input")
	!colorsList.includes(colors.value) ? colorsList.push(colors.value) : undefined
	let list = []
	colorsList.forEach(item => {
		list.push(`<li class="used_colors__item" style='background: ${item}' data-color="${item}"></li>`)
	})
	COLOR = colors.value
	//colorsSelect.innerHTML = colorsList.join("")
	colorsSelect.innerHTML = list.join("\n")
	let colorsUsedList = document.querySelectorAll(".used_colors__item")
	colorsUsedList.forEach(item => {
		item.addEventListener("click", e => {
			console.log('item.click', colors.value, item.dataColor)
			colors.value = item.dataset.color//dataColor
			COLOR = item.dataset.color//dataColor
		})
	})

	console.log('input', colorsList)
})