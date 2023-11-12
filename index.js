$(document).ready(function () {
  const form = $("#form");

  form.submit(async function (e) {
    e.preventDefault();
    const firstName = $("#firstName").val();
    const lastName = $("#lastName").val();
    const email = $("#email").val();
    const phoneNumber = $("#phoneNumber").val();
    const address = $("#address").val();
    const city = $("#city").val();
    const zip = $("#zip").val();
    const country = $("#Country").val();
    const dateOfBirth = $("#dateOfBirth").val();
    const gender = $("#gender").val();
    const body = $("#body");

    alert("Thank you for your submission!!!");

    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
          address: address,
          city: city,
          zip: zip,
          country: country,
          dateOfBirth: dateOfBirth,
          gender: gender
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });

      const finalResult = await result.json();

      body.html(
        `<p>id: ${finalResult.id}</p>
            <p>First Name: ${finalResult.firstName}</p>
            <p>Last Name: ${finalResult.lastName}</p>
            <p>Email: ${finalResult.email}</p>
            <p>Phone Number: ${finalResult.phoneNumber}</p>
            <p>Address: ${finalResult.address}</p>
            <p>City/Town: ${finalResult.city}</p>
            <p>Postal/Zip Code: ${finalResult.zip}</p>
            <p>Country: ${finalResult.country}</p>
            <p>Date of Birth: ${finalResult.dateOfBirth}</p>
            <p>Gender: ${finalResult.gender}</p>
            `
      );
    } catch (error) {
      console.log(error);
    }
  });
});
