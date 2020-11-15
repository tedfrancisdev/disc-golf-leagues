class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :joins
  has_many :leagues, through: :joins

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true
  validates :location, presence: true
  validates :skill_level, presence: true
end
