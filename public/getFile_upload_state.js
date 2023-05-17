const form = document.querySelector('form'),
    fileIput = document.querySelector("#submissionFile_input"),

    upload_btn = document.querySelector('#create_submission_button'),
    littleFeedback_note_container = document.querySelector(".little_notes_container"),
    delete_btn = document.querySelector('.delete')
// --- IMAGE  ---
uploadedImage_img = document.querySelector('.uploadedImage_img'), textUploadInput = document.querySelector(".selectFileNote");

upload_btn.addEventListener('click', () => {
    console.log('Clicked!!!!!!!')
})

// console.log(upload_btn)
// console.log(littleFeedback_note_container.src);

// const file = fileIput.files[0];
// console.log( 'aaaaaa ' +  file)
fileIput.onchange = e => {
    console.log(e.srcElement.files[0].name)
    // file = e.srcElement.files[0].names

    if (e.srcElement.files[0].name) {
        // const fileReader = new FileReader();

        console.log('its here')
        littleFeedback_note_container.style.display = 'flex';
        alert('file imported')
        // console.log(e.srcElement.files[0])

        uploadedImage_img.src = e.srcElement.files[0].name;
        // console.log('img ==> ' + uploadedImage_img.src)
        textUploadInput.innerText = 'Change File'
        console.log(textUploadInput.innerText)

    }
}
    // https://w3collective.com/preview-selected-img-file-input-js/


