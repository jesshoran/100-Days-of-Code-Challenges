class IceCreamsController < ApplicationController
  before_action :set_ice_cream, only: [:show]

  # GET /ice_creams
  def index
    @ice_creams = IceCream.all

    render json: @ice_creams
  end

  # GET /ice_creams/1
  def show
    render json: @ice_cream.to_json(include: :pints)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_ice_cream
      @ice_cream = IceCream.find(params[:id])
    end

    
end
