
class Password {
    constructor() {
        console.log("welcome to password generator");
        this.password = ""
    }

    strongpassword() {
        this.password = ""
        let lowercase = "abcdefghijklmnopqrstuvwxyz"
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let special = "!#@$%^&*()?|<>*+-"
        let numbers = "1234567890"

        let len = parseInt(document.getElementById("length").value);

        if (len < 5) {
            console.log("your password is not strong, generate a strong password");
        }
        else {

            let i = 0;
            while (i < len) {
                this.password += lowercase[Math.floor(Math.random() * lowercase.length)]
                this.password += uppercase[Math.floor(Math.random() * uppercase.length)]
                this.password += numbers[Math.floor(Math.random() * numbers.length)]
                this.password += special[Math.floor(Math.random() * special.length)]
                i = i + 4;
            }
            this.password = this.password.substring(0, len);
            document.getElementById("strongpassword").innerHTML = this.password;
        }
    }

    weakpassword() {
        this.password = ""
        let lowercase = "abcdefghijklmnopqrstuvwxyz"
        let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let numbers = "1234567890"

        let len = parseInt(document.getElementById("length").value);
        if (len < 3) {
            console.log("the password is too weak");
        }
        let i = 0;
        while (i < len) {
            this.password += lowercase[Math.floor(Math.random() * lowercase.length)]
            this.password += uppercase[Math.floor(Math.random() * uppercase.length)]
            this.password += numbers[Math.floor(Math.random() * numbers.length)]
            i = i + 3;

        }
        this.password = this.password.substring(0, len);
        document.getElementById("weakpassword").innerHTML = this.password;

    }

    funnypassword() {
        this.password = ""

        let funnyPasswords = [
            "Banana@007Dance!",
            "Potato#69Snore",
            "Monkey$42Jumping",
            "Chicken^FlyHigh",
            "Donut!EatMe123",
            "Pizza&Lover999",
            "Llama*Drama24",
            "Toilet@PaperRush",
            "Broccoli#Yuck88",
            "Penguin+Slide90"
        ];

        this.password += funnyPasswords[Math.floor(Math.random()* funnyPasswords.length)];
       document.getElementById("funnypassword").innerHTML = this.password;


    }
}
let generator = new Password();


