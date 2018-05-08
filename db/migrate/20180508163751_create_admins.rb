class CreateAdmins < ActiveRecord::Migration[5.2]
  def change
    create_table :admins do |t|
      t.string :name
      t.string :string
      t.string :email
      t.string :string
      t.string :password_digest
      t.string :string

      t.timestamps
    end
  end
end
