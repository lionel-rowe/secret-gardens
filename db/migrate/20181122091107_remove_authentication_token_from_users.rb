class RemoveAuthenticationTokenFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :authentication_token
  end
end
