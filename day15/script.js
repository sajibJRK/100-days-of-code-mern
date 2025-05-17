let count = 0;
const countShow = document.getElementById('count');
const clickbnt = document.getElementById('clickbnt');
const resetbnt = document.getElementById('resetbnt');

clickbnt.addEventListener('click', () => {
    count++;
    countShow.innerText = count;

})
resetbnt.addEventListener("click", () => {
    count = 0;
    countShow.innerText = count
})