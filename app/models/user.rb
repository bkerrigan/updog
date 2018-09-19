class User < ApplicationRecord
  has_many :sports
  has_many :teams

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
