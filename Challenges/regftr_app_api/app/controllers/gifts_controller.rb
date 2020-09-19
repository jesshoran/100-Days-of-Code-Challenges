class GiftsController < ApplicationController
    def index
        puts "====params===="
        puts params
        puts "====params===="
        render json: {
            status: 200, 
            gifts: Gift.all
        }
    end
    def show
        puts "====params===="
        puts params
        puts "====params===="
        #Find the specific gift we are looking for
        render json: Gift.find(params[:id])
    end



end