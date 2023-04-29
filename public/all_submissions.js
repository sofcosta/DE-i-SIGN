function build_all_submissions_page(submissions) {

    for (sub of submissions) {
        // console.log(sub);
        // console.log(sub.submissionTitle);

        let sub_title = document.createElement('h6');
        sub_title.appendChild(document.createTextNode(sub.submissionTitle));
        let sub_desc = document.createElement('p');
        sub_desc.className = 'submission_description';
        sub_desc.appendChild(document.createTextNode(sub.submissionDescription));
        let sub_media = document.createElement('img');
        sub_media.width = 100;
        sub_media.src = sub.submissionMedia;

        document.body.appendChild(sub_title);
        document.body.appendChild(sub_desc);
        document.body.appendChild(sub_media);
    }
}