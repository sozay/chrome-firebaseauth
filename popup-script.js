

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAywOfucdi4uNyFtkaAO0NPqhBvnuCocMg",
    authDomain: "searchrome.firebaseapp.com",
    databaseURL: "https://searchrome.firebaseio.com",
    projectId: "searchrome",
    storageBucket: "searchrome.appspot.com",
    messagingSenderId: "1065473102318",
    appId: "1:1065473102318:web:58f8bc5e7387cdc58d3eff"
  };
// Initialize Firebase
//firebase.default.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

    
// Initialize the FirebaseUI Widget using Firebase.
const ui = new firebaseui.auth.AuthUI(firebase.auth());

const uiConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            console.log("signInSuccessWithAuthResult");
            chrome.runtime.sendMessage({ message: 'sign_in' }, function (response) {
                if (response.message === 'success') {
                    window.location.replace('./welcome.html');
                }
            });
            return false;
        },
        uiShown: function () {
            document.getElementById('my_sign_in').style.display = 'none';
        }
    },
    signInFlow: 'popup',
    
    // signInSuccessUrl: '<url-to-redirect-to-on-success>',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        /*{
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            scopes: [
                'https://www.googleapis.com/auth/contacts.readonly'
              ],
            customParameters: {
                prompt: 'select_account'
            }
        },
        {
            provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            scopes: [
                'public_profile',
                'email',
                'user_likes',
                'user_friends'
              ],
            customParameters: {
                auth_type: 'reauthenticate'
            }
        },*/
        firebase.auth.EmailAuthProvider.PROVIDER_ID/*,
        firebase.auth.TwitterAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        */
    ]
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
};
//1065473102318-81ngmckoseulmoj7bvgepn1lmgqjcccl.apps.googleusercontent.com
/*document.getElementById('my_sign_in').addEventListener('click', () => {
    ui.start('#sign_in_options', uiConfig);
});*/

document.querySelector('#wrapper').addEventListener('click', () => {
    ui.start('#sign_in_options', uiConfig);
});

document.querySelector('#wrapper').addEventListener('mouseover', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_no_hover');
    sign_in.classList.add('sign_in_hover');
});

document.querySelector('#wrapper').addEventListener('mouseleave', () => {
    let sign_in = document.querySelector('#my_sign_in');
    sign_in.classList.remove('sign_in_hover');
    sign_in.classList.add('sign_in_no_hover');
});
