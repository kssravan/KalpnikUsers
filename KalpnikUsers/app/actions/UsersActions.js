import axios from 'axios';

export function fetchUsersListAndSave() {
    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                console.log("Users List", response.data)
                const usersList = mapUserList(response.data)
                dispatch({ type: 'SAVE_USER_LIST', payload: { data: usersList } });
            })
            .catch(function (error) {
                console.log(error.response);
            });
    }
}

const mapUserList = (users) => {
    return users.map((item) => {
        const name = item.name
        const split = name.split(' ', 2);
        console.log(name, split)
        return ({
            id: item.id,
            name: item.name,
            username: item.username,
            email: item.email,
            phone: item.phone,
            website: item.website,
            firstName: split[0],
            lastName: split[1],
            address: mapEachAddressElement(item.address),
            companyDetails: mapWebsiteDetails(item.company),

        });
    });
}

const mapEachAddressElement = (address) => {
    return ({
        street: address.street,
        suite: address.suite,
        city: address.city,
        zipcode: address.zipcode,
        location: mapGeoLocation(address.geo),
    });
}

const mapGeoLocation = (location) => {
    return ({
        latitude: location.lat,
        longitude: location.lng,
    });
}

const mapWebsiteDetails = (CompanyDetails) => {
    return ({
        name: CompanyDetails.name,
        description: CompanyDetails.catchPhrase,
        bussiness: CompanyDetails.bs
    });
}




