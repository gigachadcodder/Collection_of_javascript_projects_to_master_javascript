let count = 0;

//select values and buttons 

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = (e.currentTarget.classList);
        if (styles.contains('decrease')) {
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        else{
            count = 0;
        }
        // if (count<0) {
        //     value.styles.color = 'red'
        // }
        value.textContent = count;
    })
});