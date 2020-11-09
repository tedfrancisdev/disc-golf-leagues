class Api::V1::LeaguesController < ApiController
  def index
    render json: League.all
  end

  def show
    render json: League.find(params[:id]), serializer: LeagueSerializer
  end

  def create
    league = League.new(league_name: params["league_name"], location: params["location"], description: params["description"])
    league.save
    render json: league
  end
end