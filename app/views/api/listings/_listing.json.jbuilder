json.extract! listing, 
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



# json.picture_url listing.picture_url || url_for(listing.photo)