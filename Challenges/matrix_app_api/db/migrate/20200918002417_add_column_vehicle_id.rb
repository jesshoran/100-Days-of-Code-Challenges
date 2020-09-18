class AddColumnVehicleId < ActiveRecord::Migration[6.0]
  def change
    add_column :characters, :vehicleid, :integer
  end
end


