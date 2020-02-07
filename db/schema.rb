# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_02_06_013159) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "host_id", null: false
    t.boolean "complete_listing", default: false, null: false
    t.string "title", null: false
    t.text "description"
    t.string "address"
    t.string "city"
    t.string "state"
    t.string "zip"
    t.integer "guest_capacity"
    t.integer "bedroom_num"
    t.decimal "bathroom", precision: 3, scale: 1
    t.string "property_type"
    t.string "property_subtype"
    t.string "property_access"
    t.string "guest_dedicated"
    t.integer "price"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_listings_on_address"
    t.index ["bathroom"], name: "index_listings_on_bathroom"
    t.index ["bedroom_num"], name: "index_listings_on_bedroom_num"
    t.index ["city"], name: "index_listings_on_city"
    t.index ["complete_listing"], name: "index_listings_on_complete_listing"
    t.index ["guest_capacity"], name: "index_listings_on_guest_capacity"
    t.index ["guest_dedicated"], name: "index_listings_on_guest_dedicated"
    t.index ["host_id"], name: "index_listings_on_host_id"
    t.index ["price"], name: "index_listings_on_price"
    t.index ["property_access"], name: "index_listings_on_property_access"
    t.index ["property_subtype"], name: "index_listings_on_property_subtype"
    t.index ["property_type"], name: "index_listings_on_property_type"
    t.index ["state"], name: "index_listings_on_state"
    t.index ["title"], name: "index_listings_on_title"
    t.index ["zip"], name: "index_listings_on_zip"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "fname"
    t.string "lname"
    t.string "phone_number"
    t.string "work_number"
    t.string "photo_url"
    t.text "about"
    t.string "address"
    t.string "city"
    t.string "state"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["address"], name: "index_users_on_address"
    t.index ["city"], name: "index_users_on_city"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["phone_number"], name: "index_users_on_phone_number"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["state"], name: "index_users_on_state"
    t.index ["work_number"], name: "index_users_on_work_number"
  end

end
