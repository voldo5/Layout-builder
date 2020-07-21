// Default values
const nColumns = '5';
const nRows = '5';
const unit = 'fr';
const unitValue = '1';


let parser;
let table;
let formAddContact;
let icon_Filter;
let booklet;
let currentLinkTextContent;

let separatorSpace = " ";
let separatorBr = "<br>";
let separatorComma = ", ";
var containerDivId = "contacts";
var wrapper;
var boxB;

window.addEventListener('load', () => {

    init();	

	// close filter dropdown if user clicked outside of filter dropdown
	// let filterContainer = document.querySelector('#filterContainer');	
	// document.onclick = function (e) {
	// 	if (!document.getElementById('containerIconFilter').contains(e.target)) {
	// 		// Clicked outside the box
	// 		filterContainer.classList.remove("visible");
	// 		//toggleVisibility(dropdown);
	// 		icon_Filter.updateSearchFilter();
	// 	}
	// };
});

function init() {

    let inputColumns = document.querySelector("#columns");
    inputColumns.value = nColumns;	
    console.log('inputColumns = ', inputColumns, 'ncolumns = ', inputColumns.value); 
    let inputRows = document.querySelector("#rows");
    inputRows.value = nRows;
    console.log('inputRows = ', inputRows, 'nrows = ', inputRows.value); 

    let colunits = document.querySelector(".colunits");
    let st1 = getComputedStyle(document.documentElement).getPropertyValue('--grid-template-columns'); 
    console.log('st1 = ', st1);   
    // document.documentElement.style.setProperty('--grid-template-columns', 'repeat(3, 1fr)');
    // let st2 = getComputedStyle(document.documentElement).getPropertyValue('--grid-template-columns'); 
    // console.log('st2 = ', st2);
}

// function relocateTableCommandRow(x) {
// 	let element = document.querySelector(".icon-flex-container");
// 	let hasIcons = document.querySelector('.table-caption .icon-flex-container');
// 	// parents of icon-flex-container	
// 	let tableCaption = document.querySelector('.table-caption');
// 	let table2ndRow = document.querySelector('.table-tr2-head-cell');
// 	if (x.matches) { // If media query matches		
// 		if (!hasIcons) {			
// 			table2ndRow.removeChild(element);
// 			tableCaption.appendChild(element);			
// 		}		
// 	}
// 	else {
// 		if (hasIcons) {		
// 		tableCaption.removeChild(element);
// 		table2ndRow.appendChild(element);
// 		}
// 	}
// }
  