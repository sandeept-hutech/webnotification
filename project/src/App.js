import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Notifications } from "react-push-notification";
import addNotification from "react-push-notification";

function App() {
  const [name, setName] = useState("");

  // console.log("helooooooooooooooo", name );

  function warningNotification() {
    addNotification({
      title: "Warning",
      subtitle: "Please fill it",
      message: "You have to enter name",
      theme: "red",
      closeButton: "X",
    });
  }

  function successNotification() {
    addNotification({
      title: "Success",
      subtitle: "You have successfully submitted",
      message: `Welcome ${name}`,
      theme: "light",
      closeButton: "X",
      backgroundTop: "green",
      backgroundBottom: "yellowgreen",
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") warningNotification();
    else successNotification();
  }

  return (
    <div className="App">
      <Notifications />
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-danger text-center p-3 bg-warning ">
            welcome to zafayer project....!
          </h1>
          <br></br>

          <div className="col-lg-3"></div>
          <div className="col-lg-6">
            <form>
              <label>Name:</label>
              <br></br>
              <input
                className="form-control"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <button
                className="btn btn-primary btn-small mt-3"
                onClick={handleSubmit}
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import addNotification from "react-push-notification";
// import { Notifications } from "react-push-notification";
// function App() {
//   function buttonOnClick() {
//     addNotification({
//       title: "Warning",
//       native: true,
//     });
//   }
//   return (
//     <div className="App">
//       <Notifications />
//       <h1>Hey Notification!</h1>
//       <button onClick={buttonOnClick}>Push Notification</button>
//     </div>
//   );
// }

// export default App;
