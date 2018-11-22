class User < ApplicationRecord
  
  def generate_jwt
    JWT.encode({ id: id,
      exp: 60.days.from_now.to_i },
      Rails.application.secrets.secret_key_base)
    end
    
  # acts_as_token_authenticatable
  # Note: you can include any module you want. If available,
  # token authentication will be performed before any other
  # Devise authentication method.
  #
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :username, uniqueness: { case_sensitive: false }, presence: true, allow_blank: false, format: { with: /\A[a-zA-Z0-9]+\z/ }

  has_many :bookings
  has_many :gardens
end
