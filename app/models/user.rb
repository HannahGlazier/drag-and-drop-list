class User < ApplicationRecord
    has_secure_password
    
    has_many :rooms
    has_many :ideas, through: :rooms

end
