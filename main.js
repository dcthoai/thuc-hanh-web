
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
            <h4>Điểm của bạn</h4>

            <span class="score">7.5</span>
            <p class="detail">Số câu đúng phần 1: <span class="quantity">7/10</span></p>
            <p class="detail">Số câu đúng phần 2: <span class="quantity">5/10</span></p>
            <p class="detail">Số câu đúng phần 3: <span class="quantity">10/10</span></p>
            <p class="detail">Số câu đúng phần 4: <span class="quantity">8/10</span></p>

            <button type="button" id="ok" onclick="returnView()">Ok</button>
        </div>
    `;
});

function returnView(){
    window.location.reload();
}

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