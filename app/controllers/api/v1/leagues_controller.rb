class Api::V1::LeaguesController < ApiController
  def index
    render json: League.all
  end

  def show
    render json: League.find(params[:id]), serializer: LeagueSerializer
  end
end