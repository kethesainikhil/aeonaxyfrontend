
async function addUserApi(data) {
    const { name, username, email, password } = data;
    console.log(data);
    console.log(import.meta.env.VITE_BACKEND_URL)
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/addUser`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // Stringify the data object
                name: name,
                userName: username,
                email: email,
                password: password
            }),
        });

        console.log(response)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
        console.log(res);
        return res;
    } catch (e) {
        console.error(e, "error in api function");
        return { error: e.message }; // Return error message
    }
}
export async function addUserInterestsApi(data) {
    const { location, interests , user, profileUrl } = data;
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/addUserDetails`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // Stringify the data object
                userId: user.data.id,
                location: location,
                profileUrl: profileUrl,
                interests: interests
            }),
        });


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
        return res;
    } catch (e) {
        return { error: e.message }; // Return error message
    }
}
export async function sendEmailApi(data) {
    const{email} = data
    
    try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ // Stringify the data object
                email: email
            }),
                // Stringify the data object
        });


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
        return res;
    } catch (e) {
        return { error: e.message }; // Return error message
    }
}
export async function uploadUserProfilePicApi(data) {
    
    const formData = new FormData();
    formData.append('file', data.file);
    formData.append('upload_preset', 'mypreset'); 
    formData.append('cloud_name', 'dorwvy1wr');
    try {
        const response = await fetch(`${import.meta.env.VITE_IMAGE_URL}/image/upload`, {
            method: 'POST',
            body: formData
        });


        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const res = await response.json();
        return res;
    } catch (e) {
        return { error: e.message }; // Return error message
    }
}


export default addUserApi;
