const form = document.querySelector('form'),
fileIput = document.querySelector("#submissionFile_input"),

upload_btn = document.querySelector('#create_submission_button'),
littleFeedback_note_container = document.querySelector(".little_notes_container");

upload_btn.addEventListener('click', () => {
    console.log('Clicked!!!!!!!')
})

console.log(littleFeedback_note_container)

fileIput.onchange = e => {
    console.log(e.srcElement.files[0].name)

    if (e.srcElement.files[0].name){
        console.log('its here')
        littleFeedback_note_container.style.display = 'flex';
    }
}