class RoomsController < ApplicationController

    # GET /rooms
    def index 
        render json: Room.all
    end

end
