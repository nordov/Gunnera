class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.string :fname
      t.string :lname
      t.string :phone_number
      t.string :work_number
      t.string :photo_url
      t.text :about
      t.string :address
      t.string :city
      t.string :state

      t.timestamps
    end
    add_index :users, :email, unique:true
    add_index :users, :session_token, unique:true
    add_index :users, :fname
    add_index :users, :lname
    add_index :users, :phone_number
    add_index :users, :work_number
    add_index :users, :address
    add_index :users, :city
    add_index :users, :state
  end
end
