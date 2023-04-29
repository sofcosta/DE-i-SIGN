let create_submission_button = document.getElementById("create_submission_button");

create_submission_button.onclick = function() {
    let submission_title = document.getElementById('submissionTitle_input').value;
    let submission_desc = document.getElementById('submissionDescription_input').value;
    let submission_theme = document.getElementById('submissionTheme_input').value;
    let submission_file = document.getElementById('submissionFile_input').files[0];

    createSubmission(submission_title, submission_desc, submission_theme, submission_file);
};