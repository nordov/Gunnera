# users
| Column           | Data Type  | Details                   |
| :----------------|:-----------| :-------------------------|
| id               | integer    | not null, primary key     |
| email            | string     | not null, indexed, unique |
| password_digest  | string     | not null                  |
| session_token    | string     | not null, indexed, unique |
| fname            | string     | indexed                   |
| lname            | string     | indexed                   |
| phone_number     | string     | indexed                   |
| work_number      | string     | indexed                   |
| photo_url        | string     |                           |
| about            | text       |                           |
| address          | string     | indexed                   |
| city             | string     | indexed                   |
| state            | string     | indexed                   |
| zip              | string     | indexed                   |
| spoken_languages | string     | array                     |
| created_at       | datetime   | not null                  |
| updated_at       | datetime   | not null                  |

# verifications
| Column          | Data Type  | Details                   |
| :---------------|:-----------| :-------------------------|
| id              | integer    | not null, primary key     |
| user_id         | integer    | not null, indexed         |
| verification    | string     | not null                  |
| created_at      | datetime   | not null                  |
| updated_at      | datetime   | not null                  |

# listings
| Column           | Data Type  | Details                               |
| :----------------|:-----------| :-------------------------------------|
| id               | integer    | not null, primary key                 |
| host             | integer    | not null, indexed, foreign id         |
| complete_listing | boolean    | not null, indexed                     |
| title            | string     | not null, indexed                     |
| description      | text       | not null, indexed                     |
| address          | string     | not null, indexed                     |
| city             | string     | not null, indexed                     |
| state            | string     | not null, indexed                     |
| zip              | string     | not null, indexed                     |
| guest_capacity   | integer    | not null, indexed                     |
| bedroom_num      | integer    | not null, indexed                     |
| bathroom_num     | integer    | not null, indexed                     |
| property_type    | string     | not null, indexed                     |
| property_subtype | string     | not null, indexed                     |
| property_access  | string     | not null, indexed                     |
| guest_dedicated  | string     | not null, indexed                     |
| price            | decimal    | not null, indexed                     |
| created_at       | datetime   | not null                              |
| updated_at       | datetime   | not null                              |

* host references to users

# sleeping_arragenments

# amenities

# house_rules

# other details

# bookings
| Column                  | Data Type  | Details                         |
| :-----------------------|:-----------| :-------------------------------|
| id                      | integer    | not null, primary key           |
| guest                   | integer    | not null, indexed, foreign id   |
| listing                 | integer    | not null, indexed, foreign id   |
| check_in                | datetime   | not null                        |
| check_out               | datetime   | not null                        |
| adults                  | integer    | not null                        |
| children                | integer    | not null                        |
| infants                 | integer    | not null                        |
| booked_price_per_night  | float      | not null                        |
| booked_total_price      | float      | not null                        |
| created_at              | datetime   | not null                        |
| updated_at              | datetime   | not null                        |

* guest references to users (User who creates the booking)
* listing references to listings (Property booked)

# reviews
| Column                  | Data Type  | Details                         |
| :-----------------------|:-----------| :-------------------------------|
| id                      | integer    | not null, primary key           |
| guest                   | integer    | not null, indexed, foreing key  |
| listing                 | integer    | not null, indexed, foreing key  |
| booking                 | integer    | not null, indexed, foreing key  |
| communications          | integer    | not null                        |
| accuracy                | integer    | not null                        |
| cleanliness             | integer    | not null                        |
| check_in                | integer    | not null                        |
| value                   | integer    | not null                        |
| location                | integer    | not null                        |
| score                   | float      | not null                        |
| created_at              | datetime   | not null                        |
| updated_at              | datetime   | not null                        |

* guest references to users (User who creates the booking)
* listing references to listings (Property booked)
* booking references to bookings (Only a guest who had a booking can make a review)

# ratings
| Column                  | Data Type  | Details                   |
| :-----------------------|:-----------| :-------------------------|
| id                      | integer    | not null, primary key     |
| listing_id              | integer    | not null, indexed         |
| communications          | float      | not null                  |
| accuracy                | float      | not null                  |
| cleanliness             | float      | not null                  |
| check_in                | float      | not null                  |
| value                   | float      | not null                  |
| location                | float      | not null                  |
| score                   | float      | not null                  |
| created_at              | datetime   | not null                  |
| updated_at              | datetime   | not null                  |