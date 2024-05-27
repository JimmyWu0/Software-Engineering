let cur_room;
let first_count, second_count;
let USER;
//let mess = document.getElementById('message');
let database = firebase.database();

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

function init() {
  firebase.auth().onAuthStateChanged((user) => {
    // var menu = $('#dynamic-menu');
    let menu = document.getElementById('dynamic-menu');
    if (user) {
      let txtname = document.getElementById('name');
      let txtemail = document.getElementById('email');
      USER = user;
      //var name = $("#name");
      //var name = user.name;
      //var email = $("#email");
      var mychatroom = $("#mychatroom");

      // name / email
      // name.html(user.displayName);
      // email.html(user.email);
      txtname.innerHTML = user.displayName;
      txtemail.innerHTML = user.email;

      // photo
      // onValue(firebase.database().ref('users/' + user.displayName).once('value'), (snapshot) => {
      //   if(snapshot.val().photo == "user.jpg") {
      //     firebase.storage().ref().child("user.jpg").getDownloadURL().then(url => {
      //       firebase.database().ref('users/' + user.displayName).update({
      //         photo: url
      //       });
      //       document.getElementById('photo').src = url;
      //     }).catch(error => {
      //       create_alert("error",error.message);
      //       alert(error.message); 
      //     });
      //   }
      //   else
      //     document.getElementById('photo').src = snapshot.val().photo;
      //  });

      firebase.database().ref('users' + '/' + user.displayName).once('value').then(snapshot => {  //name.html()
        if(snapshot.val().photo === "user.jpg") {
          firebase.storage().ref().child("user.jpg").getDownloadURL().then(function(url){
            firebase.database().ref('users' + '/' + user.displayName).update({
              photo: url
            });
            document.getElementById('pho' + 'to').src = url;
          }).catch((error) => {
            create_alert("error",error.message);
            alert(error.message); 
          });
        }
        else
          document.getElementById('photo').src = snapshot.val().photo;
      });
/////////////////////////////////////////////////////////////////////////////////////
      let createchatroom = document.getElementById('btn1');
      createchatroom?.addEventListener('click', createChatroom);

      let inputElement = document.getElementById("upload");
      inputElement?.addEventListener("change", handleFiles, false);

      //let img = document.getElementById('photo');

      let mes = document.getElementById('message');
      mes?.addEventListener('keydown', (event) => {
        if(event.key === "Enter") {
          sendMessage();
        }
      }, false);

      let send = document.getElementById('send');
      send?.addEventListener('click', sendMessage, false);
/////////////////////////////////////////////////////////////////////////////////////
      // my chatroom 
      firebase.database().ref('users' + '/' + user.displayName).on('child_added', function(snapshot){ // join chatroom
        if(snapshot.key !== ("em"+"ail") && snapshot.key !== "password" && snapshot.key !== "name" && snapshot.key !== "photo") {
          mychatroom.append(`<button onclick="chooseChatroom(\'`+snapshot.key+`\'); "id="roombtn">`+snapshot.key+`</button>`);
        }
        console.log(snapshot);
      });

/*
      // navbar - profile
      menu.html("<span class='dropdown-item' id='profile_page'>Your Profile</span>");
      document.getElementById("profile_page").addEventListener('click', () => {
        window.location.href = "./profile.html";
      });
*/
      // navbar - sign out //append
      //menu.innerHTML="<span class='dropdown-item'>" + user.email + "</span><span class='dropdown-item' id='logout-btn'>Sign Out</span>";
      menu.innerHTML = "<span class='dropdown-item'>Name: " + user.displayName + "</span><span class='dropdown-item'>Email: " + user.email + "</span><span class='dropdown-item' id='logout-btn'>Sign Out</span>";
      let logoutbtn = document.getElementById("logout-btn");
      logoutbtn.addEventListener('click', () => {
        firebase.auth().signOut().then(() => {
          create_alert("success","Signed out Successfully!");
          alert("Signed out Successfully!");
        }).catch(error => { 
          create_alert("error",error.message);
          alert(error.message); 
        });
      });
      
/*
      menu.html("<span class='dropdown-item'>" + email + "</span><span class='dropdown-item' id='logout-btn'>Logout</span>");
      document.getElementById("logout-btn").addEventListener('click',function(){
          firebase.auth().signOut().then(function(){
                  alert("Sign out completed!");
              }).catch(function(error){
                  alert("Sign out failed!");
              })
      })
*/
      // Notification request
      // if (Notification && Notification.permission !== "granted") {
      //   Notification.requestPermission(function (status) {
      //     if (Notification.permission !== status) 
      //       Notification.permission = status;
      //   });
      // }
        $(document).on('DOMContentLoaded', function () {  //(status)
          // Request desktop notifications permission on page load
      
          if (!Notification) {
            create_alert('error', 'Desktop notifications are not available in your browser.');
            console.log('Desktop notifications are not available in your browser.');
            return;
          }
      
          if (Notification.permission !== 'granted') {
            Notification.requestPermission();
            //Notification.permission = status;
          }
        });

    }
    else { // No user is signed in.
      // navbar - sign in
      //menu.html("<a class='dropdown-item' href='./sign_in.html'>Sign In/Up</a>");
      menu.innerHTML = "<a class='dropdown-item' href='sign_in.html'>Sign In/Up</a><span class='dropdown-item'>Hello!!!</span>";

      // $('#left').html("");
      // $('#right').html("");
      var left = document.getElementById('left');
      left.innerHTML="";
      var right = document.getElementById('right');
      right.innerHTML="";
    }
  });
}

// let createchatroom = document.getElementById('btn1');
// createchatroom?.addEventListener('click', ()=>{
//   var roomname = prompt("Set the new chatroom name to:", "");
//   if(roomname.length > 0 && roomname.length <= 32) {  //"" case
//     //var name = $("#name");
//     // user
//     firebase.database().ref('users/' + USER.displayName + "/" + roomname).set({
//       room_name: roomname,
//     });

//     // content
//     firebase.database().ref('content/' + roomname).push({
//       start: USER.displayName,
//     });
//   }
// });

function createChatroom() { // when click the create button
  var roomname = prompt("Set the new chatroom name as:");
  if(roomname.length > 0 && roomname.length <= 1024) {  //"" case
    //var name = $("#name");
    // user
    database.ref('users' + '/' + USER.displayName + '/' + roomname).set({
      room_name: roomname,
    });

    // content
    database.ref('content' + '/' + roomname).push({  //push -> set ?
      start: USER.displayName,
    });
  }
}

/*





class Obj extends React.Component{
  constructor(props) {
      super(props);

      this.state = {
          total: 0,
      };
  }



  render() {
      return (
          <div>
              abc
          </div>
      );
  }

}

ReactDOM.render(<Obj />, document.getElementById('chat_table'));





*/
// ////////////////////////////////////////////






/*
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Taylor" />);
*///
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
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}

ReactDOM.render(<Timer />, document.getElementById('timer'));
*/
//ReactDOM.render(<Obj />, document.getElementById('chat_table'));
//
/*
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

// ////////////////////////////////

function other(childshot, send_message, total_message) { // once - other(left)
  return new Promise(resolve => {
    //console.log(childshot);
    database.ref('users' + '/' + childshot.name).once('value', (snapshot) => {
      // console.log(snapshot.key);
      // console.log(send_message);
      // console.log(childshot.name);
      // photo + name
      total_message[total_message.length] = 
        `<div class="other_info popup">
          <img class="other_photo" src=` + snapshot.val().photo + "" + `></img>
          <div class="other_name">` + snapshot.key + "" + `</div>
          
        </div>
        <div class="other">`+ send_message +`</div>`;  //<div class="popuptext" id="myPopup"></div>

          
      //message
/*      if(send_message == "!/!/!Good!/!/!") {
        total_message[total_message.length] = 
          `<div id="other_good">
            <img width="70" src="./img/good_blue.jpg"></img>
          </div>`;
      }
      else if(send_message == "!/!/!Heart!/!/!") {
        total_message[total_message.length] = 
          `<div id="other_heart">
            <img width="70" src="./img/heart.png"></img>
          </div>`;
      }
      else { // text
        total_message[total_message.length] = '<div class="other">'+ send_message +'</div>';
      }
*/


      //console.log(snapshot);
      resolve();
      //console.log(send_message);
    });
  })
}

function first_message(snapshot, total_message) { // once
  return new Promise(async function(resolve) {
    //console.log(snapshot);
    //console.log(snapshot.val());
    for(var n in snapshot.val()) {
      first_count++;
      //console.log(snapshot.child(n));
      if(snapshot.child(n + '/' + 'start').exists()) { // join message(middle)
        total_message[total_message.length] = 
         `<div class="member">`+ 
            snapshot.child(n + '/' + 'start').val() +` created the chatroom
          </div>`;
      }
      else if(snapshot.child(n + '/' + 'member').exists()) { // create message(middle)
        total_message[total_message.length] = 
          `<div class="member">`+ 
            snapshot.child(n + '/' + 'member').val() +` joined the chatroom
          </div>`;
          //console.log(snapshot.child(n));
      }
      else { // me(right) or other(left)
        //replace <, >, &
        //console.log(snapshot.child(n + '/' + 'message').val());
        var send_message = snapshot.child(n + '/' + 'message').val().replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
        //console.log(snapshot.child(n + '/' + 'name').val());
        if(snapshot.child(n + '/' + 'name').val() === USER.displayName && snapshot.child(n + '/' + 'name').val().length === USER.displayName.length && snapshot.child(n + '/' + 'name').exists()) { // me(right)
          // message
/*          if(send_message == "!/!/!Good!/!/!") {
            total_message[total_message.length] = 
              `<div id="me_good">
                <img width="70" src="./img/good_blue.jpg"></img>
              </div>`;
          }
          else if(send_message == "!/!/!Heart!/!/!") {
            total_message[total_message.length] = 
              `<div id="me_heart">
                <img width="70" src="./img/heart.png"></img>
              </div>`;
          }
          else { // text
            total_message[total_message.length] = '<div class="me">'+ send_message +'</div>';
          }
*/
          total_message[total_message.length] = '<div class="me" id="me_send">'+ send_message +'</div>';
        }
        else { // other(left)
          //console.log(snapshot.child(n).val());
          await other(snapshot.child(n).val(), send_message, total_message);
        }
      }
    }
    resolve();
  });
}

function chooseChatroom(n) {
  first_count = second_count = 0;
  cur_room = n;
  var content = $("#content");
  //var name = $("#name");
  //var database = firebase.database().ref('content/' + n);
  var total_message = [];
  $("#roomname").innerHTML = "<b>"+cur_room+"</b>";
  $("#roomname").html("<b>"+cur_room+"</b>");
  $("#roomname").innerHTML = "<b>"+cur_room+"</b>";
  $(".hide").css("visibility", "visible");

  // Loading
  // content.html(`<div class="d-flex justify-content-center" style="padding: 50px;">
  //                 <div class="spinner-border" role="status">
  //                   <span class="sr-only">Loading...</span>
  //                 </div>
  //               </div>`);
  content.innerHTML = `<div class="d-flex justify-content-center" style="padding: 50px;">
                  <div class="spinner-border" role="status">
                    <span class="sr-only">Loading</span>
                  </div>
                </div>`;

  database.ref('content' + '/' + n).once('value', async function(snapshot) {
    // once
    await first_message(snapshot, total_message);
    content.html(total_message.join(''));
    content.innerHTML = total_message.join('');
    content.scrollTop(content.height()*1000);
    content.innerHTML = total_message.join('');

    // on
    database.ref('content' + '/' + n).on('child_added', data => {
      if(cur_room === data.ref.parent.key) { // open the chatroom - content + notification
        second_count++;
        //console.log(second_count);
        if (second_count > first_count && first_count>=-1) {
          if(data.child("member").exists()) { // join message(middle)
            total_message[total_message.length] = 
              `<div class="member" id="mem_joinn">`+ 
                data.val().member +` joined the chatroom.
              </div>`;

            // Notification - add
            if (Notification && Notification.permission === "granted") {
              new Notification(data.val().member+" joined "+data.ref.parent.key + ".");
            }

            content.scrollTop(content.height()*1000);
            content.innerHTML = total_message.join('');
            content.html(total_message.join(''));
            content.innerHTML = total_message.join('');
            
          }
          else { // me(right) or other(left)
            //replace <, >, &
            //console.log(data.val());
            var send_message = data.val().message.replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
            //console.log(send_message);
            if(data.val().name === USER.displayName) { // me(right)
              // message  //good heart
              total_message[total_message.length] = '<div class="me">'+ send_message +'</div><a hidden>HI!</a>';
              
              content.html(total_message.join(''));
              content.innerHTML = total_message.join('');
              content.scrollTop(content.height()*1000);
              content.innerHTML = total_message.join('');
            }
            else { // other(left)
              database.ref('users' + '/' + data.val().name).once('value', (snapshot) => {
                // name + photo
                total_message[total_message.length] =   //data.val().name
                  `<div class="other_info popup">
                    <img class="other_photo" src=`+ snapshot.val().photo + "" + `></img>
                    <div class="other_name">` + snapshot.val().name + "" + `</div>
                    
                  </div>`;  //<div class="popuptext" id="myPopup"></div>
                  
                // message  //good heart
                total_message[total_message.length] = '<div class="other">'+ send_message +'</div><a hidden>Hi!!!</a>';

                // Notification - other's message
                if (Notification && Notification.permission === "granted") {
/*                  if(send_message == "!/!/!Good!/!/!")
                    var n = new Notification(data.val().name+" sent a like");
                  else if(send_message == "!/!/!Heart!/!/!")
                    var n = new Notification(data.val().name+" sent a heart");
                  else
*/
                    var n = new Notification(data.val().name+" sent a message: "+send_message);
                }

                content.html(total_message.join(''));
                content.innerHTML = total_message.join('');
                content.scrollTop(content.height()*1000);
                content.innerHTML = total_message.join('');
              }); 
            }
          }
        }
      }
      else { // not open the chatroom - notification
        if(data.child("member").exists()) {
          // Notification - add
          if (Notification && Notification.permission === "granted") {
            new Notification(data.val().member+" joined chatroom "+data.ref.parent.key + '.');
          }
        }
        else {
          //replace <, >, &
          var send_message = data.val().message.replace(/&/gi, '&amp;').replace(/</gi, '&lt;').replace(/>/gi, '&gt;');
          
          if(data.val().name !== USER.displayName) { //left, name.html()
            // Notification - other's message
            if (Notification && Notification.permission === "granted") {
/*              if(send_message == "!/!/!Good!/!/!")
                var n = new Notification(data.val().name+" sent a like");
              else if(send_message == "!/!/!Heart!/!/!")
                var n = new Notification(data.val().name+" sent a heart");
              else
*/
              //console.log(data.val().message);
              //var send_message = data.val().message.replace(/>/gi, '&gt;').replace(/&/gi, '&amp;').replace(/</gi, '&lt;');
              //console.log(send_message);
              //new Notification(data.val().name+" sent a message: "+send_message);  //////////
            }
          } 
        }
      }
    });
  })
}

function addNewMember() {
  var new_email = prompt("Please type the new member's email:");
  var find = 0;
  database.ref('users/').once('value', snapshot => {
    for(var n in snapshot.val()) {
    //snapshot.val().forEach((n) => {  //n is user
      //var n = snapshot.val()[i];
      if(snapshot.child(n).child("email").val() === new_email) {
        find = 1;
        if(snapshot.child(n).hasChild(cur_room)) // in the chatroom
          alert("The member has already been added.")  //find = -1;
        else {
          //find = 1;
          firebase.database().ref('users' + '/' + n + '/' + cur_room).set({ // add room in user
            room_name: cur_room,
          });
          alert("New member is successfully added.");
          firebase.database().ref('content' + '/' + cur_room).push({ //add member message
            member: n
          })
        }
        break;
      }
    }
    //find = 1;
    //console.log("here");
  }).then(() => { 
    if(find === 0){
      alert("Cannot find the member.");
    }
    // if(find === 1)
    //   alert("New member is successfully added.");
    // else if(find === -1)
    //   alert("The member has already been added.");
    // else 
    //   alert("Cannot find the member.");
  }).catch((error) => {
    create_alert('error', error.message);
    alert(error.message); 
  });
}

function sendMessage() {
  //var name = $("#name");
  //let mess = document.getElementById('send');
  var message = $("#message");
  //var database = firebase.database();

  if(message.val().length != 0 && message.val().length <= 1024) {
    database.ref('content/' + cur_room).push({
      name: USER.displayName,
      message: message.val(),
    });
    //message.val("");
    //message.innerText = "";
  }
  var text = "abc"+''+"def";
  message.val(text[6]);
}

/*function sendHeart() {
  var name = $("#name");

  firebase.database().ref('content/' + cur_room).push({
    name: name.html(),
    message : "!/!/!Heart!/!/!",    
  });
}

function sendGood() {
  var name = $("#name");

  firebase.database().ref('content/' + cur_room).push({
    name: name.html(),
    message : "!/!/!Good!/!/!",    
  });
}*/

// function uploadPhoto(th) {
//   var file = th.files[0];
//   //var name = $("#name");  //name = USER.displayName
//   var photo = USER.displayName + '/profile.jpg';  //1 -> profile

//   firebase.storage().ref().child(photo).put(file).then(() => { // put file at photo
//     firebase.storage().ref().child(photo).getDownloadURL().then(url => { // take img on profile
//       document.getElementById('photo').src = url;
//       firebase.database().ref('users/' + USER.displayName).update({
//         photo: url
//       })
//     }).catch(error => {
//       create_alert('error',error.message);
//       alert(error.message); 
//     });
//   }).catch(error => {
//     create_alert('error',error.message);
//     alert(error.message); 
//   });
// }

// let inputElement = document.getElementById("upload");
// inputElement?.addEventListener("change", handleFiles, false);

function handleFiles() {
  var file = this.files[0]; /* now you can work with the file list */
  var photo = USER.displayName + '/profile.jpg';  //1 -> profile
  var storageRef = firebase.storage().ref();
  var mountainImagesRef = storageRef.child(photo);
  const storage = firebase.storage();
  mountainImagesRef.put(file).then(function(snapshot){ // put file at photo
    mountainImagesRef.getDownloadURL().then((url) => { // take img on profile
      let img = document.getElementById('photo');
      img.setAttribute('src', url);
      firebase.database().ref('users/' + USER.displayName).update({
        photo: url
      })
    }).catch(error => {
      create_alert('error', error.message);
      alert(error.message); 
    });
  }).catch(error => {
    create_alert('error', error.message);
    alert(error.message); 
  });
}

// function other_profile(event) {
//   var name = event.path[1]["childNodes"][3].innerHTML; // the person's name  //try to do nothing here?
//   var popup = $("#myPopup");
//   var popuptext = $(".popuptext");
//   popuptext.html("");
//   firebase.database().ref('users/' + name).once('value').then(snapshot => {
//     popuptext.append("<b>Name: </b>"+name+"<br>");
//     popuptext.append("<b>E-mail: </b>"+snapshot.val().email+"<br>");
//     popuptext.append("<b>Bio: </b>"+snapshot.val().bio+"<br>");
//   });
//   popup.toggleClass("show");
// }

// $(function () {
//   'use strict';

//   // $('[data-toggle="offcanvas"]').on('click', function () {
//   //   $('.offcanvas-collapse').toggleClass('open');
//   // });

//   // $('[data-toggle="offprofile"]').on('click', function () {
//   //   $('#left').toggleClass('open');
//   //   $('#right').toggleClass('Close');
//   //   $('#img1').toggleClass('hideImg');
//   //   $('#img2').toggleClass('showImg');
//   //   $("#content").scrollTop($("#content").height()*10);
//   // });
// });

window.onload = function() {
  init();
};