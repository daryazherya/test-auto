const { REACT_APP_BearerToken } = process.env;

const headers = {
    Authorization: `Bearer ${REACT_APP_BearerToken}`,
    "Content-Type": "application/json",
};

export function loadDevices() {
    return fetch('https://gps.autotracker.group/api/devices',{
        method: 'GET',
        headers,
    }).then((response) => {
        return response.json();
    })
}

export function removeDevice(id) {
    return fetch(`https://gps.autotracker.group/api/devices/${id}`,{
        method: 'DELETE',
        headers,
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        return response.text().then((errorMessage) => {
            throw new Error(errorMessage);
        });
    })
}
export function addDevice(body) {
    return fetch(`https://gps.autotracker.group/api/devices`,{
        method: 'POST',
        headers,
        body: JSON.stringify(body),
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        }
        return response.text().then((errorMessage) => {
            throw new Error(errorMessage);
        });
    })
}

