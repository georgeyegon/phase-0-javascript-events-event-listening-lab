function addingEventListener() {
    // Select the button element
    const button = document.getElementById('button');
  
    // Bind the click event listener
    button.addEventListener('click', function() {
      alert("Button clicked!"); // Action when the button is clicked
    });
  }
  
  // Call the function to ensure the event listener is added
  addingEventListener();
  