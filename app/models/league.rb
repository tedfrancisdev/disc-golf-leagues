class League < ApplicationRecord
  has_many :joins
  has_many :users, through: :joins

  validates :league_name, presence: true
  validates :location, presence: true
end