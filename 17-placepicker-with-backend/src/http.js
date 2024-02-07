export async function fetchAvailablePlaces() {
    const response = await fetch("http://localhost:3000/places");
    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error("Fetch Places Failed!");
    }
    return responseJson.places
}

export async function fetchUserPlaces() {
    const response = await fetch("http://localhost:3000/user-places");
    const responseJson = await response.json();

    if (!response.ok) {
        throw new Error("Fetch User Places Failed!");
    }
    return responseJson.places
}

export async function updateUserPlaces(places) {
    const response = await fetch("http://localhost:3000/user-places", {
        method: "PUT",
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({ places })
    })

    const responseJson = await response.json()
    if (!response.ok) {
        throw new Error("Update User Places Failed!")
    }
    return responseJson
}