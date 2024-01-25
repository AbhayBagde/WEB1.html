let UserCred = JSON.parse(sessionStorage.getItem("user-creds"))
    let UserInfo = JSON.parse(sessionStorage.getItem("user-info"))

    let signout = ()=>{
        sessionStorage.removeItem("user-creds")
        sessionStorage.removeItem("user-info")
        window.location.href = "signout.html"
    }

    let CheckCred = ()=>{
        if(!sessionStorage.getItem("user-creds"))
            // window.location.href = "sign-up.html"
    }

    window.addEventListener("load" , CheckCred)
    Sign-Out.addEventListener("click", signout)