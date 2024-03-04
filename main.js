
const form = document.getElementById('form');
const formInfo = form.querySelector('.form__info');
const listQuestion = form.querySelector('.form__question');
const submitButton = document.getElementById('submit-info');
const questionSubmit = document.getElementById('question-submit');

submitButton.addEventListener('click', function(){
    let check = checkInfo();

    if (check){
        formInfo.style.display = 'none';
        listQuestion.style.display = 'block';
    }
});

questionSubmit.addEventListener('click', function(){
    form.innerHTML = `
        <div class="form__answer">
            <h4>Kết quả của bạn là:</h4>

            <span class="score">3,4</span>
            <p class="detail">Số câu đúng: <span class="quantity"></span></p>
        </div>
    `;
});

function checkInfo(){
    let listInputs = formInfo.querySelectorAll('.input');
    let listSpan = formInfo.querySelectorAll('.missing');
    let check = true;

    listInputs.forEach((input, i) => {
        if (input.value === ''){
            listSpan[i].style.display = 'inline';

            input.addEventListener('change', function(){
                listSpan[i].style.display = 'none';
            });

            check = false;
        }
    })
    
    if (check){
        return true;
    }
}