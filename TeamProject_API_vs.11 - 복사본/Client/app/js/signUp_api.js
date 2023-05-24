
// 회원가입 API 요청 함수
async function signup() {
    console.log('회원가입')
    const ui_userid = document.getElementById('input__id').value;
    const ui_password = document.getElementById('input__pw').value;
    const ui_name = document.getElementById('input__name').value;
    const ui_email = document.getElementById('input__email').value;
    const ui_address = document.getElementById('input__address').value;
    const ui_hp = document.getElementById('input__hp').value;
    // console.log(id)
    // API 요청
    const response = await fetch('http://localhost:8080/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ui_userid, ui_password, ui_name, ui_email, ui_address, ui_hp })
    });

    // 응답 처리
    if (response.ok) {
        // 회원가입 성공
        window.location.href = '../web/map.html';
        console.log('회원가입 성공');
    } else {
        // 회원가입 실패
        const errorData = await response.json();
        console.error('회원가입 실패:', errorData.message);
    }
}

document.getElementById('submit_btn').addEventListener('click',signup)

// 회원가입 버튼 클릭 이벤트 핸들러 등록
const resetBtn = document.getElementById('reset_btn');

// 입력 초기화 버튼 활성화
resetBtn.addEventListener('click', () => {

    const idInput = document.getElementById('input__id');
    const pwInput = document.getElementById('input__pw');
    const pwCheckInput = document.getElementById('input__pw__check');
    const nameInput = document.getElementById('input__name');
    const emailInput = document.getElementById('input__email');
    const hpInput = document.getElementById('input__hp');
    const addressInput = document.getElementById('input__address');

    // 빈칸으로 만들기
    idInput.value = '';
    pwInput.value = '';
    pwCheckInput.value = '';
    nameInput.value = '';
    emailInput.value = '';
    hpInput.value = '';
    addressInput.value = '';
});