
        // Get the form and input elements use only jquery
        const form = $('#todo-form');
        const input = $('#todo-input');
        const todoList = $('#todo-list');

        // use only append class 
        // Add event listener to the form
        form.on('submit', function(e) {
            e.preventDefault();
            const taskText = input.val().trim();
            if (taskText) {
                // Create a new list item
                const listItem = $('<li></li>').text(taskText);
                // edit button 
                const editButton = $('<Button></Button>').text('Edit').addClass('edit-btn');
                const deleteButton = $('<button></button>').text('Delete').addClass('delete-btn');
                // Append the delete button to the list item
                listItem.append(editButton);
                listItem.append(deleteButton);
                // Append the list item to lodo list 
                todoList.append(listItem);
                // clear the input field
                input.val('');
            }
        });

        // Add event listener to the todo list for delete and complete actions
        todoList.on('click', '.delete-btn', function() {
            $(this).parent().remove();
        });



        // alert the user when the user click the button of edit and it give the alert meesage in the message box we edit the message


    $(document).on('click', '.edit-btn', function() {
        const listItem = $(this).parent();
        const currentText = listItem.text().replace('EditDelete', '').trim(); // Remove button text from the string
        const newText = prompt('Edit your task:', currentText);
        if (newText !== null) {
            listItem.contents().filter(function() {
                return this.nodeType === 3; 
            }).remove(); 
            listItem.prepend(newText + ' ');
        }
    }); 
