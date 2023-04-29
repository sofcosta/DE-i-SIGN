/*
 * Copyright 2016 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the
 * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing permissions and
 * limitations under the License.
 */

const firebaseConfig = {
  apiKey: "AIzaSyCg6AsLPct_qFGm1eUvBYLb-7qHC3t33rA",
  authDomain: "csc-firebase-app.firebaseapp.com",
  databaseURL: "https://csc-firebase-app-default-rtdb.firebaseio.com",
  projectId: "csc-firebase-app",
  storageBucket: "csc-firebase-app.appspot.com",
  messagingSenderId: "911710783408",
  appId: "1:911710783408:web:c0229d31550e0761bb7875",
  measurementId: "G-YDGCPFB2Y1"
};

const firebase_app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db_firestore = firebase_app.firestore();

// Google OAuth Client ID, needed to support One-tap sign-up.
// Set to null if One-tap sign-up is not supported.
var CLIENT_ID =
  'YOUR_OAUTH_CLIENT_ID';

function getSubmissions() {

  var submissions = [];

  db_firestore.collection("submissions")
    .onSnapshot((querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          if (!submissions.includes(change.doc.data())) {
            submissions.push(change.doc.data());
          }
        }
      });

      build_all_submissions_page(submissions);
    });

  return [submissions];
}

getSubmissions();

async function createSubmission(submissionTitle, submissionDescription, submissionTheme, submissionFile) {


  // Create a reference to 'images/mountains.jpg'
  // var publication_media_ref = storageRef.child('media/publications/' + current_user.uid + '/teste.jpg');

  // Create a root reference
  var storageRef = firebase.storage().ref();

  // Create the file metadata
  var metadata = {
    contentType: 'image/jpeg'
  };

  // Upload file and metadata to the object 'images/mountains.jpg'
  var uploadTask = storageRef.child('media/submissions/' + current_user.uid + '/' + submissionFile.name).put(submissionFile);

  var file_downloadURL = '';

  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    (snapshot) => {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;
        case 'storage/canceled':
          // User canceled the upload
          break;

        // ...

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    },
    () => {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
        console.log('File available at', downloadURL);
        file_downloadURL = downloadURL;

        // Add a new document with a generated id.
        db_firestore.collection("submissions").add({
          authorId: current_user.uid,
          authorName: current_user.displayName,
          submissionId: null,
          submissionMedia: '',
          submissionTitle: submissionTitle,
          submissionDescription: submissionDescription,
          submissionTheme: submissionTheme,
          submissionTimestamp: Date.now(),
          submissionScore: 0,
        })
          .then((docRef) => {
            // update publicationId, publicationMedia
            docRef.update({ submissionId: docRef.id, submissionMedia: file_downloadURL });

            // Show sucess notification
            Toastify({
              text: "Publication created sucessfully!",
              duration: 10000,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: false, // Prevents dismissing of toast on hover
              className: "badge d-flex align-items-center p-3 pe-2 text-success-emphasis bg-success-subtle border border-success-subtle rounded-pill",
              onClick: function () { } // Callback after click
            }).showToast();

            console.log("Document written with ID: ", docRef.id);
          })
          .catch((error) => {
            // Show error notification
            Toastify({
              text: "There was an error while creating the publication!",
              duration: 3000,
              close: true,
              gravity: "top", // `top` or `bottom`
              position: "center", // `left`, `center` or `right`
              stopOnFocus: false, // Prevents dismissing of toast on hover
              className: "badge d-flex align-items-center p-1 pe-2 text-danger-emphasis bg-danger-subtle border border-danger-subtle rounded-pill",
              onClick: function () { } // Callback after click
            }).showToast();
            console.error("Error adding document: ", error);
          });
      });
    }
  );
}