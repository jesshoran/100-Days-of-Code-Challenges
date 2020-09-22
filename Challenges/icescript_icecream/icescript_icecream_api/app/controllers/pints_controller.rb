class PintsController < ApplicationController
  before_action :set_pint, only: [:show, :update, :destroy]

  # GET /pints
  def index
    @pints = Pint.all

    render json: @pints.to_json(include: :ice_cream)
  end

  # POST /pints
  def create
    @pint = Pint.new(pint_params)

    if @pint.save
      render json: @pint, status: :created, location: @pint
    else
      render json: @pint.errors, status: :unprocessable_entity
    end
  end

  private
 

    # Only allow a trusted parameter "white list" through.
    def pint_params
      params.require(:pint).permit(:pints_sold, :pints_made, :profit_per_pint, :month)
    end
end
