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
        gift = Gift.find(params[:id])
        render json: {
            status: 200, 
            gift: gift
        }
    end
    #made request in postman and it works!
    def create
        gift = Gift.new(gift_params)
        if gift.save
            render json: { status:201, gift: gift}
        else
            render json: {status: 422, song:song}
        end
    end

    def update
        gift = Gift.find(params[:id])
        gift.update(gift_params)
        render json: { status: 200, gift: gift }
    end
    def destroy
        gift = Gift.destroy(params[:id])
        render json: {status: 204}
    end

    private

    def gift_params
        params.required(:gift).permit(:description, :value, :event, :gift_giver)
    end

end