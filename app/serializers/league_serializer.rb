class LeagueSerializer < ActiveModel::Serializer
  attributes :id, :league_name, :location, :description, :users
end
