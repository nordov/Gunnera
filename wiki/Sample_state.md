```
{
    users: {
        1: {
            id: 1,
            email: "carmen@email.com",
            profile: {
                id: 1,
                user_id: 1,
                fname: "Carmen",
                lname: "San Diego",
                phone_number: "3234567891",
                work_number: "3237899900",
                about: "About Carmen san Diego",
                photo_url: "http://image_url",
                location: "Los Angeles, CA",
                spoken_languages: ["English", "Spanish", "Swahili"],
                created_at: "Date"
            },
            properties: {
                id: 1,
                host: 1,
                title: "Beuatiful room"
                description: "Very clean:
                location: "Los Angeles, CA"
                property_type: "Apartment",
                self_check_in: true,
                price_per_night: 46.97,
                amenities: ["Garage", "Pool", "Pet friendly"]
            },
            bookings: {
                guest: 
            },
            reviews: {

            }
        },
    },
    errors: {
        login: ["Username can't be empty", "Password must be of 6 characters or more]
    },
    session: { currentUserId: 22}
}
```