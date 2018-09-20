class User < ApplicationRecord
  has_many :user_sports, dependent: :destroy
  has_many :sports, through: :user_sports
  has_many :user_teams, dependent: :destroy
  has_many :teams, through: :user_teams

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
