
function build_feedNPlay_page(submissions){
    for (sub of submissions) {
        let submission_container = document.createElement('div');
        submission_container.className = "single_sub";
        submission_container.id = sub.submissionId;

        let sub_title = document.createElement('h3');
        sub_title.appendChild(document.createTextNode(sub.submissionTitle));
        let sub_desc = document.createElement('p');
        sub_desc.className = 'submission_description';
        sub_desc.appendChild(document.createTextNode(sub.submissionDescription));
        let sub_media = document.createElement('img');
        sub_media.width = 200;
        sub_media.src = sub.submissionMedia;

        submission_container.appendChild(sub_title);
        //submission_container.appendChild(sub_desc);
        submission_container.appendChild(sub_media);

        document.querySelector("main").appendChild(submission_container);
    }
}