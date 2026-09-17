 // Load user data from localStorage
        window.onload = function () {
            const user = JSON.parse(localStorage.getItem("userData")) || {
                firstName: "Alma",
                lastName: "Lawson",
                email: "alma.lawson@example.com",
                phone: "01123456789",
                countryCode: "+20",
                age: "27",
                gender: "Female",
            };

            document.getElementById("firstName").value = user.firstName;
            document.getElementById("lastName").value = user.lastName;
            document.getElementById("email").value = user.email;
            document.getElementById("phone").value = user.phone;
            document.getElementById("countryCode").value = user.countryCode;
            document.getElementById("age").value = user.age;
            document.querySelector(`input[name="gender"][value="${user.gender}"]`).checked = true;

            // Display data above form
            document.getElementById("displayName").innerText = `${user.firstName} ${user.lastName}`;
            document.getElementById("displayEmail").innerText = user.email;
        };

        // Save updated data
        document.getElementById("editForm").addEventListener("submit", function (e) {
            e.preventDefault();

            const updatedUser = {
                firstName: document.getElementById("firstName").value,
                lastName: document.getElementById("lastName").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                countryCode: document.getElementById("countryCode").value,
                age: document.getElementById("age").value,
                gender: document.querySelector('input[name="gender"]:checked').value,
            };

            localStorage.setItem("userData", JSON.stringify(updatedUser));
            alert("Profile updated successfully!");
            window.location.href = "profile.html";
        });