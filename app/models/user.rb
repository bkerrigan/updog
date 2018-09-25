class User < ApplicationRecord
  has_many :user_sports, dependent: :destroy
  has_many :sports, through: :user_sports
  has_many :user_teams, dependent: :destroy
  has_many :teams, through: :user_teams

  accepts_nested_attributes_for :user_sports, allow_destroy: true

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
