

export const fileUpload = async( file ) => {

    const cloundURL = 'https://api.cloudinary.com/v1_1/dptnoipyc/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-redux-fst');
    formData.append('file', file);

    try {
        
        const resp = await fetch( cloundURL, {
            method: 'POST',
            body: formData
        });

        if ( resp.ok ){
            const cloudResp = await resp.json();
            return cloudResp.secure_url;
        } else {
            throw await resp.json();
        }


    } catch (error) {
        throw error;
    }

}