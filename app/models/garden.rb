class Garden < ApplicationRecord
  belongs_to :user

  validates :name, uniqueness: true, presence: true
  validates :description, uniqueness: true, presence: true
end
