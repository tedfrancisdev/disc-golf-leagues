class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :location, :email, :skill_level, :leagues
end