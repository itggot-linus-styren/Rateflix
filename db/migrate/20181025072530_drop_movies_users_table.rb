class DropMoviesUsersTable < ActiveRecord::Migration[5.2]
  def up
    drop_table :movies_users
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
