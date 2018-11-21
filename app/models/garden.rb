class Garden < ApplicationRecord
  belongs_to :host, class_name: 'User', foreign_key: 'user_id'
  has_many :bookings, dependent: :destroy

  validates :name, uniqueness: true, presence: true
  validates :description, uniqueness: true, presence: true
  validates :location, uniqueness: true, presence: true
  validates :price, presence: true
end