class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
      rename_column :characters, :vehicleid, :vehicle_id
    end
  end