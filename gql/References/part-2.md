Firebase and React
<img src="https://cdn-images-1.medium.com/max/800/1*vdLSfGC-Qn8umJ0kxtmkSg.png" />
- https://console.firebase.google.com/u/0/?hl=ko

```javascript
frontend - npm i firebase
```
<img src="https://cdn-images-1.medium.com/max/800/1*rQkVHO9HFH7GcWQHYcY32Q.png" />

- In order to use Context
```javascript
frontend - npm i react-router-dom
```

- Navbar
- https://mdbootstrap.github.io/bootstrap-material-design/docs/4.0/bootstrap-components/navbar/

Confirmation Email using Firebase
- https://firebase.google.com/docs/auth/web/email-link-auth

Toast Notification and loading
```javascript
npm i react-toastify
```

- effects create resources that need to be cleaned up before the component leaves the screen
- https://reactjs.org/docs/hooks-reference.html#useeffect

```javascript
const logout = () => {
    auth().signOut();
    dispatch({
        type: "LOGGED_IN_USER",
        payload: null
    });
}

history.push('/login');
```
- https://firebase.google.com/docs/auth/web/password-auth