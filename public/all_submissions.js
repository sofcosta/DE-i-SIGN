
function build_all_submissions_page(submissions) {
    let all_submissions_container = document.getElementById('all_submissions_container');
    let submission_containers = document.getElementsByClassName('single_sub');
    submission_containers.innerHTML = "";
    all_submissions_container.innerHTML = "";
    for (sub of submissions) {
        let submission_container = document.createElement('button');
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

        submission_container.appendChild(sub_title);
        //submission_container.appendChild(sub_desc);
        submission_container.appendChild(sub_media);

        all_submissions_container.appendChild(submission_container);
    }
    for (let single_submission of submission_containers) {

        single_submission.onclick = function () {
            let id = single_submission.getAttribute('id');

            let thisSub = submissions.find(findSubById);
            console.log(thisSub);

            function findSubById(sub) {
                return sub.submissionId === id;
            }
            let submission_container = document.createElement('div');
            submission_container.className = "single_sub";
            submission_container.id = sub.submissionId;

            let sub_title = document.createElement('h3');
            sub_title.appendChild(document.createTextNode(thisSub.submissionTitle));
            let sub_desc = document.createElement('p');
            sub_desc.className = 'submission_description';
            sub_desc.appendChild(document.createTextNode(thisSub.submissionDescription));
            let sub_media = document.createElement('img');
            sub_media.width = 100;
            sub_media.src = thisSub.submissionMedia;

            let vote_slider = document.createElement('input');
            vote_slider.type = 'range';
            vote_slider.min = '0';
            vote_slider.max = '100';

            let vote_submit = document.createElement('button');
            vote_submit.appendChild(document.createTextNode('Vote'));
            vote_submit.onclick = function () {
                console.log(thisSub.submissionScore);
                firebase_app.firestore().collection('submissions').doc(id).update({
                    submissionScore: parseInt(vote_slider.value) //parseInt(thisSub.submissionScore) + 
                }).then(function () {
                    console.log("Score updated");
                    console.log(vote_slider.value);
                })
            }

            submission_container.appendChild(sub_media);
            submission_container.appendChild(sub_title);
            submission_container.appendChild(sub_desc);
            submission_container.appendChild(vote_slider);
            submission_container.appendChild(vote_submit);


            single_submission_container.innerHTML = "";
            single_submission_container.appendChild(submission_container);
            console.log(single_submission.getAttribute('id'));
            show_single_submission_page();
        };
    }
}