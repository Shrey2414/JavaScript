function check() {
        let nm = document.f1.nm.value;
        let ct = document.f1.ct.value;
        let em = document.f1.em.value;
        let pw = document.f1.pw.value;

        if (nm == "") {
            alert("Name must be filled out");
            return false;
        }
        if (ct == "") {
            alert("Number must be filled out");
            return false;
        }    
        if (em == "") {
            alert("Email must be filled out");
            return false;
        }
        if (pw == "") {
            alert("Password must be filled out");
            return false;
        }
        alert("Form Submitted Successfully!");
        return true;
}