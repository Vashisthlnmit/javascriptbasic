

// ace.addEventListener('click',() =>{
//     ace.classList.toggle('highlight')

// })
//Method to add styling to dom using javascript
// ace.style.color='white'
// ace.style.backgroundColor='purple'
// let bg=document.body;
// console.log(bg);
// let a=fo.getElementById('yup')
// let b=fo.getElementById('kup')
// a.innerText="hello everyone who are you are you comfortable"
// b.textContent="ladki ka chakkar bhu bhaiya"
// console.log(a.innerText);
// window.alert("Make sure you are 18 above to reach to this site")
// window.confirm("are you 18 plus or not")
// window.open('https://www.google.com','_blank')

// Get references to HTML elements
const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');

// Add an event listener to the file input element
fileInput.addEventListener('change', function () {
    const selectedFile = fileInput.files[0];

    // Check if a file was selected
    if (selectedFile) {
        // Create a FileReader to read the selected file
        const reader = new FileReader();

        // Define a function to execute when the FileReader loads the file
        reader.onload = function (event) {
            // Set the src attribute of the preview image to the loaded data
            preview.src = event.target.result;
            // Display the preview image
            preview.style.display = 'block';
        };

        // Read the selected file as a data URL (base64 encoded)
        reader.readAsDataURL(selectedFile);
    } else {
        // If no file is selected, hide the preview image
        preview.style.display = 'none';
    }
});


    
