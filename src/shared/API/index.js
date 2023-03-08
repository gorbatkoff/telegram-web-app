import axios from "axios";

const __API_URL__ = "https://test.botweb.io/";

export const getListOfItems = async () => {
    try {
        const response = await axios.get(__API_URL__ + '/api/reward/list/', {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4MzYzMTg4LCJpYXQiOjE2NzgyNzY3ODgsImp0aSI6Ijc4OWFjNjc4MjlmMjRjYTJiYTAyMGZjYmU5MDZhY2RhIiwidXNlcl9pZCI6Mn0.-ES37IVIEFN_o2c-FOfJCTUbp22TJwhAXVg-B_BlIMU'
            }
        });

        return response.data;

    } catch (error) {
        console.log(error.message);
    }
}

export {
    __API_URL__,
}
