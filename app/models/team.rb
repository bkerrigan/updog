class Team < ApplicationRecord
  belongs_to :sport
  has_many :user_teams, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
