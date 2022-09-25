function clickBtn() {
    this.style.background = 'orange';
}

document.getElementById('button').addEventListener('focus', clickBtn);
