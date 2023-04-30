
function build_all_submissions_page(submissions) {
    let all_submissions_container = document.getElementById('all_submissions_container');
    let submission_containers = document.getElementsByClassName('single_sub');
    //submission_containers.innerHTML = "";
    //console.log(submissions);
    for (sub of submissions) {
        // console.log(sub);
        //console.log(sub.submissionId);
        let submission_container = document.createElement('button');
        submission_container.className = "single_sub";
        submission_container.id = sub.submissionId;
        // submission_container.onclick = function (sub){
        //     open_single_submission(sub);
        // };

        let sub_title = document.createElement('h3');
        sub_title.appendChild(document.createTextNode(sub.submissionTitle));
        let sub_desc = document.createElement('p');
        sub_desc.className = 'submission_description';
        sub_desc.appendChild(document.createTextNode(sub.submissionDescription));
        let sub_media = document.createElement('img');
        sub_media.width = 100;
        sub_media.src = sub.submissionMedia;

        submission_container.appendChild(sub_title);
        submission_container.appendChild(sub_desc);
        submission_container.appendChild(sub_media);

        all_submissions_container.appendChild(submission_container);
    }
    for (let single_submission of submission_containers) {
        
        single_submission.onclick = function () {
            let id = single_submission.getAttribute('id');
            for (sub of submissions) {
                if (sub.submissionId == id) {
                    let submission_container = document.createElement('div');
                    submission_container.className = "single_sub";
                    submission_container.id = sub.submissionId;

                    let sub_title = document.createElement('h3');
                    sub_title.appendChild(document.createTextNode(sub.submissionTitle));
                    let sub_desc = document.createElement('p');
                    sub_desc.className = 'submission_description';
                    sub_desc.appendChild(document.createTextNode(sub.submissionDescription));
                    let sub_media = document.createElement('img');
                    sub_media.width = 100;
                    sub_media.src = sub.submissionMedia;

                    submission_container.appendChild(sub_media);
                    submission_container.appendChild(sub_title);
                    submission_container.appendChild(sub_desc);

                    single_submission_container.innerHTML = "";
                    single_submission_container.appendChild(submission_container);
                    console.log(single_submission.getAttribute('id'));
                    show_single_submission_page();
                };
            }
        }
    }
}