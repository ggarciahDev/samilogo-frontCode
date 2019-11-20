class Auth {
    constructor() {
        this.authenticated = false
        this.user = {
            _id: '',
            name: "",
            age: 0,
            city: "",
            address: "",
            email: "",
            password: ""
        }
    }

    setUser(user){
        this.user._id = user._id
        this.user.name = user.name 
        this.user.age = user.age
        this.user.city = user.city
        this.user.address = user.address
        this.user.email = user.email
        this.user.password = user.password

        console.log("User Actual: ");
        console.log(this.user);
    }

    logIn(){
        this.authenticated = true;
    }

    logOut(){
        this.authenticated = false;
        this.user = {
            _id : '',
            name: "",
            age: 0,
            city: "",
            address: "",
            email: "",
            password: ""
        }
    }

    isAuth(){
        return this.authenticated;
    }
}

export default new Auth();