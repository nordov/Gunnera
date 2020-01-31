# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  about           :text
#  address         :string
#  city            :string
#  email           :string           not null
#  fname           :string
#  lname           :string
#  password_digest :string           not null
#  phone_number    :string
#  photo_url       :string
#  session_token   :string           not null
#  state           :string
#  work_number     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
# Indexes
#
#  index_users_on_address        (address)
#  index_users_on_city           (city)
#  index_users_on_email          (email) UNIQUE
#  index_users_on_fname          (fname)
#  index_users_on_lname          (lname)
#  index_users_on_phone_number   (phone_number)
#  index_users_on_session_token  (session_token) UNIQUE
#  index_users_on_state          (state)
#  index_users_on_work_number    (work_number)
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
