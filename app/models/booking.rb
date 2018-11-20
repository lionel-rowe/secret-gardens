class Booking < ApplicationRecord
  belongs_to :guest, class_name: 'User', foreign_key: 'user_id'
  belongs_to :garden

  has_one :host, through: :garden

  validates :start, presence: true
  validates :end, presence: true
  validates :use, uniqueness: true, presence: true
end
