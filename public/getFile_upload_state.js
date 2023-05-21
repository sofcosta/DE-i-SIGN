const form = document.querySelector('form'),
    fileIput = document.querySelector("#submissionFile_input"),

    upload_btn = document.querySelector('#create_submission_button'),
    littleFeedback_note_container = document.querySelector(".little_notes_container"),
    delete_btn = document.querySelector('.delete')
// --- IMAGE  ---
uploadedImage_img = document.querySelector('.uploadedImage_img'), //textUploadInput = document.querySelector(".selectFileNote"),
    fileName = document.querySelector(".fileNameP");
upload_btn.addEventListener('click', () => {
    console.log('Clicked!!!!!!!')
})

// const form__data = new FormData(form)
// const fileInput = document.querySelector('input[type=file]');
// const fileName = path.split(/(\\|\/)/g).pop();

// console.log(upload_btn)
// console.log(littleFeedback_note_container.src);


fileIput.onchange = e => {
    file = e.srcElement.files[0]
    //const fileNameText = e.srcElement.files[0].name
    // if (e.srcElement.files[0].name) {
    if (file) {
        document.querySelector(".uploadImage_container").classList.remove("hidden")
        console.log(e.srcElement.files[0].name)
        fileName.innerText = file.name
        console.log(fileName)
        const fileReader = new FileReader();
        fileReader.onload = (event) => {
            
        }
        console.log('its here')
        littleFeedback_note_container.style.display = 'flex';
        alert('file imported')
        // console.log(e.srcElement.files[0])

        uploadedImage_img.src = e.srcElement.files[0].name;
        // console.log('img ==> ' + uploadedImage_img.src)
        textUploadInput.innerText = 'Change File'
    }
}
    // https://w3collective.com/preview-selected-img-file-input-js/


