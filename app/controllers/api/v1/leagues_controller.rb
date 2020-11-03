class Api::V1::LeaguesController < ApiController
  def index
    render json: League.all
  end
end