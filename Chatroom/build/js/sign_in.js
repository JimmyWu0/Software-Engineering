
  // let gotosignup=document.getElementById('btnGoToSignUP');
  // gotosignup?.addEventListener('click', function(){
  //   console.log('!!!!');
  //   window.location.href = "./sign_up.html";
  //   //location.replace("./sign_up.html");
  // })
/*

  class Timer extends React.Component {
    constructor(props) {
      super(props);
      this.state = { seconds: 0 };
    }
  
    tick() {
      this.setState(state => ({
        seconds: state.seconds + 1
      }));
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return React.createElement(
        "div",
        null,
        "You have been in this page for ",
        this.state.seconds,
        " seconds."
      );
    }
  }
  
  ReactDOM.render(<Timer />, document.getElementById('timer'));

*/
/*

class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        You have been here for {this.state.seconds} seconds.
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));
//root.render(<Timer />);

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">
            What needs to be done?
          </label>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {
      text: this.state.text,
      id: Date.now()
    };
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: ''
    }));
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    );
  }
}

root.render(<TodoApp />);
//
class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Hello, **world**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Input</h3>
        <label htmlFor="markdown-content">
          Enter some markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Output</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

root.render(<MarkdownEditor />);





*/

function GoToSignUp() {
  location.replace("./sign_up.html");
}

// let backtosignin=document.getElementById('btnBackToSignIn');
// backtosignin?.addEventListener('click', function(){
//   location.replace("./sign_in.html");
// })

// function BackToSignIn() {
//   location.replace("./sign_in.html");
// }

// let signup=document.getElementById('btnSignUp');
// signup?.addEventListener('click', function(){
//   var name = $("#name");
//   //var email =name;
//   var email = $("#email");
//   var password = $("#password");

//   firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then(() => {
//     firebase.auth().currentUser.updateProfile({
//       displayName: name.val()
//     });
//     firebase.database().ref('users/' + name.val()).set({
//       name: name.val(),
//       email: email.val(),
//       password: password.val(),
//       photo: "user.jpg",
//       bio: "Hi!"
//     }).then(() => { 
//       create_alert("success","Success!!!");
//       alert("Successfully Signed Up!");
//       //window.location.href = "./sign_in.html";
//       location.replace("./sign_in.html");
//     }).catch(error => { 
//       create_alert("error",error.message);
//       alert(error.message); 
//     });
//   }).catch(error => { 
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// })

// function writeUserData() {
//   var name = $("#name");
//   //var email =name;
//   var email = $("#email");
//   var password = $("#password");

//   firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then(() => {
//     firebase.auth().currentUser.updateProfile({
//       displayName: name.val()
//     });
//     firebase.database().ref('users/' + name.val()).set({
//       name: name.val(),
//       email: email.val(),
//       password: password.val(),
//       photo: "user.jpg",
//       bio: "Hi!"
//     }).then(() => { 
//       create_alert("success","Success!!!");
//       alert("Successfully Signed Up!");
//       //window.location.href = "./sign_in.html";
//       location.replace("./sign_in.html");
//     }).catch(error => { 
//       create_alert("error",error.message);
//       alert(error.message); 
//     });
//   }).catch(error => { 
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// }

let txtEmail = document.getElementById('email');
let txtPassword = document.getElementById('password');

let signin=document.getElementById('btnSignIn');
signin?.addEventListener('click', function(){
  // var email = $("#email");
  // var password = $("#password");
  var email = txtEmail.value;
  var password = txtPassword.value;
  
  firebase.auth().signInWithEmailAndPassword(email, password).then((userCredential) => {
    var user=userCredential.user;
    create_alert("success","Success!!!");
    alert("Successfully Signed In!");
    // window.location.href = "./index.html";
    location.replace("./index.html");
  }).catch(error => { 
    create_alert("error","The user doesn't exist.");
    alert("The user doesn't exist.");
  });
})

// function SignIn() {
//   var email = $("#email");
//   var password = $("#password");
  
//   firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then(() => {
//     create_alert("success","Success!!!");
//     alert("Successfully Signed In!");
//     window.location.href = "./index.html";
//   }).catch(error => { 
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// }

let google=document.getElementById('btnGoogle');
google?.addEventListener('click', function(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){  //result =>
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    firebase.database().ref("users/").once('value').then(function(snapshot){  //snapshot =>
      if(!snapshot.hasChild(user.displayName)) {
        firebase.database().ref('users/' + user.displayName).set({
          name: user.displayName,
          email: user.email,
          photo: "user.jpg",
          //bio: "Hi!"
        }).then(() => {
          create_alert("success","Success!!!");
          alert("Successfully Signed In!");
          //window.location.href = "./index.html";
          location.replace("./index.html");
        })
      }
      else {
        create_alert("success","Success!!!");
        alert("Successfully Signed In!");
        //window.location.href = "./index.html";
        location.replace("./index.html");
      }
    });   
  }).catch(function(error){  //error =>
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    create_alert("error",errorMessage);
    alert(errorMessage); 
  });
})
//}


// let gotosignup=document.getElementById('btnGoToSignUp');
// gotosignup.addEventListener('click', function(){
//   location.replace("./sign_up.html");
// })

// // function SignUp() {
// //   location.replace("./sign_up.html");
// // }

// let backtosignin=document.getElementById('btnBackToSignIn');
// backtosignin.addEventListener('click', function(){
//   location.replace("./sign_in.html");
// })

// // function BackToSignIn() {
// //   location.replace("./sign_in.html");
// // }

// let signup=document.getElementById('btnSignUp');
// signup.addEventListener('click', function(){
//   var name = $("#name");
//   //var email =name;
//   var email = $("#email");
//   var password = $("#password");

//   firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then(() => {
//     firebase.auth().currentUser.updateProfile({
//       displayName: name.val()
//     });
//     firebase.database().ref('users/' + name.val()).set({
//       name: name.val(),
//       email: email.val(),
//       password: password.val(),
//       photo: "user.jpg",
//       bio: "Hi!"
//     }).then(() => { 
//       create_alert("success","Success!!!");
//       alert("Successfully Signed Up!");
//       //window.location.href = "./sign_in.html";
//       location.replace("./sign_in.html");
//     }).catch(error => { 
//       create_alert("error",error.message);
//       alert(error.message); 
//     });
//   }).catch(error => { 
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// })

// // function writeUserData() {
// //   var name = $("#name");
// //   //var email =name;
// //   var email = $("#email");
// //   var password = $("#password");

// //   firebase.auth().createUserWithEmailAndPassword(email.val(), password.val()).then(() => {
// //     firebase.auth().currentUser.updateProfile({
// //       displayName: name.val()
// //     });
// //     firebase.database().ref('users/' + name.val()).set({
// //       name: name.val(),
// //       email: email.val(),
// //       password: password.val(),
// //       photo: "user.jpg",
// //       bio: "Hi!"
// //     }).then(() => { 
// //       create_alert("success","Success!!!");
// //       alert("Successfully Signed Up!");
// //       //window.location.href = "./sign_in.html";
// //       location.replace("./sign_in.html");
// //     }).catch(error => { 
// //       create_alert("error",error.message);
// //       alert(error.message); 
// //     });
// //   }).catch(error => { 
// //     create_alert("error",error.message);
// //     alert(error.message); 
// //   });
// // }

// let signin=document.getElementById('btnSignIn');
// signin.addEventListener('click', function(){
//   var email = $("#email");
//   var password = $("#password");
  
//   firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then(() => {
//     create_alert("success","Success!!!");
//     alert("Successfully Signed In!");
//     // window.location.href = "./index.html";
//     location.replace("./index.html");
//   }).catch(error => { 
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// })

// // function SignIn() {
// //   var email = $("#email");
// //   var password = $("#password");
  
// //   firebase.auth().signInWithEmailAndPassword(email.val(), password.val()).then(() => {
// //     create_alert("success","Success!!!");
// //     alert("Successfully Signed In!");
// //     window.location.href = "./index.html";
// //   }).catch(error => { 
// //     create_alert("error",error.message);
// //     alert(error.message); 
// //   });
// // }

// let google=document.getElementById('btnGoogle');
// google.addEventListener('click', function(){
//   var provider = new firebase.auth.GoogleAuthProvider();
//   firebase.auth().signInWithPopup(provider).then(result => {
//     var user = result.user;
//     firebase.database().ref("users/").once('value').then(snapshot => { 
//       if(!snapshot.hasChild(user.displayName)) {
//         firebase.database().ref('users/' + user.displayName).set({
//           name: user.displayName,
//           email: user.email,
//           photo: "user.jpg",
//           bio: "Hi!"
//         }).then(() => {
//           create_alert("success","Success!!!");
//           alert("Successfully Signed In!");
//           window.location.href = "./index.html";
//         })
//       }
//       else {
//         create_alert("success","Success!!!");
//         alert("Successfully Signed In!");
//         window.location.href = "./index.html";
//       }
//     });   
//   }).catch(error => {
//     create_alert("error",error.message);
//     alert(error.message); 
//   });
// })
//
// // function SignInWithGoogle() {
// //   var provider = new firebase.auth.GoogleAuthProvider();
// //   firebase.auth().signInWithPopup(provider).then(result => {
// //     var user = result.user;
// //     firebase.database().ref("users/").once('value').then(snapshot => { 
// //       if(!snapshot.hasChild(user.displayName)) {
// //         firebase.database().ref('users/' + user.displayName).set({
// //           name: user.displayName,
// //           email: user.email,
// //           photo: "user.jpg",
// //           bio: "Hi!"
// //         }).then(() => {
// //           create_alert("success","Success!!!");
// //           alert("Successfully Signed In!");
// //           window.location.href = "./index.html";
// //         })
// //       }
// //       else {
// //         create_alert("success","Success!!!");
// //         alert("Successfully Signed In!");
// //         window.location.href = "./index.html";
// //       }
// //     });   
// //   }).catch(error => {
// //     create_alert("error",error.message);
// //     alert(error.message); 
// //   });
// // }
// //////
// // Custom alert
function create_alert(type, message) {
  var alertarea = document.getElementById('custom-alert');
  if (type == "success") {
      str_html = "<div class='alert alert-success alert-dismissible fade show' role='alert'><strong>Success! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
      alertarea.innerHTML = str_html;
  } else if (type == "error") {
      str_html = "<div class='alert alert-danger alert-dismissible fade show' role='alert'><strong>Error! </strong>" + message + "<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button></div>";
      alertarea.innerHTML = str_html;
  }
}
// /*
// function initApp() {
//   // Login with Email/Password
//   var txtName = document.getElementById('inputName');
//   var txtEmail = document.getElementById('inputEmail');
//   var txtPassword = document.getElementById('inputPassword');
//   var btnLogin = document.getElementById('btnLogin');
//   var btnGoogle = document.getElementById('btngoogle');
//   var btnSignUp = document.getElementById('btnSignUp');

//   // SIGN UP
//   btnSignUp.addEventListener('click', function() {
//       var name=txtName.value;
//       var email=txtEmail.value;
//       var password=txtPassword.value;
//       /*firebase.auth().createUserWithEmailAndPassword(email,password)
//           .then((userCredential) => {
//               //var user=userCredential.user;
              
//               firebase.database().ref('users/' + email.val()).set({
//                 name: email.val(),
//                 email: email.val(),
//                 password: password.val(),
//                 photo: "user.jpg",
//                 bio: "Hi!",
//               })
              
//               create_alert("success","success");
//               //alert("Success!");
//               //location.replace("./index.html");
//               email="";
//               password="";
//           })
//           .catch((error) => {
//               create_alert("error",error.message);
//               email="";
//               password="";
//           });*/
//       // TODO 2: Add email signup button event
//       //     Steps:
//       //     1. Get user input email and password to signup
//       //     2. Show success message using custom alert by calling "create_alert()" and clear input field
//       //     3. Show error message using custom alert by calling "create_alert()" and clear input field
//       /*firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//         firebase.auth().currentUser.updateProfile({
//           displayName: email
//         });
//         firebase.database().ref('users/' + name).set({
//           name: name,
//           email: email,
//           password: password,
//           photo: "user.jpg",
//           bio: "Hi!"
//         }).then(() => { 
//           alert("Successfully Signed Up!");
//           window.location.href = "./sign_in.html";
//         }).catch(error => { 
//           alert(error.message); 
//         });
//       }).catch(error => { 
//         alert(error.message); 
//       });
//   });
//   /*var name=txtEmail.value;
//   var email=txtEmail.value;
//   var password=txtPassword.value;

//   btnSignUp.addEventListener('click', function() {
//   firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
//     firebase.auth().currentUser.updateProfile({
//       displayName: name.val()
//     });
//     firebase.database().ref('users/' + name.val()).set({
//       name: name.val(),
//       email: email.val(),
//       password: password.val(),
//       photo: "user.jpg",
//       bio: "Hi!"
//     }).then(() => { 
//       alert("Successfully Signed Up!");
//       window.location.href = "./sign_in.html";
//     }).catch(error => { 
//       alert(error.message); 
//     });
//   }).catch(error => { 
//     alert(error.message); 
//   });
//   });*/
//   // SIGN IN
//   /*btnLogin.addEventListener('click', function() {
//       //var name=txtName.value;
//       var email=txtEmail.value;
//       var password=txtPassword.value;
//       firebase.auth().signInWithEmailAndPassword(email,password)
//           .then((userCredential) => {
//               var user=userCredential.user;
//               create_alert("success","success");
//               alert("Success!");
//               location.replace("./index.html");
//               //window.location.href = "./chatroom.html";
//               create_alert("success","success");
//               //alert("Success!");
//               email="";
//               password="";
//           })
//           .catch((error) => {
//               create_alert("error",error.message);
//               email="";
//               password="";
//           });
//       // TODO 3: Add email login button event
//       //     Steps:
//       //     1. Get user input email and password to login
//       //     2. Show success message using custom alert by calling "create_alert()" and clear input field
//       //     3. Redirect to index.html when login success
//       //     4. Show error message using custom alert by calling "create_alert()" and clear input field


//   });

//   // GOOGLE SIGN IN
//   btnGoogle.addEventListener('click', function() {
//       var provider=new firebase.auth.GoogleAuthProvider();
//       //
//       firebase.auth().signInWithPopup(provider).then(function(result) {
//           // This gives you a Google Access Token. You can use it to access the Google API.
//           var token = result.credential.accessToken;
//           // The signed-in user info.
//           var user = result.user;
//           create_alert("success","success");
//           alert("Success!");
//           location.replace("./index.html");
//           //window.location.href = "./chatroom.html";
//           create_alert("success","success");
//           alert("Success!");
//           // ...
//         }).catch(function(error) {
//           // Handle Errors here.
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           // The email of the user's account used.
//           var email = error.email;
//           // The firebase.auth.AuthCredential type that was used.
//           var credential = error.credential;
//           create_alert("error",errorMessage);
//         });
//       // TODO 4: Add google login button event
//       //     Steps:
//       //     1. Use pop-up function to login with google account
//       //     2. Redirect to index.html when login success
//       //     3. Show error message by "create_alert()"
      

//   });


// }
// */
// window.onload = function() {
//   initApp();
// };

// window.onload = function() {
//   init();
// };