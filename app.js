const tabs = document.querySelectorAll('.tabs > *');
const panel = document.querySelectorAll('.panel > *');

tabs.forEach(tab => {
    tab.addEventListener('click', displayContent);
});


function displayContent (){
    const index = this.dataset.index;
    const contentIndex = panel[index];
    removeActive(panel);
    contentIndex.classList.add('active');
    changeTab(this);
}

function changeTab(tabSelected){
    removeActive(tabs);
    tabSelected.classList.add('active');
}

function removeActive(elements){
    elements.forEach(el => el.classList.remove('active'));
}