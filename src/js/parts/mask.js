function mask() {
    function phoneNumber() {
        let placeholder = "+7 (___) ___ __ __",
        i = 0,
        def = placeholder.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, "");

        if (def.length >= val.length) { 
            val = def; 
        }

        this.value = placeholder.replace(/./g,  (a) => {
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a;
        });

    }
   
    let input = document.querySelectorAll(".phone-number");
        input.forEach((item) => {
            item.addEventListener("input", phoneNumber);
        });
}

module.exports = mask;