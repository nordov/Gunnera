# == Schema Information
#
# Table name: listings
#
#  id               :bigint           not null, primary key
#  address          :string
#  bathroom         :decimal(3, 1)
#  bedroom_num      :integer
#  city             :string
#  complete_listing :boolean          default(FALSE), not null
#  description      :text
#  guest_capacity   :integer
#  guest_dedicated  :string
#  price            :integer
#  property_access  :string
#  property_subtype :string
#  property_type    :string
#  state            :string
#  title            :string           not null
#  zip              :string
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  host_id          :integer          not null
#
# Indexes
#
#  index_listings_on_address           (address)
#  index_listings_on_bathroom          (bathroom)
#  index_listings_on_bedroom_num       (bedroom_num)
#  index_listings_on_city              (city)
#  index_listings_on_complete_listing  (complete_listing)
#  index_listings_on_guest_capacity    (guest_capacity)
#  index_listings_on_guest_dedicated   (guest_dedicated)
#  index_listings_on_host_id           (host_id)
#  index_listings_on_price             (price)
#  index_listings_on_property_access   (property_access)
#  index_listings_on_property_subtype  (property_subtype)
#  index_listings_on_property_type     (property_type)
#  index_listings_on_state             (state)
#  index_listings_on_title             (title)
#  index_listings_on_zip               (zip)
#

require 'test_helper'

class ListingTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
