//first create an array and this array is going to be called correct answers and this array will store all of the correct answers 
const correctAnswers = ['B', 'B', 'B', 'B'];
//next step is to attach an eventListener to the form to listen for when the user has submitted the form
const form = document.querySelector('.quiz-form');
//this shows the scores when users click submit
const result = document.querySelector('.result');
const submitButton = document.querySelector('.btn');

form.addEventListener('submit', e => {
    e.preventDefault(); //this is to prevent the default action of refresh the page when no specific action has been taken

    // confirms submition
    const confirmed = window.confirm(`Are you sure you want to submit?`);
        if(confirmed){

        let score = 0;
        //users answers from each input field
        const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

        //next thing is to compare them with the answers users selected to see if the answers are correct or wrong
        //I'm going to use a forEach to cycle through them
        userAnswers.forEach((answer, index) => {
            if(answer === correctAnswers[index]){
                score += 25;  
            };
        });

        //show result on page;
        scrollTo(0,0);
        result.querySelector('span').textContent = `${score}%`; //this overides the 0 variable and shows the actual score
        result.classList.remove('d-none');

        //scroll animation
        let output = 0;
        const timer = setInterval(() => {
            result.querySelector('span').textContent = `${output}%`;
            if(output === score){
                clearInterval(timer);
            }else{
                output++;
            }
        }, 10);// this specify how long you want it to fire
    } else {
        //user clicked cancel? do nothing
        form.reset();
        result.classList.add('d-none');
        return;
    }
    form.reset();
 });
