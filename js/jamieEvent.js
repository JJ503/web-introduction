function getCheckedCnt() {
    const name = document.getElementById("name").value;
    if (name == "") {
        window.alert("이름을 입력해주세요.")
        return;
    }

    const query = 'input[name="movie"]:checked';
    const checkedElement = document.querySelectorAll(query);
    
    const checkedElementCount = checkedElement.length;
    if (checkedElementCount == 0) {
        window.alert("본인 취향의 영화를 선택해주세요.")
        return;
    }

    console.log(checkedElementCount)
    console.log(name)

    window.alert(name + "님, 저와 " + checkedElementCount + "개의 취향이 같으시네요!");
}