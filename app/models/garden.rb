class Garden < ApplicationRecord
  belongs_to :host, class_name: 'User', foreign_key: 'user_id'
  has_many :bookings

  validates :name, presence: true
  validates :description, presence: true
  validates :location, presence: true
  validates :price, presence: true
  validates :photo, presence: true
  mount_uploader :photo, PhotoUploader
end
