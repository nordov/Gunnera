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

class User < ApplicationRecord
    attr_reader :password

    validates :email, uniqueness: true, presence: true
    validates :session_token, :password_digest, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    def self.find_by_credentials(email, password)
        user = self.find_by(email: email)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        # New Bcrypt/Password instance from saved password digest compares 
        # to password using Bcrypt/Password class is_password?
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    def reset_session_token
        self.update(session_token: User.generate_session_token)
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end    
end
