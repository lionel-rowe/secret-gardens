class Garden < ApplicationRecord
  mount_uploader :photo, PhotoUploader

  belongs_to :host, class_name: 'User', foreign_key: 'user_id'
  has_many :bookings

  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :price, presence: true
end
