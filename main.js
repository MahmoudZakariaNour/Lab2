function addUser() {
    if (newUsrTxt != null && newUsrTxt.value != "") {
        for (let index = 0; index < savedUsers.length; index++) {
            if (savedUsers[index] == newUsrTxt.value) {
                console.log("User Already Registered")
                usersList.selectedIndex = index;
                return;
            }
        }
        savedUsers[savedUsers.length] = newUsrTxt.value;
        localStorage.setItem("Users", savedUsers.toString());
        usersList.innerHTML += (`<option>${newUsrTxt.value}</option>`);
        usersList.selectedIndex = usersList.length - 1;
        console.log("User Added " + newUsrTxt.value);
    }
}

