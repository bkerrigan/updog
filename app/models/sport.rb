class Sport < ApplicationRecord
  has_many :teams, dependent: :destroy
  has_many :user_sports, dependent: :destroy

  validates :name, presence: true, uniqueness: true
end
