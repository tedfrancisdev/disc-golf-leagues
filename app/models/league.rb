class League < ApplicationRecord
  has_many :sign_ups
  has_many :users, through: :sign_ups

  validates :league_name, presence: true
  validates :location, presence: true
end