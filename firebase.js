 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAluuC3IPdFt4g79GH5U9LEgDbfISeWbh0",
    authDomain: "general-tab-notes.firebaseapp.com",
    projectId: "general-tab-notes",
    storageBucket: "general-tab-notes.appspot.com",
    messagingSenderId: "382579286995",
    appId: "1:382579286995:web:acc54d631fbbc7b1674526"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  console.log(firebase);
  chrome.runtime.onMessage.addlistener((msg, sender, response) => {
      if(msg.command =='fetchNotes'){
          firebase.database().ref('/notes').once('value').then(function(snapshot){
           response({type: "result",status:"success", data: snapshot.val(), request: msg});
          });

      }
      return  true;
  });