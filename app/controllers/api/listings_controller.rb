class Api::ListingsController < ApplicationController

    skip_before_action :verify_authenticity_token
    before_action :logged_in_required!, only: [:create]

    def index
        @listings = Listing.all
    end

    def show
        @listing = Listing.find_by(id: params[:id])
    end

    def create
        @listing = Listing.new(listing_params)
        if @listing.save
            render :show
        else
            render :json => @listing.errors.full_messages.to_json
        end
    end
    
    private

    def listing_params
        params.require(:listing)
            .permit(
                    :host_id, 
                    :title,
                    :description,
                    :address,
                    :city,
                    :state,
                    :zip,
                    :guest_capacity,
                    :bedroom_num,
                    :bathroom,
                    :property_type,
                    :property_subtype,
                    :property_access,
                    :guest_dedicated,
                    :price
            )
    end
end