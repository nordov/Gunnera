class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :host_id, null: false
      t.boolean :complete_listing, null: false, default: false
      t.string :title, null: false
      t.text :description
      t.string :address
      t.string :city
      t.string :state
      t.string :zip
      t.integer :guest_capacity
      t.integer :bedroom_num
      t.decimal :bathroom, precision: 3, scale: 1
      t.string :property_type
      t.string :property_subtype
      t.string :property_access
      t.string :guest_dedicated
      t.decimal :price, precision: 6, scale:2

      t.timestamps
    end
    add_index :listings, :host_id
    add_index :listings, :complete_listing
    add_index :listings, :title
    add_index :listings, :address
    add_index :listings, :city
    add_index :listings, :state
    add_index :listings, :zip
    add_index :listings, :guest_capacity
    add_index :listings, :bedroom_num
    add_index :listings, :bathroom
    add_index :listings, :property_type
    add_index :listings, :property_subtype
    add_index :listings, :property_access
    add_index :listings, :guest_dedicated
    add_index :listings, :price
  end
end
