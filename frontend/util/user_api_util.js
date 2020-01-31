export const postUser = user => {
    return $.ajax({
        method: "POST",
        url: "api/users",
        data: { user }
    })
}

// ADD WHEN WORKING ON PROGILE FEATURE
// export const updateUser = user => {
    
// }

// export const deleteUser = user => {

// }