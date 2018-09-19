class Team < ApplicationRecord
  belongs_to :sport

  validates :name, presence: true, uniqueness: true
end
