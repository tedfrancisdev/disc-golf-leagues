class Api::V1::JoinsController < ApiController
  def create
    Join.create(league_id: params["id"], user: current_user)
  end
end