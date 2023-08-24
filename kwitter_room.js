
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDwKXRHEV6YqdTo1KZHnZx5Zfjl7n0DLLo",
      authDomain: "class-test-280c2.firebaseapp.com",
      databaseURL: "https://class-test-280c2-default-rtdb.firebaseio.com",
      projectId: "class-test-280c2",
      storageBucket: "class-test-280c2.appspot.com",
      messagingSenderId: "601365847917",
      appId: "1:601365847917:web:b91e85e22043776b264464"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
    
    function addRoom() 
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding rooms names"
            });
            
            localStorage.setItem("room_name", room_name );

            window.location = "kwitter_page.html"
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Names -" + Room_names);
       row = "<div class='room_names' id="+Room_names+"onclick= 'redirectToRoomName(this.id)'"
       document.getElementById("output").innerHTML += row ;
      //Start code
      
      //End code
      });});}
getData()

      function logout() 
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html"
      }
