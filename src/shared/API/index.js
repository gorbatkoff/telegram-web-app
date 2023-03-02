
import axios from "axios";

const __API_URL__ = "http://45.130.43.98";

export const getListOfItems = async () => {
    try {
        const response = await axios.get(__API_URL__ + '/api/reward/list/', {headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.' +
                    'eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc2MTY5NDA5LCJpY' +
                    'XQiOjE2NzYwODMwMDksImp0aSI6Ijg2ZjcwMTU4NDJlNzRhOGZhNzJiYz' +
                    'hkYTI0YmQ1OGM4IiwidXNlcl9pZCI6Mn0.2tAlAoJazmVV9MmrRn7QDZU' +
                    'ZSgVkYhH32bFfsRRTc1M'
            }});

        return response.data;

    } catch (error) {
        console.log(error.message);
    }
}

export {
    __API_URL__,
}
